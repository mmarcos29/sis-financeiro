import React, { Component } from 'react';
import Styles from './Styles.css'

class NavTemp extends Component {
    render() {
        return (
            <div id="NavTemp">                
                <p>J.M.V. DE OLIVEIRA PROMOTORA DE NEGÓCIOS E SERVIÇOS</p>
                <div>
                    <span>Quarta,03/05/2020</span>
                    {/* <span class="material-icons">alarm</span> */}
                    <span>18h36</span>
                </div>         
            </div>
        );
    }
}

export default NavTemp;