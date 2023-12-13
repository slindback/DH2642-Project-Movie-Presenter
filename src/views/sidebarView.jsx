import "/src/style.css";


export function SidebarView(props) {

    return (
    <div>
      <div className="sidebarText">
        <h3>Watchlist</h3>
      </div>
      <div className="sidebarTable">
        {props.movies.map(showBookmarkCB)}
      </div>
    </div>
  );

  function showBookmarkCB(movie) {
    return (
      <div key={movie.id} className="sidebarTableRow" onClick={() => handleSelectBookmarkACB(movie)}>
      <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />

      </div>
    );

    function handleSelectBookmarkACB(movie) {
      props.onSelectBookmark(movie);
      window.location.hash = "details";
    }
  }
}
