import React, { Component} from 'react'
import BarraFuncionalidades from './componentes/barra-lateral/BarraFuncionalidades'

import './Styles.css'
import NavsEConteudo from './componentes/navs-e-conteudo/NavsEConteudo'
import BarraFuncionalidadesLess from './componentes/barraless/BarraFuncionalidadesLess'
import { Router, Switch, Route } from "react-router-dom";
import Conteudo from './componentes/navs-e-conteudo/Conteudo/Conteudo'
import Propostas from './componentes/navs-e-conteudo/Conteudo/Propostas/Propostas'
import Esteira from './componentes/navs-e-conteudo/Conteudo/Esteira/Esteira'
import Clientes from './componentes/navs-e-conteudo/Conteudo/Clientes/Clientes'
import Formalizacao from './componentes/navs-e-conteudo/Conteudo/Formalizacao/Formalizacao'
import Bordero from './componentes/navs-e-conteudo/Conteudo/Bordero/Bordero'
import Comissionamento from './componentes/navs-e-conteudo/Conteudo/Comissionamento/Comissionamento'
import Relatorios from './componentes/navs-e-conteudo/Conteudo/Relatorios/Relatorios'
import ZeraMenu from './Services/ZeraMenu'
import PesquisaInss from './componentes/navs-e-conteudo/Conteudo/PesquisaInss/PesquisaInss'
import SimulacaoProposta from './componentes/navs-e-conteudo/Conteudo/SimulacaoProposta/SimulacaoProposta'
import CadastroClientes from './componentes/navs-e-conteudo/Conteudo/Clientes/CadastroClientes/CadastroClientes'
import BarraLocationPage from './componentes/navs-e-conteudo/Conteudo/PesquisaInss/BarraLocationPage/BarraLocationPage'
import { Redirect } from 'react-router-dom';

import { createBrowserHistory } from "history"
const history = createBrowserHistory();




class App extends Component {
  state = {
    activeMenu: null,
    activeItem: null,
    menu: null,
    dadosClientes: null,
    tipoConteudo: null,
    beneficio: null
  }
  troca(menu, modulo) {
    switch (menu) {
      case "full":
        this.setState({ menu: <BarraFuncionalidadesLess trocar={this.troca.bind(this)} /> })
        break;
      case "less":
        this.setState({ menu: <BarraFuncionalidades trocar={this.troca.bind(this)} modulo={modulo} /> })
        break;

      default:
        this.setState({ menu: <BarraFuncionalidadesLess trocar={this.troca.bind(this)} modulo={modulo} /> })
        break;
    }
  }

  mudaDadosClientes = (dados) => {
    history.push("/pesquisa-inss")
    this.setState({ dadosClientes: dados })
  }

  setListaAtiva = (ul) => {
    // alert("funcao")
    // console.log(ul, li)
    if (this.state.activeMenu !== ul) {
      this.setState({ activeMenu: ul })
    }
    // if(this.state.activeItem !== li){
    //   this.setState({ activeItem: li[0] })
    // }
  }

  // componentDidUpdate() {
  //   // alert("atualizou")
  //   if (this.state.activeMenu) {
  //     if (!this.state.activeMenu.classList.contains("active")) {
  //       this.state.activeMenu.classList.add("active")
  //     }
  //     // if(!this.state.activeItem.classList.contains("active")){
  //     //   this.state.activeItem.classList.add("active")
  //     // }
  //   }
  // }

  render() {
    if (this.state.menu === null) {
      this.setState({
        menu:
          <BarraFuncionalidades
            trocar={this.troca.bind(this)}
            listaAtiva={this.state.listaAtiva}
          />
      })
    }
    return (
      <div id="App">
        <Router history={history}>
          {this.state.menu}
          <Switch>
            <NavsEConteudo {...this.props} tipoContent={this.state.tipoConteudo} mudaDadosClientes={this.mudaDadosClientes} > {/*changeTypeContent={this.changeTypeContent}*/}
              <Conteudo dados={this.state.dadosClientes} > {/*reloadConteudo={alterarConteudo} data={reloadConteudo} */}
                <Route exact path="/" component={ () => <ZeraMenu activeMenu={this.state.activeMenu} setListaAtiva={this.setListaAtiva} />}/>
                <Route path="/pesquisa-inss" component={() => (this.state.dadosClientes === null) ? <Redirect to="/" /> : <PesquisaInss dados={this.state.dadosClientes} >PESQUISA INSS</PesquisaInss>} />
                <Route path="/simulacao-proposta" component={() => (this.state.dadosClientes === null) ? <Redirect to="/" /> : <SimulacaoProposta dados={this.state.dadosClientes} >PESQUISA INSS</SimulacaoProposta>} />
                <Route path="/propostas" component={() => <Propostas setListaAtiva={this.setListaAtiva}>PROPOSTAS</Propostas>} /> {/*reloadConteudo={reloadConteudo} changeTypeContent={this.changeTypeContent}*/}
                <Route path="/clientes" component={() => <Clientes setListaAtiva={this.setListaAtiva}>CLIENTES</Clientes>} />
                <Route path="/CadastroClientes" component={() => <><BarraLocationPage>Cadastro de Clientes</BarraLocationPage><CadastroClientes setListaAtiva={this.setListaAtiva} dados={this.state.dadosClientes}
                  setListaAtiva={this.setListaAtiva} listaAtiva={this.state.listaAtiva} history={history}/></>} />
                <Route path="/esteira" component={() => <Esteira setListaAtiva={this.setListaAtiva}>ESTEIRA</Esteira>} />
                <Route path="/formalizacao" component={() => <Formalizacao setListaAtiva={this.setListaAtiva}>FORMALIZAÇÃO</Formalizacao>} />
                <Route path="/bordero" component={() => <Bordero setListaAtiva={this.setListaAtiva}>BORDERÔ</Bordero>} />
                <Route path="/comissionamento" component={() => <Comissionamento setListaAtiva={this.setListaAtiva}>COMISSIONAMENTO</Comissionamento>} />
                <Route path="/relatorios" component={() => <Relatorios setListaAtiva={this.setListaAtiva}>RELATÓRIOS</Relatorios>} />
              </Conteudo>
            </NavsEConteudo>
          </Switch>
        </Router>
        {/* <NavsEConteudo /> */}
      </div>
    );
  }
}

export default App;
