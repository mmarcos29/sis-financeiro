import React, { Component } from 'react'
import BarraFuncionalidades from './componentes/barra-lateral/BarraFuncionalidades'

import './Styles.css'
import NavsEConteudo from './componentes/navs-e-conteudo/NavsEConteudo'
import BarraFuncionalidadesLess from './componentes/barraless/BarraFuncionalidadesLess'
import { HashRouter, Switch, Route } from "react-router-dom";
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

import { createHashHistory } from "history"
import api from './Services/api'
import DetalheClientes from './componentes/navs-e-conteudo/Conteudo/Clientes/DetalheClientes/DetalheClientes'
import Login from './componentes/Login/Login'
import CadastroPropostas from './componentes/navs-e-conteudo/Conteudo/Propostas/CadastroPropostas/CadastroPropostas'
import DetalheProposta from './componentes/navs-e-conteudo/Conteudo/Propostas/DetalheProposta/DetalheProposta'
const history = createHashHistory();




class App extends Component {
  state = {
    logued: false,
    activeMenu: null,
    activeItem: null,
    menu: null,
    dadosClientes: null,
    tipoConteudo: null,
    beneficio: null,
    clientes: null,
    propostas: null,
    nomeClienteDetalhe: "",
    nomePropostaDetalhe: "",
    propostas: []
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
    if (this.state.activeMenu !== ul) {
      this.setState({ activeMenu: ul })
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('@username')
    if (user) {
      this.setState({ logued: true })
    }
  }
  componentWillMount() {    
    this.getPropostas()
    this.getClientes()
  }

  mudaNomeClienteDetalhe = (nome) => {
    if (this.state.nomeClienteDetalhe !== nome) {
      this.setState({ nomeClienteDetalhe: nome })
    }
  }
  mudaNomePropostaDetalhe = (nome) => {
    if (this.state.nomePropostaDetalhe !== nome) {
      this.setState({ nomePropostaDetalhe: nome })
    }
  }

  enviarProposta = (proposta) => {
    let propostaPronta = proposta
    if(propostaPronta.clienteId.id){
      propostaPronta.formaContato = propostaPronta.formaContato.value
      propostaPronta.corretor = propostaPronta.corretor.value
      propostaPronta.clienteId = propostaPronta.clienteId.id
      propostaPronta.tipo = propostaPronta.tipo.value
      propostaPronta.banco = propostaPronta.banco.value
      propostaPronta.convenio = propostaPronta.convenio.value
      propostaPronta.tabela = propostaPronta.tabela.value
      api.post("Propostas", propostaPronta).then(response => {
        this.getPropostas()
        history.push("/propostas")
    })
    }else{
      alert("enviando proposta", (console.log(propostaPronta)))
    }
  }
  getPropostas = () =>{
    api.get("Propostas").then( response =>{
      // console.log(response.data)
      this.setState({propostas: response.data})
    })
  }
  getClientes = () =>{
    api.get("Clientes").then( response =>{
      // console.log(response.data)
      this.setState({clientes: response.data})
    })
  }

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
    if (this.state.logued) {
      return (
        <div id="App">
          <HashRouter history={history}>
            {/* <Route path="/login" component={() => <><BarraLocationPage>{this.state.nomeClienteDetalhe}</BarraLocationPage></>} /> */}
            {this.state.menu}
            <Switch>
              <NavsEConteudo {...this.props} tipoContent={this.state.tipoConteudo} mudaDadosClientes={this.mudaDadosClientes} > {/*changeTypeContent={this.changeTypeContent}*/}
                <Conteudo dados={this.state.dadosClientes} > {/*reloadConteudo={alterarConteudo} data={reloadConteudo} */}
                  <Route exact path="/" component={() => <ZeraMenu activeMenu={this.state.activeMenu} setListaAtiva={this.setListaAtiva} />} />
                  <Route path="/pesquisa-inss" component={() => (this.state.dadosClientes === null) ? <Redirect to="/" /> : <PesquisaInss dados={this.state.dadosClientes} >PESQUISA INSS</PesquisaInss>} />
                  <Route path="/simulacao-proposta" component={() => (this.state.dadosClientes === null) ? <Redirect to="/" /> : <SimulacaoProposta dados={this.state.dadosClientes} >PESQUISA INSS</SimulacaoProposta>} />
                  <Route path="/propostas" component={() => <Propostas setListaAtiva={this.setListaAtiva} history={history} propostas={this.state.propostas} clientes={this.state.clientes}>PROPOSTAS</Propostas>} /> {/*reloadConteudo={reloadConteudo} changeTypeContent={this.changeTypeContent}*/}
                  <Route path="/CadastroPropostas" component={() => <><BarraLocationPage>Cadastro de Proposta</BarraLocationPage> <CadastroPropostas clientes={this.state.clientes} setListaAtiva={this.setListaAtiva} history={history} enviarProposta={this.enviarProposta} /> </>} />
                  <Route path="/clientes" component={() => <Clientes setListaAtiva={this.setListaAtiva} history={history} clientes={this.state.clientes}>CLIENTES</Clientes>} />
                  <Route path="/CadastroClientes" component={() => <><BarraLocationPage>Cadastro de Clientes</BarraLocationPage><CadastroClientes setListaAtiva={this.setListaAtiva} dados={this.state.dadosClientes}
                    setListaAtiva={this.setListaAtiva} listaAtiva={this.state.listaAtiva} history={history} /></>} />
                  <Route path="/DetalheClientes" component={() => <><BarraLocationPage>{this.state.nomeClienteDetalhe}</BarraLocationPage><DetalheClientes mudaNomeClienteDetalhe={this.mudaNomeClienteDetalhe} clientes={this.state.clientes} setListaAtiva={this.setListaAtiva} history={history} /> </>} />
                  <Route path="/DetalhePropostas" component={() => <><BarraLocationPage>{this.state.nomePropostaDetalhe}</BarraLocationPage><DetalheProposta mudaNomePropostaDetalhe={this.mudaNomePropostaDetalhe} propostas={this.state.propostas} setListaAtiva={this.setListaAtiva} history={history} clientes={this.state.clientes} /> </>} />
                  <Route path="/esteira" component={() => <Esteira setListaAtiva={this.setListaAtiva}>ESTEIRA</Esteira>} />
                  <Route path="/formalizacao" component={() => <Formalizacao setListaAtiva={this.setListaAtiva}>FORMALIZAÇÃO</Formalizacao>} />
                  <Route path="/bordero" component={() => <Bordero setListaAtiva={this.setListaAtiva}>BORDERÔ</Bordero>} />
                  <Route path="/comissionamento" component={() => <Comissionamento setListaAtiva={this.setListaAtiva}>COMISSIONAMENTO</Comissionamento>} />
                  <Route path="/relatorios" component={() => <Relatorios setListaAtiva={this.setListaAtiva}>RELATÓRIOS</Relatorios>} />
                </Conteudo>
              </NavsEConteudo>
            </Switch>
          </HashRouter>
          {/* <NavsEConteudo /> */}
        </div>
      );
    } else {
      return (
        <Login />
      );
    }
  }
}

export default App;
