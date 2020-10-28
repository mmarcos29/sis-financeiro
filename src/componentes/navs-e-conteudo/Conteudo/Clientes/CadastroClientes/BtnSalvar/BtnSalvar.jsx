import React from 'react'
import "./BtnSalvar.css"

export default props => {
    return (
        <div className="BtnSalvar">
            <button type="submit" onClick={props.onClick}>Salvar</button>
        </div>
    )
}
