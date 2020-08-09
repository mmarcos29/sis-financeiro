import React, { Component } from 'react'
import Styles from './Styles.css'
import PrimeiraNav from './PrimeiraNav/PrimeiraNav'
import SegundaNav from './SegundaNav/SegundaNav'
import Conteudo from './Conteudo/Conteudo'

class NavsEConteudo extends Component {
    render() {
        return (
            <div id="NavsEConteudo">
                <PrimeiraNav />
                <SegundaNav />
                <Conteudo />
            </div>
        )
    }
}

export default NavsEConteudo