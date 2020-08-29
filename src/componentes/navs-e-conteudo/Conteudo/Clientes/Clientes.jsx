import React, { Component } from "react";
import "./Clientes.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";
import IconeIncluir from "./IconeIncluir/IconeIncluir";
import CadastroClientes from './CadastroClientes/CadastroClientes'
import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class Clientes extends Component {
  render() {
    return (
      <div id="Clientes">
        <BrowserRouter>
          <Switch>
            <Route exact path="/clientes" component={() => (
                <BarraLocationPage incluir={<IconeIncluir />}>
                  {[...this.props.children]}
                </BarraLocationPage>
              )}
            />
            <Route path="/CadastroClientes" component={()=> <div><BarraLocationPage>Cadastro de Clientes</BarraLocationPage><CadastroClientes/></div>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
