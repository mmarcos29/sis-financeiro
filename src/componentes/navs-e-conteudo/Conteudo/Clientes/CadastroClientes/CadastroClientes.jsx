import React, { Component } from "react";
import "./CadastroClientes.css";

export default class CadastroClientes extends Component {
  render() {
    return (
      <div className="CadastroClientes">
        <form onSubmit={this.handleSubmit}>
          <label>
            CPF*
            <input
              type="text"
              //   value={this.state.value}
              //   onChange={this.handleChange}
            />
          </label>
          <label>
            Nome Completo*
            <input
              type="text"
              //   value={this.state.value}
              //   onChange={this.handleChange}
            />
          </label>
          <div>
            <label>
              Telefone
              <input
                type="text"
                //   value={this.state.value}
                //   onChange={this.handleChange}
              />
            </label>
            <label>
              Benefício*
              <input
                type="text"
                //   value={this.state.value}
                //   onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Convênio*
              <input
                type="text"
                //   value={this.state.value}
                //   onChange={this.handleChange}
              />
            </label>
            <label>
              Margem*
              <input
                type="text"
                //   value={this.state.value}
                //   onChange={this.handleChange}
              />
            </label>
          </div>
          {/* <input type="submit" value="Enviar" /> */}
        </form>
      </div>
    );
  }
}
