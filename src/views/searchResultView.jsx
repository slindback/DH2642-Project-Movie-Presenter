import "/src/style.css";

export function SearchResultView(props) {
    return (
      <div className="searchResultGrid">
        {props.searchResults.map(renderCardCB)}
      </div>
    );

    function renderCardCB(movie) {
        return (
          <div className="searchResultCard" key={movie.title} onClick={handleSelectACB}>
            <img className="searchResultCardBackground"
              src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            />
            <div className="searchResultCardContent">
              <v-rating className="searchResultCardRating"
                half-increments
                readonly
                length = "10"
                size = "30"
                model-value = {movie.vote_average}
                active-color = "warning"
              />
              <div className="searchResultCardText">
                {movie.title}
              </div>
            </div>
          </div>
        );

        function handleSelectACB(event) {
            props.onSelect(movie);
            window.location.hash = "details";
        };
    };
};
