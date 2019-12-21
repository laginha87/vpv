import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from '~components/App'
import { store } from '~store'
import graphqlSchema from '../graphql.schema.json'

const client = new ApolloClient({
  cache: new InMemoryCache({
  }),
  typeDefs: graphqlSchema,
  uri: `${process.env.API_HOST}/graphql`
})

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
