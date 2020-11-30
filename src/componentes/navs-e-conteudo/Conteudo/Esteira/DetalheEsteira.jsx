import React, { useState } from "react";
import "./DetalheEsteira.css";
import Select from "react-select";
import estadosEsteira from "../../../../Services/estadosEsteira";

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
      readyOnly: true,
      propostaAtual: proposta || null,
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
        situacao:""
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
    if( action.name === "esteira" ){

        state.proposta[action.name] = option;
        state.proposta.situacao = null;
    }else{
        state.proposta[action.name] = option;
    }

    this.setState(state, console.log(this.state));
  };

  onSubmit = (event) => {};
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
    if (this.state.proposta.esteira.value) {
      switch (this.state.proposta.esteira.value) {
        case "EM ANDAMENTO":
          return (
            <div className="Componente metade">
              Situação Esteira*
              <Select
                styles={customStyles}
                onChange={this.onChange}
                name="situacao"
                options={estadosEsteira[1].filter((option) => option.label)}
                value={this.state.proposta.situacao}
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
                value={this.state.proposta.situacao}
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
            value={this.state.proposta.esteira}
            noOptionsMessage={() => "Nenhum encontrado"}
            placeholder="BUSQUE USANDO APENAS LETRAS"
          />
        </div>
        {this.situacao()}
      </div>
    );
  }
}
