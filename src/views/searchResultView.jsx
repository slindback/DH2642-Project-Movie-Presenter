import "/src/style.css";


export function SearchResultView(props) {
  const sortedResults = sortSearchResults(props.selectedSortOption, props.searchResults);

    return (
      <div className="searchResultGrid">
        {sortedResults.map(renderCardCB)}
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
