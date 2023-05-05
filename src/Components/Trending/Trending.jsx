import "./Trending.css";

// eslint-disable-next-line react/prop-types
function Trending({ children }) {
  return (
    <>
      <section className="horizontal-movieContainer">
        <div>
          <h2 className="trending-title">Main TV Shows</h2>
        </div>
        <article className="trendingPreview-movieList">{children}</article>
      </section>
    </>
  );
}

export { Trending };
