import React, { Component } from "react";
import "./Clientes.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "./IconeIncluir/IconeIncluir";
import CadastroClientes from "./CadastroClientes/CadastroClientes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Clientes extends Component {
  componentDidMount(){
    if(document.getElementById("operacional")){
      if(!document.getElementById("operacional").classList.contains("active")){
        this.props.setListaAtiva(document.getElementById("operacional"), document.getElementsByClassName("li-clientes") )
      }
    }    
  }
  render() {
    return (
      <div id="Clientes">
        <BarraLocationPage incluir={<IconeIncluir />}>
          {[...this.props.children]}
        </BarraLocationPage>
        {/* <button style={{backgroundColor:"red", color:"white", padding: "5%"}} onClick={()=>this.props.setListaAtiva(document.getElementById("operacional"))}>testar</button> */}
      </div>
    );
  }
}
