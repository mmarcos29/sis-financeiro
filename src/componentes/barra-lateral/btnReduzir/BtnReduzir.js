import React, { Component } from 'react'
import Styles from './Styles.css'

class BtnReduzir extends Component {
    render() {
        return (
            <li id="BtnReduzir" onClick={()=> this.props.trocaMenu("full")}>                
                <a href="#"><i class="material-icons branco">list</i> MENU</a>
            </li>
        );
    }
}

export default BtnReduzir;