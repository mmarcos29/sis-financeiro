import React, { Component } from 'react'
import './IconeIncluir.css'
import { Link } from "react-router-dom";

export default class IconeIncluir extends Component {
    render() {
        return (
            <div id="IconeIncluir">
                <Link to={this.props.rota}>+</Link>                
            </div>
        )
    }
}
