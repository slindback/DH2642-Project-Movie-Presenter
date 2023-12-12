import SearchFormView from "/src/views/searchFormView.jsx";
import SearchResultView from "/src/views/searchResultView.jsx";


export default function Search(props) {

  function handleSearchRequestACB() {
    props.model.doSearch(props.model.searchParams);
  };

  function handleInputUpdateACB(query) {
    props.model.setSearchQuery(query);
  };

  return (
    <div className="searchContainer">
      <div className="searchFormContainer">
        <SearchFormView
          text = {props.model.searchParams.query}
          onSearchRequest = {handleSearchRequestACB}
          onInputUpdate = {handleInputUpdateACB}
        />
      </div>
      <div className="searchResultContainer">
        <h2>{props.model.searchParams.query ? 'Search Results' : 'Top movies today'}</h2>
        {renderResultsView()}
      </div>
    </div>
  );

  function renderResultsView() {

    if (!props.model.searchResultPromiseState.promise) {
      return "No data...";
    }

    if (props.model.searchResultPromiseState.error) {
      return props.model.searchResultPromiseState.error;
    }

    if (props.model.searchResultPromiseState.data) {

      function handleSelectResultACB(movie) {
        props.model.setCurrentMovie(movie.id)
      };
      return (
        <SearchResultView
          searchResults = {props.model.searchResultPromiseState.data}
          onSelectResult = {handleSelectResultACB}
        />
      );
    }

    return (
      <img className="loadingImage"
        src = "https://www.elevateyourwellness.org/Content/image/loader2.gif"
      />
    );
  }
}
