import './Trending.css'

// eslint-disable-next-line react/prop-types
function Trending ({ children }) {
  return (
    <>
      <section className='horizontal-movieContainer'>
        <div className='trending-container'>
          <h2 className='trending-title'>Top rated TV shows</h2>
          <ul className='trendingPreview-movieList'>{children}</ul>
        </div>
      </section>
    </>
  )
}

export { Trending }
