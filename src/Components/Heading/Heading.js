import React from "react";

import HeadingItems from "./HeadingItems/HeadingItems";

import "./Heading..css";

const Header = (props) => {
  return (
    <header className="header">
      <div>
        <h1 className="head-title">{props.heading}</h1>
        <ul className="header-items">
          <HeadingItems searchHandler={props.searchHandler} />
        </ul>
      </div>
    </header>
  );
};

export default Header;
