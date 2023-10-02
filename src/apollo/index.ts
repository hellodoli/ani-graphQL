import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import link from './Middlewares'

let client: ApolloClient<NormalizedCacheObject>

export const getApolloClient = async () => {
  console.log('getApolloClient', { client })
  if (client) return client

  const apolloClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  })

  client = apolloClient

  return apolloClient
}
