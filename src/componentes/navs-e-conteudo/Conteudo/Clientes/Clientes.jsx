import React, { Component } from "react";
import "./Clientes.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "./IconeIncluir/IconeIncluir";
import CadastroClientes from "./CadastroClientes/CadastroClientes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Clientes extends Component {
  componentWillMount() {
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }
  }
  componentDidMount() {
    if (document.getElementById("operacional")) {
      if (
        !document.getElementById("operacional").classList.contains("active")
      ) {
        document.getElementById("operacional").classList.add("active")
        this.props.setListaAtiva(document.getElementById("operacional"));
      }
    }
    if(document.getElementsByClassName("li-clientes")[0]){
      document.getElementsByClassName("li-clientes")[0].classList.add("active")
  }
  }
  render() {
    return (
      <div id="Clientes">
        <BarraLocationPage incluir={<IconeIncluir />}>
          {[...this.props.children]}
        </BarraLocationPage>

        {/* <h2><b>Easy Clinic - alunos</b></h2> */}
                    {/* <NavFuncionalidade rota="aluno-cadastro" />                     */}
                    <table id="alunos">
                        <thead>
                            <tr>
                                <th className="espacamento"><b>ID Cliente</b></th>
                                <th className="espacamento"><b>NOME</b></th>
                                <th className="espacamento"><b>CPF</b></th>
                                <th className="espacamento"><b>-----</b></th>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>João marcos dos santos batista</td>
                            <td>07360473365</td>
                            <td>-----</td>
                          </tr>
                            {/* {this.state.Alunos.map(aluno =>
                                <tr id={aluno.index}>
                                    <td>{aluno.id}</td>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.clienteId}</td>
                                    <td id="acoes">
                                        <button className="btnEditar" onClick={this.atualizar}>Editar</button>
                                        <button className="btnCancelar" onClick={() => this.deletar(aluno.id)}>Excluir</button>
                                    </td>
                                </tr>    
                            )}
                            {console.log(this.state.Alunos)} */}
                            
                        </tbody>                        
                    </table>
      </div>
    );
  }
}
