import React, { useState } from "react";
import "./ListaPropostas.css";
import mascaraCpf from "../../../mascaraCpf";
import IdadePorAnoNascimento from "../../../../Services/IdadePorAnoNascimento";
import { Load } from "../../../../Services/Load";
import listaDeBancos from "../../../../Services/listaDeBancos";
import CampoPesquisaAnimado from "../../../CampoPesquisaAnimado/CampoPesquisaAnimado";
import verificaCorStatusEsteira from "../../../../Services/verificaCorStatusEsteira";

export default (props) => {
  const detalhe = (id, toGo) => {
    props.history.push({
      pathname: toGo,
      search: `${id}`,
      // state:{msg:'usuário não autenticado'}
    });
  };
  // const clientes = props.clientes || [];
  const [clientes, setClientes] = useState(props.clientes || []);
  const [cpf, setCpf] = useState("");

  let tr =
    // props.propostas.length > 0 && clientes.length > 0 ? (
    props.propostas.length > 0 && clientes.length > 0 ? (
      props.propostas.map((proposta) => (
        <tr onClick={() => detalhe(proposta.id, props.toGo)}>
          <td>{proposta.dtProposta}</td>
          <td className="nome">
            {proposta.clienteId
              ? clientes.find(
                  (cliente) => cliente.id === parseInt(proposta.clienteId)
                ).nome
              : "Nenhuma proposta encontrada"}
          </td>
          {/* {mascaraCpf(proposta.cpf)}*/}
          <td>
            {proposta.clienteId
              ? clientes.find(
                  (cliente) => cliente.id === parseInt(proposta.clienteId)
                ).cpf
              : ""}
          </td>
          <td>
            {proposta.banco
              ? listaDeBancos
                  .find((banco) => banco.value === proposta.banco)
                  .label.substr(0, 15)
              : ""}
          </td>
          <td>{proposta.tipo}</td>
          <td>{proposta.valorParcela}</td>
          <td>{proposta.valorProposta}</td>
          <td>{proposta.corretor}</td>
          <td style={{background: verificaCorStatusEsteira(proposta.esteira)}}>{proposta.esteira}</td>
        </tr>
      ))
    ) : (
      <Load load />
    );
    function onChange (e) {
      setCpf(mascaraCpf(e.target.value))
      props.pesquisar(e)
    }
  return (
    <div className="ListaPropostas">
      <table>
        <thead>
          <tr>
            <th className="espacamento filtros">
            <CampoPesquisaAnimado align={"center"} name={"emissao"} width={"3vw"} background={"transparent"} color={"black"} tamanho={"90%"} onChange={props.pesquisar}/>              
            </th>
            {/* <th className="espacamento filtros">
              <input
                type="text"
                placeholder="Pesquisa Emissão"
                name="emissao"
                onChange={(e) => props.pesquisar(e)}
              />
            </th> */}
            <th className="espacamento filtros">
            <CampoPesquisaAnimado align={"center"} name={"nome"} width={"15vw"} background={"transparent"} color={"black"} tamanho={"100%"} onChange={props.pesquisar}/>              
              {/* <input
                type="text"
                placeholder="Pesquisa Nome"
                name="nome"
                onChange={(e) => props.pesquisar(e)}
              /> */}
            </th>
            <th className="espacamento">
              
            </th>
            <th className="espacamento">
              
            </th>
            <th className="espacamento">
              
            </th>
            <th className="espacamento">
              
            </th>
            <th className="espacamento">
              
            </th>
            <th className="espacamento">
              
            </th>
            <th className="espacamento">
              
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
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
    </div>
  );
};
