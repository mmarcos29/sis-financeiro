import React from "react";
import "./Separador.css";

export default (props) => {
  return (
    <div className="Separador" onClick={() => props.onClick(props.contador, props.legenda)} style={props.border === props.legenda?{boxShadow:`${props.sombra} 0px 8px 6px`}:{}}>
      <div style={{ backgroundImage: `url(${props.img})`, color: props.color }}>
          {/* {console.log(props.contador)} */}
  <p className="contador"><span>{props.contador.length}</span><span class="material-icons">{props.simbolo}</span></p>
        <p className="legenda">{props.legenda}</p>
      </div>
      {/* <img src={props.img} alt="" /> */}
      {/* <span>{props.legenda}</span> */}
    </div>
  );
};
