import { Trending } from '../Components/Trending/Trending'
import { useApi } from '../CustomHooks/useApi'
import { Carousel } from '../Components/Carousel/Carousel'
import { PageFooter } from '../Components/Footer/Footer'
import { useModal } from '../CustomHooks/useModal'
import { ModalDetail } from '../Components/Modal/ModalDetail'
import { CloseModalButton } from '../Components/CloseModalButton/CloseModalButton'

const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p/w500'

function HomePage () {
  const {
    topRatedShows,
    loadingTopRated,
    trendingShows,
    loadingTrendingShows
  } = useApi()

  const {
    openModal,
    modalIsActive,
    closeModal
  } = useModal()
  console.log(topRatedShows)
  return (
    <>
      {(!loadingTrendingShows) && <Carousel trendingShows={trendingShows} modalIsActive={modalIsActive} openModal={openModal} />}
      <Trending>
        {!loadingTopRated &&
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
          })}
      </Trending>
      {modalIsActive && <ModalDetail />}
      {modalIsActive && <CloseModalButton closeModal={closeModal} />}
      <PageFooter />
    </>
  )
}

export { HomePage, BASE_URL_IMAGE }
