import React, { Component } from 'react';
import Styles from './Styles.css'
import MascaraCpf from "../../../../mascaraCpf"

class ResultadoText extends Component {
    render() {
        return (
            <div id="ResultadoText">                
                <div>Encontramos <span className="cpfText">{this.props.dados.length}</span> benefícios para o CPF:</div>
                <div className="cpfText">
                    {this.props.dados.map(
                        cliente => MascaraCpf(cliente.cpf)
                    )}
                </div>
                <p>para visualizar mais detalhes clique em um deles</p>
            </div>
        );
    }
}

export default ResultadoText;