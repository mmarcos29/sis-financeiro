import React, { Component } from 'react';
import Styles from './Styles.css'

class ResultadoText extends Component {
    render() {
        return (
            <div id="ResultadoText">
                <div>Encontramos 2 benefícios para o CPF:</div>
                <div>868.362.423-49</div>
                <p>para visualizar mais detalhes clique em um deles</p>                
            </div>
        );
    }
}

export default ResultadoText;