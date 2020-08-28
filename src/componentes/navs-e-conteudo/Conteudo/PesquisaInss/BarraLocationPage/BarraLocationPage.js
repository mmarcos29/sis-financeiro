import React, { Component } from 'react';
import Styles from './Styles.css'
import image from '../../../../../img/inss.png'

class BarraLocationPage extends Component {
    render() {
        return (
            <div id="BarraLocationPage">

                <div id="barraINSS">
                    <div id="caixaAmarela"><img src={image}></img> </div>
                    <p>{this.props.children}</p>                   
                </div>
            </div>
        );
    }
}

export default BarraLocationPage;