import React, { Component } from 'react';
import Styles from './Styles.css'

class BarraBeneficios extends Component {
    render() {
        return (
            <div id="BarraBeneficios">
                <div>
                    Benefícios:
                    
                        {this.props.dados.map(
                            cliente => 
                            <span id="Nbeneficios">{(cliente.nb)}</span>                            
                        )}                    
                </div>
            </div>
        );
    }
}

export default BarraBeneficios;