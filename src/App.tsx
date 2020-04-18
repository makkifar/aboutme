import "core-js/stable"
import "regenerator-runtime/runtime"

import React, { Component } from "react"
import { Link, Route } from "react-router-dom"

import CV from "./containers/CV"
//import Blog from "./containers/Blog";
import asyncComponent from "./hoc/asyncComponent"

const AsyncBlog = asyncComponent(() => {
  return import("./containers/Blog")
})

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">CV</Link> |<Link to="/blog">Blog</Link>
        </div>
        <div>
          <Route path="/" exact component={CV} />
          <Route path="/blog" component={AsyncBlog} />
        </div>
      </div>
    )
  }
}

export default App
