import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Styles from './Styles.css'
import ExibirDetahes from './ExibirDetahes/ExibirDetahes'
import ListaTipoBeneficios from '../../../../../Services/ListaTipoBeneficios'
import IdadePorAnoNascimento from '../../../../../Services/IdadePorAnoNascimento';

var hoje = new Date();

class Beneficio extends Component {
    state = {
        Component: null
    }
    exibirDetalhes = () => {

        this.setState({ Component: <ExibirDetahes /> })

    }
    ocultaDetalhes = () => {

        this.setState({ Component: null })

    }

    render() {
        let descricaoBeneficio = ListaTipoBeneficios(this.props.dados.especie).descricao.split(" ")
        // descricaoBeneficio =  descricaoBeneficio.stringify()
        // console.log( descricaoBeneficio.join('').length )
        // repete exatamente o numero de vezes que for encontrado "-" dentro da lista e remove
        if (descricaoBeneficio.filter(d => d === "-").length > 0) {
            for (let index = 0; index <= descricaoBeneficio.filter(d => d === "-").length; index++) {
                descricaoBeneficio.splice(descricaoBeneficio.indexOf('-'), 1)
            }
        }                
        if (descricaoBeneficio.length > 3) {
            descricaoBeneficio = descricaoBeneficio.slice(0, 3)
            descricaoBeneficio = descricaoBeneficio.join(" ") + "..."
        }
        if(descricaoBeneficio.includes(' ') ){
            descricaoBeneficio = descricaoBeneficio.split(' ')
            // descricaoBeneficio.splice(descricaoBeneficio.indexOf('...'), 1)
            if(descricaoBeneficio.join('').length > 25){
                descricaoBeneficio = descricaoBeneficio.slice(0, 2)
                descricaoBeneficio = descricaoBeneficio.join(" ") + "..." 
            }
        }else{
            if(descricaoBeneficio.join('').length > 25){
                descricaoBeneficio = descricaoBeneficio.slice(0, 2)
                descricaoBeneficio = descricaoBeneficio.join(" ") + "..." 
            }
        }
        
        console.log(descricaoBeneficio)

        // lista = lista.slice(0,3) 
        // lista = lista.join(" ")
        return (
            <Link to="/simulacao-proposta" id="Beneficio" onMouseOver={this.exibirDetalhes} onMouseLeave={this.ocultaDetalhes}  >     {/*onClick={() =>  this.props.clickei() } */}
                {this.state.Component}
                <div id="Nome">{this.props.dados.nome}</div>
                <div id="Nb">NB: {this.props.dados.nb}</div>
                <div className="Item">
                    <div className="Titulo">Espécie</div>
                    <div className="Detalhe">{this.props.dados.especie} - <span className="detalheTipoBeneficio"> {descricaoBeneficio} </span> </div>
                </div>
                <div className="Item">
                    <div className="Titulo">Situação</div>
                    <div className="Detalhe">ATIVO</div>
                </div>
                <div className="Item">
                    <div className="Titulo">DIB</div>
                    <div className="Detalhe">{this.props.dados.dib}</div>
                </div>
                <div className="Item">
                    <div className="Titulo">Idade</div>{/* hoje.getFullYear() - 2019 */}
                    <div className="Detalhe">{IdadePorAnoNascimento(this.props.dados.dtNascimento)} </div>
                    {/* <div className="Detalhe">{( hoje.getFullYear() ) - ( cliente.dtNascimento.substr(0, 4) )} ANOS</div>  */}
                </div>
            </Link>
        );
    }
}

export default Beneficio;