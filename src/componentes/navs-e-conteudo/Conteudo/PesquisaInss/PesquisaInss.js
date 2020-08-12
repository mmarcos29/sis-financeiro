import React, { Component } from 'react';
import Styles from './Styles.css'
import BarraCliente from './BarraCliente/BarraCliente'
import ResultadoText from './ResultadoText/ResultadoText'
import Beneficio from './Beneficio/Beneficio'



class PesquisaInss extends Component {    
    render() {
        
        return (
            <div id="PesquisaInss">                
                <BarraCliente dados={this.props.dados}/>
                <ResultadoText dados={this.props.dados} />
                <div id="Beneficios">
                    <Beneficio dados={this.props.dados}/>
                </div>

            </div>
        );
    }
}

export default PesquisaInss;