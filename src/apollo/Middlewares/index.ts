import { ApolloLink, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import serverLink from './server'

const activityMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => {
    return {
      headers: {
        ...headers,
      },
    }
  })
  return forward(operation)
})

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, extensions }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${extensions?.code}`,
      )
      return null
    })
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

const link = from([
  /*custom request*/
  activityMiddleware,
  /* custom response */
  errorLink,
  /* HttpLink */
  serverLink,
])

export default link
