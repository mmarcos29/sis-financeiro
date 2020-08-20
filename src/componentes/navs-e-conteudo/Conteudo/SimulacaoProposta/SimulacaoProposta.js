import React, { Component } from 'react';
import Styles from './Styles.css'
import BarraLocationPage from '../../Conteudo/PesquisaInss/BarraLocationPage/BarraLocationPage';
import BarraBeneficios from './BarraBeneficios/BarraBeneficios'



class SimulacaoProposta extends Component {    
    render() {
        
        return (
            <div id="SimulacaoProposta">                
                <BarraLocationPage />
                <BarraBeneficios dados={this.props.dados}/>              

            </div>
        );
    }
}

export default SimulacaoProposta;