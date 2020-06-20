import React, { Component } from 'react';
import Styles from './Styles.css'

class NavPerfil extends Component {
    render() {
        return (
            <div id="NavPerfil">
                <a href="#" className="material-icons">account_circle</a>
                <span>THULIO - Agente de Crédito</span>
                <a href="#" className="material-icons exit">exit_to_app</a>
            </div>
        );
    }
}

export default NavPerfil;