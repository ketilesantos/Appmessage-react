import React from 'react'
import './Comentario.css'
import {formatRelative} from 'date-fns'
import {ptBR} from'date-fns/locale'


const Comentario = (props) =>(
    <div className="comentario">
        <img src="./user.png" alt={props.name} /> 

        <div className="content"> 
            <h2> {props.name} </h2>
            <h3> {props.email} </h3>
            <p> {props.children} </p> 
            <small> <i> {formatRelative(props.data, new Date(), {locale: ptBR})}</i>  </small> 
            <button onClick={props.remove}>&times;</button>
        </div>
    </div>
) 

export default Comentario