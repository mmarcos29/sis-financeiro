import React, { Component } from 'react';
import Styles from './Styles.css'
import PesquisaInss from './PesquisaInss/PesquisaInss'

class Conteudo extends Component {
    render() {
        return (
            <div id="Conteudo">
                <PesquisaInss />
            </div>
        );
    }
}

export default Conteudo;