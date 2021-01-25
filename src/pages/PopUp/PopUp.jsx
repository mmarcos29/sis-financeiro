import React from 'react'
import './PopUp.css'
export default props => {
    
    return (
        <div className="PopUp" onClick={() => props.sair(true)}>            
            <div className="PopUpConteudo" onClick={() => props.sair(false)}>
                {props.componente}
            </div>
        </div>
    )
}