import React, { Component } from 'react';
import Styles from './Styles.css'

class NavPesquisa extends Component {
    render() {

        return (
            <div id="NavPesquisa">                
                <button onClick={() => this.props.alterarPesquisa(document.getElementById("valorPesquisa").value)}>CONSULTAR</button>
                <input id="valorPesquisa" placeholder="DIGITE NOME, CPF, NB OU MATÍCULA"></input>                
            </div>
        );
    }
}

export default NavPesquisa;