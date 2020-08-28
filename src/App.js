import React from 'react'
import BarraFuncionalidades from './componentes/barra-lateral/BarraFuncionalidades'

import './Styles.css'
import NavsEConteudo from './componentes/navs-e-conteudo/NavsEConteudo'
import BarraFuncionalidadesLess from './componentes/barraless/BarraFuncionalidadesLess'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Conteudo from './componentes/navs-e-conteudo/Conteudo/Conteudo'
import Propostas from './componentes/navs-e-conteudo/Conteudo/Propostas/Propostas'
import Clientes from './componentes/navs-e-conteudo/Conteudo/Clientes/Clientes'




class App extends React.Component {
  state = {
    menu: <BarraFuncionalidades trocar={this.troca.bind(this)} />
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
  render() {
    return (
      <div id="App">
        <BrowserRouter>
        {this.state.menu}
          <Switch>
            
            <Route exact path="/" component={NavsEConteudo} />
            <Route path="/propostas" component={() => <NavsEConteudo ><Conteudo><Propostas >PROPOSTAS</Propostas></Conteudo></NavsEConteudo>} />
            <Route path="/clientes" component={() => <NavsEConteudo ><Conteudo><Propostas >CLIENTES</Propostas></Conteudo></NavsEConteudo>} />
            <Route path="/esteira" component={() => <NavsEConteudo ><Conteudo><Propostas >ESTEIRA</Propostas></Conteudo></NavsEConteudo>} />
            <Route path="/formalizacao" component={() => <NavsEConteudo ><Conteudo><Propostas >FORMALIZAÇÃO</Propostas></Conteudo></NavsEConteudo>} />
            <Route path="/bordero" component={() => <NavsEConteudo ><Conteudo><Propostas >BORDERÔ</Propostas></Conteudo></NavsEConteudo>} />
            <Route path="/comissionamento" component={() => <NavsEConteudo ><Conteudo><Propostas >COMISSIONAMENTO</Propostas></Conteudo></NavsEConteudo>} />
            <Route path="/relatorios" component={() => <NavsEConteudo ><Conteudo><Propostas >RELATÓRIOS</Propostas></Conteudo></NavsEConteudo>} />
          </Switch>
        </BrowserRouter>
        {/* <NavsEConteudo /> */}
      </div>
    );
  }
}

export default App;
