import React, { useState, useEffect } from 'react'

import Message from './Message'

import '../styles/Form.css'

export default function FormUpdate() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [id, setId] = useState('')
  const [message, setMessage] = useState(false)
  const [timeMessage, setTimeMessage] = useState(null)

  const updateContact = (e) => {
    e.preventDefault()

    const body = {
      id: id,
      name: name,
      phone: phone
    }
    
    const objetcFetch = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
    
    fetch(`http://localhost:3003/api/${id}`, objetcFetch)
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
      .catch(err => {
        console.log(err)
      }) 
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    const url = window.location.toString().split('/').pop()

    fetch(`http://localhost:3003/api/${url}`, {signal})
      .then(res => res.json())
      .then(res => {
        setId(res.id)
        setName(res.name)
        setPhone(res.phone)
      })
      .catch((err) => console.log(err))

    return () => {
      controller.abort()
    }
  }, [])

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
        <button className="Form-submit" onClick={updateContact}>Update</button>
      </form>
      {message ? <Message text="Contacto actualizado con exito" /> : <></>}
    </>
  )
}
