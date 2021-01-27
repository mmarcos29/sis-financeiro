import React, { useState, useEffect } from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";
import "./HistoricoEsteira.css";
import api from "../../../../../Services/api";

export default (props) => {
  const [ocorrencia, setOcorrencia] = useState(null);
  const [load, setLoad] = useState(true);
  function getOcorrencia(id) {
    api.get(`Ocorrencias`).then((response) => {
      let list = response.data.filter((oco) => oco.propostaId === id);

      if (list.length > 0) {
        setOcorrencia(list);
        setLoad(true);
      } else {
        setOcorrencia(null);
        setTimeout(() => {
          setLoad(false);
        }, 2000);
      }
    });
  }
  useEffect(() => {
    if (props.item) {
      getOcorrencia(props.item.id);
      setLoad(true)
    }
  }, [props]);

  if (props.item) {
    if (ocorrencia) {
      return (
        <div className="HistoricoEsteira">
          <table>
            <thead>
              <tr>
                <th>Data da alteração</th>
                <th>responsável pela alteração</th>
                <th></th>
                <th>Comentário do editor</th>
                <th>esteira</th>
                <th>situação</th>
              </tr>
            </thead>
            <tbody>
              {ocorrencia.map((oc) => (
                <tr>
                  <td>{oc.data}</td>
                  <td>{oc.editor}</td>
                  <td></td>
                  <td>{oc.observacoes}</td>
                  <td>{oc.esteira}</td>
                  <td>{oc.situacao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      if (load) {
        return (
          <div className="HistoricoEsteira">
            {/* {getOcorrencia()} */}
            <Spinner size={30} color="blue" speed={0.5} />
          </div>
        );
      } else {
        return (
          <div className="HistoricoEsteira">
            Nenhuma ocorrencia registrada nessa proposta
          </div>
        );
      }
    }
  } else {
    return null;
  }
};
