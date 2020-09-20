import React, { Component } from 'react'
import './Relatorios.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Relatorios extends Component {
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
        if(document.getElementsByClassName("li-relatorios")[0]){
            document.getElementsByClassName("li-relatorios")[0].classList.add("active")
        }
      }
    render() {
        return (
            <div id="Relatorios">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
