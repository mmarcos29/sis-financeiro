import React, { Component } from 'react'
import Styles from './Styles.css'
import PrimeiraNav from './PrimeiraNav/PrimeiraNav'
import SegundaNav from './SegundaNav/SegundaNav'
import Conteudo from './Conteudo/Conteudo'

import api from '../../Services/api'

class NavsEConteudo extends Component {
    state = {
        Clientes: [],
        encontrado: null,
        NumeroPesquisado: null,
        contador: 0
    }

    async componentWillMount() {
        const request = await api.get("");
        this.setState({ Clientes: request.data });
        // let pesquisado = request.data.filter(clientes => clientes.cpf === this.state.NumeroPesquisado); //"07553110515"
        // if(pesquisado.length > 0){
        //     this.setState({encontrado: pesquisado})
        // }              
    }
    // async componentDidUpdate() {
    //     if (this.state.NumeroPesquisado != null && this.state.contador < 2) {
    //         let pesquisado = this.state.Clientes.filter(clientes => clientes.cpf === this.state.NumeroPesquisado); //"07553110515"
    //         console.log(pesquisado)
    //         this.setState({contador:3})
    //         if(pesquisado.length > 0){
    //             this.setState({encontrado: pesquisado})
    //         }else{
    //             alert("Cliente não encontrado")
    //         } 
    //     }
    // }

    alterarPesquisa = (valor) => {
        if (valor) {
            let pesquisado = this.state.Clientes.filter(clientes => clientes.cpf === valor);
            if (pesquisado.length > 0) {
                // alert("Cliente encontrado no banco de dados")
                this.setState({ encontrado: pesquisado })
            } else {
                alert("Cliente não encontrado")
            }
        } else {
            alert("Insira algum valor")
        }
    }


    render() {        
        let componente;
        if (this.state.encontrado != null) {
            componente = <Conteudo dados={this.state.encontrado} />
        }
        // console.log(this.state.encontrado != null)
        return (
            <div id="NavsEConteudo">
                <PrimeiraNav />
                <SegundaNav alterarPesquisa={this.alterarPesquisa} />
                {componente}

            </div>
        )
    }
}

export default NavsEConteudo