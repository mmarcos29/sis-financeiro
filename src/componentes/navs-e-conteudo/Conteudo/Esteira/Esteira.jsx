import React, { Component } from "react";
import "./Esteira.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import ListaPropostas from "../Propostas/ListaPropostas";
import HistoricoEsteira from "./HistoricoEsteira/HistoricoEsteira";
import PropostasNaEsteira from "./PropostasNaEsteira/PropostasNaEsteira";

export default class Esteira extends Component {
  state = {
    propostas: this.props.propostas,
    clientes: this.props.clientes || [],
    ocorrencias: null
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
  dispatch = (proposta) =>{
    // alert("vai")
    this.setState({...this.state, ocorrencias: proposta})
  }
  render() {
    return (
      <div id="Esteira">
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
        <div className="contentEsteira">        
        <PropostasNaEsteira
        propostas={this.state.propostas}
        clientes={this.state.clientes}
        dispatch={this.dispatch}
        history={this.props.history}
        />
        <HistoricoEsteira item={this.state.ocorrencias}/>
        </div>
      </div>
    );
  }
}
