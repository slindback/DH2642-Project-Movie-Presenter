import "/src/style.css";


export function DetailsView(props) {

    return (
      <div className="detailsContainer">
        <img className="detailsBackground"
          src = {"https://image.tmdb.org/t/p/original" + props.movie.backdrop_path}
        />
        <div className="detailsContent">
          <div className="detailsInformation">
            <div className="detailsInformationTitle">
              <h1>{props.movie.title || ""}</h1>
              <p>{props.movie.original_title || ""}</p>
            </div>
            <div className="detailsInformationRating">
              <v-rating
                half-increments
                readonly
                length = "10"
                size = "32"
                model-value = {props.movie.vote_average}
                active-color = "warning"
              />
              <p>{props.movie.vote_average.toFixed(1)+"/10" || "?/10"}</p>
              <p>{props.movie.vote_count + " votes" || '? votes'}</p>
            </div>
            <div className="detailsInformationYear">
              <p>{props.movie.release_date.substring(0, 4) || 'Year not available'}</p>
            </div>
            <div className="detailsInformationGenres">
              {props.movie.genres.map((genre, index) => (
                <div key={index} className="detailsInformationGenresBubble">
                  <p>{genre.name}</p>
                </div>
              ))}
            </div>
            <div className="detailsInformationDescription">
              <p>{props.movie.overview || 'Movie description not available'}</p>
            </div>
          </div>
          <div className="detailsPoster">
            <img className="detailsPosterImage"
              src = {"https://image.tmdb.org/t/p/w300" + props.movie.poster_path}
              alt = {`${props.movie.title} poster`}
            />
            <button className="detailsPosterButton" onClick={handleAddOrRemoveMovieACB}>
              {(props.isInWatchLater() ? "Remove from" : "Add to") + " Watchlist"}
            </button>
          </div>
        </div>
      </div>
    );

    function handleAddOrRemoveMovieACB(event) {
      if (props.isInWatchLater()) {
        props.onMovieRemove();
      } else {
        props.onMovieAdd();
      };
      window.location.hash = "search";
    };
};
