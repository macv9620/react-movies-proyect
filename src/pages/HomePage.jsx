import { Trending } from '../Components/Trending/Trending'
import { useApi } from '../CustomHooks/useApi'
import { Carousel } from '../Components/Carousel/Carousel'
import { PageFooter } from '../Components/Footer/Footer'

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

function HomePage () {
  const {
    topRatedShows,
    loadingTopRated,
    trendingShows,
    loadingTrendingShows
  } = useApi()

  return (
    <>
      {!loadingTrendingShows && <Carousel trendingShows={trendingShows} />}
      <Trending>
        {!loadingTopRated &&
          topRatedShows.map((show, i) => {
            return (
              <li key={i} className='movie-container'>
                <img
                  className='movie-img'
                  alt=''
                  title=''
                  src={BASE_URL_IMAGE + show.poster_path}
                />
              </li>
            )
          })}
      </Trending>
      <PageFooter />
    </>
  )
}

export { HomePage, BASE_URL_IMAGE }
