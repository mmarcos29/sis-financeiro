import React, { Component } from 'react';
import Styles from './Styles.css'

class FuncionalidadesClientes
    extends Component {
    render() {
        return (
            <div id="FuncionalidadesClientes">
                <div id="CaixasCliente">
                    <div id="Funcionalidades">
                        <div id="Beneficiario">
                            <p> ADONIAS INACIO DA SILVA</p>
                            <p> 89 ANOS </p>
                        </div>
                        <div id="BordaSuperior"></div>
                        <div className="especificacoes">
                            <div className="caixa"><p>Consignável?</p> <p id="SIM">SIM</p></div>
                            <div className="caixa"><p>Espécie?</p> <p className="Respostas">21</p> </div>
                            <div className="caixa"><p>Situação</p> <p className="Respostas">ATIVO</p> </div>
                            <div className="caixa"><p>Competência</p> <p className="Respostas">05/2020</p> </div>
                            <div className="caixa"><p>DIB</p> <p className="Respostas">13/07//2013</p> </div>
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
                        <div className="CaixasProcedimentos"></div>
                        <div className="CaixasProcedimentos"></div>
                        <div className="CaixasProcedimentos"></div>
                        <div className="CaixasProcedimentos"></div>
                    </div>


                </div>
            </div>
        );
    }
}

export default FuncionalidadesClientes
    ;