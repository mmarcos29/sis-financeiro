import React, { Component } from 'react';
import Styles from './Styles.css'

class NavPerfil extends Component {
    logout = () => {
        localStorage.removeItem('@username');
        window.location.reload();
    }
    render() {
        return (
            <div id="NavPerfil">
                <a href="#" className="material-icons">account_circle</a>
                <span>THULIO - Agente de Crédito</span>
                <a className="material-icons exit" onClick={this.logout}>exit_to_app</a>
            </div>
        );
    }
}

export default NavPerfil;