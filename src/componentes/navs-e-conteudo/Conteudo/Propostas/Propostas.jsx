import React, { Component } from 'react'
import './Propostas.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Propostas extends Component {
    render() {
        return (
            <div id="Propostas">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
