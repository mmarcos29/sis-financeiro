import React from 'react';
import image from '../../img/logo-revolutionless.png'
import Styles from "./Styles.css"
import BtnReduzirLess from './btnReduzirLess/BtnReduzirLess'

class BarraFuncionalidadesLess extends React.Component {
  state={
    visivel:"DASH",
  }
  oculta(id){
    document.getElementById(id).style.display = "none";
    alert("ocultado")
  }
  exibe(id){
    this.setState({visivel:id})     
    let visivel = document.getElementById(id);
    if(visivel.style.display === "block"){
      visivel.style.display = "none";
    }else{
      visivel.style.display = "block";
    }
    alert("exibiu")
  }
  limpaCampo(id){
    document.getElementById(id).value = "";
  }
  componentWillUpdate(){
    this.oculta(this.state.visivel)
  }
  states(menu, modulo){    
    this.props.trocar(menu, modulo)
  }
  render(){       
    return (
        <div id="BarraFuncionalidadesLess">
          <div id='CaixaAzulLess'>
            <img src={image}></img>
            <div id="azulLess"><div id="PesquisaFuncionalidadesLess"><input id="inputPesquisaFuncionalidadesLess" onBlur={() => this.limpaCampo("inputPesquisaFuncionalidadesLess")}/><span id="pesquisaItens" class="material-icons">search</span></div></div>
          </div>
          <ul>          
            <BtnReduzirLess trocaMenu={this.states.bind(this)} />
            <li>
              <a href="#" onClick={()=> this.states("less","DASH") }><i class="material-icons branco">home</i></a>              
              <ul id="DASH">
              </ul>
            </li>
            <li>
              <a href="#" onClick={()=> this.states("less","operacional") }><i class="material-icons branco">supervisor_account</i></a>              
              <ul id="operacional">            
                <li><a href="#"><i class="material-icons branco">check_box</i> PROPOSTAS</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> ESTEIRA</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> FORMALIZAÇÃO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> BORDERÔ</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> COMISSIONAMENTO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> RELATÓRIOS</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={()=> this.states("less","financeiro") }><i class="material-icons branco">attach_money</i></a>
              <ul id="financeiro">            
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
            <li>
              <a href="#" onClick={()=> this.states("less","telemarketing") }><i class="material-icons branco">support_agent</i></a>
              <ul id="telemarketing">            
                <li><a href="#"><i class="material-icons branco">check_box</i> RECEPTIVO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> CENTRAL CLIENTES</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> LIGAÇÕES</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> PÓS VENDA</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> ENFILEIRAMENTO</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> OPORTUNIDADES</a></li>
                <li><a href="#"><i class="material-icons branco">check_box</i> CAMPANHAS</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={()=> this.states("less","configuracoes") }><i class="material-icons branco">build</i></a>
              <ul id="configuracoes">            
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

export default BarraFuncionalidadesLess;