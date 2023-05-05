import {
  CCarousel,
  CCarouselItem,
  CImage,
} from "@coreui/react";

import "./Carousel.css";

function Carousel() {
  return (
    <div className="back-ground-container">
      <div className="carousel-container">
        <CCarousel controls indicators dark>
          <CCarouselItem>
            <CImage
              align="center"
              className="d-block w-25"
              src={
                "https://static.tvmaze.com/uploads/images/original_untouched/272/681441.jpg"
              }
              alt="slide 1"
            />

          </CCarouselItem>

          <CCarouselItem>
            <CImage
              align="center"
              className="d-block w-25"
              src={
                "https://static.tvmaze.com/uploads/images/original_untouched/48/122260.jpg"
              }
              alt="slide 1"
            />

          </CCarouselItem>

          <CCarouselItem>
            <CImage
              align="center"
              className="d-block w-25"
              src={
                "https://static.tvmaze.com/uploads/images/original_untouched/164/412464.jpg"
              }
              alt="slide 1"
            />

          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
}

export { Carousel };
