import React from "react";
import "./CadastroClientes.css";
import mascaraCpf from "../../../.././mascaraCpf.js";
import mascaraTelefone from "../../../../../Services/mascaraTelefone";
import mascaraCnpj from "../../../../../Services/mascaraCnpj";
import mascaradata from "../../../../../Services/mascaraData";
import mascaraDinheiro from "../../../../../Services/mascaraDinheiro";
import BtnSalvar from "./BtnSalvar/BtnSalvar";
import SalvarInformacoesCliente from "./SalvarInformacoesCliente";
import SalvaNoBanco from "./SalvaNoBanco";
import InputMask from "react-input-mask";

// export default function CadastroClientes() {
export default class CadastroClientes extends React.Component {
  state = {
    exibir: null,
    dados: null,
    formulario: {
      enderecoCliente: {
        bairro: "",
        cep: "",
        cidade: "",
        estado: "",
        rua: "",
        numero: "",
      },
      dadosProfissionais: {
        empresa: "",
        cnpj: "",
        rendaMensal: "",
        profissao: "",
        cargo: "",
        ramal: "",
        catprofissional: "",
        dtAdmissao: "",
        especieAposentadoria: "",
        cidadeProf: "",
        estadoProf: "",
        cepProf: "",
        ruaProf: "",
        bairroProf: "",
        numeroProf: "",
      },
      dadosPessoais: {
        nome: "",
        cpf: "",
        sexo: "",
        dtNascimento: "",
        naturalidade: "",
        nacionalidade: "BRASILEIRO (A)",
        rg: "",
        dtEmissao: "",
        orgaoEmissor: "",
        ufEmissor: "",
        telefone: "",
        nomeMae: "",
        nomePai: "",
        grauInstrucao: "",
        estadoCivil: "",
        dependentes: "",
        email: "",
        tipoEndereco: "",
      },
      dadosComerciais: {
        benefício: "",
        convenio: "INSS",
        margem: "",
        BANCO: "",
        agencia: "",
        tipoConta: "CC",
        conta: "",
        observacoes: "",
      },
      dadosConjugue: {
        cpfConjugue: "",
        nomeConjugue: "",
        rgConjugue: "",
        naturalidadeConjugue: "",
        nacionalidadeConjugue: "",
        dtNascimentoConjugue: "",
      },
      referenciasPessoais: {
        nomeRef: "",
        telefoneRef: "",
        cidadeRef: "",
        estadoRef: "",
        cepRef: "",
        ruaRef: "",
        bairroRef: "",
        numeroRef: "",
      },
    },
  };
  componentWillMount() {
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }
  }
  componentDidMount = () => {
    this.setState({ exibir: this.refs.dIdentificacao });

    if (document.getElementById("operacional")) {
      if (
        !document.getElementById("operacional").classList.contains("active")
      ) {
        // alert("era p ta dando certo")
        document.getElementById("operacional").classList.add("active");
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if (document.getElementsByClassName("li-clientes")[0]) {
      document.getElementsByClassName("li-clientes")[0].classList.add("active");
    }
  };
  componentWillUpdate = () => {
    if (this.state.exibir !== null) {
      this.state.exibir.style.display = "none";
    }
  };
  componentDidUpdate = () => {
    this.state.exibir.style.display = "flex";
  };

  onchange = (evento) => {
    const campo = evento.target.name;
    const listaCorreta = evento.target.getAttribute("objeto");
    const listaValue = { ...this.state.formulario[listaCorreta] };
    const formulario = { ...this.state.formulario };
    let valor = evento.target.value;
    if (!evento.target.getAttribute("tipo")) {
      valor = evento.target.value.toUpperCase();
    }
    if (campo === "email") {
      valor = valor.toLowerCase();
    }

    // campo === "cpf" ||
    // if (campo === "cpfConjugue") {
    //   formulario[campo] = mascaraCpf(valor);
    // }
    if (listaCorreta) {
      if (campo === "dtAdmissao") {
        listaValue[campo] = mascaradata(valor);
      } else if (campo === "rendaMensal" || campo === "margem") {
        listaValue[campo] = mascaraDinheiro(valor);
      } else if (
        campo === "dtNascimento" ||
        campo === "dtEmissao" ||
        campo === "dtNascimentoConjugue"
      ) {
        listaValue[campo] = mascaradata(valor);
      } else if (campo === "telefoneRef") {
        listaValue[campo] = mascaraTelefone(valor);
      } else {
        listaValue[campo] = valor;
      }
      formulario[listaCorreta] = listaValue;
    } else {
      formulario[campo] = valor;
    }
    this.setState({ ...this.state, formulario: formulario });
    // console.log(formulario);
  };

  onSubmit = () => {
    const dadosForm = this.state.formulario;

    const dadosValidados = SalvarInformacoesCliente(dadosForm);

    if (dadosValidados) {
      SalvaNoBanco(dadosValidados, this.props.history);
    }
  };

  render() {
    console.log(this.state);
    // let nome = "";
    if (this.props.dados) {
      let dadosh;
      this.props.dados.map((dado) => (dadosh = dado));
      if (this.state.dados === null) {
        this.setState({ dados: dadosh });
      }
    }
    let visivelConjugue = "";
    if (this.state.formulario.dadosPessoais.estadoCivil === "CASADO(A)") {
      visivelConjugue = "visivel";
    }
    return (
      <>
        <div className="CadastroClientes">
          <form>
            <ul>
              <li
                onClick={() =>
                  this.setState({ exibir: this.refs.dIdentificacao })
                }
              >
                <div className="simbolo">+</div>
                DADOS DE IDENTIFICAÇÃO DO CLIENTE
              </li>
              <div className="dIdentificacao" ref="dIdentificacao">
                <div className="atributoForm">
                  CPF*
                  <InputMask
                    mask="999.999.999-99"
                    type="text"
                    name="cpf"
                    objeto="dadosPessoais"
                    value={
                      this.state.dados
                        ? mascaraCpf(this.state.dados.cpf)
                        : this.state.formulario.dadosPessoais.cpf
                    }
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  Nome Completo*
                  <input
                    type="text"
                    name="nome"
                    objeto="dadosPessoais"
                    value={
                      this.state.dados
                        ? this.state.dados.nome
                        : this.state.formulario.dadosPessoais.nome
                    }
                    onChange={this.onchange}
                  />
                </div>
                <div>
                  <div className="atributoForm">
                    Telefone
                    <InputMask
                      mask="(999) 9 9999 - 9999"
                      type="text"
                      name="telefone"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.telefone}
                      onChange={this.onchange}
                    />
                    {/* <input
                      type="text"
                      name="telefone"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.telefone}
                      onChange={this.onchange}
                    /> */}
                  </div>
                  <div className="atributoForm">
                    Benefício*
                    <input
                      type="text"
                      name="benefício"
                      objeto="dadosComerciais"
                      value={this.state.formulario.dadosComerciais.benefício}
                      onChange={this.onchange}
                    />
                  </div>
                </div>
                <div>
                  <div className="atributoForm">
                    Convênio*
                    <select
                      name="convenio"
                      objeto="dadosComerciais"
                      onChange={this.onchange}
                      value={this.state.formulario.dadosComerciais.convenio}
                    >
                      <option value="INSS">INSS</option>
                      <option value="FEDERAL CIVIL">FEDERAL CIVIL</option>
                      <option value="AERONÁUTICA">AERONÁUTICA</option>
                    </select>
                  </div>
                  <div className="atributoForm">
                    Margem*
                    <input
                      type="text"
                      name="margem"
                      objeto="dadosComerciais"
                      value={this.state.formulario.dadosComerciais.margem}
                      onChange={this.onchange}
                    />
                  </div>
                </div>
                <div className="atributoForm">
                  BANCO*
                  <select
                    name="banco"
                    objeto="dadosComerciais"
                    onChange={this.onchange}
                    value={this.state.formulario.dadosComerciais.banco}
                  >
                    <option value="" disabled selected hidden>
                      SELECIONE
                    </option>
                    <option value="INSS">INSS</option>
                    <option value="FEDERAL CIVIL">FEDERAL CIVIL</option>
                    <option value="AERONÁUTICA">AERONÁUTICA</option>
                  </select>
                </div>
                <div>
                  <div className="atributoForm">
                    AGENCIA*
                    <input
                      type="text"
                      name="agencia"
                      objeto="dadosComerciais"
                      value={this.state.formulario.dadosComerciais.agencia}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm">
                    CONTA*
                    <div className="tipoConta">
                      <input
                        type="radio"
                        id="cc"
                        name="tipoConta"
                        objeto="dadosComerciais"
                        value="cc"
                        checked={
                          this.state.formulario.dadosComerciais.tipoConta ===
                          "CC"
                        }
                        onChange={this.onchange}
                      />
                      <label for="cc">CC</label>
                      <input
                        type="radio"
                        id="cp"
                        name="tipoConta"
                        objeto="dadosComerciais"
                        value="cp"
                        checked={
                          this.state.formulario.dadosComerciais.tipoConta ===
                          "CP"
                        }
                        onChange={this.onchange}
                      />
                      <label for="cp">CP</label>
                      <input
                        type="text"
                        name="conta"
                        objeto="dadosComerciais"
                        value={this.state.formulario.dadosComerciais.conta}
                        onChange={this.onchange}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="atributoForm">
                    SEXO*
                    <select
                      name="sexo"
                      objeto="dadosPessoais"
                      onChange={this.onchange}
                      value={this.state.formulario.dadosPessoais.sexo}
                    >
                      <option value="" disabled selected hidden>
                        SELECIONE
                      </option>
                      <option value="M">MASCULINO</option>
                      <option value="F">FEMININO</option>
                    </select>
                  </div>
                  <div className="atributoForm">
                    DATA NASCIMENTO*
                    <input
                      placeholder="DD/MM/AAAA"
                      type="text"
                      name="dtNascimento"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.dtNascimento}
                      onChange={this.onchange}
                    />
                  </div>
                </div>
                <div>
                  <div className="atributoForm">
                    NATURALIDADE (CIDADE)*
                    <input
                      placeholder="Cidade"
                      type="text"
                      name="naturalidade"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.naturalidade}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm">
                    NACIONALIDADE*
                    <select
                      name="nacionalidade"
                      objeto="dadosPessoais"
                      onChange={this.onchange}
                      value={this.state.formulario.dadosPessoais.nacionalidade}
                    >
                      <option value="BRASILEIRO (A)" selected>
                        BRASILEIRO (A)
                      </option>
                      <option value="ESTRANGEIRO (A)">ESTRANGEIRO (A)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="atributoForm">
                    RG Nº *
                    <InputMask
                      mask="9999999999-9"
                      type="text"
                      name="rg"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.rg}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm">
                    DATA EMISSÃO*
                    <input
                      placeholder="DD/MM/AAAA"
                      type="text"
                      name="dtEmissao"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.dtEmissao}
                      onChange={this.onchange}
                    />
                  </div>
                </div>
                <div>
                  <div className="atributoForm">
                    ÓRGÃO EMISSOR *
                    <input
                      type="text"
                      name="orgaoEmissor"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.orgaoEmissor}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm">
                    UF*
                    <input
                      type="text"
                      name="ufEmissor"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.ufEmissor}
                      onChange={this.onchange}
                    />
                  </div>
                </div>
                <div className="atributoForm">
                  E-MAIL*
                  <input
                    type="email"
                    name="email"
                    objeto="dadosPessoais"
                    value={this.state.formulario.dadosPessoais.email}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  OBSERVAÇÕES*
                  <textarea
                    name="observacoes"
                    objeto="dadosComerciais"
                    // id=""
                    cols="60"
                    rows="60"
                    value={this.state.formulario.dadosComerciais.observacoes}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  NOME DO PAI*
                  <input
                    type="text"
                    name="nomePai"
                    objeto="dadosPessoais"
                    value={this.state.formulario.dadosPessoais.nomePai}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  NOME DA MÃE*
                  <input
                    type="text"
                    name="nomeMae"
                    objeto="dadosPessoais"
                    value={this.state.formulario.dadosPessoais.nomeMae}
                    onChange={this.onchange}
                  />
                </div>
                <div>
                  <div className="atributoForm">
                    GRAU DE INSTRUÇÃO*
                    <select
                      name="grauInstrucao"
                      objeto="dadosPessoais"
                      onChange={this.onchange}
                      value={this.state.formulario.dadosPessoais.grauInstrucao}
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
                      <option value="SEGUNDO GRAU COMPLETO">
                        SEGUNDO GRAU COMPLETO
                      </option>
                      <option value="SUPERIOR INCOMPLETO">
                        SUPERIOR INCOMPLETO
                      </option>
                      <option value="SUPERIOR COMPLETO">
                        SUPERIOR COMPLETO
                      </option>
                    </select>
                  </div>
                  <div className="atributoForm">
                    ESTADO CIVIL*
                    <select
                      name="estadoCivil"
                      objeto="dadosPessoais"
                      onChange={this.onchange}
                      value={this.state.formulario.dadosPessoais.estadoCivil}
                    >
                      <option value="" disabled selected hidden>
                        SELECIONE
                      </option>
                      <option value="SOLTEIRO(A)">SOLTEIRO(A)</option>
                      <option value="CASADO(A)">CASADO(A)</option>
                      <option value="DIVORCIADO(A)">DIVORCIADO(A)</option>
                      <option value="VIUVO(A)">VIUVO(A)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="atributoForm">
                    END. P/CORRESPONDÊNCIA*
                    <select
                      name="tipoEndereco"
                      objeto="dadosPessoais"
                      onChange={this.onchange}
                      value={this.state.formulario.dadosPessoais.tipoEndereco}
                    >
                      <option value="" disabled selected hidden>
                        SELECIONE
                      </option>
                      <option value="RESIDENCIAL">RESIDENCIAL</option>
                      <option value="COMERCIAL">COMERCIAL</option>
                    </select>
                  </div>
                  <div className="atributoForm">
                    Nº DEPENDENTES*
                    <input
                      type="number"
                      name="dependentes"
                      objeto="dadosPessoais"
                      value={this.state.formulario.dadosPessoais.dependentes}
                      onChange={this.onchange}
                    />
                  </div>
                </div>
                <div className={`conjugue ` + visivelConjugue}>
                  <div className="atributoForm umTerco">
                    CPF DO CÔNJUGE*
                    <InputMask
                      mask="999.999.999-99"
                      type="text"
                      name="cpfConjugue"
                      objeto="dadosConjugue"
                      value={this.state.formulario.dadosConjugue.cpfConjugue}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm umTerco">
                    NOME DO CÔNJUGE*
                    <input
                      type="text"
                      name="nomeConjugue"
                      objeto="dadosConjugue"
                      value={this.state.formulario.dadosConjugue.nomeConjugue}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm umTerco">
                    DATA DE NASCIMENTO*
                    <input
                      placeholder="DD/MM/AAAA"
                      type="text"
                      name="dtNascimentoConjugue"
                      objeto="dadosConjugue"
                      value={
                        this.state.formulario.dadosConjugue.dtNascimentoConjugue
                      }
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm umTerco">
                    RG Nº*
                    <input
                      type="text"
                      name="rgConjugue"
                      objeto="dadosConjugue"
                      value={this.state.formulario.dadosConjugue.rgConjugue}
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm umTerco">
                    NATURALIDADE*
                    <input
                      type="text"
                      name="naturalidadeConjugue"
                      objeto="dadosConjugue"
                      value={
                        this.state.formulario.dadosConjugue.naturalidadeConjugue
                      }
                      onChange={this.onchange}
                    />
                  </div>
                  <div className="atributoForm umTerco">
                    NACIONALIDADE*
                    <input
                      type="text"
                      name="nacionalidadeConjugue"
                      objeto="dadosConjugue"
                      value={
                        this.state.formulario.dadosConjugue
                          .nacionalidadeConjugue
                      }
                      onChange={this.onchange}
                    />
                  </div>
                </div>
              </div>
              <li onClick={() => this.setState({ exibir: this.refs.endereco })}>
                <div className="simbolo">+</div>
                ENDEREÇO CLIENTE
              </li>
              <div className="dIdentificacao" ref="endereco">
                <div className="atributoForm metade">
                  RUA*
                  <input
                    type="text"
                    name="rua"
                    objeto="enderecoCliente"
                    value={this.state.formulario.enderecoCliente.rua}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  BAIRRO*
                  <input
                    type="text"
                    name="bairro"
                    objeto="enderecoCliente"
                    value={this.state.formulario.enderecoCliente.bairro}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umOitavo">
                  NÚMERO*
                  <input
                    type="text"
                    name="numero"
                    objeto="enderecoCliente"
                    value={this.state.formulario.enderecoCliente.numero}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CIDADE*
                  <input
                    type="text"
                    name="cidade"
                    objeto="enderecoCliente"
                    value={this.state.formulario.enderecoCliente.cidade}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  ESTADO*
                  <input
                    type="text"
                    name="estado"
                    objeto="enderecoCliente"
                    value={this.state.formulario.enderecoCliente.estado}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CEP*
                  <InputMask
                    mask="99999-999"
                    name="cep"
                    objeto="enderecoCliente"
                    value={this.state.formulario.enderecoCliente.cep}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <li
                onClick={() =>
                  this.setState({ exibir: this.refs.dProfissionais })
                }
              >
                <div className="simbolo">+</div>
                DADOS PROFISSIONAIS
              </li>
              <div className="dIdentificacao" ref="dProfissionais">
                <div className="atributoForm umTerco">
                  EMPRESA QUE TRABALHA
                  <input
                    type="text"
                    name="empresa"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.empresa}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CNPJ
                  <InputMask
                    mask="99.999.999/9999-99"
                    type="text"
                    name="cnpj"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.cnpj}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  RENDA MENSAL (R$)
                  <input
                    type="text"
                    name="rendaMensal"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.rendaMensal}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  PROFISSÃO
                  <input
                    type="text"
                    name="profissao"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.profissao}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CARGO
                  <input
                    type="text"
                    name="cargo"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.cargo}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  RAMAL
                  <input
                    type="text"
                    name="ramal"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.ramal}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CATEGORIA PROFISSIONAL
                  <select
                    name="catprofissional"
                    objeto="dadosProfissionais"
                    tipo="select"
                    onChange={this.onchange}
                    value={
                      this.state.formulario.dadosProfissionais.catprofissional
                    }
                  >
                    <option value="" disabled selected hidden>
                      SELECIONE
                    </option>
                    <option value="Assalariado">Assalariado</option>
                    <option value="Autônomo/Liberal">Autônomo/Liberal</option>
                    <option value="Aposentado(a)">Aposentado(a)</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className="atributoForm umTerco">
                  DT. ADMISSÃO/APOSENTADORIA
                  <input
                    placeholder="DD/MM/AAAA"
                    type="text"
                    name="dtAdmissao"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.dtAdmissao}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  ESPÉCIE DE APOSENTADORIA
                  <select
                    name="especieAposentadoria"
                    objeto="dadosProfissionais"
                    tipo="select"
                    onChange={this.onchange}
                    value={
                      this.state.formulario.dadosProfissionais
                        .especieAposentadoria
                    }
                  >
                    <option value="" disabled selected hidden>
                      SELECIONE
                    </option>
                    <option value="Tempo de Serviço">Tempo de Serviço</option>
                    <option value="Invalidez Permanente">
                      Invalidez Permanente
                    </option>
                    <option value="Pensionista">Pensionista</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className="atributoForm umTerco">
                  CIDADE*
                  <input
                    type="text"
                    name="cidadeProf"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.cidadeProf}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  ESTADO*
                  <input
                    type="text"
                    name="estadoProf"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.estadoProf}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CEP*
                  <InputMask
                    mask="99999-999"
                    type="text"
                    name="cepProf"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.cepProf}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm metade">
                  RUA*
                  <input
                    type="text"
                    name="ruaProf"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.ruaProf}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  BAIRRO*
                  <input
                    type="text"
                    name="bairroProf"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.bairroProf}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umOitavo">
                  NÚMERO*
                  <input
                    type="text"
                    name="numeroProf"
                    objeto="dadosProfissionais"
                    value={this.state.formulario.dadosProfissionais.numeroProf}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <li
                onClick={() => this.setState({ exibir: this.refs.rPessoais })}
              >
                <div className="simbolo">+</div>
                REFERÊNCIAS PESSOAIS
              </li>
              <div className="dIdentificacao" ref="rPessoais">
                <div className="atributoForm metade">
                  NOME COMPLETO
                  <input
                    type="text"
                    name="nomeRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.nomeRef}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm metade">
                  TELEFONE
                  <input
                    required
                    type="text"
                    name="telefoneRef"
                    objeto="referenciasPessoais"
                    value={
                      this.state.formulario.referenciasPessoais.telefoneRef
                    }
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CIDADE*
                  <input
                    type="text"
                    name="cidadeRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.cidadeRef}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  ESTADO*
                  <input
                    type="text"
                    name="estadoRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.estadoRef}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  CEP*
                  <input
                    type="text"
                    name="cepRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.cepRef}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm metade">
                  RUA*
                  <input
                    type="text"
                    name="ruaRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.ruaRef}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  BAIRRO*
                  <input
                    type="text"
                    name="bairroRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.bairroRef}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umOitavo">
                  NÚMERO*
                  <input
                    type="text"
                    name="numeroRef"
                    objeto="referenciasPessoais"
                    value={this.state.formulario.referenciasPessoais.numeroRef}
                    onChange={this.onchange}
                  />
                </div>
              </div>
            </ul>
          </form>
        </div>
        <BtnSalvar onClick={this.onSubmit} />
      </>
    );
  }
}
