import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Styles from './Styles.css'
import ExibirDetahes from './ExibirDetahes/ExibirDetahes'

var hoje = new Date();

class Beneficio extends Component {
    state = {
        Component: null
    }
    exibirDetalhes = () => {

        this.setState({ Component: <ExibirDetahes /> })

    }
    ocultaDetalhes = () => {

        this.setState({ Component: null })

    }

    render() {
        return (
            // <div style={{color:"red"}}>{console.log(this.props.dados)}dghjhgjjhd</div>
            
            <Link to="/simulacao-proposta" id="Beneficio" onMouseOver={this.exibirDetalhes} onMouseLeave={this.ocultaDetalhes}  >     {/*onClick={() =>  this.props.clickei() } */}
                {this.state.Component}
                {/*                          */}
                <div id="Nome">{this.props.dados.nome}</div>
                <div id="Nb">NB: {this.props.dados.nb}</div>
                <div className="Item">
                    <div className="Titulo">Espécie</div>
                    <div className="Detalhe">{this.props.dados.especie} - Pensão por Morte</div>
                </div>
                <div className="Item">
                    <div className="Titulo">Situação</div>
                    <div className="Detalhe">ATIVO</div>
                </div>
                <div className="Item">
                    <div className="Titulo">DIB</div>
                    <div className="Detalhe">{this.props.dados.dib}</div>
                </div>
                <div className="Item">
                    <div className="Titulo">Idade</div>{/* hoje.getFullYear() - 2019 */}
                    <div className="Detalhe">{(hoje.getFullYear()) - (this.props.dados.dtNascimento.replace("/", "").replace("/", "").substr(4, 4))} ANOS</div>
                    {/* <div className="Detalhe">{( hoje.getFullYear() ) - ( cliente.dtNascimento.substr(0, 4) )} ANOS</div>  */}
                </div>
            </Link>
        );
    }
}

export default Beneficio;