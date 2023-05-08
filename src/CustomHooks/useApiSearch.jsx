import { useState, useEffect } from 'react'

import axios from 'axios'

const API_KEY = 'c27f4ca65812a399a89873d607d04fcb'
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    api_key: API_KEY
  }
})

const useApiSearch = (inputSearch) => {
  const [searchResult, setSearchResult] = useState('')

  useEffect(() => {
    if (inputSearch) {
      setTimeout(() => {
        console.log('Lamando API Search')
        api
          .get('search/tv', {
            params: {
              query: inputSearch
            }
          })
          .then((res) => res.data.results)
          .then((shows) => {
            setSearchResult(shows)
          })
          .catch((err) => console.log(err))
      }, 0)
    }
  }, [inputSearch])

  return { searchResult }
}

export { useApiSearch }
