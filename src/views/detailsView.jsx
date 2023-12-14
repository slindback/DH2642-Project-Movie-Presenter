import "/src/style.css";


export function DetailsView(props) {

    return (
      <div className="detailsContainer">

        <img className="detailsBackground"
          src = {"https://image.tmdb.org/t/p/original" + props.movies.backdrop_path}
          alt = {`${props.movies.title} backdrop`}
        />

        <div className="detailsContent">
          <div className="detailsInformation">

            <div className="detailsInformationTitle">
              <h1>{props.movies.title || ""}</h1>
              <p>{props.movies.original_title || ""}</p>
            </div>

            <div className="detailsInformationRating">
              <p>{props.movies.vote_average.toFixed(1)+"/10" || "?/10"}</p>
              <p>{props.movies.vote_count + " votes" || '? votes'}</p>
            </div>

            <div className="detailsInformationYear">
              <p>{props.movies.release_date.substring(0, 4) || 'Year not available'}</p>
            </div>

            <div className="detailsInformationGenres">
              {props.movies.genres.map((genre, index) => (
                <div key={index} className="detailsInformationGenresBubble">
                  <p>{genre.name}</p>
                </div>
              ))}
            </div>
            <div className="detailsInformationDescription">
              <p>{props.movies.overview || 'Movie description not available'}</p>
            </div>
          </div>

          <div className="detailsPoster">
            <img className="detailsPosterImage"
              src = {"https://image.tmdb.org/t/p/w300" + props.movies.poster_path}
              alt = {`${props.movies.title} poster`}
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
