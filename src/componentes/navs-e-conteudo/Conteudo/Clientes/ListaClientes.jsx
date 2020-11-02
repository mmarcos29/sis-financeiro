import React from "react";
import "./ListaClientes.css";
import mascaraCpf from "../../../mascaraCpf";
import IdadePorAnoNascimento from "../../../../Services/IdadePorAnoNascimento";

export default (props) => {
  const detalhe = (id) => {
    props.history.push({
      pathname: "/DetalheClientes",
      search: `${id}`,
      // state:{msg:'usuário não autenticado'}
    });
  };
  let tr =
    props.clientes.length > 0 ? (
      props.clientes.map((cliente) => (
        <tr onClick={() => detalhe(cliente.id)}>
          <td>{cliente.id}</td>
          <td>{cliente.nome}</td>
          <td>{mascaraCpf(cliente.cpf)}</td>
          <td>{cliente.dtNascimento || "------"}</td>
          <td>{IdadePorAnoNascimento(cliente.dtNascimento)}</td>
          <td>******</td>
        </tr>
      ))
    ) : (
      <tr>
        <td>--</td>
        <td>--------------------------------------</td>
        <td>{mascaraCpf("00000000000")}</td>
        <td>----------</td>
        <td>-------</td>
        <td>-------</td>
      </tr>
    );
  return (
    <div className="ListaClientes">
      <table className="alunos">
        <thead>
          <tr>
            <th className="espacamento">
              <b>ID Cliente</b>
            </th>
            <th className="espacamento">
              <b>NOME</b>
            </th>
            <th className="espacamento">
              <b>CPF</b>
            </th>
            <th className="espacamento">
              <b>DATA DE NASCIMENTO</b>
            </th>
            <th className="espacamento">
              <b>IDADE</b>
            </th>
            <th className="espacamento">
              <b>AÇÕES</b>
            </th>
          </tr>
        </thead>
        <tbody>{tr}</tbody>
      </table>
    </div>
  );
};
