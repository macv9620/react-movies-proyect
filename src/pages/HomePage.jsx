
import { Trending } from "../Components/Trending/Trending";
import { useApi } from "../CustomHooks/useApi";

function HomePage() {
  const { trendingShows, loading } = useApi();
  console.log(trendingShows);
  return (
    <>
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
