import React, { Component } from 'react';
import Styles from './Styles.css'

class ResultadoText extends Component {
    render() {
        return (
            <div id="ResultadoText">
                <div>Encontramos 1 benefícios para o CPF:</div>
                <div id="cpfText">
                    {this.props.dados.map(
                        cliente => cliente.cpf
                    )}
                </div>
                {this.props.dados.map(
                    cliente => console.log(cliente)
                )}
                <p>para visualizar mais detalhes clique em um deles</p>
            </div>
        );
    }
}

export default ResultadoText;