import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import initCache from './Cache'
import link from './Middlewares'

let client: ApolloClient<NormalizedCacheObject>

export const getApolloClient = async () => {
  console.log('getApolloClient', { client })
  if (client) return client

  const cache = initCache()

  const apolloClient = new ApolloClient({
    link,
    cache,
  })

  client = apolloClient

  return apolloClient
}
