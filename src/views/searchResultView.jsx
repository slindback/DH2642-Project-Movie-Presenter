import "/src/style.css";

export function SearchResultView(props) {
  return (
    <div className="searchResultGrid">
      {props.searchResults.map(showResultCB)}
    </div>
  );

  function showResultCB(result) {
    return (
      <span className="searchResultCard" onClick={handleSelectResultACB} key={result.title}>
        <img className="searchResultCardImage" src={"https://image.tmdb.org/t/p/w300" + result.poster_path} alt={result.title} />
        <div className="searchResultCardText">
          <p className="searchResultCardTitle">{result.title}</p>
        </div>
      </span>
    );

    function handleSelectResultACB(event) {
      props.onSelectResult(result);
      window.location.hash = "details";
    }
  }
}
