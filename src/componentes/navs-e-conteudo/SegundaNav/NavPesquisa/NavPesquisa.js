import React, { Component } from 'react';
import Styles from './Styles.css'

class NavPesquisa extends Component {
    render() {
        return (
            <div id="NavPesquisa">
                <button>CONSULTAR</button>
                <input placeholder="DIGITE NOME, CPF, NB OU MATÍCULA"></input>
            </div>
        );
    }
}

export default NavPesquisa;