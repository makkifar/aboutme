import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { LandingPage } from './components/landing-page'
import { BlogPage } from './components/blog-page'
import './assets/css/material-kit-react.css'
import asyncComponent from './hoc/asyncComponent'

const AsyncBlogPage = asyncComponent(() => {
  return import('./components/blog-page')
})

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Route path="/" exact component={LandingPage} />
          <Route path="/blog" component={AsyncBlogPage} />
          <Route path="/article/:id" exact component={BlogPage} />
        </div>
      </div>
    )
  }
}

export default App
