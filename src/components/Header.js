import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

export default function Header() {
  return(
    <header className="header">
      <nav>
        <ul className="header-nav">
          <li className="header-item"><Link to="/phonebook-fronted">Home</Link></li>
          <li className="header-item"><Link to="/add">Agregar</Link></li>
        </ul>
      </nav>
    </header>
  )
}
