import React from "react";
import "./ListaPropostas.css";
import mascaraCpf from "../../../mascaraCpf";
import IdadePorAnoNascimento from "../../../../Services/IdadePorAnoNascimento";
import { Load } from "../../../../Services/Load";
import listaDeBancos from "../../../../Services/listaDeBancos";

export default (props) => {
  const detalhe = (id, toGo) => {
    props.history.push({
      pathname: toGo,
      search: `${id}`,
      // state:{msg:'usuário não autenticado'}
    });
  };
  const clientes = props.clientes || [];
  let tr =
    props.propostas.length > 0 && clientes.length > 0 ? (
      props.propostas.map((proposta) => (
        <tr onClick={() => detalhe(proposta.id, props.toGo)}>
          {/* <td>{proposta.id}</td> */}
          <td>{proposta.dtProposta}</td>
          <td className="nome">
            {
              clientes.find(
                (cliente) => cliente.id === parseInt(proposta.clienteId)
              ).nome
            }
          </td>
          {/* {mascaraCpf(proposta.cpf)}*/}
          <td>
            {
              clientes.find(
                (cliente) => cliente.id === parseInt(proposta.clienteId)
              ).cpf
            }
          </td>
          <td>{proposta.banco?listaDeBancos.find(banco => banco.value === proposta.banco).label.substr(0, 15):""}</td>
          <td>{proposta.tipo}</td>
          <td>{proposta.valorParcela}</td>
          <td>{proposta.valorProposta}</td>
          <td>{proposta.corretor}</td>
          <td>{proposta.esteira}</td>
        </tr>
      ))
    ) : (
      <Load load />
    );
  return (
    <table className="ListaPropostas">
      {/* <table className="alunos"> */}
      <thead>
        <tr>
          {/* <th className="espacamento">
              <b>ID PROPOSTA</b>
            </th> */}
          <th className="espacamento">
            <b>EMISSÃO</b>
          </th>
          <th className="espacamento">
            <b>NOME</b>
          </th>
          <th className="espacamento">
            <b>CPF</b>
          </th>
          <th className="espacamento">
            <b>BANCO</b>
          </th>
          <th className="espacamento">
            <b>TIPO</b>
          </th>
          <th className="espacamento">
            <b>PARCELA</b>
          </th>
          <th className="espacamento">
            <b>VALOR</b>
          </th>
          <th className="espacamento">
            <b>CORRETOR</b>
          </th>
          <th className="espacamento">
            <b>SITUAÇÃO</b>
          </th>
        </tr>
      </thead>
      <tbody>{tr}</tbody>
    </table>
  );
};
