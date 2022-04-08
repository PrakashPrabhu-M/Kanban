import logo from "./logo.svg";
import React, { useState } from "react";

import Header from "./Components/Heading/Heading";
import CardList from "./Components/MainDiv/CardList/CardList";
import Bar from "./Components/BreadBar/Bar/Bar";

import "./App.css";

function App() {
  const [filterData,setFilterData]=useState('');

  return (
    <div className="App">
      <Header heading="Iamneo" searchHandler={setFilterData} />
      <Bar/>
      <CardList disp={filterData} />
    </div>
  );
}

export default App;
