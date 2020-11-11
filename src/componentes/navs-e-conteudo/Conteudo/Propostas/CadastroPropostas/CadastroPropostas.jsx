import React, { useState } from "react";
import Select from "react-select";
import "./CadastroPropostas.css";
import RemoveMascaraCpf from "../../../../../Services/RemoveMascaraCpf";
import mascaraDinheiro from "../../../../../Services/mascaraDinheiro";
import InputMask from "react-input-mask";
import listaConvenios from "../../../../../Services/listaConvenios";
import listaTabela from "../../../../../Services/listaTabela";
const tiposPropostas = [
  { label: "novo", value: "novo" },
  { label: "teste", value: "teste" },
];
const formaContato = [
  { label: "Indicação de amigos", value: "Indicação de amigos" },
  { label: "Balcão", value: "Balcão" },
  { label: "E-mail marketing", value: "E-mail marketing" },
  { label: "Facebook", value: "Facebook" },
  { label: "Folder e panfletos", value: "Folder e panfletos" },
  { label: "Fomulário web site", value: "Fomulário web site" },
  { label: "Instagram", value: "Instagram" },
  { label: "Outdoor e placas", value: "Outdoor e placas" },
  { label: "Rádio", value: "Rádio" },
  { label: "Sms Marketing", value: "Sms Marketing" },
  { label: "Telemarketing", value: "Telemarketing" },
  { label: "Televisão", value: "Televisão" },
  { label: "Twitter", value: "Twitter" },
  { label: "Visita de corretor", value: "Visita de corretor" },
  { label: "conect.app.br", value: "conect.app.br" },
  { label: "Mala direta - carta", value: "Mala direta - carta" },
  { label: "Whatsapp", value: "Whatsapp" },
  { label: "Retenção", value: "Retenção" },
  { label: "Divulgação", value: "Divulgação" },
  { label: "Google", value: "Google" },
  { label: "Jornal", value: "Jornal" },
  { label: "Revista", value: "Revista" },
  { label: "Receptivo", value: "Receptivo" },
  { label: "Abordagem externa", value: "Abordagem externa" },
  { label: "Panfletagem", value: "Panfletagem" },
  { label: "Indicação parceria", value: "Indicação parceria" },
];

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
    proposta: {
      valorParcela: "",
      valorProposta: "",
      banco: "",
      convenio:"",
      tabela: "",
      comissaoEmpresa: "",
      comissaoCorretor: "",
      nrProposta: "",
      parcelas:"",
      taxa:"",
      cliente: "",
      corretor: "",
      tipo: "", //{ label: "novo", value: "novo" },
      dtProposta: new Date().toLocaleDateString(),
      formaContato: "",
      observacoes: "",
    },
    clientes: [],
    corretor: [{ label: "Magno Vieria", value: "Magno Vieria" }],
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
      }else if(option.target.name === "nrProposta" || option.target.name === "parcelas"){
        state.proposta[option.target.name] = option.target.value.replace(/\D/g, "")
      } 
    } else {
      state.proposta[action.name] = option;
    }
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
      {
        nome: "novo",
        conteudo: (
          <div className="novo">
            <div className="full">
              <div className="atributoForm metade">
                BANCO*
                <Select
                isDisabled
                  styles={customStyles}
                  onChange={this.onChange}
                  name="banco"
                  options={formaContato.filter((option) => option.label)}
                  value={this.state.proposta.banco}
                  noOptionsMessage={() => "Nenhum cliente encontrado"}
                  placeholder="BUSQUE POR NOME"
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
                  noOptionsMessage={() => "Nenhum cliente encontrado"}
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
                  noOptionsMessage={() => "Nenhum cliente encontrado"}
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
                  // name="dtProposta"
                  objeto="enderecoCliente"
                  // value={this.state.proposta.dtProposta}
                  // onChange={this.onChange}
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
      <div className="CadastroPropostas">
        <div className="camposPrincipais">
          <div className="full spaceBetween">
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
                options={this.state.corretor.filter(
                  (corretor) => corretor.label
                )}
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
                    options={formaContato.filter((tipo) => tipo.label)}
                    value={this.state.proposta.formaContato}
                    noOptionsMessage={() => "Nenhum cliente encontrado"}
                    placeholder="BUSQUE POR NOME"
                  />
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
                  <button onClick={() => this.props.history.push("/propostas")}>
                    Cancelar
                  </button>
                  <button className="gravar">Gravar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
