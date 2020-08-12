import React, { Component } from 'react'
import Styles from './Styles.css'
import NavIcones from './NavIcones/NavIcones'
import NavPesquisa from './NavPesquisa/NavPesquisa'

class SegundaNav extends Component {
    render() {
        return (
            <div id="SegundaNav">
                <NavPesquisa alterarPesquisa={this.props.alterarPesquisa}/>
                <NavIcones />
            </div>
        )
    }
}

export default SegundaNav