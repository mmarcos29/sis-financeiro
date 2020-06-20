import React, { Component } from 'react';
import Styles from './Styles.css'
import NavTemp from './NavTemp/NavTemp';
import NavPerfil from './NavPerfil/NavPerfil';

class PrimeiraNav extends Component {
    render() {
        return (
            <div id="PrimeiraNav">
                <NavTemp />
                <NavPerfil />
            </div>
        );
    }
}

export default PrimeiraNav;