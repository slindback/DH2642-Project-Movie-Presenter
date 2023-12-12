import { SearchFormView } from "/src/views/searchFormView.jsx";
import { SearchResultView } from "/src/views/searchResultView.jsx";

import { renderPromiseState } from "/src/utils";


export function Search(props) {

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
          <h2>{props.model.searchParams.query ? "Search Results" : "Top movies today"}</h2>
          {renderResultsViewCB()}
        </div>
      </div>
    );

    function renderResultsViewCB() {

        function searchResultViewRenderCB() {

            function handleSelectResultACB(movie) {
                props.model.setCurrentMovie(movie.id);
            };

            return (
              <SearchResultView
                searchResults = {props.model.searchResultPromiseState.data}
                onSelectResult = {handleSelectResultACB}
              />
            );
        };

        return renderPromiseState(
            props.model.searchResultPromiseState,
            searchResultViewRenderCB,
        );
    };

    function handleSearchRequestACB() {
        props.model.doSearch(props.model.searchParams);
    };

    function handleInputUpdateACB(query) {
        props.model.setSearchQuery(query);
    };
};
