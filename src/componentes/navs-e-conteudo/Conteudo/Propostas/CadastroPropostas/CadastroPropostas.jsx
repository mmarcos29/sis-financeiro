import React, { useState } from "react";
import Select from "react-select";
import "./CadastroPropostas.css";
import RemoveMascaraCpf from "../../../../../Services/RemoveMascaraCpf";
import mascaraDinheiro from "../../../../../Services/mascaraDinheiro";
import InputMask from "react-input-mask";
import listaConvenios from "../../../../../Services/listaConvenios";
import listaTabela from "../../../../../Services/listaTabela";
import listaDeBancos from "../../../../../Services/listaDeBancos";
import formasDeContato from "../../../../../Services/formasDeContato";
import PopUp from "../../../../../pages/PopUp/PopUp";
import CadastroClientes from '../../Clientes/CadastroClientes/CadastroClientes'

const tiposPropostas = [
  { label: "novo", value: "novo" },
  // { label: "teste", value: "teste" },
];
const corretores = [{ label: "Magno Vieria", value: "Magno Vieria" }];

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: "1px dotted pink",
//     color: state.isSelected ? "red" : "blue",
//     // width: "1px",
//     // padding: 20,
//   }),
//   container: (provided, state) => ({
//     ...provided,
//     display:this.state.ocultarCampos
//     // width: "1px",
//     // padding: 20,
//   }),
  
// };

export default class CadastroPropostas extends React.Component {
  state = {
    load: "",
    ocultarCampos:false,
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
    },
    clientes: [],
  };
  onChange = (option, action) => {
    let state = this.state;
    if (option.target) {
      state.proposta[option.target.name] = option.target.value;
      if (
        option.target.name === "valorParcela" ||
        option.target.name === "valorProposta" ||
        option.target.name === "comissaoEmpresa" ||
        option.target.name === "comissaoCorretor" ||
        option.target.name === "taxa"
      ) {
        state.proposta[option.target.name] = mascaraDinheiro(
          option.target.value
        );
      } else if (
        option.target.name === "nrProposta" ||
        option.target.name === "parcelas"
      ) {
        state.proposta[option.target.name] = option.target.value.replace(
          /\D/g,
          ""
        );
      }
    } else {
      state.proposta[action.name] = option;
    }
    this.setState(state);
    console.log(this.state);
  };

  onSubmit = (event) => {
    // console.log(event.target);

    this.props.enviarProposta(this.state.proposta)
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
  addCliente = (toDO) => {
    this.setState({...this.state, load: (<PopUp sair={this.addCliente} componente={<CadastroClientes />}/>), ocultarCampos:"none"})
    if(toDO === true){
      this.setState({...this.state, load: "", ocultarCampos:""})
    }
  }
  render() {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: state.isSelected ? "red" : "blue",
        // width: "1px",
        // padding: 20,
      }),
      container: (provided, state) => ({
        ...provided,
        display:this.state.ocultarCampos
        // width: "1px",
        // padding: 20,
      }),
      
    };
    const opcoes = [
      {
        nome: "novo",
        conteudo: (
          <div className="novo">
            <div className="full">
              <div className="atributoForm metade">
                BANCO*
                <Select
                  // isDisabled
                  styles={customStyles}
                  onChange={this.onChange}
                  name="banco"
                  options={listaDeBancos.filter((option) => option.label)}
                  value={this.state.proposta.banco}
                  noOptionsMessage={() => "Nenhum Banco encontrado"}
                  placeholder="BUSQUE POR NOME OU CÓDIGO DO BANCO"
                />
              </div>
              <div className="atributoForm metade">
                CONVÊNIO*
                <Select
                  styles={customStyles}
                  onChange={this.onChange}
                  name="convenio"
                  options={listaConvenios.filter((option) => option.label)}
                  value={this.state.proposta.convenio}
                  noOptionsMessage={() => "Nenhum tipo de convênio encontrado"}
                  placeholder="BUSQUE POR NOME"
                />
              </div>
            </div>
            <div className="full">
              <div className="atributoForm umQuarto">
                PARCEIRO
                <Select
                  isDisabled={true}
                  styles={customStyles}
                  onChange={this.onChange}
                  name="cliente"
                  // options={this.state.clientes.filter((option) => option.label)}
                  // value={this.state.proposta.cliente}
                  noOptionsMessage={() => "Nenhum cliente encontrado"}
                  placeholder="BUSQUE POR NOME"
                />
              </div>
              <div className="atributoForm umQuarto">
                TABELA
                <Select
                  styles={customStyles}
                  onChange={this.onChange}
                  name="tabela"
                  options={listaTabela.filter((option) => option.label)}
                  value={this.state.proposta.tabela}
                  noOptionsMessage={() => "Nenhum tipo de tabela encontrada"}
                  placeholder="BUSQUE POR NOME"
                />
              </div>
              <div className="atributoForm umQuarto">
                COMISSÃO EMPRESA (%)*
                <input
                  className="dataEmissao"
                  type="text"
                  name="comissaoEmpresa"
                  value={this.state.proposta.comissaoEmpresa}
                  onChange={this.onChange}
                />
              </div>
              <div className="atributoForm umQuarto">
                COMISSÃO CORRETOR (%)*
                <input
                  className="dataEmissao"
                  type="text"
                  name="comissaoCorretor"
                  value={this.state.proposta.comissaoCorretor}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="full">
              <div className="atributoForm umSexto">
                NR. PROPOSTA
                <input
                  className="dataEmissao"
                  type="text"
                  name="nrProposta"
                  value={this.state.proposta.nrProposta}
                  onChange={this.onChange}
                  maxlength="9"
                />
              </div>
              <div className="atributoForm umSexto">
                PARCELAS*
                <input
                  className="dataEmissao"
                  type="text"
                  name="parcelas"
                  value={this.state.proposta.parcelas}
                  onChange={this.onChange}
                  maxlength="3"
                />
              </div>
              <div className="atributoForm umSexto">
                TAXA*
                <input
                  className="dataEmissao"
                  type="text"
                  name="taxa"
                  value={this.state.proposta.taxa}
                  onChange={this.onChange}
                />
              </div>
              <div className="atributoForm umSexto">
                VALOR DA PROPOSTA*
                <input
                  className="dataEmissao"
                  type="text"
                  name="valorProposta"
                  value={this.state.proposta.valorProposta}
                  onChange={this.onChange}
                />
              </div>
              <div className="atributoForm umSexto">
                VALOR DA PARCELA
                <input
                  className="dataEmissao"
                  type="text"
                  name="valorParcela"
                  value={this.state.proposta.valorParcela}
                  onChange={this.onChange}
                />
              </div>
              <div className="atributoForm umSexto">
                1º PARCELA
                <InputMask
                  className="dataEmissao"
                  mask="99/99/9999"
                  name="dtPrimeiraParcela"
                  value={this.state.proposta.dtPrimeiraParcela}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
        ),
      },
    ];
    const novo = <div>variavel novo</div>;
    const refin = <div>variavel refin</div>;

    return (
      <>
        <div className="CadastroPropostas">
          <div className="camposPrincipais">
            <div className="full spaceBetween">
              {this.state.load}
              <div className="atributoForm umTerco">
                CLIENTE*
                <div className="ClientesActions">
                  <div className="actions">
                    <span class="material-icons" onClick={this.addCliente}>person_add_alt_1</span>
                    <span class="material-icons">delete_forever</span>
                  </div>
                  <Select
                    styles={customStyles}
                    onChange={this.onChange}
                    name="clienteId"
                    options={this.state.clientes.filter((option) => option.label)}
                    value={this.state.proposta.clienteId}
                    noOptionsMessage={() => "Nenhum cliente encontrado"}
                    placeholder="NOME OU CPF"
                  />
                </div>
              </div>
              <div className="atributoForm umTerco">
                Agente de Crédito*
              <Select
                  styles={customStyles}
                  onChange={this.onChange}
                  name="corretor"
                  options={corretores.filter((corretor) => corretor.label)}
                  value={this.state.proposta.corretor}
                  noOptionsMessage={() => "Nenhum corretor encontrado"}
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
                  noOptionsMessage={() => "TIPO DE PROPOSTA NÃO ENCONTRADO"}
                  placeholder="SELECIONE"
                />
              </div>
            </div>
            {opcoes.map((opcao) =>
              opcao.nome === this.state.proposta.tipo.value ? opcao.conteudo : ""
            )}
          </div>
          <div className="observacoes">
            <div className="full spaceBetween ultimo">
              <div className="quaseMetade">
                <div className="atributoForm tudoPossivel">
                  OBSERVAÇÕES*
                <textarea
                    name="observacoes"
                    cols="60"
                    rows="60"
                    value={this.state.proposta.observacoes}
                    onChange={this.onChange}
                  />
                </div>
              </div>
              <div className="maisDaMetade flex">
                <div className="full spaceBetween">
                  <div className="atributoForm quaseMetade">
                    EMISSÃO*
                  <InputMask
                      className="dataEmissao"
                      mask="99/99/9999"
                      name="dtProposta"
                      objeto="enderecoCliente"
                      value={this.state.proposta.dtProposta}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="atributoForm metade">
                    COMO CHEGOU ATÉ NÓS?
                  <Select
                      styles={customStyles}
                      onChange={this.onChange}
                      name="formaContato"
                      options={formasDeContato.filter((tipo) => tipo.label)}
                      value={this.state.proposta.formaContato}
                      noOptionsMessage={() => "Nenhum cliente encontrado"}
                      placeholder="BUSQUE POR NOME"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="botaoesEStatus">
          <div className="status">
            <div>
              Situação: <span className="situacao"> digitando...</span>
            </div>
            <div>
              Esteira:{" "}
              <span className="situacao">
                {" "}
            Verificando Informações...
          </span>
            </div>
          </div>
          <div className="butoons">
            <div className="underButton">
              <button
                type="submit"
                // disabled={false}
                className="gravar"
                onClick={this.onSubmit}
              >
                Gravar
        </button>
              <span class="material-icons verde">
                add_task
</span>
            </div>
            <div className="underButton">
              <button className="cancelar" onClick={() => this.props.history.push("/propostas")}>
                Cancelar
        </button>
              <span class="material-icons vermelho">
                delete_forever
</span>
            </div>
            {/* <form onSubmit={this.onSubmit}>
        </form> */}
          </div>
        </div>
      </>
    );
  }
}
