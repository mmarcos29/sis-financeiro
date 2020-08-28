import React, { Component } from 'react'
import './Esteira.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Esteira extends Component {
    render() {
        return (
            <div id="Esteira">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
