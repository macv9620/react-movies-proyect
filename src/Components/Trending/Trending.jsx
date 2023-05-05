import "./Trending.css";

// eslint-disable-next-line react/prop-types
function Trending({ children }) {
  return (
    <>
      <section className="">
        <div className="">
          <h2>Main TV Shows</h2>
        </div>
        <article className="trendingPreview-movieList">{children}</article>
      </section>
    </>
  );
}

export { Trending };
