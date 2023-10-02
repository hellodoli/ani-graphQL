import { InMemoryCache } from '@apollo/client'

const initCache = () => {
  const cache = new InMemoryCache({
    typePolicies: {
      Media: {
        fields: {
          title: {
            read(value) {
              console.log({ value })
              return {
                ...value,
                romaji: 'Phát custom <romaji> field.',
              }
            },
          },
        },
      },
    },
  })
  return cache
}

export default initCache
