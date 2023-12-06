import "/src/style.css";


export default
function SearchResultView(props) {
  return (
    <div className="searchResultGrid">
      {props.searchResults.map(showResultCB)}
    </div>
  )

  function showResultCB(result) {
    return (
      <span className="searchResultCard" key={result.title} onClick={selectResultACB}>
        <img className="searchResultImage"
          src={`https://image.tmdb.org/t/p/w300${result.poster_path}`}
        />
        <div className="searchResultText">
          {result.title}
        </div>
      </span>
    )

    function selectResultACB(event) {
      props.onSelectResult(result);
      window.location.hash="#/details";
    }
  }
}
