import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'

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

ReactDOM.render(app, document.getElementById('root'))
