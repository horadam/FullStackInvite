import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../store'
import RandomUser from './RandomUser'
import Going from './Going'
import NotGoing from './NotGoing'

import '../styles/base.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div id="container">
            <Route exact path="/" component={RandomUser} />
            <Route path="/going" component={Going} />
            <Route path="/notgoing" component={NotGoing} />  
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
