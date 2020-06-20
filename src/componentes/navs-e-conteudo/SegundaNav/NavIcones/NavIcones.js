import React, { Component } from 'react';
import Styles from './Styles.css'

class NavIcones extends Component {
    render() {
        return (
            <div id="NavIcones">                
                <a href="#" className="material-icons">calendar_today</a> 
                <a href="#" className="material-icons">mail</a> 
                <a href="#" className="material-icons">message</a> 
                <a href="#" className="material-icons">notifications_active</a> 
                <a href="#" className="material-icons">assignment_late</a>        
            </div>
        );
    }
}

export default NavIcones;