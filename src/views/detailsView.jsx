import "/src/style.css";

export default
function DetailsView(props) {
  return (
    <div className="detailsContainer">
      <button className="searchButton" onClick={navigateToSearchACB}>
        <img
          src="/img/misc/left-arrow-icon.png"
          alt="Back"
          className="searchButtonIcon"
        />
      </button>
      <div className="titleHeader">
        <div>
          <h1>{props.movieDetails.title || 'Title'}</h1>
          <p>{props.movieDetails.original_title || 'Original Title'}</p>
        </div>
        <div className="rating">
          <p>{props.movieDetails.vote_average.toFixed(1)+"/10" || "?/10"}</p>
          <p>{props.movieDetails.vote_count + " votes" || '? votes'}</p>
        </div>
      </div>
      <div className="year">
        <p>{props.movieDetails.release_date.substring(0, 4) || 'Year not available'}</p>
      </div>
      <div className="pictures">
        <img className="moviePoster" src={"https://image.tmdb.org/t/p/w300"+props.movieDetails.poster_path} alt={`${props.movieDetails.title} poster`} />
        <img className="movieBackdrop" src={"https://image.tmdb.org/t/p/original"+props.movieDetails.backdrop_path} alt={`${props.movieDetails.title} backdrop`} />
      </div>
      <div className="genres">
        <p>{props.movieDetails.genres.map(genre => genre.name).join(', ') || 'Genres not available'}</p>
      </div>
      <div className="genre">
        <p>{props.movieDetails.overview || 'Movie description not available'}</p>
      </div>
    </div>
  );
}

function navigateToSearchACB() {
  window.location.hash="#/search";
}
