import React, { Component } from 'react';
import Styles from './Styles.css'
import BarraCliente from './BarraCliente/BarraCliente'
import ResultadoText from './ResultadoText/ResultadoText'
import Beneficio from './Beneficio/Beneficio'
import BarraLocationPage from '../../Conteudo/PesquisaInss/BarraLocationPage/BarraLocationPage';
import { Link } from "react-router-dom";



class PesquisaInss extends Component {
    render() {
        // this.props.changeTypeContent("PesquisaInss")
        return (
            <div id="PesquisaInss">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
                <BarraCliente dados={this.props.dados} />
                <ResultadoText dados={this.props.dados} />
                {/* <div > */}
                    <Link id="Beneficios" to="/simulacao-proposta">
                        <Beneficio dados={this.props.dados} /> {/*clickei={this.props.clickei} */}
                    </Link>
                {/* </div> */}

            </div>
        );
    }
}

export default PesquisaInss;