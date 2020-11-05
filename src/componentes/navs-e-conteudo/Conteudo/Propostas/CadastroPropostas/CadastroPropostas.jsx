import React, { useState } from "react";
import "./CadastroPropostas.css";
const options = [
    { label: "foo", value: 1 },
    { label: "bar", value: 2 },
    { label: "bin", value: 3 }
  ];

export default (props) => {
  const novo = <div>variavel novo</div>;
  const refin = <div>variavel refin</div>;
  const [tipoProposta, setTipoProposta] = useState(null);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);

  function onChange2 ( option ) {
    setValue2({ value2: option });
  };

  function onChange ( option ) {
    if (value2.value === option.value) {
        setValue2(false)
        setValue1(option)
    } else {
        setValue1(option)
    }
  };

  return (
    <div className="CadastroPropostas">
      <div className="atributoForm umTerco">
        CLIENTE*
        <select
          onChange={onChange}
          options={options}
          value={value1}
        />
        <select
          onChange={onChange2}
        //   options={options.filter(
        //     option => option.value !== this.state.value1.value
        //   )}
          options={options.filter(
            option => option.value
          )}
          value={value2}
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
          <option value="PRIMEIRO GRAU COMPLETO">PRIMEIRO GRAU COMPLETO</option>
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
      {tipoProposta}
    </div>
  );
};
