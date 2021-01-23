import React from "react";
import "./Separador.css";

export default (props) => {
  return (
    <div className="Separador" onClick={() => props.onClick(props.contador, props.legenda)} style={props.border === props.legenda?{boxShadow:"#f30909 0px 0px 6px"}:{}}>
      <div style={{ backgroundImage: `url(${props.img})` }}>
          {/* {console.log(props.contador)} */}
  <p className="contador"><span>{props.contador.length}</span><span class="material-icons">{props.simbolo}</span></p>
        <p className="legenda">{props.legenda}</p>
      </div>
      {/* <img src={props.img} alt="" /> */}
      {/* <span>{props.legenda}</span> */}
    </div>
  );
};
