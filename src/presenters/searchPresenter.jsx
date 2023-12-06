import SearchFormView from "/src/views/searchFormView.jsx";
import SearchResultView from "/src/views/searchResultView.jsx";


export default function Search(props) {

  function handleSearchRequestACB() {
    props.model.doSearch(props.model.searchParams);
  };

  function handleInputChanegACB(query) {
    props.model.setSearchQuery(query);
  };

  return (
    <div className="searchContainer">
      <div className="searchFormContainer">
        <SearchFormView
          text = {props.model.searchParams.query}
          onSearchRequest = {handleSearchRequestACB}
          onInputChange = {handleInputChanegACB}
        />
      </div>
      <div className="searchResultContainer">
        <h2>Search Results</h2>
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

      function handleSelectResultACB(dish) {
        props.model.setCurrentMovie(dish.id)
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
