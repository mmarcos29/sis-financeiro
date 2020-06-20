import React, { Component } from 'react'
import Styles from './Styles.css'
import PrimeiraNav from './PrimeiraNav/PrimeiraNav'
import SegundaNav from './SegundaNav/SegundaNav'

class NavsEConteudo extends Component {
    render() {
        return (
            <div id="NavsEConteudo">
                <PrimeiraNav />
                <SegundaNav />
            </div>
        )
    }
}

export default NavsEConteudo