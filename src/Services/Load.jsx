import React from "react";
import load from "../img/loader.gif";

export const Load = (props) => {
    if(!props.load){
        return null
    }
  return (
    <div className="LoadContainer">
      <div className="Load">
        <img src={load} alt="" />
      </div>
    </div>
  );
};
