import React, { Component } from 'react'
import './Formalizacao.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Formalizacao extends Component {
    componentWillMount() {
        if (document.querySelectorAll("#operacional li.active")[0]) {
          document
            .querySelectorAll("#operacional li.active")[0]
            .classList.remove("active");
        }
      }
      componentDidMount() {
        if (document.getElementById("operacional")) {
          if (
            !document.getElementById("operacional")
            .classList.contains("active")
          ) {
            this.props.setListaAtiva(document.getElementById("operacional"));
          }
        }
        if(document.getElementsByClassName("li-formalizacao")[0]){
            document.getElementsByClassName("li-formalizacao")[0].classList.add("active")
        }
      }
    render() {
        return (
            <div id="Formalizacao">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
