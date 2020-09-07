import React, { Component } from 'react';
import Styles from './Styles.css'
import ExibirDetahes from './ExibirDetahes/ExibirDetahes'

var hoje = new Date();

class Beneficio extends Component {
    state = {
        Component:null
    }
    exibirDetalhes = () =>{
        
        this.setState({ Component: <ExibirDetahes /> })
        
    }
    ocultaDetalhes = () =>{
        
        this.setState({ Component: null })
        
    }

    render() {
        return (
            this.props.dados.map(
                cliente =>
                    <div id="Beneficio" onMouseOver={this.exibirDetalhes}  onMouseLeave={ this.ocultaDetalhes }  >     {/*onClick={() =>  this.props.clickei() } */}                
                        {this.state.Component}
                        {/*                          */}
                        <div id="Nome">{cliente.nome}</div>
                        <div id="Nb">NB: {cliente.nb}</div>
                        <div className="Item">
                            <div className="Titulo">Espécie</div>
                            <div className="Detalhe">{cliente.esp} - Pensão por Morte</div>
                        </div>
                        <div className="Item">
                            <div className="Titulo">Situação</div>
                            <div className="Detalhe">ATIVO</div>
                        </div>
                        <div className="Item">
                            <div className="Titulo">DIB</div>
                            <div className="Detalhe">{cliente.dib}</div>
                        </div>
                        <div className="Item">
                            <div className="Titulo">Idade</div>{/* hoje.getFullYear() - 2019 */}
                            <div className="Detalhe">{( hoje.getFullYear() ) - ( cliente.dtNascimento.substr(0, 4) )} ANOS</div> 
                        </div>
                    </div>
            )
        );
    }
}

export default Beneficio;