import React, { Component } from 'react';
import Styles from './Styles.css'
import BarraCliente from './BarraCliente/BarraCliente'
import ResultadoText from './ResultadoText/ResultadoText'
import Beneficio from './Beneficio/Beneficio'
import BarraLocationPage from '../../Conteudo/PesquisaInss/BarraLocationPage/BarraLocationPage';
import { Link } from "react-router-dom";



class PesquisaInss extends Component {
    render() {
        return (
            <div id="PesquisaInss">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
                <BarraCliente dados={this.props.dados} />
                <ResultadoText dados={this.props.dados} />
                <div id="Beneficios">
                    {this.props.dados.map(teste =>
                        <Beneficio dados={teste}/>
                    )}
                </div>
            </div>
        );
    }
}
export default PesquisaInss;