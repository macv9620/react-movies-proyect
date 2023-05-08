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
  // castList, loadingCast
  // const [loadingShowDetail, setLoadingShowDetail] = useState(false)
  const [showDetail, setShowDetail] = useState(null)
  const [showSeasonsDetail, setShowSeasonsDetail] = useState(null)

  const [castList, setCastList] = useState(null)
  const [loadingCast, setLoadingCast] = useState(true)
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
    setTimeout(() => {
      console.log('Lamando API CastDetail')
      console.log(id)
      api
        .get(`tv/${id}/aggregate_credits`)
        .then((res) => {
          setCastList(res)
          setLoadingCast(false)
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
                setTimeout(() => {
                  const orderedSeasons = seasonsCompleteDetail.sort((a, b) => {
                    return Number(a.data.season_number) - Number(b.data.season_number)
                  })
                  setShowSeasonsDetail(orderedSeasons)
                }, 0)
                console.log(seasonsCompleteDetail)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }
    }, 0)
  }, [showDetail, id])

  return { showDetail, showSeasonsDetail, castList, loadingCast }
}

export { useApiDetail }
