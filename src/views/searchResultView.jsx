import "/src/style.css";

export function SearchResultView(props) {
    return (
      <div className="searchResultGrid">
        {props.searchResults.map(renderCardCB)}
      </div>
    );

    function renderCardCB(movie) {
        return (
          <span className="searchResultCard" key={movie.title} onClick={handleSelectACB}>
            <img className="searchResultCardImage"
              src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            />
            <div className="searchResultCardText">
              {movie.title}
            </div>
          </span>
        );

        function handleSelectACB(event) {
            props.onSelect(movie);
            window.location.hash = "details";
        };
    };
};
