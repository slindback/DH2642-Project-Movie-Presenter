import { SearchFormView } from "/src/views/searchFormView.jsx";
import { SearchResultView } from "/src/views/searchResultView.jsx";

import { renderPromiseState } from "/src/utils";


export function Search(props) {
    // Pointless comment since Github for some reason donesn't think I've made changes to the file.
    return (
      <div className="searchContainer">
        <div className="searchFormContainer">
          <SearchFormView
            model = {props.model}
            searchResults = {props.model.searchResultPromiseState.data}
            text = {props.model.searchParams.query}
            onSearchRequest = {handleSearchACB}
            onInputUpdate = {handleInputACB}
          />
        </div>
        <div className="searchResultContainer">
          <div className="searchResultText">
            {props.model.searchParams.query ? "Search Results" : "Top Movies Today"}
          </div>
          {renderSearchResultView()}
        </div>
      </div>
    );

    function renderSearchResultView() {

        function renderSearchResultViewCB() {

            function handleSelectACB(movie) {
                props.model.setCurrentMovie(movie.id);
            };

            return (
              <SearchResultView
                searchResults = {props.model.searchResultPromiseState.data}
                onSelect = {handleSelectACB}
              />
            );
        };

        return renderPromiseState(
            props.model.searchResultPromiseState,
            renderSearchResultViewCB,
        );
    };

    function handleSearchACB() {
        props.model.doSearch(props.model.searchParams);
    };

    function handleInputACB(query) {
        props.model.setSearchQuery(query);
    };
};
