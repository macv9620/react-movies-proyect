import React from 'react'
import { MovieDetail } from '../Components/MovieDetail/MovieDetail.jsx'
import { SeasonsInfo } from '../Components/SeasonsInfo/SeasonsInfo.jsx'
import { useApiDetail } from '../CustomHooks/useApiDetail.jsx'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const { id } = useParams()
  const { showDetail, showSeasonsDetail } = useApiDetail(id)
  return (
    <>
      <MovieDetail showDetail={showDetail} />
      <SeasonsInfo showSeasonsDetail={showSeasonsDetail} />
    </>
  )
}

export { DetailPage }
