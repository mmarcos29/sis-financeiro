import React, { useEffect, useState } from "react";
import { Load } from "../../../../Services/Load";
import Select from "react-select";
import "./DetalheEsteira.css";
import estadosEsteira from "../../../../Services/estadosEsteira";
import validaCamposFoms from "../../../../Services/validaCamposFoms";
import EditaNoBanco from "../../../../Services/EditaNoBanco";

export default (props) => {
  const idProposta = parseInt(window.location.hash.replace(/\D/g, ""));
  const [esteira, setEsteira] = useState(props.propostas || "");
  const [situacaoProposta, setSituacaoProposta] = useState();
  const [observacoes, setObservacoes] = useState();
  const [clientes] = useState(props.clientes || null);
  const [load, setLoad] = useState(true);
  const [proposta, setProposta] = useState(null);
  function marcaMenu() {
    if (!document.getElementById("operacional").classList.contains("active")) {
      // alert("era p ta dando certo")
      document.getElementById("operacional").classList.add("active");
      props.setListaAtiva(document.getElementById("operacional"));
    }
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");
    }
    document.getElementsByClassName("li-esteira")[0].classList.add("active");
  }

  function setInformaçõesCliente() {
    if (clientes && props.propostas) {
      props.mudaNomePropostaDetalhe(
        `Proposta ${proposta.id}    -
        ${
          clientes.find(
            (cliente) => cliente.id === parseInt(proposta.clienteId)
          ).nome
        }
        -  ${proposta.dtProposta}`
      );
    }
  }

  function situacao() {
    if (proposta.esteira) {
      switch (proposta.esteira.value) {
        case "EM ANDAMENTO":
          return (
            <div className="Componente metade">
              Situação Esteira*
              <Select
                // styles={customStyles}
                onChange={onChange}
                name="situacao"
                options={proposta.esteira.situacao.filter(
                  (option) => option.label
                )}
                value={situacaoProposta}
                noOptionsMessage={() => "Nenhum encontrado"}
                placeholder="BUSQUE USANDO APENAS LETRAS"
              />
            </div>
          );
          break;
        case "COM PENDÊNCIA":
          return (
            <div className="Componente metade">
              Situação Esteira*
              <Select
                // styles={customStyles}
                onChange={onChange}
                name="situacao"
                options={proposta.esteira.situacao.filter(
                  (option) => option.label
                )}
                value={situacaoProposta}
                noOptionsMessage={() => "Nenhum encontrado"}
                placeholder="BUSQUE USANDO APENAS LETRAS"
              />
            </div>
          );
          break;

        default:
          break;
      }
    }
  }
  function organizaSelects(onde) {
    if (onde === "esteira") {
      const x = estadosEsteira[0].find(
        (option) => option.value === proposta.esteira
      );
      setProposta({
        ...proposta,
        esteira: x,
      });
      // console.log(x.situacao)
      if (x) {
        setSituacaoProposta(
          x.situacao.find((sit) => sit.value === proposta.situacao)
        );
      }
    }
  }

  useEffect(() => {
    marcaMenu();
  }, []);

  useEffect(() => {
    if (props.propostas && proposta) {
      if (typeof proposta.esteira === "string") {
        organizaSelects("esteira");
      }
    }
    if (!proposta) {
      let proposta_ = props.propostas.find(
        (propostas) => propostas.id === idProposta
      );
      if (proposta_) {
        setTimeout(() => {
          setLoad(false);
        }, 3000);
        setProposta(proposta_);
        setEsteira(proposta_.esteira);
      }
    } else {
      setInformaçõesCliente();
    }
  }, [proposta]);

  function onSubmit(event) {
    let objec = proposta
    objec.esteira = objec.esteira.value
    if(!situacaoProposta){
      objec.situacao = objec.esteira
    }
    const dadosProposta = validaCamposFoms(proposta, "esteira");

    if (dadosProposta) {
      // console.log(dadosProposta, observacoes);
      // dadosProposta.id = this.state.id;
      // console.log(dadosProposta)
      EditaNoBanco(dadosProposta, props.history, "esteira", setLoad, observacoes);
      // EditaNoBanco(dadosProposta, this.props.history, "esteira", this.setLoad);
    }
  }

  function onChange(option, action) {
    if (!action) {
      setObservacoes( option.target.value );
    } else {
      switch (action.name) {
        case "esteira":
          setSituacaoProposta(null);
          setProposta({ ...proposta, esteira: option });
          break;
        case "situacao":
          setSituacaoProposta(option);
          break;

        default:
          break;
      }
    }
  }

  if (!load) {
    return (
      <>
        <div className="DetalheEsteira">
          <div className="Componente metade">
            {/* {console.log(propostaL)} */}
            Estado Esteira*
            <Select
              // styles={customStyles}
              onChange={onChange}
              name="esteira"
              options={estadosEsteira[0].filter((option) => option.label)}
              value={proposta.esteira}
              noOptionsMessage={() => "Nenhum encontrado"}
              placeholder={
                esteira === "CADASTRADO"
                  ? "PROPOSTA AINDA NÃO AVALIADA PELA ESTEIRA !"
                  : "BUSQUE USANDO APENAS LETRAS"
              }
            />
          </div>
          {situacao()}
          <div className="ComponenteDescricao">
            Observações ao consultor de crédito
            <textarea name="observacoes" onChange={onChange} value={observacoes}/>
          </div>
        </div>
        <div className="det butoons">
          <div className="underButton">
            <button
              type="submit"
              // disabled={false}
              className="gravar"
              onClick={onSubmit}
            >
              Gravar
            </button>
            <span class="material-icons verde">add_task</span>
          </div>
          <div className="underButton">
            <button
              className="cancelar"
              onClick={() => props.history.push("/esteira")}
            >
              Cancelar
            </button>
            <span class="material-icons vermelho">highlight_off</span>
          </div>
        </div>
      </>
    );
  } else {
    return <Load load />;
  }
};

// import React, { useState } from "react";
// import "./DetalheEsteira.css";
// import Select from "react-select";
// import estadosEsteira from "../../../../Services/estadosEsteira";
// import validaCamposFoms from "../../../../Services/validaCamposFoms";
// import EditaNoBanco from "../../../../Services/EditaNoBanco";
// import { Load } from "../../../../Services/Load";

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: "1px dotted pink",
//     color: state.isSelected ? "red" : "blue",
//     // width: "1px",
//     // padding: 20,
//   }),
// };

// export default class DetalheEsteira extends React.Component {
//   constructor(props) {
//     super(props);
//     const idProposta = parseInt(window.location.hash.replace(/\D/g, ""));

//     let proposta;

//     if (props.propostas) {
//       proposta = props.propostas.find(
//         (propostas) => propostas.id === idProposta
//       );
//     }

//     this.state = {
//       load: false,
//       readyOnly: true,
//       propostaAtual: proposta || {},
//       exibir: null,
//       dados: null,
//       id: idProposta,
//       proposta: {
//         clienteId: "",
//         corretor: "",
//         tipo: "", //{ label: "novo", value: "novo" },
//         banco: "",
//         convenio: "",
//         parceiro: "",
//         tabela: "",
//         comissaoEmpresa: "",
//         comissaoCorretor: "",
//         nrProposta: "",
//         parcelas: "",
//         taxa: "",
//         valorProposta: "",
//         valorParcela: "",
//         dtPrimeiraParcela: "",
//         observacoes: "",
//         dtProposta: new Date().toLocaleDateString(),
//         formaContato: "",
//         esteira: "CADASTRADO",
//         situacao: "",
//       },
//       clientes: [],
//     };
//     if (proposta && this.props.clientes) {
//       props.mudaNomePropostaDetalhe(
//         `Proposta 0${proposta.id}    - ${
//           this.props.clientes.find(
//             (cliente) => cliente.id === parseInt(proposta.clienteId)
//           ).nome
//         } -  ${proposta.dtProposta}`
//       );
//     }
//   }
//   onChange = (option, action) => {
//     // let batata = this.state;
//     if (action.name === "esteira") {
//       // this.setState({...this.state.propostaAtual, esteira: option})
//       // batata.propostaAtual[action.name] = option;
//       // batata.propostaAtual.situacao = null;
//     } else {
//       // state.propostaAtual[action.name] = option;
//     }

//     // this.setState(state);
//   };

//   setLoad = (load) => {
//     this.setState({ load: load });
//   };

//   onSubmit = (event) => {
//     const dadosProposta = validaCamposFoms(this.state.propostaAtual, "esteira");

//     if (dadosProposta) {
//       dadosProposta.id = this.state.id;
//       // console.log(dadosProposta)
//       EditaNoBanco(dadosProposta, this.props.history, "esteira", this.setLoad);
//     }
//   };
//   componentWillMount() {
//     if (document.querySelectorAll("#operacional li.active")[0]) {
//       document
//         .querySelectorAll("#operacional li.active")[0]
//         .classList.remove("active");
//     }
//   }
//   componentDidMount() {
//     if (document.getElementById("operacional")) {
//       if (
//         !document.getElementById("operacional").classList.contains("active")
//       ) {
//         // alert("era p ta dando certo")
//         document.getElementById("operacional").classList.add("active");
//         this.props.setListaAtiva(document.getElementById("operacional"));
//       }
//     }
//     if (document.getElementsByClassName("li-esteira")[0]) {
//       document.getElementsByClassName("li-esteira")[0].classList.add("active");
//     }
//   }
//   situacao = () => {
//     if (this.state.propostaAtual.esteira) {
//       switch (this.state.propostaAtual.esteira.value) {
//         case "EM ANDAMENTO":
//           return (
//             <div className="Componente metade">
//               Situação Esteira*
//               <Select
//                 styles={customStyles}
//                 onChange={this.onChange}
//                 name="situacao"
//                 options={estadosEsteira[1].filter((option) => option.label)}
//                 value={this.state.propostaAtual.situacao}
//                 noOptionsMessage={() => "Nenhum encontrado"}
//                 placeholder="BUSQUE USANDO APENAS LETRAS"
//               />
//             </div>
//           );
//           break;
//         case "COM PENDÊNCIA":
//           return (
//             <div className="Componente metade">
//               Situação Esteira*
//               <Select
//                 styles={customStyles}
//                 onChange={this.onChange}
//                 name="situacao"
//                 options={estadosEsteira[2].filter((option) => option.label)}
//                 value={this.state.propostaAtual.situacao}
//                 noOptionsMessage={() => "Nenhum encontrado"}
//                 placeholder="BUSQUE USANDO APENAS LETRAS"
//               />
//             </div>
//           );
//           break;

//         default:
//           break;
//       }
//     }
//   };
//   render() {
//     return (
//       <>
//         <div className="DetalheEsteira">
//         {console.log(this.state)}
//           <div className="Componente metade">
//             Estado Esteira*
//             <Select
//               styles={customStyles}
//               onChange={this.onChange}
//               name="esteira"
//               options={estadosEsteira[0].filter((option) => option.label)}
//               value={this.state.propostaAtual.esteira}
//               noOptionsMessage={() => "Nenhum encontrado"}
//               placeholder="BUSQUE USANDO APENAS LETRAS"
//             />
//           </div>
//           {this.situacao()}
//           {/* <div className="butoons full">
//           <button onClick={() => this.props.history.push("/esteira")}>
//             Cancelar
//           </button>
//           <button
//             type="submit"
//             // disabled={false}
//             className="gravar"
//             onClick={this.onSubmit}
//           >
//             Gravar
//           </button>
//         </div> */}
//           <Load load={this.state.load} />
//         </div>
//         <div className="det butoons">
//           <div className="underButton">
//             <button
//               type="submit"
//               // disabled={false}
//               className="gravar"
//               onClick={this.onSubmit}
//             >
//               Gravar
//             </button>
//             <span class="material-icons verde">add_task</span>
//           </div>
//           <div className="underButton">
//             <button
//               className="cancelar"
//               onClick={() => this.props.history.push("/propostas")}
//             >
//               Cancelar
//             </button>
//             <span class="material-icons vermelho">highlight_off</span>
//           </div>
//         </div>
//       </>
//     );
//   }
// }
