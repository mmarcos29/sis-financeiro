import React, { Component } from 'react';
import Styles from './Styles.css'

class BarraCliente extends Component {
    render() {
        return (
            <div id="BarraCliente">
                <div>
                    {this.props.dados.map(
                        cliente => (cliente.nome)
                    )}
                </div>
            </div>
        );
    }
}

export default BarraCliente;