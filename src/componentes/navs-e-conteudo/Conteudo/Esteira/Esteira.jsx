import React, { Component } from "react";
import "./Esteira.css";
import BarraLocationPage from "../PesquisaInss/BarraLocationPage/BarraLocationPage";

export default class Esteira extends Component {
  componentWillMount() {
    // alert("foi")
    if (document.querySelectorAll("#operacional li.active")[0]) {
      document
        .querySelectorAll("#operacional li.active")[0]
        .classList.remove("active");     
    }
  }
  componentDidMount() {    
    if (document.getElementById("operacional")) {
      if (
        !document.getElementById("operacional").classList.contains("active")
      ) {
        this.props.setListaAtiva(
          document.getElementById("operacional"),
          document.getElementsByClassName("li-esteira")
        );
      }
    }
  }
  render() {
    return (
      <div id="Esteira">
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
        <BarraLocationPage>{[...this.props.children]}</BarraLocationPage>
      </div>
    );
  }
}
