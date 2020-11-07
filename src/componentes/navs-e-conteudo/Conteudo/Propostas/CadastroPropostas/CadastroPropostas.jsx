import React, { useState } from "react";
import Select from "react-select";
import "./CadastroPropostas.css";
import RemoveMascaraCpf from "../../../../../Services/RemoveMascaraCpf";
const tiposPropostas = [{ label: "novo", value: "novo" }];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    // width: "1px",
    // padding: 20,
  }),
};

export default class CadastroPropostas extends React.Component {
  state = {
    proposta: { cliente: "", corretor: "", tipo: "" },
    tipoProposta: false,
    clientes: [],
    corretor: [{ label: "Magno Vieria", value: 1 }],
  };
  onChange = (option, action) => {
    let state = this.state;
    // if(action.name === "tipo"){
    //   state.proposta[action.name] = option.value;
    // }
    state.proposta[action.name] = option;
    this.setState(state);
    console.log(this.state);
  };
  componentWillMount() {
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }

    if (this.props.clientes) {
      let clientePronto = this.props.clientes;
      clientePronto.map((cliente) => {
        cliente.label = `${cliente.nome} - ${RemoveMascaraCpf(cliente.cpf)}`;
        cliente.value = cliente.id;
      });

      this.setState({ clientes: clientePronto });
      // console.log(this.state)
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
    if (document.getElementsByClassName("li-propostas")[0]) {
      document
        .getElementsByClassName("li-propostas")[0]
        .classList.add("active");
    }
  }
  render() {
    const opcoes = [
      { nome: "novo", conteudo: 
      <div className="full">
        <div className="atributoForm umTerco">variavel novo</div> 
      </div>
    
    },
    ];
    const novo = <div>variavel novo</div>;
    const refin = <div>variavel refin</div>;

    return (
      <div className="CadastroPropostas">
        <div className="full">
          <div className="atributoForm umTerco">
            CLIENTE*
            <Select
              styles={customStyles}
              onChange={this.onChange}
              name="cliente"
              options={this.state.clientes.filter((option) => option.label)}
              value={this.state.proposta.cliente}
              noOptionsMessage={() => "Nenhum cliente encontrado"}
              placeholder="BUSQUE POR NOME"
            />
          </div>
          <div className="atributoForm umTerco">
            CORRETOR*
            <Select
              styles={customStyles}
              onChange={this.onChange}
              name="corretor"
              options={this.state.corretor.filter((corretor) => corretor.label)}
              value={this.state.proposta.corretor}
              noOptionsMessage={() => "Nenhum cliente encontrado"}
              placeholder="BUSQUE POR NOME"
            />
          </div>
          <div className="atributoForm umTerco">
            TIPO DE PROPOSTA*
            <Select
              styles={customStyles}
              onChange={this.onChange}
              name="tipo"
              options={tiposPropostas.filter((tipo) => tipo.label)}
              value={this.state.proposta.tipo}
              noOptionsMessage={() => "Nenhum cliente encontrado"}
              placeholder="BUSQUE POR NOME"
            />
          </div>
        </div>
        {opcoes.map((opcao) =>
          opcao.nome === this.state.proposta.tipo.value ? (
            opcao.conteudo
          ) : ""
        )}
      </div>
    );
  }
}
