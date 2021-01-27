import React, { Component } from "react";
import "./Esteira.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import ListaPropostas from "../Propostas/ListaPropostas";

export default class Esteira extends Component {
  state = {
    propostas: this.props.propostas,
    clientes: this.props.clientes || [],
    // clientesF: [],
    // filtro: "",
  };
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
  pesquisar = (e) => {
    // console.log(this.state.propostas);
    let resultado = [];
    switch (e.target.name) {
      case "nome":
        //****************** */
        this.state.clientes
          .filter((cliente) =>
            cliente.nome.toLowerCase().includes(e.target.value.toLowerCase())
          )
          .map(
            (cliente) =>
              (resultado = this.state.propostas.filter(
                (p) => p.clienteId === cliente.id.toString()
              ))
          );
        if (resultado.length > 0) {
          this.setState({ ...this.state, propostas: resultado });
        } else {
          this.setState({ propostas: this.props.propostas, filtro: "" });
        }
        //****************** */
        break;

        case "emissao":
          //****************** */
        resultado = (this.props.propostas.filter(proposta => 
          proposta.dtProposta.includes(e.target.value.toLowerCase())
          ))
        if (resultado.length > 0) {
          this.setState({ ...this.state, propostas: resultado });
        } else {
          this.setState({ propostas: this.props.propostas, filtro: "" });
        }
        //****************** */        

      default:
        break;
    }
  };
  render() {
    return (
      <div id="Esteira">
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
        <ListaPropostas
        pesquisar={this.pesquisar}
        propostas={this.state.propostas}
        history={this.props.history}
        clientes={this.state.clientes}
        toGo="DetalheEsteira"
        />
      </div>
    );
  }
}
