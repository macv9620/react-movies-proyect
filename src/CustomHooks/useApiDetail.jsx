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

function useApiDetail (id) {
  const [showDetail, setShowDetail] = useState(null)
  // eslint-disable-next-line no-unused-vars
  const [loadingShowDetail, setLoadingShowDetail] = useState(false)

  // const [showId, setShowId] = useState('1396')

  useEffect(() => {
    setTimeout(() => {
      console.log('Lamando API ShowDetail')
      console.log(id)
      api
        .get(`tv/${id}`)
        .then((res) => {
          setShowDetail(res)
          setLoadingShowDetail(false)
        })
        .catch((err) => console.log(err))
    }, 0)
  }, [id])

  return { showDetail }
}

export { useApiDetail }
