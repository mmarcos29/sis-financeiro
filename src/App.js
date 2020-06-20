import React from 'react'
import BarraFuncionalidades from './componentes/barra-lateral/BarraFuncionalidades'

import Styles from './Styles.css'
import NavsEConteudo from './componentes/navs-e-conteudo/NavsEConteudo'
import BarraFuncionalidadesLess from './componentes/barraless/BarraFuncionalidadesLess'




class App extends React.Component{
  state={
    menu:<BarraFuncionalidades trocar={this.troca.bind(this)}/>
  }
  troca(menu, modulo){    
    switch (menu) {
      case "full":
        this.setState({menu:<BarraFuncionalidadesLess trocar={this.troca.bind(this)} />})
        break;
      case "less":
        this.setState({menu:<BarraFuncionalidades trocar={this.troca.bind(this)} modulo={modulo} />})
        break;
    
      default:
        this.setState({menu:<BarraFuncionalidadesLess trocar={this.troca.bind(this)} modulo={modulo}/>})
        break;
    }
  }
  render(){
    return (
      <div id="App">
        {this.state.menu}
        <NavsEConteudo />
      </div>
    );
  }
}

export default App;
