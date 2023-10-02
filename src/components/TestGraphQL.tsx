import React, { useEffect } from 'react'

import { useQuery } from '@apollo/client'
import { gql } from '__generated__/gql'
import { MediaType, InputMaybe } from '__generated__/graphql'
import { GET_HELLO_HELLO } from 'apollo/Operations/client/Queries'

import { getApolloClient } from 'apollo'

import './style.scss'

const GET_MEDIA = gql(/* GraphQL */ `
  query GetMedia($id: Int!) {
    Media(id: $id) {
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

const TestGraphQL = () => {
  const { data } = useQuery(GET_MEDIA, { variables: { id: 145140 } })
  const { data: data_02 } = useQuery(GET_HELLO_HELLO, {
    variables: {
      page: 1,
      type: MediaType.Anime,
      genres: ['Action'],
    },
  })

  useEffect(() => {
    if (data_02) {
      console.log({ data, data_02 })
    }
  }, [data_02])

  return (
    <div className="haha">
      Test GraphQL
      <button
        onClick={async () => {
          const c = await getApolloClient()
          console.log(c)
        }}
      >
        Check
      </button>
    </div>
  )
}

export default TestGraphQL
