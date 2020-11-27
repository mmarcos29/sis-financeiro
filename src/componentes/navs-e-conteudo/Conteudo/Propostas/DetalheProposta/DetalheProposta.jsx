import React, { useState } from "react";
import Select from "react-select";
import "./DetalheProposta.css";
import RemoveMascaraCpf from "../../../../../Services/RemoveMascaraCpf";
import mascaraDinheiro from "../../../../../Services/mascaraDinheiro";
import InputMask from "react-input-mask";
import listaConvenios from "../../../../../Services/listaConvenios";
import listaTabela from "../../../../../Services/listaTabela";
import listaDeBancos from "../../../../../Services/listaDeBancos";
import formasDeContato from "../../../../../Services/formasDeContato";
import EditaNoBanco from "../../../../../Services/EditaNoBanco";
import validaCamposFoms from "../../../../../Services/validaCamposFoms";

const tiposPropostas = [
  { label: "novo", value: "novo" },
  // { label: "teste", value: "teste" },
];
const corretores = [{ label: "Magno Vieria", value: "Magno Vieria" }];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    // width: "1px",
    // padding: 20,
  }),
};

export default class DetalheProposta extends React.Component {
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
      },
      clientes: [],
    };

    // props.mudaNomePropostaDetalhe(
    //   `CLIENTE 0${proposta.id}    -     ${proposta.nome}`
    // );
  }
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
  };

  onSubmit = (event) => {
    const dadosProposta = validaCamposFoms(this.state.proposta, "propostas");

    if (dadosProposta) {
      dadosProposta.id = this.state.id;
      // console.log(dadosProposta)
      EditaNoBanco(dadosProposta, this.props.history, "propostas")
    }
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
    if (this.state.clientes.length > 0 && this.state.propostaAtual) {
      // console.log(this.state.propostaAtual.clienteId)
      const clienteProposta = this.state.clientes.find(
        (cliente) =>
          cliente.value === parseInt(this.state.propostaAtual.clienteId)
      );
      const corretorProposta = corretores.find(
        (corretor) => corretor.value === this.state.propostaAtual.corretor
      );
      const tipoProposta = tiposPropostas.find(
        (tipo) => tipo.value === this.state.propostaAtual.tipo
      );
      const banco = listaDeBancos.find(
        (banco) => banco.value === this.state.propostaAtual.banco
      );
      const convenio = listaConvenios.find(
        (convenio) => convenio.value === this.state.propostaAtual.convenio
      );
      const tabela = listaTabela.find(
        (tabela) => tabela.value === this.state.propostaAtual.tabela
      );
      const formaContato = formasDeContato.find(
        (formaContato) =>
          formaContato.value === this.state.propostaAtual.formaContato
      );
      let statePropostas = this.state.proposta;
      statePropostas.clienteId = clienteProposta;
      statePropostas.corretor = corretorProposta;
      statePropostas.banco = banco;
      statePropostas.convenio = convenio;
      statePropostas.tabela = tabela;
      statePropostas.comissaoEmpresa = this.state.propostaAtual.comissaoEmpresa;
      statePropostas.comissaoCorretor = this.state.propostaAtual.comissaoCorretor;
      statePropostas.nrProposta = this.state.propostaAtual.nrProposta;
      statePropostas.parcelas = this.state.propostaAtual.parcelas;
      statePropostas.taxa = this.state.propostaAtual.taxa;
      statePropostas.valorProposta = this.state.propostaAtual.valorProposta;
      statePropostas.valorParcela = this.state.propostaAtual.valorParcela;
      statePropostas.dtPrimeiraParcela = this.state.propostaAtual.dtPrimeiraParcela;
      statePropostas.observacoes = this.state.propostaAtual.observacoes;
      statePropostas.dtProposta = this.state.propostaAtual.dtProposta;
      statePropostas.formaContato = formaContato;
      statePropostas.esteira = this.state.propostaAtual.esteira;
      if (tipoProposta) {
        statePropostas.tipo = tipoProposta;
      }
      this.setState(
        { proposta: statePropostas },
        console.log(this.state.proposta)
      );
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
                  options={this.state.clientes.filter((option) => option.label)}
                  value={this.state.proposta.cliente}
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
      <div className="CadastroPropostas">
        <div className="camposPrincipais">
          <div className="full spaceBetween">
            <div className="atributoForm umTerco">
              CLIENTE*
              <Select
                styles={customStyles}
                onChange={this.onChange}
                name="clienteId"
                options={this.state.clientes.filter((option) => option.label)}
                value={this.state.proposta.clienteId}
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
                    disabled
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
              <div className="botaoesEStatus">
                <div className="status">
                  <div>
                    Situação: <span className="situacao"> digitando...</span>
                  </div>
                  <div>
                    Esteira:{" "}
                    <span className="situacao">
                      {this.state.proposta.esteira}
                      {/* Verificando Informações... */}
                    </span>
                  </div>
                </div>
                <div className="butoons">
                  <button onClick={() => this.props.history.push("/propostas")}>
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
                  {/* <form onSubmit={this.onSubmit}>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
