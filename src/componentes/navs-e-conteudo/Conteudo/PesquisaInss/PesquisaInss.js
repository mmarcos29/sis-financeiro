import React, { Component } from 'react';
import Styles from './Styles.css'
import BarraCliente from './BarraCliente/BarraCliente'
import ResultadoText from './ResultadoText/ResultadoText'
import Beneficio from './Beneficio/Beneficio'

class PesquisaInss extends Component {
    render() {
        return (
            <div id="PesquisaInss">
                <BarraCliente />
                <ResultadoText />
                <div id="Beneficios">
                    <Beneficio />
                    <Beneficio />
                </div>

            </div>
        );
    }
}

export default PesquisaInss;