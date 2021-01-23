import React, { Component } from "react";
import "./Propostas.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "../Clientes/IconeIncluir/IconeIncluir";
import ListaPropostas from "./ListaPropostas";
import Separador from "./Separador/Separador";
import roxo from "../../../../img/botoesPropostas/roxo.png";
import verde from "../../../../img/botoesPropostas/verde.png";
import laranja from "../../../../img/botoesPropostas/amarelo.png";
import azul from "../../../../img/botoesPropostas/azul.png";
import vermelho from "../../../../img/botoesPropostas/vermelho.png";
import Select from "react-select";
import mascaraCpf from "../../../mascaraCpf";

export default class Propostas extends Component {
  state = {
    propostas: this.props.propostas,
    clientes: this.props.clientes || [],
    clientesF: [],
    filtro: "",
  };
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

  filtrar = (filtro, nome) => {
    // console.log(filtro);
    if (this.state.filtro === nome) {
      this.setState({ propostas: this.props.propostas, filtro: "" });
    } else if (filtro.length === 0) {
      this.setState({ propostas: [{}], filtro: nome });
    } else {
      this.setState({ propostas: filtro, filtro: nome });
    }
  };

  pesquisar = (e) => {
    console.log(this.state.propostas);
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
      <div id="Propostas">
        <BarraLocationPage incluir={<IconeIncluir rota="CadastroPropostas" />}>
          {[...this.props.children]}
        </BarraLocationPage>
        {/* <input type="text" name="" onChange={this.pesquisar} /> */}
        <div className="horizontal">
          <Separador
            img={roxo}
            legenda="AGUAR. DIGITAÇÃO"
            border={this.state.filtro}
            onClick={this.filtrar}
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "CADASTRADO"
            )}
          />
          <Separador
            border={this.state.filtro}
            img={verde}
            legenda="EM ANÁLISE"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "EM ANDAMENTO"
            )}
            onClick={this.filtrar}
          />
          <Separador
            border={this.state.filtro}
            img={laranja}
            legenda="COM PENDÊNCIAS"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "COM PENDÊNCIA"
            )}
            onClick={this.filtrar}
          />
          <Separador
            border={this.state.filtro}
            img={azul}
            legenda="FINALIZADAS"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "FINALIZADA"
            )}
            onClick={this.filtrar}
          />
          <Separador
            border={this.state.filtro}
            img={vermelho}
            legenda="CANCELADAS"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "CANCELADA"
            )}
            onClick={this.filtrar}
          />
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
          pesquisar={this.pesquisar}
          propostas={this.state.propostas}
          history={this.props.history}
          clientes={this.state.clientes}
          toGo="/DetalhePropostas"
        />
      </div>
    );
  }
}
