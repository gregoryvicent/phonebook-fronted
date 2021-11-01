import React, { useState, useEffect } from 'react'

import Message from './Message'

import '../styles/Form.css'

export default function FormAdd() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState(false)
  const [timeMessage, setTimeMessage] = useState(null)

  const addContact = (e) => {
    e.preventDefault()

    fetch(`http://localhost:3003/api`)
      .then(res => {
        if (!res.ok) throw Error(res.status)

        return res.json()
      })
      .then(res => {
        let newId = parseInt(res.pop().id) + 1

        const body = {
          id: newId.toString(),
          name: name,
          phone: phone
        }

        const objetcFetch = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        }

        fetch(`http://localhost:3003/api`, objetcFetch)
          .then(res => res.json())
          .then(res => {
            if(res.status === "200") {
              setMessage(true) 
            }
          })
          .then(() => {
            setTimeMessage(
              setTimeout(() => {
                setMessage(false)
              }, 4000)
            )
          })
      })
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeMessage)
    }
  }, [timeMessage])

  return (
    <>
      <form className="Form">
        <div className="Form-div">
          <label htmlFor="name">Name</label>
          <input className="Form-input" type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} required />
        </div>
        <div className="Form-div">
          <label htmlFor="phone">Phone</label>
          <input className="Form-input" type="text" id="phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
        </div>
        <button className="Form-submit" onClick={addContact}>Add</button>
      </form>
      {message ? <Message text="Contacto agregado con exito" /> : <></>}
    </>
  )
}
