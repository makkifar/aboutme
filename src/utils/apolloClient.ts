import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: `https://4yh9ej0t36.execute-api.eu-central-1.amazonaws.com/production/graphql`
})

const client = new ApolloClient({
  cache,
  link
})

export default client
