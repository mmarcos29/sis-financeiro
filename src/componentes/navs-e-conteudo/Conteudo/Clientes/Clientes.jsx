import React, { Component } from "react";
import "./Clientes.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "./IconeIncluir/IconeIncluir";
import CadastroClientes from "./CadastroClientes/CadastroClientes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Clientes extends Component {
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
