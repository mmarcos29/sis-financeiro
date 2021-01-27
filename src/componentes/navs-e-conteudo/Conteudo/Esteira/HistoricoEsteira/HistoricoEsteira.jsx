import React from 'react'
import { Levels, Digital, Spinner } from 'react-activity';
import 'react-activity/dist/react-activity.css';
import './HistoricoEsteira.css'

export default props => {
    if(props.item){
        return (
            <div className="HistoricoEsteira">
                <Spinner size={30}  color="blue" speed={0.5}/>
            </div>
        )
    }else{
        return null
    }
}
