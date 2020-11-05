import React, { useState } from "react";
import Select from "react-select";
import "./CadastroPropostas.css";
import { render } from "@testing-library/react";
const options = [
  { label: "joao", cpf: "07360473365" },
  { label: "bar", value: 2 },
  { label: "bin", value: 3 },
];

export default class CadastroPropostas extends React.Component {
  state = {
    value: false,
    tipoProposta: false,
    clientes: [],
  };
  onChange = (option) => {
    this.setState({ value: option }, () => console.log(this.state.value));
    //   console.log(this.state.value)
  };
  componentWillMount() {
    if (this.props.clientes) {
      let clientePronto = this.props.clientes;
      clientePronto.map((cliente) => {
        cliente.label = cliente.nome;
        cliente.value = cliente.nome;
      });

      this.setState({ clientes: clientePronto });
      // console.log(this.state)
    }
  }
  render() {
      console.log(this.state.value)
    const novo = <div>variavel novo</div>;
    const refin = <div>variavel refin</div>;

    return (
      <div className="CadastroPropostas">
        <div className="atributoForm umTerco">
          CLIENTE*
          <Select
            onChange={this.onChange}
            options={this.state.clientes.filter((option) => option.label)}
            value={this.state.value}
            noOptionsMessage={() => "Nenhum cliente encontrado"}
          />
        </div>
        <div className="atributoForm umTerco">
          CORRETOR*
          <select
            name="grauInstrucao"
            objeto="dadosPessoais"
            //   onChange={this.onchange}
            //   value={this.state.formulario.dadosPessoais.grauInstrucao}
          >
            <option value="" disabled selected hidden>
              SELECIONE
            </option>
            <option value="ANALFABETO">ANALFABETO</option>
            <option value="LÊ E ESCREVE">LÊ E ESCREVE</option>
            <option value="PRIMEIRO GRAU INCOMPLETO">
              PRIMEIRO GRAU INCOMPLETO
            </option>
            <option value="PRIMEIRO GRAU COMPLETO">
              PRIMEIRO GRAU COMPLETO
            </option>
            <option value="SEGUNDO GRAU INCOMPLETO">
              SEGUNDO GRAU INCOMPLETO
            </option>
            <option value="SEGUNDO GRAU COMPLETO">SEGUNDO GRAU COMPLETO</option>
            <option value="SUPERIOR INCOMPLETO">SUPERIOR INCOMPLETO</option>
            <option value="SUPERIOR COMPLETO">SUPERIOR COMPLETO</option>
          </select>
        </div>
        <div className="atributoForm umTerco">
          TIPO DE PROPOSTA*
          <select
            name="grauInstrucao"
            objeto="dadosPessoais"
            //   onChange={this.onchange}
            //   value={this.state.formulario.dadosPessoais.grauInstrucao}
          >
            <option value="" disabled selected hidden>
              SELECIONE
            </option>
            <option value="ANALFABETO">NOVO</option>
          </select>
        </div>
        {/* {tipoProposta} */}
      </div>
    );
  }
}
