import React, { Component, useState } from 'react'
import BarraFuncionalidades from './componentes/barra-lateral/BarraFuncionalidades'

import './Styles.css'
import NavsEConteudo from './componentes/navs-e-conteudo/NavsEConteudo'
import BarraFuncionalidadesLess from './componentes/barraless/BarraFuncionalidadesLess'
import { Router, Switch, Route } from "react-router-dom";
import Conteudo from './componentes/navs-e-conteudo/Conteudo/Conteudo'
import Propostas from './componentes/navs-e-conteudo/Conteudo/Propostas/Propostas'
import Clientes from './componentes/navs-e-conteudo/Conteudo/Clientes/Clientes'
import PesquisaInss from './componentes/navs-e-conteudo/Conteudo/PesquisaInss/PesquisaInss'
import SimulacaoProposta from './componentes/navs-e-conteudo/Conteudo/SimulacaoProposta/SimulacaoProposta'
import { Redirect } from 'react-router-dom';

import { createBrowserHistory } from "history"
const history = createBrowserHistory();




class App extends Component {
  state = {
    menu: <BarraFuncionalidades trocar={this.troca.bind(this)} />,
    dadosClientes: null,
    tipoConteudo: null
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
  render() {

    return (
      <div id="App">
        <Router history={history}>
          {this.state.menu}
          <Switch>
            <NavsEConteudo {...this.props} tipoContent={this.state.tipoConteudo} mudaDadosClientes={this.mudaDadosClientes} > {/*changeTypeContent={this.changeTypeContent}*/}
              <Conteudo dados={this.state.dadosClientes} > {/*reloadConteudo={alterarConteudo} data={reloadConteudo} */}                
                <Route path="/pesquisa-inss" component={() => (this.state.dadosClientes === null) ? <Redirect to="/" /> : <PesquisaInss dados={this.state.dadosClientes} >PESQUISA INSS</PesquisaInss>} />
                <Route path="/simulacao-proposta" component={() => (this.state.dadosClientes === null) ? <Redirect to="/" /> : <SimulacaoProposta dados={this.state.dadosClientes} >PESQUISA INSS</SimulacaoProposta>} />
                <Route path="/propostas" component={() => <Propostas >PROPOSTAS</Propostas>} /> {/*reloadConteudo={reloadConteudo} changeTypeContent={this.changeTypeContent}*/}
                <Route path="/clientes" component={() => <Clientes >CLIENTES</Clientes>} />
                <Route path="/esteira" component={() => <Propostas >ESTEIRA</Propostas>} />
                <Route path="/formalizacao" component={() => <Propostas >FORMALIZAÇÃO</Propostas>} />
                <Route path="/bordero" component={() => <Propostas >BORDERÔ</Propostas>} />
                <Route path="/comissionamento" component={() => <Propostas >COMISSIONAMENTO</Propostas>} />
                <Route path="/relatorios" component={() => <Propostas >RELATÓRIOS</Propostas>} />
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
