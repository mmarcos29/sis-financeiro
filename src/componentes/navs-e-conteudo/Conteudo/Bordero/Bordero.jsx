import React, { Component } from 'react'
import './Bordero.css'
import BarraLocationPage from '../PesquisaInss/BarraLocationPage/BarraLocationPage'

export default class Bordero extends Component {
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
        if(document.getElementsByClassName("li-bordero")[0]){
            document.getElementsByClassName("li-bordero")[0].classList.add("active")
        }
      }
    render() {
        return (
            <div id="Bordero">
                <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
            </div>
        )
    }
}
