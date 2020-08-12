import React, { Component } from 'react';
import Styles from './Styles.css'

class Beneficio extends Component {
    render() {
        return (
            this.props.dados.map(
                cliente =>
                    <div id="Beneficio">
                        <div id="Nome">{cliente.nome}</div>
                        <div id="Nb">NB: {cliente.nb}</div>
                        <div className="Item">
                            <div className="Titulo">Espécie</div>
                            <div className="Detalhe">{cliente.esp} - Pensão por Morte</div>
                        </div>
                        <div className="Item">
                            <div className="Titulo">Situação</div>
                            <div className="Detalhe">ATIVO</div>
                        </div>
                        <div className="Item">
                            <div className="Titulo">DIB</div>
                            <div className="Detalhe">{cliente.dib}</div>
                        </div>
                        <div className="Item">
                            <div className="Titulo">Idade</div>
                            <div className="Detalhe">{cliente.dtNascimento}</div> {/*89 Anos */}
                        </div>

                    </div>
            )
        );
    }
}

export default Beneficio;