import React, { Component } from "react";
import "./Clientes.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "./IconeIncluir/IconeIncluir";
import api from "../../../../Services/api";
import ListaClientes from "./ListaClientes";

export default class Clientes extends Component {
  state = {
    clientes: [],
  };

  componentWillMount() {
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }
    api
      .get("Clientes")
      .then((Response) => this.setState({ clientes: Response.data }));
  }
  componentDidMount() {
    if (document.getElementById("operacional")) {
      if (
        !document.getElementById("operacional").classList.contains("active")
      ) {
        document.getElementById("operacional").classList.add("active");
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if (document.getElementsByClassName("li-clientes")[0]) {
      document.getElementsByClassName("li-clientes")[0].classList.add("active");
    }
  }

  render() {
    // console.log(this.state.clientes)
    return (
      <div id="Clientes">
        <BarraLocationPage incluir={<IconeIncluir />}>
          {[...this.props.children]}
        </BarraLocationPage>
        {/* {this.state.clientes.length > 0 ?  */}
        <ListaClientes clientes={this.state.clientes}/> 
        {/* : false} */}
        
      </div>
    );
  }
}
