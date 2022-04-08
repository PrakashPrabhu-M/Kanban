import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import Column from "./Column/Column";

import "./CardList.css";

const CardList = (props) => {
  // const [list, setList] = useState([]);
  const [open, setOpen] = useState([]);
  const [contacted, setContacted] = useState([]);
  const [test, setTest] = useState([]);
  const [tech, setTech] = useState([]);
  const [fit, setFit] = useState([]);

  const [allData, setAllData] = useState([]);
  // let disp;

  const searchHandler = async (text) => {
      console.log(text);
    if (text) {
      const Open = allData.slice(0, 5).filter((item) => {
        const data =
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase());
        return data;
      });
      const Contacted = allData.slice(5, 10).filter((item) => {
        const data =
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase());
        return data;
      });
      const Test = allData.slice(10, 15).filter((item) => {
        const data =
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase());
        return data;
      });
      const Tech = allData.slice(15, 20).filter((item) => {
        const data =
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase());
        return data;
      });
      const Fit = allData.slice(20, 25).filter((item) => {
        const data =
          item.name.first.toLowerCase().includes(text.toLowerCase()) ||
          item.name.last.toLowerCase().includes(text.toLowerCase());
        return data;
      });

      setOpen([...Open]);
      setContacted([...Contacted]);
      setTest([...Test]);
      setTech([...Tech]);
      setFit([...Fit]);
    } else {
      setOpen(allData.slice(0, 5));
      setContacted(allData.slice(5, 10));
      setTest(allData.slice(10, 15));
      setTech(allData.slice(15, 20));
      setFit(allData.slice(20, 25));
    }
  };

  useEffect(() => {
    searchHandler(props.disp);
    // console.log(list);
  }, [props.disp]);

  useEffect(() => {
    async function fun() {
      setAllData(await performAPICall());
    }
    fun();
  }, []);

  const performAPICall = async () => {
    const req = await axios.get("https://randomuser.me/api/?results=25", {
      dataType: "JSON",
    });
    const { results } = req.data;
    setOpen(results.slice(0, 5));
    setContacted(results.slice(5, 10));
    setTest(results.slice(10, 15));
    setTech(results.slice(15, 20));
    setFit(results.slice(20, 25));
    return [...results];
  };

  // for(let i=0;i<=25;i+=5){
  //   list.slice(i,i+5).map((item)=>{
  //     return(
  //       <Column title={`${(i+1)%5}`} data={item} />
  //     );
  //   })
  // }

  return (
    <section className="card-section">
      <Column key="task-1" setData={setOpen} title="Open" data={open} qty={open.length} />
      <Column
        key="task-2"
        setData={setContacted}
        title="Contacted"
        data={contacted}
        qty={contacted.length}
      />
      <Column key="task-3" setData={setTest} title="Written test" data={test} qty={test.length} />
      <Column
        key="task-4"
        setData={setTech}
        title="Technical Interview"
        data={tech}
        qty={tech.length}
      />
      <Column key="task-5" setData={setFit} title="Cultural fit" data={fit} qty={fit.length} />
    </section>
  );
};

export default CardList;
