import React from "react";
import "./CadastroClientes.css";
import mascaraCpf from "../../../.././mascaraCpf.js";
import mascaraTelefone from "../../../../../Services/mascaraTelefone";

// export default function CadastroClientes() {
export default class CadastroClientes extends React.Component {
  state = {
    exibir: null,
    dados: null,
    formulario: {
      nome: "",
      cpf: "",
      telefone: "",
      benefício: "",
      convenio: "INSS",
      BANCO: "",
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
    const formulario = { ...this.state.formulario };
    const valor = evento.target.value.toUpperCase();

    if (campo === "cpf") {
      formulario[campo] = mascaraCpf(evento.target.value);
    } else if (campo === "telefone") {
      formulario[campo] = mascaraTelefone(evento.target.value);
    } else {
      formulario[campo] = valor;
    }
    this.setState({ formulario: formulario });
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
    return (
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
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
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
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
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
                    type="number"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </div>
                <div className="atributoForm">
                  CONTA*
                  <div className="tipoConta">
                    <input type="radio" id="cc" name="tipoConta" value="cc" checked/>
                    <label for="cc">CC</label>
                    <input type="radio" id="cp" name="tipoConta" value="cp" />
                    <label for="cp">CP</label>
                  </div>
                </div>
                {/* <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
                Conta*
                <input
                  type="number"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />  */}
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
            <div className="dIdentificacao" ref="dProfissionais"></div>
          </ul>
        </form>
        {/* <label>
                BANCO
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <div>
                <label>
                  Agência
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Conta
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Sexo
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Data Nascimento
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Naturalidade (cidade e estado)
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Nacionalidade
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  RG Nº
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Data Emissão
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Órgão Emissor
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  UF
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                Observações
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                E-mail
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label className="umTerco">
                Rua
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label className="umTerco">
                Bairro
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label className="umTerco">
                Número
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label className="umTerco">
                Cep
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label className="umTerco">
                Cidade
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label className="umTerco">
                Estado
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Nome do Pai
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Nome da Mãe
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <div>
                <label>
                  Grau de Instrução
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Estado Civil
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  End. p/Correspondência
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Nº Dependentes
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                Nome do Cônjuge
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Doc. Identidade (Tipo / Nº / Data Emissão)
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Naturalidade (cidade e estado)
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Data Nascimento
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
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
              <label>
                CPF*
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Nome Completo*
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <div>
                <label>
                  Telefone
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Benefício*
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Convênio*
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Margem*
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                BANCO
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <div>
                <label>
                  Agência
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Conta
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Sexo
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Data Nascimento
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Naturalidade (cidade e estado)
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Nacionalidade
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  RG Nº
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Data Emissão
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Órgão Emissor
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  UF
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                Observações
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                E-mail
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
            </div>
            <li onClick={() => this.setState({ exibir: this.refs.rPessoais })}>
              <div className="simbolo">+</div>
              REFERÊNCIAS PESSOAIS
            </li>
            <div className="dIdentificacao" ref="rPessoais">
              <label>
                CPF*
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Nome Completo*
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <div>
                <label>
                  Telefone
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Benefício*
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Convênio*
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Margem*
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                BANCO
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <div>
                <label>
                  Agência
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Conta
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Sexo
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Data Nascimento
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Naturalidade (cidade e estado)
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Nacionalidade
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  RG Nº
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  Data Emissão
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  Órgão Emissor
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
                <label>
                  UF
                  <input
                    type="text"
                    //   value={this.state.value}
                    //   onChange={this.handleChange}
                  />
                </label>
              </div>
              <label>
                Observações
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                E-mail
                <input
                  type="text"
                  //   value={this.state.value}
                  //   onChange={this.handleChange}
                />
              </label> */}
        {/* </div> */}
        {/* </ul> */}
        {/* <input type="submit" value="Enviar" /> */}
        {/* </form> */}
      </div>
    );
  }
}
