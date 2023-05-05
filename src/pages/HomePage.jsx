
import { Trending } from "../Components/Trending/Trending";
import { useApi } from "../CustomHooks/useApi";
import { Carousel } from "../Components/Carousel/Carousel";

function HomePage() {
  const { trendingShows, loading } = useApi();
  console.log(trendingShows);
  return (
    <>
      <Carousel/>
      <Trending>
        {!loading && trendingShows.map((show) => (
          <>
            <div className="movie-container">
              <img
                className="movie-img"
                alt=""
                title=""
                src={show.image.medium}
              />
            </div>
          </>
        ))}
      </Trending>
    </>
  );
}

export { HomePage };
