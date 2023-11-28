import SearchbarView from "../views/searchbarView.jsx";
import SearchResultsView from "../views/searchResultsView.jsx";

export default function Search(props) {
  return (
    <div class="searchContainer">
      <SearchbarView />
      <div class="searchResultsContainer">
        <SearchResultsView />
      </div>
    </div>
  );
}
