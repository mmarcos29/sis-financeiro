import React, { Component } from 'react'
import './Styles.css'


class BtnReduzirLess extends Component {
    render() {
        return (
            <li id="BtnReduzirLess" onClick={()=> this.props.trocaMenu("less")}>
                <a href="#" ><span class="material-icons">list</span></a>           
            </li>
        );
    }
}

export default BtnReduzirLess;