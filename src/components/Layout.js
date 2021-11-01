import React from 'react'

import Header from './Header'

export default function Layout(props) {
  return(
    <>
      <Header />
      <section>
          {props.children}
      </section>
    </>
  )
}
