import React, { useState } from "react";
import "./Login.css";

let focus = { user: false, password: false }

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
    if(focus.user === false && focus.password ===true){
          this.refs.user.focus();
        }
    if (this.state.USERNAME === "jm") {
      localStorage.setItem("@username", "joaoMarcos");
      window.location.reload();
    } else {
      alert("LOGIN INVÁLIDO!");
      this.setState({ USERNAME: "", password: "" }, () =>
        console.log(this.state)
      );
    }
  };
  componentDidMount() {
    this.refs.user.focus();
  }
  
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
                ref="user"
                onFocus={() => {
                  focus.user = true 
                  console.log(focus)
                }}
                onBlur={() => {
                  focus.user = false 
                  console.log(focus)
                }}
              />
            </div>
            <div className="input">
              <span class="material-icons">lock</span>
              <input
                type="password"
                placeholder="PASSWORD"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                onFocus={() => {
                  focus.password = true 
                  console.log(focus)
                }}
                onBlur={() => {
                  focus.password = false 
                  console.log(focus)
                }}
              />
            </div>
            <button type="submit">LOGIN</button>
            {/* <button onClick={this.logar}>LOGIN</button> */}
          </div>
        </div>
      </form>
    );
  }
}
