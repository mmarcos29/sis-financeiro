import React from 'react'
import "./BtnEditar.css"

export default props => {
    return (
        <div className="BtnEditar">
            <button onClick={props.onClick}>Habilitar edições</button>
        </div>
    )
}
