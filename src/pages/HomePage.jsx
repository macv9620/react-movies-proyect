/* eslint-disable react/jsx-closing-tag-location */
import { Trending } from '../Components/Trending/Trending'
import { useApiHome } from '../CustomHooks/useApiHome'
import { Carousel } from '../Components/Carousel/Carousel'
import { useModal } from '../CustomHooks/useModal'
import { ModalDetail } from '../Components/Modal/ModalDetail'
import { CloseModalButton } from '../Components/CloseModalButton/CloseModalButton'
import { LoadingSpinner } from '../Components/LoadingSpinner/LoadingSpinner'

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

function HomePage () {
  const {
    topRatedShows,
    loadingTopRated,
    trendingShows,
    loadingTrendingShows
  } = useApiHome()

  const {
    openModal,
    modalIsActive,
    closeModal,
    modalContent
  } = useModal()
  // console.log(topRatedShows)
  return (
    <>
      {(loadingTrendingShows || loadingTopRated) && <LoadingSpinner />}
      {(!loadingTrendingShows) && <Carousel trendingShows={trendingShows} modalIsActive={modalIsActive} openModal={openModal} />}
      {!loadingTopRated && <Trending>
        {
          topRatedShows.map((show, i) => {
            const modalInfo = {
              id: show.id,
              imgURL: `${BASE_URL_IMAGE + show.poster_path}`,
              name: show.name,
              score: show.vote_average,
              overview: show.overview
            }
            return (
              <li key={i} className='movie-container'>
                <img
                  className='movie-img'
                  alt=''
                  title=''
                  src={BASE_URL_IMAGE + show.poster_path}
                  onClick={() => openModal(modalInfo)}
                />
              </li>
            )
          })
}
      </Trending>}
      {modalIsActive && <ModalDetail modalContent={modalContent} />}
      {modalIsActive && <CloseModalButton closeModal={closeModal} />}
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { HomePage, BASE_URL_IMAGE }
