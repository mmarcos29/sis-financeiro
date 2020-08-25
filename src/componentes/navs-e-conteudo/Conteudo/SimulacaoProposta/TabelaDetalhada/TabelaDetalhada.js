import React, { Component } from 'react';
import Styles from './Styles.css'

class TabelaDetalhada extends Component {
    render() {
        return (
            <div id="TabelaDetalhada">
                <div id="titulo">
                    <div>HISTÓRICO DE PROPOSTAS</div>
                    <div>DADOS CADASTRAIS</div>
                    <div>DADOS BANCARIOS</div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Tipo Emprestimo</th>
                            <th>Banco</th>
                            <th>Número Contrato</th>
                            <th>Averbação</th>
                            <th>Início</th>
                            <th>Fim</th>
                            <th>Vlr. Financeiro</th>
                            <th>Vlr. Quitação</th>
                            <th>Parcela</th>
                            <th>Taxa</th>
                            <th>Prazo</th>
                            <th>Pagas</th>
                            <th>Restam</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>CONSIGNADO</td>
                            <td>623-PAN</td>
                            <td>84236598659</td>
                            <td>21/03/2015</td>
                            <td>04/2015</td>
                            <td>04/2022</td>
                            <td>R$ 10.537,56</td>
                            <td>R$ 6.321,98</td>
                            <td>R$280,00</td>
                            <td>2,56%</td>
                            <td>72X</td>
                            <td>32</td>
                            <td>40</td>
                        </tr>

                    </tbody>

                </table>

            </div>
        );
    }
}

export default TabelaDetalhada;