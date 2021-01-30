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
    console.log(filtro, nome);
    if (this.state.filtro === nome) {
      this.setState({ propostas: this.props.propostas, filtro: "" });
    } else if (filtro.length === 0) {
      this.setState({ propostas: [{}], filtro: nome });
    } else {
      this.setState({ propostas: filtro, filtro: nome });
    }
  };

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
      <div id="Propostas">
        {/* <BarraLocationPage incluir={<span class="material-icons">post_add</span>}> */}
        <BarraLocationPage incluir={<IconeIncluir rota="CadastroPropostas" />}>
          {[...this.props.children]}
        </BarraLocationPage>
        {/* <input type="text" name="" onChange={this.pesquisar} /> */}
        <div className="horizontal">
          <Separador
            simbolo="queue_play_next"
            img={roxo}
            color={"#593359"}
            sombra={"#593359"}
            legenda="AGUAR. DIGITAÇÃO"
            border={this.state.filtro}
            onClick={this.filtrar}
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "AGUAR. DIGITAÇÃO"
              )}
              />
          <Separador
            simbolo="image_search"
            border={this.state.filtro}
            img={verde}
            color={"#237a15"}
            sombra={"#237a15"}
            legenda="EM ANÁLISE"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "EM ANÁLISE"
              )}
              onClick={this.filtrar}
              />
          <Separador
              simbolo="warning"
              border={this.state.filtro}
              img={laranja}
              color={"#fd8e00"}
              sombra={"#fd8e00"}
              legenda="COM PENDÊNCIAS"
              contador={this.props.propostas.filter(
                (prop) => prop.esteira === "COM PENDÊNCIAS"
                )}
                onClick={this.filtrar}
                />
          <Separador
            simbolo="playlist_add_check"
            border={this.state.filtro}
            img={azul}
            color={"#0086cd"}
            sombra={"#0086cd"}
            legenda="FINALIZADAS"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "FINALIZADAS"
              )}
              onClick={this.filtrar}
              />
          <Separador
            simbolo="delete_forever"
            border={this.state.filtro}
            img={vermelho}
            color={"#f63737"}
            sombra={"#f63737"}
            legenda="CANCELADAS"
            contador={this.props.propostas.filter(
              (prop) => prop.esteira === "CANCELADAS"
            )}
            onClick={this.filtrar}
          />
        </div>
        <div className="linhaDoTempo horizontal">
          <div>
            <div className="indicador" style={{ backgroundColor: "#C09AC0", borderColor: "#593359" }}>
            <div style={{background:"#593359"}}/>
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#8DFF7B", borderColor: "#237a15" }}>
              <div style={{background:"#237a15"}}/>
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#FFCC4B", borderColor: "#fd8e00" }}>
              <div style={{background:"#fd8e00"}}/>
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#72CBF5", borderColor: "#0086cd" }}>
              <div style={{background:"#0086cd"}}/>
            </div>
          </div>
          <div>
            <div className="indicador" style={{ backgroundColor: "#FF9292", borderColor: "#f63737" }}>
              <div style={{background:"#f63737"}}/>
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
