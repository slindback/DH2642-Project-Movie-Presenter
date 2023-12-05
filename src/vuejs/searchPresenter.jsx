import SearchbarView from "../views/searchbarView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";

export default function Search(props) {

  function handleSearchClickACB() {
    console.log("search params: ", props.model.searchParams);
    props.model.doSearch(props.model.searchParams);
  };

  function handleInputChangeACB(query) {
    props.model.setSearchQuery(query);
  };
  return (
    <div class="searchContainer">
      <SearchbarView
        onInputChange = {handleInputChangeACB}
        onSearchClick = {handleSearchClickACB}
      />
      <div class="searchResultsContainer">
        <SearchResultsView model={props.model}/>
      </div>
    </div>
  );
}
