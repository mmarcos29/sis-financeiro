import React from "react";
import "./CadastroClientes.css";
import mascaraCpf from "../../../.././mascaraCpf.js";
import mascaraTelefone from "../../../../../Services/mascaraTelefone";
import mascaradata from "../../../../../Services/mascaraData";
import mascaraDinheiro from "../../../../../Services/mascaraDinheiro";
import BtnSalvar from "./BtnSalvar/BtnSalvar";

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
        cidade: "",
        estado: "",
        cep: "",
        rua: "",
        bairro: "",
        numero: "",
      },
      nome: "",
      cpf: "",
      sexo: "",
      dtNascimento: "",
      naturalidade: "",
      nacionalidade: "",
      rg: "",
      dtEmissao: "",
      orgaoEmissor: "",
      ufEmissor: "",
      telefone: "",
      benefício: "",
      convenio: "INSS",
      margem: "",
      BANCO: "",
      agencia: "",
      tipoConta: "CC",
      tipoEndereco: "",
      conta: "",
      observacoes: "",
      nomeMae: "",
      nomePai: "",
      grauInstrucao: "",
      estadoCivil: "",
      dependentes: "",
      cpfConjugue: "",
      nomeConjugue: "",
      rgConjugue: "",
      naturalidadeConjugue: "",
      nacionalidadeConjugue: "",
      dtNascimentoConjugue: "",
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
    let valor = evento.target.value
    if( !evento.target.getAttribute("tipo") ){
      valor = evento.target.value.toUpperCase();
    }
    if (campo === "email") {
      valor = valor.toLowerCase();
    }

    if (campo === "cpf" || campo === "cpfConjugue") {
      formulario[campo] = mascaraCpf(valor);
    } else if (campo === "telefone") {
      formulario[campo] = mascaraTelefone(valor);
    } else if (
      campo === "dtNascimento" ||
      campo === "dtEmissao" ||
      campo === "dtNascimentoConjugue"      
    ) {
      formulario[campo] = mascaradata(valor);
      // exite uma lista determinada a ser salva dentro de formulario
    } else if (listaCorreta) {
      if(campo === "dtAdmissao"){
        listaValue[campo] = mascaradata(valor)
      }else if( campo === "rendaMensal"){
        listaValue[campo] = mascaraDinheiro(valor)
      }else{
        listaValue[campo] = valor;
      }
      formulario[listaCorreta] = listaValue;
    } else {
      formulario[campo] = valor;
    }
    this.setState({ ...this.state, formulario: formulario });
    // console.log(formulario);
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
    if (this.state.formulario.estadoCivil === "CASADO(A)") {
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
                <input
                  type="text"
                  name="cpf"
                  value={
                    this.state.dados
                      ? mascaraCpf(this.state.dados.cpf)
                      : this.state.formulario.cpf
                  }
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm">
                Nome Completo*
                <input
                  type="text"
                  name="nome"
                  value={
                    this.state.dados
                      ? this.state.dados.nome
                      : this.state.formulario.nome
                  }
                  onChange={this.onchange}
                />
              </div>
              <div>
                <div className="atributoForm">
                  Telefone
                  <input
                    type="text"
                    name="telefone"
                    value={this.state.formulario.telefone}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  Benefício*
                  <input
                    type="text"
                    name="benefício"
                    value={this.state.formulario.benefício}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <div>
                <div className="atributoForm">
                  Convênio*
                  <select
                    name="convenio"
                    onChange={this.onchange}
                    value={this.state.formulario.convenio}
                  >
                    <option value="INSS">INSS</option>
                    <option value="FEDERAL CIVIL">FEDERAL CIVIL</option>
                    <option value="AERONÁUTICA">AERONÁUTICA</option>
                  </select>
                </div>
                <div className="atributoForm">
                  Margem*
                  <input
                    type="number"
                    name="margem"
                    value={this.state.formulario.margem}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <div className="atributoForm">
                BANCO*
                <select
                  name="BANCO"
                  onChange={this.onchange}
                  value={this.state.formulario.BANCO}
                >
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
                    value={this.state.formulario.agencia}
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
                      value="cc"
                      checked={this.state.formulario.tipoConta === "CC"}
                      onChange={this.onchange}
                    />
                    <label for="cc">CC</label>
                    <input
                      type="radio"
                      id="cp"
                      name="tipoConta"
                      value="cp"
                      checked={this.state.formulario.tipoConta === "CP"}
                      onChange={this.onchange}
                    />
                    <label for="cp">CP</label>
                    <input
                      type="text"
                      name="conta"
                      value={this.state.formulario.conta}
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
                    onChange={this.onchange}
                    value={this.state.formulario.sexo}
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
                    placeholder="dd/mm/aaaa"
                    type="text"
                    name="dtNascimento"
                    value={this.state.formulario.dtNascimento}
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
                    value={this.state.formulario.naturalidade}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  NACIONALIDADE*
                  <input
                    type="text"
                    name="nacionalidade"
                    value={this.state.formulario.nacionalidade}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <div>
                <div className="atributoForm">
                  RG Nº *
                  <input
                    type="text"
                    name="rg"
                    value={this.state.formulario.rg}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  DATA EMISSÃO*
                  <input
                    placeholder="dd/mm/aaaa"
                    type="text"
                    name="dtEmissao"
                    value={this.state.formulario.dtEmissao}
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
                    value={this.state.formulario.orgaoEmissor}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm">
                  UF*
                  <input
                    type="text"
                    name="ufEmissor"
                    value={this.state.formulario.ufEmissor}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <div className="atributoForm">
                E-MAIL*
                <input
                  type="email"
                  name="email"
                  value={this.state.formulario.email}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm">
                OBSERVAÇÕES*
                <textarea
                  name="observacoes"
                  // id=""
                  cols="60"
                  rows="60"
                  value={this.state.formulario.observacoes}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm">
                NOME DO PAI*
                <input
                  type="text"
                  name="nomePai"
                  value={this.state.formulario.nomePai}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm">
                NOME DA MÃE*
                <input
                  type="text"
                  name="nomeMae"
                  value={this.state.formulario.nomeMae}
                  onChange={this.onchange}
                />
              </div>
              <div>
                <div className="atributoForm">
                  GRAU DE INSTRUÇÃO*
                  <select
                    name="grauInstrucao"
                    onChange={this.onchange}
                    value={this.state.formulario.grauInstrucao}
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
                    <option value="SUPERIOR COMPLETO">SUPERIOR COMPLETO</option>
                  </select>
                </div>
                <div className="atributoForm">
                  ESTADO CIVIL*
                  <select
                    name="estadoCivil"
                    onChange={this.onchange}
                    value={this.state.formulario.estadoCivil}
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
                    onChange={this.onchange}
                    value={this.state.formulario.tipoEndereco}
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
                    value={this.state.formulario.dependentes}
                    onChange={this.onchange}
                  />
                </div>
              </div>
              <div className={`conjugue ` + visivelConjugue}>
                <div className="atributoForm umTerco">
                  CPF DO CÔNJUGE*
                  <input
                    type="text"
                    name="cpfConjugue"
                    value={this.state.formulario.cpfConjugue}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  NOME DO CÔNJUGE*
                  <input
                    type="text"
                    name="nomeConjugue"
                    value={this.state.formulario.nomeConjugue}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  DATA DE NASCIMENTO*
                  <input
                    placeholder="dd/mm/aaaa"
                    type="text"
                    name="dtNascimentoConjugue"
                    value={this.state.formulario.dtNascimentoConjugue}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  RG Nº*
                  <input
                    type="text"
                    name="rgConjugue"
                    value={this.state.formulario.rgConjugue}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  NATURALIDADE*
                  <input
                    type="text"
                    name="naturalidadeConjugue"
                    value={this.state.formulario.naturalidadeConjugue}
                    onChange={this.onchange}
                  />
                </div>
                <div className="atributoForm umTerco">
                  NACIONALIDADE*
                  <input
                    type="text"
                    name="nacionalidadeConjugue"
                    value={this.state.formulario.nacionalidadeConjugue}
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
                  value={this.state.formulario.rua}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                BAIRRO*
                <input
                  type="text"
                  name="bairro"
                  objeto="enderecoCliente"
                  value={this.state.formulario.bairro}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umOitavo">
                NÚMERO*
                <input
                  type="text"
                  name="numero"
                  objeto="enderecoCliente"
                  value={this.state.formulario.numero}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                CIDADE*
                <input
                  type="text"
                  name="cidade"
                  objeto="enderecoCliente"
                  value={this.state.formulario.cidade}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                ESTADO*
                <input
                  type="text"
                  name="estado"
                  objeto="enderecoCliente"
                  value={this.state.formulario.estado}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                CEP*
                <input
                  type="text"
                  name="cep"
                  objeto="enderecoCliente"
                  value={this.state.formulario.cep}
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
                <input
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
                  placeholder="dd/mm/aaaa"
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
                  <option value="Invalidez Permanente">Invalidez Permanente</option>
                  <option value="Pensionista">Pensionista</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              <div className="atributoForm umTerco">
                CIDADE*
                <input
                  type="text"
                  name="cidade"
                  objeto="dadosProfissionais"
                  value={this.state.formulario.dadosProfissionais.cidade}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                ESTADO*
                <input
                  type="text"
                  name="estado"
                  objeto="dadosProfissionais"
                  value={this.state.formulario.dadosProfissionais.estado}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                CEP*
                <input
                  type="text"
                  name="cep"
                  objeto="dadosProfissionais"
                  value={this.state.formulario.dadosProfissionais.cep}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm metade">
                RUA*
                <input
                  type="text"
                  name="rua"
                  objeto="dadosProfissionais"
                  value={this.state.formulario.dadosProfissionais.rua}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                BAIRRO*
                <input
                  type="text"
                  name="bairro"
                  objeto="dadosProfissionais"
                  value={this.state.formulario.dadosProfissionais.bairro}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umOitavo">
                NÚMERO*
                <input
                  type="text"
                  name="numero"
                  objeto="dadosProfissionais"
                  value={this.state.formulario.dadosProfissionais.numero}
                  onChange={this.onchange}
                />
              </div>
            </div>
            <li onClick={() => this.setState({ exibir: this.refs.rPessoais })}>
              <div className="simbolo">+</div>
              REFERÊNCIAS PESSOAIS
            </li>
            <div className="dIdentificacao" ref="rPessoais">
              <div className="atributoForm metade">
                NOME COMPLETO
                <input
                  type="text"
                  name="rua"
                  value={this.state.formulario.rua}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm metade">
                TELEFONE
                <input
                  type="text"
                  name="rua"
                  value={this.state.formulario.rua}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                CIDADE*
                <input
                  type="text"
                  name="cidade"
                  value={this.state.formulario.cidade}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                ESTADO*
                <input
                  type="text"
                  name="estado"
                  value={this.state.formulario.estado}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                CEP*
                <input
                  type="text"
                  name="cep"
                  value={this.state.formulario.cep}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm metade">
                RUA*
                <input
                  type="text"
                  name="rua"
                  value={this.state.formulario.rua}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umTerco">
                BAIRRO*
                <input
                  type="text"
                  name="bairro"
                  value={this.state.formulario.bairro}
                  onChange={this.onchange}
                />
              </div>
              <div className="atributoForm umOitavo">
                NÚMERO*
                <input
                  type="text"
                  name="numero"
                  value={this.state.formulario.numero}
                  onChange={this.onchange}
                />
              </div>
            </div>
          </ul>
        </form>        
      </div>
      <BtnSalvar />
      </>
    );
  }
}
