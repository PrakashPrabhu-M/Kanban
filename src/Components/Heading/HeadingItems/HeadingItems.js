import React from "react";
import { useState } from "react";

import SearchBar from "./Search/Search";
import Button from "../../Shared/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import CardGiftcardTwoToneIcon from "@mui/icons-material/CardGiftcardTwoTone";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import "./HeadingItems.css";

const HeadingItem = (props) => {
  const [searchText,setSearchText]=useState('');
  
  const searchHandler=(event)=>{
    setSearchText(event.target.value);
    props.searchHandler(event.target.value);
  }

  const headerItems = [
    { key: 0, value: <SearchBar onChange={searchHandler} value={searchText} /> },
    { key: 1, value: <Button startIcon={<AddIcon/>} text='Add New' /> },
    { key: 2, value: <CardGiftcardTwoToneIcon/> },
    { key: 3, value: <AccountCircleIcon/> },
  ];

  const elems=[];
  for (let item of headerItems){
    elems.push(<li className="head-item" key={item.key}>{item.value}</li>)
  }

  return (
    elems
  );
};

export default HeadingItem;
