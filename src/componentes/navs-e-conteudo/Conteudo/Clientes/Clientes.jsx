import React, { Component } from "react";
import "./Clientes.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "./IconeIncluir/IconeIncluir";
import CadastroClientes from "./CadastroClientes/CadastroClientes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Clientes extends Component {
  componentWillMount() {
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }
  }
  componentDidMount() {
    if (document.getElementById("operacional")) {
      if (
        !document.getElementById("operacional").classList.contains("active")
      ) {
        document.getElementById("operacional").classList.add("active")
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if(document.getElementsByClassName("li-clientes")[0]){
      document.getElementsByClassName("li-clientes")[0].classList.add("active")
  }
  }
  render() {
    return (
      <div id="Clientes">
        <BarraLocationPage incluir={<IconeIncluir />}>
          {[...this.props.children]}
        </BarraLocationPage>
      </div>
    );
  }
}
