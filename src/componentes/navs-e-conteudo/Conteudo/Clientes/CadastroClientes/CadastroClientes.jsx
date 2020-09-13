import React, { useState } from "react";
import "./CadastroClientes.css";

// export default function CadastroClientes() {
export default class CadastroClientes extends React.Component {
  state = {
    exibir: null,
  };
  componentDidMount = () => {
    this.setState({ exibir: this.refs.dIdentificacao });
  };
  componentWillUpdate = () => {
    if (this.state.exibir !== null) {
      this.state.exibir.style.display = "none";
    }
  };
  componentDidUpdate = () => {
    this.state.exibir.style.display = "flex";
  };
  render() {
    let dados = [];
    let nome = "";
    if (this.props.dados) {
      this.props.dados.map((dado) => (dados = dado));
    }
    return (
      <div className="CadastroClientes">
        <form>
          {/* onSubmit={this.handleSubmit} */}
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
              <label>
                CPF*
                <input
                  type="text"
                  value={dados.cpf}
                  //   onChange={this.handleChange}
                />
              </label>
              <label>
                Nome Completo*
                <input
                  type="text"
                  value={dados.nome}
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
              </label>
            </div>
          </ul>
          {/* <input type="submit" value="Enviar" /> */}
        </form>
      </div>
    );
  }
}
