import './ShowCastList.css'

import React from 'react'

// eslint-disable-next-line react/prop-types
const ShowCast = ({ children }) => {
  return (
    <>
      <section className='horizontal-movieContainer'>
        <div className='trending-container'>
          <h2 className='trending-title'>Cast</h2>
          <ul className='trendingPreview-movieList'>{children}</ul>
        </div>
      </section>
    </>
  )
}

export { ShowCast }
