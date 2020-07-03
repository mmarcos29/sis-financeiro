import React, { Component } from 'react';
import Styles from './Styles.css'

class NavTemp extends Component {
    render() {
        return (
            <div id="NavTemp">
                <span>J.M.V. DE OLIVEIRA PROMOTORA DE NEGÓCIOS E SERVIÇOS</span>
                <div>
                    <span>Quarta,03/05/2020</span>
                    <div>
                        <p className="material-icons">alarm</p>
                        <span>18h36</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavTemp;