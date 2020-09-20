import React, { Component } from 'react'

export default class ZeraMenu extends Component {
    componentDidMount(){
        if(this.props.activeMenu){
            this.props.activeMenu.classList.remove("active")
            this.props.activeMenu.style.display = "none"
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
