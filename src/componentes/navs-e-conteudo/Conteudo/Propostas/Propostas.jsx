import React, { Component } from "react";
import "./Propostas.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "../Clientes/IconeIncluir/IconeIncluir";
// import ListaClientes from "../Clientes/ListaClientes";
import ListaPropostas from "./ListaPropostas";
import Separador from "./Separador/Separador";
import roxo from "../../../../img/botoesPropostas/roxo.png";
import verde from "../../../../img/botoesPropostas/verde.png";
import laranja from "../../../../img/botoesPropostas/amarelo.png";
import azul from "../../../../img/botoesPropostas/azul.png";
import vermelho from "../../../../img/botoesPropostas/vermelho.png";

export default class Propostas extends Component {
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
        document.getElementById("operacional").classList.add("active");
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if (document.getElementsByClassName("li-propostas")[0]) {
      document
        .getElementsByClassName("li-propostas")[0]
        .classList.add("active");
    }
  }

  render() {
    return (
      <div id="Propostas">
        <BarraLocationPage incluir={<IconeIncluir rota="CadastroPropostas" />}>
          {[...this.props.children]}
        </BarraLocationPage>
        <div className="horizontal">
          <Separador img={roxo} legenda="AGUAR. DIGITAÇÃO" contador={this.props.propostas.filter(prop => prop.esteira === "CADASTRADO").length} />
          <Separador img={verde} legenda="EM ANÁLISE" contador={this.props.propostas.filter(prop => prop.esteira === "EM ANDAMENTO").length} />
          <Separador img={laranja} legenda="COM PENDÊNCIAS" contador={this.props.propostas.filter(prop => prop.esteira === "COM PENDÊNCIA").length} />
          <Separador img={azul} legenda="FINALIZADAS" contador={this.props.propostas.filter(prop => prop.esteira === "FINALIZADA").length} />
          <Separador img={vermelho} legenda="CANCELADAS" contador={this.props.propostas.filter(prop => prop.esteira === "CANCELADA").length} />
        </div>
        <div className="linhaDoTempo horizontal">
          <div>
            <div className="indicador" style={{ backgroundColor: "#C09AC0" }}>
              <div />
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#8DFF7B" }}>
              <div />
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#FFCC4B" }}>
              <div />
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#72CBF5" }}>
              <div />
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#FF9292" }}>
              <div />
            </div>
          </div>
        </div>
        <ListaPropostas
          propostas={this.props.propostas ? this.props.propostas : []}
          history={this.props.history}
          clientes={this.props.clientes}
          toGo="/DetalhePropostas"
        />
      </div>
    );
  }
}
