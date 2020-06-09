import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { createBrowserHistory } from 'history'

import App from './App'
import client from './utils/apolloClient'
import './index.css'

const app = (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
)

const history = createBrowserHistory()
const path = (/#!(\/.*)$/.exec(location.hash) || [])[1]
if (path) {
  history.replace(path)
}

ReactDOM.render(app, document.getElementById('root'))
