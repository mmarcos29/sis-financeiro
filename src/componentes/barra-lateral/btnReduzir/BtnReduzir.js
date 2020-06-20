import React, { Component } from 'react'
import Styles from './Styles.css'

class BtnReduzir extends Component {
    render() {
        return (
            <li id="BtnReduzir">
                <a href="#" onClick={()=> this.props.trocaMenu("full")}><span class="material-icons">list</span><span>Menu</span></a>           
            </li>
        );
    }
}

export default BtnReduzir;