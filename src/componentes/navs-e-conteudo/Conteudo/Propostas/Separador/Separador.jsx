import React from "react";
import "./Separador.css";

export default (props) => {
  return (
    <div className="Separador">
      <div style={{ backgroundImage: `url(${props.img})` }}>
          {/* {console.log(props.contador)} */}
        <p className="contador">{props.contador}</p>
        <p className="legenda">{props.legenda}</p>
      </div>
      {/* <img src={props.img} alt="" /> */}
      {/* <span>{props.legenda}</span> */}
    </div>
  );
};
