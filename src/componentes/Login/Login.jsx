import React, { useState } from "react";
import "./Login.css";

export default class Login extends React.Component {
  state = {
    USERNAME: "",
    password: "",
  };
  onChange = (e) => {
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };
  logar = (e) => {
    e.preventDefault();
    if (this.state.USERNAME === "jm") {
      localStorage.setItem("@username", "joaoMarcos");
      window.location.reload();
    } else {
      alert("LOGIN INVÁLIDO!");
      this.setState({USERNAME: "", password: ""})
    }
  };

  // localStorage.removeItem('@username');
  // localStorage.getItem('@username')
  // localStorage.setItem('@username', "joaoMarcos");
  // console.log(localStorage.getItem('@username'))
  render() {
    return (
      <form onSubmit={this.logar}>
        <div className="Login">
          <div className="formLogin">
            jddjdjd
            <div className="input">
              <span class="material-icons">account_circle</span>
              <input
                type="text"
                placeholder="USERNAME"
                name="USERNAME"
                value={this.state.USERNAME}
                onChange={this.onChange}
              />
            </div>
            <div className="input">
              <span class="material-icons">lock</span>
              <input type="password" placeholder="PASSWORD" />
            </div>
            <button type="submit">LOGIN</button>
            {/* <button onClick={this.logar}>LOGIN</button> */}
          </div>
        </div>
      </form>
    );
  }
}
