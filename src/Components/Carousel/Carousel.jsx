import {
  CCarousel,
  CCarouselItem,
  CCarouselCaption,
  CImage,
} from "@coreui/react";

import { BASE_URL_IMAGE } from "../../pages/HomePage";

import "./Carousel.css";

function Carousel({ trendingShows }) {
  return (
    <div className="back-ground-container">
      <div className="carousel-container">
        <CCarousel controls indicators dark>
          {trendingShows.map((show, i) => {
            return (
              <CCarouselItem
              key={i}>
                <CImage
                  align="center"
                  className="d-block w-25"
                  src={
                    BASE_URL_IMAGE + show.poster_path
                  }
                  alt="slide 1"
                />
                <CCarouselCaption className="d-none d-md-block">
                  <h5 className="show-title">Trending Shows</h5>
                </CCarouselCaption>
              </CCarouselItem>
            );
          })}
        </CCarousel>
      </div>
    </div>
  );
}

export { Carousel };
