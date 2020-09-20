import React from 'react';
import image from '../../img/logo-revolution.png'
import Styles from "./Styles.css"
import BtnReduzir from './btnReduzir/BtnReduzir'
import { Link } from "react-router-dom";

class BarraFuncionalidades extends React.Component {
  state = {
    visivel: "DASH",
  }
  oculta(id) {
    this.state.visivel.style.transition = "opacity 200ms"
    this.state.visivel.style.opacity = 0
    setTimeout(() => {
      this.state.visivel.style.display = 'none'
    }, 1)
  }
  exibe(id) {
    if (this.state.visivel != id) {
      if (this.state.visivel != "DASH") {
        if(this.state.visivel.classList.contains("active")){
          // nao fez nada pq essa sessão está aberta pelo usuário
        }else{
          this.oculta(this.state.visivel)
        }
      }
      setTimeout(() => {
        this.setState({ visivel: id })
      }, 1)
    } else {
      setTimeout(() => {
        if (id.classList.contains("active")) {
          //make nothing here
          //becouse this id was the select by the costumer
        } else {
          if (this.state.visivel.style.display === 'none') {
            this.state.visivel.style.display = 'block'
            this.state.visivel.style.transition = "200ms"
            setTimeout(
              () => { this.state.visivel.style.opacity = 1 }, 300
            )
          } else {
            this.state.visivel.style.transition = "352ms"
            this.state.visivel.style.opacity = 0
            setTimeout(() => {
              this.state.visivel.style.display = 'none'
            }, 352)
          }
        }
      }, 0)
    }
  }
  componentDidUpdate() {
    this.state.visivel.style.display = 'block'
    this.state.visivel.style.transition = "200ms"
    setTimeout(
      () => { this.state.visivel.style.opacity = 1 }, 300
    )
  }
  limpaCampo(id) {
    document.getElementById(id).value = "";
  }
  states(id) {
    this.props.trocar(id)
  }
  // componentDidMount() {
  //   if (this.props.listaAtiva) {
  //     // document.getElementById(`${this.props.listaAtiva}`).style.display = "block"
  //     this.setState({ visivel: document.getElementById(`${this.props.listaAtiva}`) })
  //   }
  //   if (this.props.modulo != null) {
  //     if (this.props.modulo === "operacional") {
  //       this.setState({ visivel: this.refs.operacional })
  //     } else if (this.props.modulo === "financeiro") {
  //       this.setState({ visivel: this.refs.financeiro })
  //     } else if (this.props.modulo === "telemarketing") {
  //       this.setState({ visivel: this.refs.telemarketing })
  //     } else if (this.props.modulo === "configuracoes") {
  //       this.setState({ visivel: this.refs.configuracoes })
  //     }
  //   }
  // }

  render() {
    // alert("barra lateral renderizada")
    return (
      <div className="BarraFuncionalidades" id="BarraFuncionalidades">
        <div id='CaixaAzul'>
          <Link to="/">
            <img src={image}></img>
          </Link>
          <div id="azul"><div id="PesquisaFuncionalidades"><input id="inputPesquisaFuncionalidades" onBlur={() => this.limpaCampo("inputPesquisaFuncionalidades")} /><span id="pesquisaItens" class="material-icons">search</span></div></div>
        </div>
        <ul>
          <BtnReduzir trocaMenu={this.states.bind(this)} />
          <li onClick={() => this.exibe(this.refs.DASH)}>
            <Link to="/"><i class="material-icons branco">home</i> DESHEBORD</Link>
            <ul id="DASH" ref="DASH">
            </ul>
          </li>
          <li onClick={() => this.exibe(this.refs.operacional)}>
            <i class="material-icons branco">supervisor_account</i> OPERACIONAL
            <ul className="ul-operacional" id="operacional" ref="operacional">
              <li className="li-propostas"><Link to="/propostas"><i class="material-icons branco">check_box</i> PROPOSTAS</Link></li>
              <li className="li-clientes"><Link to="/clientes"><i class="material-icons branco">check_box</i> CLIENTES</Link></li>
              <li className="li-esteira"><Link to="/esteira"><i class="material-icons branco">check_box</i> ESTEIRA</Link></li>
              <li className="li-formalizacao"><Link to="/formalizacao"><i class="material-icons branco">check_box</i> FORMALIZACAO</Link></li>
              <li className="li-bordero"><Link to="/bordero"><i class="material-icons branco">check_box</i>BORDERÔ</Link></li>
              <li className="li-comissionamento"><Link to="/comissionamento"><i class="material-icons branco">check_box</i>COMISSIONAMENTO</Link></li>
              <li className="li-relatorios"><Link to="/relatorios"><i class="material-icons branco">check_box</i>RELATÓRIOS</Link></li>
            </ul>
          </li>
          <li onClick={() => this.exibe(this.refs.financeiro)}>
            <a href="#"><i class="material-icons branco">attach_money</i> FINANCEIRO</a>
            <ul id="financeiro" ref="financeiro">
              <li><a href="#"><i class="material-icons branco">check_box</i> BALANÇO</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> RECEBER COMISSÕES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> PAGAR COMISSÕES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> BONUS/DESCONTOS</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> RECEITAS</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> DESPESAS</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> CONTA GERENCIAL</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> GRUPO DE COMISSÕES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> RELATÓRIOS</a></li>
            </ul>
          </li>
          <li onClick={() => this.exibe(this.refs.telemarketing)}>
            <a href="#"><i class="material-icons branco">support_agent</i> TELEMARKETING</a>
            <ul id="telemarketing" ref="telemarketing">
              <li><a href="#"><i class="material-icons branco">check_box</i> RECEPTIVO</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> CENTRAL CLIENTES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> LIGAÇÕES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> PÓS VENDA</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> ENFILEIRAMENTO</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> OPORTUNIDADES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> CAMPANHAS</a></li>
            </ul>
          </li>
          <li onClick={() => this.exibe(this.refs.configuracoes)}>
            <a href="#"><i class="material-icons branco">build</i> CONFIGURAÇÕES</a>
            <ul id="configuracoes" ref="configuracoes">
              <li><a href="#"><i class="material-icons branco">check_box</i> MEU PERFIL</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> MINHA CONTA</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> PAINEL DA EMPRESA</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> RESTRIÇÕES</a></li>
              <li><a href="#"><i class="material-icons branco">check_box</i> USUÁRIOS</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

};

export default BarraFuncionalidades;