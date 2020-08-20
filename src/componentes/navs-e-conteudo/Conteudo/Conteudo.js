import React, { Component } from 'react';
import Styles from './Styles.css'
import PesquisaInss from './PesquisaInss/PesquisaInss'
import SimulacaoProposta from './SimulacaoProposta/SimulacaoProposta'

class Conteudo extends Component {
    constructor(props) {
        super(props);
        this.trocaComponente = this.trocaComponente.bind(this);
        this.state = {
            Componente: <PesquisaInss dados={this.props.dados} clickei={this.trocaComponente} />
        }
    }
    // constructor(props) {
    //     super(props);
    //     this.trocaComponente = this.trocaComponente.bind(this);        
    //   }
    

    trocaComponente = () => {
        this.setState({ Componente: <SimulacaoProposta dados={this.props.dados}/> });
        // alert("josiane")
    }
    render() {
        return (
            <div id="Conteudo"> {/* onClick={this.trocaComponente} */}
                {this.state.Componente}
                {/* <SimulacaoProposta dados={this.props.dados}/> */}
                {/* <PesquisaInss dados={this.props.dados}/> */}
            </div>
        );
    }
}

export default Conteudo;