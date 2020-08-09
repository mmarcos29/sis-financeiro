import React, { Component } from 'react';
import Styles from './Styles.css'

class Beneficio extends Component {
    render() {
        return (
            <div id="Beneficio">
                <div id="Nome">ADONIAS INACIO DA SILVA</div>
                <div id="Nb">NB:  12345678910</div>
                <div className="Item">
                    <div className="Titulo">Espécie</div>
                    <div className="Detalhe">21 - Pensão por Morte</div>
                </div>
                <div className="Item">
                    <div className="Titulo">Situação</div>
                    <div className="Detalhe">ATIVO</div>
                </div>
                <div className="Item">
                    <div className="Titulo">DIB</div>
                    <div className="Detalhe">07/05/2013</div>
                </div>
                <div className="Item">
                    <div className="Titulo">Idade</div>
                    <div className="Detalhe">89 Anos</div>
                </div>

            </div>
        );
    }
}

export default Beneficio;