import React, { Component } from 'react'
import './Formalizacao.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Formalizacao extends Component {
    render() {
        return (
            <div id="Formalizacao">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
