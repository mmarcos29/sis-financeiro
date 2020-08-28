import React, { Component } from 'react'
import './Clientes.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Clientes extends Component {
    render() {
        return (
            <div id="Clientes">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
