import React, { Component } from 'react'
import Styles from './Styles.css'

class BtnReduzir extends Component {
    render() {
        return (
            <li id="BtnReduzir" onClick={()=> this.props.trocaMenu("full")}>
                <a href="#"><span class="material-icons">list</span><span>Menu</span></a>           
            </li>
        );
    }
}

export default BtnReduzir;