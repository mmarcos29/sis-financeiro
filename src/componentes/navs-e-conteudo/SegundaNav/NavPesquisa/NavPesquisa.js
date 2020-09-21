import React, { Component } from 'react';
import Styles from './Styles.css'
import mascaraCpf from '../../../mascaraCpf'
import RemoveMascaraCpf from '../../../../Services/RemoveMascaraCpf'

let valor = null

class NavPesquisa extends Component {
    state = {
        input: null
    }
    trataValor = (e) =>{
        // console.log(e.target.value)
       const mascarado = mascaraCpf(e.target.value)
    // let objeto ={input: mascaraCpf(e.target.value).substr(1, 13)}  
    // let teste = mascaraCpf(e.target.value).substr(1, 13)
    // let valor = mascaraCpf(e.target.value.substr(1, 13))
    this.setState({input: mascarado})
    // console.log(valor) va
    // this.valor = e.target.value + "dhjdjd"
        
    }
    render() {        

        return (
            <div id="NavPesquisa">                
                {/* <button onClick={() => alert(RemoveMascaraCpf(document.getElementById("valorPesquisa").value) )}>CONSULTAR</button> */}
                <button onClick={() => this.props.alterarPesquisa(RemoveMascaraCpf(document.getElementById("valorPesquisa").value) )}>CONSULTAR</button>
                <input id="valorPesquisa" value={this.state.input} onChange={this.trataValor} placeholder="DIGITE CPF"></input>                
            </div>
        );
    }
}

export default NavPesquisa;