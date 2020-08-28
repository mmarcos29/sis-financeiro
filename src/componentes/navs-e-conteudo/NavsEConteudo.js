import React, { Component } from 'react'
import Styles from './Styles.css'
import PrimeiraNav from './PrimeiraNav/PrimeiraNav'
import SegundaNav from './SegundaNav/SegundaNav'
import Conteudo from './Conteudo/Conteudo'

import api from '../../Services/api'

// let componente;

class NavsEConteudo extends Component {
    state = {
        Clientes: [],
        encontrado: null,
        NumeroPesquisado: null,
        contador: 0,
        componente: this.props.children
    }

    async componentWillMount() {
        const request = await api.get("");
        this.setState({ Clientes: request.data });
    }
    // async componentWillUpdate(){        

    // }   

    alterarPesquisa = (valor) => {
        if (valor) {
            let pesquisado = this.state.Clientes.filter(clientes => clientes.cpf === valor);
            if (pesquisado.length > 0 && pesquisado != null) {
                this.setState({ componente: <Conteudo dados={pesquisado} />})
                // this.setState({ encontrado: pesquisado })
            } else {
                alert("Cliente não encontrado")
            }
        } else {
            alert("Insira algum valor")
        }
    }


    render() {
        return (
            <div id="NavsEConteudo">
                <PrimeiraNav />
                <SegundaNav alterarPesquisa={this.alterarPesquisa} />
                {this.state.componente}

            </div>
        )
    }
}

export default NavsEConteudo