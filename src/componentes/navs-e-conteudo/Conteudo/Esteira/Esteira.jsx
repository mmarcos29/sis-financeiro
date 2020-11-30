import React, { Component } from "react";
import "./Esteira.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import ListaPropostas from "../Propostas/ListaPropostas";

export default class Esteira extends Component {
  componentWillMount() {
    // alert("primeiro")
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }
  }
  componentDidMount() {
    // alert("segundo")
    if (document.getElementById("operacional")) {
      if (
        !document.getElementById("operacional")
        .classList.contains("active")
      ) {
        document.getElementById("operacional").classList.add("active")
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if(document.getElementsByClassName("li-esteira")[0]){
        document.getElementsByClassName("li-esteira")[0].classList.add("active")
    }
  }
  render() {
    return (
      <div id="Esteira">
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
        <ListaPropostas 
        propostas={this.props.propostas? this.props.propostas : []} 
        history={this.props.history}
        clientes={this.props.clientes}
        toGo="DetalheEsteira"
        />
      </div>
    );
  }
}
