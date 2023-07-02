import React from 'react'
import './SearchViewList.css'
import { Link } from 'react-router-dom'

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

// eslint-disable-next-line react/prop-types
const SearchViewList = ({ searchResult }) => {


  // eslint-disable-next-line react/prop-types
  const filteredImagesResult = searchResult.filter((show) => {
    return show.poster_path && show.name && show.first_air_date && show.overview
  })

  return (
    <>
      <div className='search-result-container'>
        {filteredImagesResult.map((show, i) => {
          return (
            <Link to={`/show-detail/${show.id}`} key={i}>
              <div className='item-container'>
                <div className='img-container'>
                  <img
                    className='search-movie-img'
                    src={BASE_URL_IMAGE + show.poster_path}
                  />
                </div>
                <div className='show-info'>
                  <div className='show-info-title'>
                    <p>{show.name}</p>
                  </div>
                  <div className='show-info-date'>
                    <p>{show.first_air_date}</p>
                  </div>
                  <div className='show-info-overview'>
                    <p>{show.overview}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}

      </div>
    </>
  )
}

export { SearchViewList }
