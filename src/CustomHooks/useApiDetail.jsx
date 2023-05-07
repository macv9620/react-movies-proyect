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
  // const [loadingShowDetail, setLoadingShowDetail] = useState(false)
  const [showDetail, setShowDetail] = useState(null)
  const [showSeasonsDetail, setShowSeasonsDetail] = useState(null)
  // hacer varias peticiones
  useEffect(() => {
    setTimeout(() => {
      console.log('Lamando API ShowDetail')
      console.log(id)
      api
        .get(`tv/${id}`)
        .then((res) => {
          setShowDetail(res)
          // console.log(showDetail)
          // setLoadingShowDetail(false)
        })
        .catch((err) => console.log(err))
    }, 0)
  }, [id])

  useEffect(() => {
    // console.log(showDetail)
    setTimeout(() => {
      if (showDetail) {
        console.log('showDetail', showDetail)
        console.log('Lamando API ShowSeasonsDetail')
        const numberOfSeasons = showDetail.data.number_of_seasons

        const seasonsCompleteDetail = []

        for (let seasonNumber = 1; seasonNumber <= numberOfSeasons; seasonNumber++) {
          console.log(seasonNumber)
          api.get(`tv/${id}/season/${seasonNumber}`)
            .then((res) => {
              seasonsCompleteDetail.push(res)
              if (seasonNumber === numberOfSeasons) {
                setShowSeasonsDetail(seasonsCompleteDetail)
                console.log(seasonsCompleteDetail)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }

        // api.get('tv/1396/season/1')
        //   .then((res) => {
        //     setShowSeasonsDetail(res)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
        // console.log(showSeasonsDetail)
      }
    }, 0)
  }, [showDetail, id])

  return { showDetail, showSeasonsDetail }
}

export { useApiDetail }
