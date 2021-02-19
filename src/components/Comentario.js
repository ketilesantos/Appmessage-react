import React from 'react'
import './Comentario.css'


const Comentario = (props) =>(
    <div className="comentario">
        <h2> {props.name} </h2>
        <h3> {props.email} </h3>
        <p> {props.children} </p> 
        <small> <i> {props.data.toString()}</i>  </small> 
        <button onClick={props.remove}>&times;</button>
    </div>
) 

export default Comentario