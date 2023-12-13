import "/src/style.css";


export function DetailsView(props) {
  
    return (
      <div className="detailsContainer">
        <div className="detailsHeader">
          <div className="detailsHeaderTitle">
            <h1>{props.movieDetails.title || 'Title'}</h1>
            <p>{props.movieDetails.original_title || 'Original Title'}</p>
          </div>
          <div className="detailsHeaderRating">
            <p>{props.movieDetails.vote_average.toFixed(1)+"/10" || "?/10"}</p>
            <p>{props.movieDetails.vote_count + " votes" || '? votes'}</p>
          </div>
        </div>

        <div className="detailsYear">
          <p>{props.movieDetails.release_date.substring(0, 4) || 'Year not available'}</p>
        </div>

        <div className="detailsImages">
          <img className="detailsImagesPoster"
            src = {"https://image.tmdb.org/t/p/w300" + props.movieDetails.poster_path}
            alt = {`${props.movieDetails.title} poster`}
          />
          <img className="detailsImagesBackdrop"
            src = {"https://image.tmdb.org/t/p/original" + props.movieDetails.backdrop_path}
            alt = {`${props.movieDetails.title} backdrop`}
          />
        </div>

        <div className="detailsGenres">
          <p>{props.movieDetails.genres.map(genre => genre.name).join(', ') || 'Genres not available'}</p>
        </div>

        <div className="detailsDescription">
          <p>{props.movieDetails.overview || 'Movie description not available'}</p>
        </div>
      </div>
    );
};

function navigateToSearchACB() {
    window.location.hash = "search";
};
