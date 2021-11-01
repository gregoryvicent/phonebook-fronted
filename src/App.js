import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/pages/Home'
import Add from './components/pages/Add'
import Update from './components/pages/Update'
import Layout from './components/Layout'

import './styles/global.css'

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add" component={Add}/>
          <Route path="/update" component={Update}/>
        </Switch>
      </Layout>
    </Router>
  )
}
