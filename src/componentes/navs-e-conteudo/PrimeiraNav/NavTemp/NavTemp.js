import React, { Component } from 'react';
import Styles from './Styles.css'
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

class NavTemp extends Component {
    state ={
        curTime: new  Date().getMinutes()
    }
    render() {
        setInterval(function(){
            if(new  Date().getMinutes() != this.state.curTime){
                this.setState({curTime: new  Date().getMinutes()});
            }
            }.bind(this)
            , 1000);
        return (
            <div id="NavTemp">
                <span>J.M.V. DE OLIVEIRA PROMOTORA DE NEGÓCIOS E SERVIÇOS</span>
                <div>
                    <span>{ new Date().toLocaleDateString('pt-BR',options)}</span>
                    {/* <span>Quarta,03/05/2020</span> */}
                    <div>
                        <p className="material-icons">alarm</p>
                        <span>{new Date().getHours() < 10 ? '0' + new Date().getHours() : '' + new Date().getHours()}:{ new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : '' + new Date().getMinutes()}</span>
                        {/* :{new Date().getSeconds()} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavTemp;