import React, { useState, useEffect } from "react";
import "./PropostasNaEsteira.css";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";
import listaDeBancos from "../../../../../Services/listaDeBancos";

export default (props) => {
  const [load, setLoad] = useState(true);
  const [cliente, setCliente] = useState(null);
  function ListaPropostas() {
    const table = (
      <table>
        <thead>
          {/* <tr>
            <th className="espacamento filtros">
              <CampoPesquisaAnimado
                align={"center"}
                name={"emissao"}
                width={"3vw"}
                background={"transparent"}
                color={"black"}
                tamanho={"90%"}
                onChange={props.pesquisar}
              />
            </th>
            <th className="espacamento filtros">
              <CampoPesquisaAnimado
                align={"center"}
                name={"nome"}
                width={"15vw"}
                background={"transparent"}
                color={"black"}
                tamanho={"100%"}
                onChange={props.pesquisar}
              />
            </th>
            <th className="espacamento"></th>
            <th className="espacamento"></th>
            <th className="espacamento"></th>
            <th className="espacamento"></th>
            <th className="espacamento"></th>
            <th className="espacamento"></th>
            <th className="espacamento"></th>
          </tr> */}
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
              <b>VALOR</b>
            </th>
            <th className="espacamento">
              <b>CORRETOR</b>
            </th>
            <th className="espacamento">
              <b>ESTEIRA</b>
            </th>
            <th className="espacamento">
              <b>SITUAÇÃO</b>
            </th>
            <th className="espacamento">
              <b>Ações</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.propostas.map((proposta) => (
            <tr key={proposta.id} onClick={() => props.dispatch(proposta)}>
              <td>{proposta.dtProposta}</td>
              <td>{trazCliente(proposta.clienteId).nome}</td>
              <td>{trazCliente(proposta.clienteId).cpf}</td>
              <td>{trazBanco(proposta.banco)}</td>
              <td>{proposta.valorProposta}</td>
              <td>{proposta.corretor}</td>
              <td>{proposta.esteira}</td>
              <td>{proposta.situacao}</td>
              <td>                
                <span class="material-icons" onClick={() => props.history.push({  pathname: "DetalheEsteira", search: `${proposta.id}`})}>
                  border_color
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    return table;
  }
  function avoid() {
    const loader = <Spinner size={30} color="blue" speed={0.5} />;
    return loader;
  }
  function trazCliente(id) {
    let idd = id;
    if (typeof id !== "number") {
      idd = parseInt(id);
    }
    return props.clientes.find((cliente) => cliente.id === idd);
  }
  function trazBanco(id) {
    let idd = id;
    if (typeof id !== "number") {
      idd = parseInt(id);
    }
    let banco = listaDeBancos.find((banco) => banco.value === id);

    return banco ? banco.label : "";
  }

  useEffect(() => {
    if (props.propostas.length > 0 && props.clientes.length > 0) {
      setTimeout(() => {
        setLoad(false);
      }, 2000);
    }
  }, [props]);

  return (
    <div
      className="PropostasNaEsteira"
      style={{ alignItems: load ? "center" : "" }}
    >
      {load ? avoid() : ListaPropostas()}
    </div>
  );
};
