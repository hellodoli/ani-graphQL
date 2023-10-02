import React from 'react'
import TestGraphQL from 'components/TestGraphQL'

function App() {
  console.log({ eennvv: process.env, env: process.env.REACT_APP_GRAPHQL_PORT })
  return (
    <div className="App">
      <header className="App-header">Anime check</header>
      <TestGraphQL />
      <div>Mượt mà</div>
    </div>
  )
}

export default App
