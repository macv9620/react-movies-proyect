import { useEffect, useState } from 'react'

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

function useApi () {
  const [topRatedShows, setTopRatedShows] = useState('')
  const [loadingTopRated, setLoadingTopRated] = useState(true)

  const [trendingShows, setTrendingShows] = useState('')
  const [loadingTrendingShows, setLoadingTrendingShows] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      api
        .get('tv/top_rated')
        .then((res) => res.data.results)
        .then((shows) => {
          setTopRatedShows(shows)
          setLoadingTopRated(false)
        })
        .catch((err) => console.log(err))
    }, 0)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      api
        .get('trending/tv/day')
        .then((res) => res.data.results.slice(0, 10))
        .then((trendingShows) => {
          setTrendingShows(trendingShows)
          setLoadingTrendingShows(false)
          console.log(trendingShows)
        })

        .catch((err) => console.log(err))
    }, 0)
  }, [])

  return { topRatedShows, loadingTopRated, trendingShows, loadingTrendingShows }
}

export { useApi }
