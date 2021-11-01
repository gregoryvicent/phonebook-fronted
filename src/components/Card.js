import React from 'react'
import { Link } from 'react-router-dom'

import user from '../img/user.png'

import '../styles/Card.css'

export default function Card(props) {
  return(
    <div className="Card">
      <figure>
        <img 
          src={user}
          alt="Usuario"
          className="Card-img"
        />
      </figure>
      <h3 className="Card-name">Nombre: {props.name}</h3>
      <p>Teléfono: {props.phone}</p>
      <div className="Card-buttonBox">
        <Link to={`/update/contact/${props.id}`} className="Card-updateBt">Actualizar</Link>
        <button onClick={props.deleteMethod}className="Card-deleteBt">Eliminar</button>
      </div>
    </div>
  )
}
