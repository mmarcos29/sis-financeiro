import React from 'react'
import './CampoPesquisaAnimado.css'

export default props => {
    function limpaCampo (e){
        e.target.value = ""
        if(props.onChange){
            props.onChange(e)
        }
        e.target.style = "width:2vw;"
    }
    function OnFocus (e){
        e.target.style = `width:${props.width || ""}; color:${props.color || ""};`
    }
    return (
        <div className="CampoPesquisaAnimado" style={{background:`${props.background || ""}`, width:`${props.tamanho || ""}`, display:"flex", justifyContent:`${props.align || ""}`}}>
            <div className="CaixaInput" style={{background:`${props.background || ""}`, borderColor:`${props.color || ""}`}}>
                <input autocomplete="off" name={props.name || ""} type="text" onBlur={limpaCampo} onFocus={OnFocus} onChange={e => props.onChange(e)}/>
                <span id="pesquisaItens" class="material-icons">search</span>
            </div>
        </div>
    )
}
