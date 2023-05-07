/* eslint-disable react/prop-types */
import React from 'react'
import './MovieDetail.css'
// import { useParams } from 'react-router-dom'
// import { useApiDetail } from '../../CustomHooks/useApiDetail'

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

const MovieDetail = ({ showDetail }) => {
  // const { id } = useParams()
  // const { showDetail } = useApiDetail(id)
  if (!showDetail) {
    return <p>Cargando</p>
  }
  // console.log(showDetail)
  return (
    <div
      style={{
        backgroundImage:
          `url(${BASE_URL_IMAGE + showDetail.data.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='movie-detail-background'>
        <div className='movie-detail-container'>
          <div className='movie-detail-img'>
            <img src={BASE_URL_IMAGE + showDetail.data.poster_path} />
          </div>
          <div className='movie-detail-info'>
            <div className='movie-detail-info-title'>
              <h1>{showDetail.data.name + ' ' + `(${showDetail.data.first_air_date.slice(0, 4)})`}</h1>
            </div>
            <div className='movie-first-air'>
              <h1>First air date: {showDetail.data.first_air_date}</h1>
            </div>
            <div className='movie-overview'>
              <h1>Overview</h1>
              <h1>{showDetail.data.overview}</h1>
            </div>
            <div className='movie-season-chapters'>
              <h1>Number of seasons: {showDetail.data.number_of_seasons}</h1>
              <h1>Number of apisodes: {showDetail.data.number_of_episodes}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MovieDetail }
