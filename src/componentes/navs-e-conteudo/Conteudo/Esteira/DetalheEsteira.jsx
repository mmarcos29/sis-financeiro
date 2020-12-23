import React, { useState } from "react";
import "./DetalheEsteira.css";
import Select from "react-select";
import estadosEsteira from "../../../../Services/estadosEsteira";
import validaCamposFoms from "../../../../Services/validaCamposFoms";
import EditaNoBanco from "../../../../Services/EditaNoBanco";
import { Load } from "../../../../Services/Load";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    // width: "1px",
    // padding: 20,
  }),
};

export default class DetalheEsteira extends React.Component {
  constructor(props) {
    super(props);
    const idProposta = parseInt(window.location.hash.replace(/\D/g, ""));

    let proposta;

    if (props.propostas) {
      proposta = props.propostas.find(
        (propostas) => propostas.id === idProposta
      );
    }

    this.state = {
      load:false,
      readyOnly: true,
      propostaAtual: proposta || {},
      exibir: null,
      dados: null,
      id: idProposta,
      proposta: {
        clienteId: "",
        corretor: "",
        tipo: "", //{ label: "novo", value: "novo" },
        banco: "",
        convenio: "",
        parceiro: "",
        tabela: "",
        comissaoEmpresa: "",
        comissaoCorretor: "",
        nrProposta: "",
        parcelas: "",
        taxa: "",
        valorProposta: "",
        valorParcela: "",
        dtPrimeiraParcela: "",
        observacoes: "",
        dtProposta: new Date().toLocaleDateString(),
        formaContato: "",
        esteira: "CADASTRADO",
        situacao: "",
      },
      clientes: [],
    };
    if (proposta && this.props.clientes) {
      props.mudaNomePropostaDetalhe(
        `Proposta 0${proposta.id}    - ${
          this.props.clientes.find(
            (cliente) => cliente.id === parseInt(proposta.clienteId)
          ).nome
        } -  ${proposta.dtProposta}`
      );
    }
  }
  onChange = (option, action) => {
    let state = this.state;
    if (action.name === "esteira") {
      state.propostaAtual[action.name] = option;
      state.propostaAtual.situacao = null;
    } else {
      state.propostaAtual[action.name] = option;
    }

    this.setState(state, console.log(this.state));
  };

  setLoad = (load) => {
    this.setState({load: load})
  }

  onSubmit = (event) => {
    const dadosProposta = validaCamposFoms(this.state.propostaAtual, "esteira");

    if (dadosProposta) {
      dadosProposta.id = this.state.id;
      // console.log(dadosProposta)
      EditaNoBanco(dadosProposta, this.props.history, "esteira", this.setLoad)
    }
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
        // alert("era p ta dando certo")
        document.getElementById("operacional").classList.add("active");
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if (document.getElementsByClassName("li-esteira")[0]) {
      document.getElementsByClassName("li-esteira")[0].classList.add("active");
    }
  }
  situacao = () => {
    if (this.state.propostaAtual.esteira) {
      switch (this.state.propostaAtual.esteira.value) {
        case "EM ANDAMENTO":
          return (
            <div className="Componente metade">
              Situação Esteira*
              <Select
                styles={customStyles}
                onChange={this.onChange}
                name="situacao"
                options={estadosEsteira[1].filter((option) => option.label)}
                value={this.state.propostaAtual.situacao}
                noOptionsMessage={() => "Nenhum encontrado"}
                placeholder="BUSQUE USANDO APENAS LETRAS"
              />
            </div>
          );
          break;
        case "COM PENDÊNCIA":
          return (
            <div className="Componente metade">
              Situação Esteira*
              <Select
                styles={customStyles}
                onChange={this.onChange}
                name="situacao"
                options={estadosEsteira[2].filter((option) => option.label)}
                value={this.state.propostaAtual.situacao}
                noOptionsMessage={() => "Nenhum encontrado"}
                placeholder="BUSQUE USANDO APENAS LETRAS"
              />
            </div>
          );
          break;

        default:
          break;
      }
    }
  };
  render() {
    return (
      <div className="DetalheEsteira">
        <div className="Componente metade">
          Estado Esteira*
          <Select
            styles={customStyles}
            onChange={this.onChange}
            name="esteira"
            options={estadosEsteira[0].filter((option) => option.label)}
            value={this.state.propostaAtual.esteira}
            noOptionsMessage={() => "Nenhum encontrado"}
            placeholder="BUSQUE USANDO APENAS LETRAS"
          />
        </div>
        {this.situacao()}
        <div className="butoons full">
          <button onClick={() => this.props.history.push("/esteira")}>
            Cancelar
          </button>
          <button
            type="submit"
            // disabled={false}
            className="gravar"
            onClick={this.onSubmit}
          >
            Gravar
          </button>          
        </div>
        <Load load={this.state.load}/>
      </div>
    );
  }
}
