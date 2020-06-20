import React, { Component } from 'react'
import './Styles.css'


class BtnReduzirLess extends Component {
    render() {
        return (
            <li id="BtnReduzirLess">
                <a href="#" onClick={()=> this.props.trocaMenu("less")}><span class="material-icons">list</span></a>           
            </li>
        );
    }
}

export default BtnReduzirLess;