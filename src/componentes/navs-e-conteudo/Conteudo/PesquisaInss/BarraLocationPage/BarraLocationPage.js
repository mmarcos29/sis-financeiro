import React, { Component } from 'react';
import Styles from './Styles.css'
import image from '../../../../../img/inss.png'

class BarraLocationPage extends Component {
    render() {
        return (
            <div id="BarraLocationPage">

                <div id="barraINSS">
                    <div id="caixaAmarela"><img src={image}></img> </div>
                    <p>PESQUISA INSS</p>
                    {/* <div id='CaixaAzul'>
                        <img src={image}></img>
                        <div id="azul"><div id="PesquisaFuncionalidades"><input id="inputPesquisaFuncionalidades" onBlur={() => this.limpaCampo("inputPesquisaFuncionalidades")} /><span id="pesquisaItens" class="material-icons">search</span></div></div>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default BarraLocationPage;