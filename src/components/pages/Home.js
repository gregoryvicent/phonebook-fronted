import React, { useState, useEffect } from 'react'

import Card from '../Card'

import '../../styles/Home.css'

export default function Home() {
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState(false)

  const getContacts = () => {
    fetch(`http://localhost:3003/api`)
      .then(res => {
        if(!res.ok) throw Error(res.status)

        return res.json()
      })
      .then(res => setContacts(res))
      .catch((err) => setContacts({error: err, status: true, message: "Ocurrio un error al solicitar los datos."}))
  }

  const deleteContact = (id) => {
    const objetcFetch = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }

    fetch(`http://localhost:3003/api/${id}`, objetcFetch)
      .then(res => res.json())
      .then(() => getContacts())
      .catch(err => setError({error: err, status: true, message: "Ocurrio un error al solicitar los datos."}))
  }

  useEffect(() => getContacts(), [])

  return(
    <>
      <h1>Home</h1>
      <div className="Home-cardsSection">
        {
          error 
            ? (<h2 className="Home-message">{error.message}</h2>)
            : (contacts.length
              ? (contacts.map((element) => <Card key={element.id} id={element.id} name={element.name} phone={element.phone} deleteMethod={() => deleteContact(element.id)}/>)) 
              : (<h2 className="Home-message">No hay Contactos</h2>))
        }
      </div>
    </>
  )
}
