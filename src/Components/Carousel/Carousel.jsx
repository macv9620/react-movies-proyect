import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage
} from '@coreui/react'
import { BASE_URL_IMAGE } from '../../pages/HomePage'
import './Carousel.css'

function Carousel ({ trendingShows, openModal, screenWidth }) {
  return (
    <div className='back-ground-container'>
      <div className='carousel-container'>
        <CCarousel controls indicators dark>
          {trendingShows.map((show, i) => {
            const modalInfo = {
              id: show.id,
              imgURL: `${BASE_URL_IMAGE + show.poster_path}`,
              name: show.name,
              score: show.vote_average,
              overview: show.overview
            }
            return (
              <CCarouselItem
                key={i}
                onClick={() => {
                  openModal(modalInfo)
                }}
              >
                <CImage
                  align='center'
                  className={screenWidth < 600
                    ? (
                        screenWidth < 470
                          ? 'd-block w-75 carousel-img'
                          : 'd-block w-50 carousel-img'
                      )
                    : 'd-block w-25 carousel-img'}
                  src={
                    BASE_URL_IMAGE + show.poster_path
                  }
                  alt='slide 1'

                />
                <CCarouselCaption className='d-none d-md-block'>
                  <h5 className='show-title'>Trending Shows</h5>
                </CCarouselCaption>
              </CCarouselItem>
            )
          })}
        </CCarousel>
      </div>
    </div>
  )
}

export { Carousel }
