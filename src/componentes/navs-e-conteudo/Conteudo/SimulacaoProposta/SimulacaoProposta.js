import React, { Component } from 'react';
import Styles from './Styles.css'
import BarraLocationPage from '../../Conteudo/PesquisaInss/BarraLocationPage/BarraLocationPage';
import BarraBeneficios from './BarraBeneficios/BarraBeneficios'
import TabelaDetalhada from './TabelaDetalhada/TabelaDetalhada'
import FuncionalidadesClientes from './FuncionalidadesClientes/FuncionalidadesClientes'





class SimulacaoProposta extends Component {    
    render() {
        
        return (
            <div id="SimulacaoProposta">                
                <BarraLocationPage>Simulação de crédito</BarraLocationPage>
                <BarraBeneficios dados={this.props.dados}/>  
                <FuncionalidadesClientes dados={this.props.dados}/>
                {/* <TabelaDetalhada/> */}
                           

            </div>
        );
    }
}

export default SimulacaoProposta;