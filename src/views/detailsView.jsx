import "/src/style.css";

export default
function DetailsView(props) {
  console.log(">",props.movieDetails);
  return (
    <div className="detailsContainer">
      <div className="titleHeader">
        <div>
          <h1>{props.movieDetails.title || 'Title'}</h1>
          <p>{props.movieDetails.original_title || 'Original Title'}</p>
        </div>
        <div className="rating">
          <p>{props.movieDetails.vote_average ? `${props.movieDetails.vote_average}/10` : '?/10'}</p>
          <p>{props.movieDetails.vote_count ? `${props.movieDetails.vote_count} votes` : '? votes'}</p>
        </div>
      </div>
      <div className="year">
        <p>{props.movieDetails.release_date ? props.movieDetails.release_date.substring(0, 4) : 'Year not available'}</p>
      </div>
      <div className="pictures">
        <img className="moviePoster" src={"https://image.tmdb.org/t/p/w300"+props.movieDetails.poster_path} alt={`${props.movieDetails.title} poster`} />
        <img className="movieBackdrop" src={"https://image.tmdb.org/t/p/original"+props.movieDetails.backdrop_path} alt={`${props.movieDetails.title} backdrop`} />
      </div>
      <div className="genres">
        <p>{props.movieDetails.genres ? props.movieDetails.genres.join(', ') : 'Genres not available'}</p>
      </div>
      <div className="genre">
        <p>{props.movieDetails.overview ? `${props.movieDetails.overview}` : 'Movie description not available'}</p>
      </div>
    </div>
  );
}
