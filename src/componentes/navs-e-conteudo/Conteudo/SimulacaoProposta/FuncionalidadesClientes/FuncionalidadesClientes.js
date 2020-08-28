import React, { Component } from 'react';
import Styles from './Styles.css'
import ImgAgendar from '../../../../../img/agendar cliente.png'
import ImgAtender from '../../../../../img/atender cliente.png'
import ImgCadastrar from '../../../../../img/cadastrar clientes.png'
import ImgEfetivar from '../../../../../img/efetivar proposta.png'



class FuncionalidadesClientes
    extends Component {
    render() {
        return (
            this.props.dados.map(
                cliente =>
                    <div id="FuncionalidadesClientes">
                        <div id="CaixasCliente">
                            <div id="Funcionalidades">
                                <div id="Beneficiario">
                                    <p> {cliente.nome}</p>
                                    {console.log(cliente)}
                                    <p> {(new Date().getFullYear()) - (cliente.dtNascimento.substr(0, 4))} ANOS </p>
                                </div>
                                <div id="BordaSuperior"></div>
                                <div className="especificacoes">
                                    <div className="caixa"><p>Consignável?</p> <p id="SIM">SIM</p></div>
                                    <div className="caixa"><p>Espécie?</p> <p className="Respostas">{cliente.esp}</p> </div>
                                    <div className="caixa"><p>Situação</p> <p className="Respostas">ATIVO</p> </div>
                                    <div className="caixa"><p>Competência</p> <p className="Respostas">05/2020</p> </div>
                                    <div className="caixa"><p>DIB</p> <p className="Respostas">{cliente.dib}</p> </div>
                                    <div className="caixa"><p>DDB</p> <p className="Respostas">10/08/2013</p> </div>
                                    <div className="caixa"><p>Base MR</p> <p className="Respostas">R$1.045,00 (25%)</p> </div>
                                    <div className="caixa"><p>Valor MR</p> <p className="Respostas">R$1.045,00</p> </div>
                                </div>

                                <div id="CaixasMargens">
                                    <div className="MargemSimulacao">
                                        <div id="MargemEmprestimo">
                                            <div id="Margem1"><p>MARGEM PARA EMPRESTIMO</p> <p className="ValorLiberado">R$ 313,50 (25%)</p> </div>
                                            <div id="Liberado1"><p className="Liberado">LIBERADO</p> <p>R$ 12.928,36</p> </div>
                                        </div>
                                        <div id="MargemCartão">
                                            <div id="Margem2"><p>MARGEM PARA CARTÃO RMC</p> <p className="ValorLiberado">R$ 52,25 (5%)</p> </div>
                                            <div id="Liberado2"><p className="Liberado">LIBERADO</p> <p>R$ 1.389,25</p> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="Procedimento">
                                <div className="CaixasProcedimentos">
                                    <img src={ImgEfetivar}></img>
                                </div>
                                <div className="CaixasProcedimentos">
                                    <img src={ImgCadastrar}></img>
                                </div>
                                <div className="CaixasProcedimentos">
                                    <img src={ImgAgendar}></img>
                                </div>
                                <div className="CaixasProcedimentos">
                                    <img src={ImgAtender}></img>
                                </div>
                            </div>


                        </div>
                    </div>
            )
        );
    }
}

export default FuncionalidadesClientes
    ;