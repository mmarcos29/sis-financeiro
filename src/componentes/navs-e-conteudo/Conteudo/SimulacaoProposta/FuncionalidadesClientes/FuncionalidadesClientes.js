import React, { Component } from 'react';
import Styles from './Styles.css'

class FuncionalidadesClientes
    extends Component {
    render() {
        return (
            <div id="FuncionalidadesClientes">
                <div id="Informacoes">
                    <div className="caixa"><p>Consignável?</p>  <p id="sim">SIM</p></div>
                    <div className="caixa"> <p>Espécie?</p>  <p>21</p> </div>
                    <div className="caixa"> <p>Situação</p>  <p>ATIVO</p> </div>
                    <div className="caixa"> <p>Competência</p>  <p>05/2020</p> </div>
                    <div className="caixa"> <p>DIB</p>  <p>13/07//2013</p> </div>
                    <div className="caixa"> <p>DDB</p>  <p>10/08/2013</p> </div>
                    <div className="caixa"><p>Base MR</p>  <p>R$1.045,00 (25%)</p> </div>
                    <div className="caixa"><p>Valor MR</p>  <p>R$1.045,00</p> </div>
                    <div id="caixaMargem1"><p>MARGEM PARA EMPRESTIMO</p> <p>R$ 313,50 (25%)</p> </div>
                    <div id="liberado1"><p>LIBERADO</p> <p>R$ 12.928,36</p> </div>
                    <div id="caixaMargem2"><p>MARGEM PARA CARTÃO RMC</p> <p>R$ 52,25 (5%)</p> </div>
                    <div id="liberado2"><p>LIBERADO</p> <p>R$ 1.389,25</p> </div>
                </div>
                <div>

                </div>



            </div>
        );
    }
}

export default FuncionalidadesClientes
    ;