import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
// font Awesome
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faPencilAlt,
  faArrowCircleLeft,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons"

// components
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Contacts from "./components/contacts/Contacts"
import AddContact from "./components/contacts/AddContact"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"

import Test from "./components/test/Test"

class App extends Component {
  render() {
    library.add(faPencilAlt, faArrowCircleLeft, faAngleDown)
    return (
      <Router>
        <div className='App'>
          <h1>Contact Manager</h1>
          <Header branding='Contact Manager' />
          <Switch>
            <Route exact path='/' component={Contacts} />
            <Route exact path='/contact/add' component={AddContact} />
            <Route exact path='/about' component={About} />
            <Route path='/test' component={Test} />
            <Route path='/' component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
