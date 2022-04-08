import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import CardItem from "./CardItem/CardItem";
import Column from "./Column/Column";

import "./CardList.css";

const CardList = (props) => {
  const [list, setList] = useState([]);
  const [allData,setAllData]=useState([]);
  // let disp;

  const searchHandler = async(text) => {
    //   console.log(text,allData);
    if (text) {
        const data=allData.filter((item) => {
            const data=item.name.first.toLowerCase().includes(text.toLowerCase()) || item.name.last.toLowerCase().includes(text.toLowerCase());
            return data;
          });
        //   console.log(data);
      setList(
        [...data]
      );
    }
    else{
        setList(allData);
    }
  };

  useEffect(() => {
    searchHandler(props.disp);
  },[props.disp]);

  useEffect(() => {
      async function fun(){
        setAllData(await performAPICall());
      }
      fun();
  }, []);

  const performAPICall=async()=>{
    const req = await axios.get("https://randomuser.me/api/?results=20", {
        dataType: "JSON",
      });
      const { results } = req.data;
      setList([...results]);
      return([...results]);
  }

  // for(let i=0;i<=25;i+=5){
  //   disp=list.slice(i,i+5).map((item)=>{
  //     return(
  //       <Column title={`${(i+1)%5}`} data={item} />
  //     );
  //   })
  // }

  return (
    <section className="card-section">
      {list.map((item) => {
        return (
          <CardItem
            key={item.email}
            name={item.name.first + " " + item.name.last}
            email={item.email}
          />
        );
      })}
    </section>
  );
};

export default CardList;
