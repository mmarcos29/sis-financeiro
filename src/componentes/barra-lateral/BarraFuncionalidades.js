import React from 'react';
import image from '../../img/logo-revolution.png'
import Styles from "./Styles.css"
import BtnReduzir from './btnReduzir/BtnReduzir'

class BarraFuncionalidades extends React.Component {
  state={
    visivel:"DASH",
  }
  oculta(id){    
      this.state.visivel.style.transition = "200ms"
      this.state.visivel.style.opacity = 0
      setTimeout(()=>{
        this.state.visivel.style.display = 'none'
      },300)      
  }
  exibe(id){
    if(this.state.visivel != id){
      if(this.state.visivel != "DASH"){
        this.oculta(this.state.visivel)
      }else{
        this.setState({visivel:id})
      }            
      setTimeout(()=>{
        this.setState({visivel:id})
      },350)
    }else{
      if(this.state.visivel.style.display === 'none'){
        this.state.visivel.style.display = 'block'
        this.state.visivel.style.transition = "200ms"
        setTimeout(
          ()=> {this.state.visivel.style.opacity = 1},300
        )                        
      }else{
        this.state.visivel.style.transition = "352ms"
        this.state.visivel.style.opacity = 0
        setTimeout(()=>{
          this.state.visivel.style.display = 'none'
        },352)
      }      
    }
  }
  componentDidUpdate(){
    this.state.visivel.style.display = 'block'
    this.state.visivel.style.transition = "200ms"
    setTimeout(
      ()=> {this.state.visivel.style.opacity = 1},300
    )
  } 
  limpaCampo(id){
    document.getElementById(id).value = "";
  }
  states(id){    
    this.props.trocar(id)
  }
  componentDidMount(){  
    if(this.props.modulo != null){
      if(this.props.modulo === "operacional"){
        this.setState({visivel:this.refs.operacional})
      }else if(this.props.modulo === "financeiro"){
        this.setState({visivel:this.refs.financeiro})
      }else if(this.props.modulo === "telemarketing"){
        this.setState({visivel:this.refs.telemarketing})
      }else if(this.props.modulo === "configuracoes"){
        this.setState({visivel:this.refs.configuracoes})
      }
    } 
  }
  render(){          
    return (
        <div id="BarraFuncionalidades">
          <div id='CaixaAzul'>
            <img src={image}></img>
            <div id="azul"><div id="PesquisaFuncionalidades"><input id="inputPesquisaFuncionalidades" onBlur={() => this.limpaCampo("inputPesquisaFuncionalidades")}/><span id="pesquisaItens" class="material-icons">search</span></div></div>
          </div>
          <ul>          
            <BtnReduzir trocaMenu={this.states.bind(this)} />
            <li onClick={()=> this.exibe(this.refs.DASH)}>
              <a href="#"><i class="material-icons branco">home</i> DESHEBORD</a>              
              <ul id="DASH" ref="DASH">
              </ul>
            </li>
            <li onClick={()=> this.exibe(this.refs.operacional) }>
              <a href="#"><i class="material-icons branco">supervisor_account</i> OPERACIONAL</a>              
              <ul id="operacional" ref="operacional">            
                <li><a href="#"><i class="material-icons branco">check_box</i> PROPOSTAS</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> ESTEIRA</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> FORMALIZAÇÃO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> BORDERÔ</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> COMISSIONAMENTO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> RELATÓRIOS</a></li>
              </ul>
            </li>
            <li onClick={()=> this.exibe(this.refs.financeiro) }>
              <a href="#"><i class="material-icons branco">attach_money</i> FINANCEIRO</a>
              <ul id="financeiro" ref="financeiro">            
                <li><a href="#"><i class="material-icons branco">check_box</i> BALANÇO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> RECEBER COMISSÕES</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> PAGAR COMISSÕES</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> BONUS/DESCONTOS</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> RECEITAS</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> DESPESAS</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> CONTA GERENCIAL</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> Grupo de Comissões</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> RELATÓRIOS</a></li>
              </ul>
            </li>
            <li onClick={()=> this.exibe(this.refs.telemarketing) }>
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
            <li onClick={()=> this.exibe(this.refs.configuracoes) }>
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