import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { gql } from '__generated__/gql'

import './style.scss'

const TEST_QUERY = gql(/* GraphQL */ `
  query GetTestExampleQuery {
    Media(id: 129188) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
    }
  }
`)

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const { data } = useQuery(TEST_QUERY)

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <button
        onClick={() => {
          console.log('log: ', { data })
        }}
      >
        Log
      </button>
      <input
        className="ani-filter-search-input"
        type="search"
        value={search}
        onChange={onChange}
        autoComplete="off"
      />
    </>
  )
}

export default SearchInput
