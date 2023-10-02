import { HttpLink } from '@apollo/client'

/*const protocol = process.env.REACT_APP_GRAPHQL_PROTOCOL
const host = process.env.REACT_APP_GRAPHQL_HOST
const port = process.env.REACT_APP_GRAPHQL_PORT
const version = process.env.REACT_APP_GRAPHQL_VERSION
const route = process.env.REACT_APP_GRAPHQL_ROUTE*/

const defaultURI = 'https://graphql.anilist.co/'
//const uri = `${protocol}://${host}:${port}/${version}/${route}`

const serverLink = new HttpLink({
  uri: defaultURI,
})

export default serverLink
