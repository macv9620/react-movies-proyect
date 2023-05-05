import "./Trending.css";

// eslint-disable-next-line react/prop-types
function Trending({ children }) {
  return (
    <>
      <section className="horizontal-movieContainer">
        <div className="trending-container">
          <h2 className="trending-title">Main TV Shows</h2>
        <article className="trendingPreview-movieList">{children}</article>
        </div>
      </section>
    </>
  );
}

export { Trending };
