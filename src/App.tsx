import 'core-js/stable'
import 'regenerator-runtime/runtime'

import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import LandingPage from './containers/LandingPage'

// import asyncComponent from './hoc/asyncComponent'

// const AsyncBlog = asyncComponent(() => {
//   return import('./containers/Blog')
// })

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={LandingPage} />
        </div>
      </div>
    )
  }
}

export default App
