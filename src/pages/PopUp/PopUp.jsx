import React,{useState} from 'react'
import './PopUp.css'
export default props => {
    const [Out, setOut] = useState(false)

    function mouseOver() {
        setOut(false)
    }
    function mouseLeave() {
        setOut(true)
    }
    
    return (
        <div className="PopUp" onClick={() => props.sair(Out)}>            
            <div className="PopUpConteudo" onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
                {props.componente}
            </div>
        </div>
    )
}