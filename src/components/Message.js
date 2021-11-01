import React from 'react'

import '../styles/Message.css'

export default function Message(props) {
  return(
    <div className="Message">
      <p className="Message-text">{props.text}</p>
    </div>    
  )
}