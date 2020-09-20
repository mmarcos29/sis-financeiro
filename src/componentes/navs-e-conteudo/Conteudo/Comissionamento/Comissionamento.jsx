import React, { Component } from 'react'
import './Comissionamento.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Comissionamento extends Component {
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
        if(document.getElementsByClassName("li-comissionamento")[0]){
            document.getElementsByClassName("li-comissionamento")[0].classList.add("active")
        }
      }
    render() {
        return (
            <div id="Comissionamento">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
