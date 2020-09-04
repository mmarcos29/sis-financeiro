import React, { Component } from 'react';
import Styles from './Styles.css'
import PesquisaInss from './PesquisaInss/PesquisaInss'
import SimulacaoProposta from './SimulacaoProposta/SimulacaoProposta'

class Conteudo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Componente: this.props.children,
            reload: false
        }
    }

    trocaComponente = () => {
        this.setState({ Componente: <SimulacaoProposta dados={this.props.dados} /> });
    }

    recarregar = (resposta) => {
        alert("recarregar")
        this.setState({ reload: resposta });
    }


    render() {
        return (
            <div id="Conteudo">
                {this.props.children}
            </div>
        )
        // this.props.reloadConteudo(this.recarregar)
        // console.log("conteudo")
        // if(this.props.dados){
        //     return (
        //         <div id="Conteudo">
        //             {this.props.dados}
        //             {console.log(this.props.children)}
        //         </div>
        //     );
        // }else{
        //     return (
        //         <div id="Conteudo">
        //             {this.props.children}
        //             {console.log(this.props.children)}
        //         </div>
        //     );
        // }
    }
}

export default Conteudo;