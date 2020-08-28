import React, { Component } from 'react';
import Styles from './Styles.css'
import PesquisaInss from './PesquisaInss/PesquisaInss'
import SimulacaoProposta from './SimulacaoProposta/SimulacaoProposta'

class Conteudo extends Component {
    constructor(props) {
        super(props);
        this.trocaComponente = this.trocaComponente.bind(this);
        if (this.props.dados) {
            this.state = {
                Componente: <PesquisaInss dados={this.props.dados} clickei={this.trocaComponente} >PESQUISA INSS</PesquisaInss>
            }
        } else {
            this.state = {
                Componente: this.props.children
            }
        }
    }

    // <PesquisaInss dados={this.props.dados} clickei={this.trocaComponente} >PESQUISA INSS</PesquisaInss>
    trocaComponente = () => {
        this.setState({ Componente: <SimulacaoProposta dados={this.props.dados} /> });
    }

    render() {
        return (
            <div id="Conteudo">
                {this.state.Componente}
            </div>
        );
    }
}

export default Conteudo;