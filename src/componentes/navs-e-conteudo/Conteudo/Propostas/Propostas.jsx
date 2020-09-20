import React, { Component } from 'react'
import './Propostas.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Propostas extends Component {
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
            document.getElementById("operacional").classList.add("active")
            this.props.setListaAtiva(document.getElementById("operacional"));
          }
        }
        if(document.getElementsByClassName("li-propostas")[0]){
            document.getElementsByClassName("li-propostas")[0].classList.add("active")
        }
      }
    render() {
        return (
            <div id="Propostas">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
