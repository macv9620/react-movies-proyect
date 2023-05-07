import React from 'react'
import './SeasonsInfo.css'

// eslint-disable-next-line react/prop-types
const SeasonsInfo = ({ showSeasonsDetail }) => {
  console.log('Resultado detalle de temporadas', showSeasonsDetail)

  if (!showSeasonsDetail) {
    return (
      <p>Cargando</p>
    )
  }

  return (
    <div className='seasons-container'>
      {showSeasonsDetail.map((season, i) => {
        return (
          <div className='season-container' key={i}>
            <p className='season-name'>{season.data.name}</p>
            {season.data.episodes.map((episode, i) => {
              return (
                <div className='episodes-container' key={i}>
                  <p className='episode-name'>{episode.name}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export { SeasonsInfo }
