/* Will show random (or top movies ATM) before search
_____________________________________
| ...   | ...              |        |
|       |__________________|        |
|       |                  |        |
|       |                  |        |
|       |SearchResultsView |        |
|       |                  |        |
|       |                  |        |
|       |                  |        |
|_______|__________________|________|
*/
import { reactive, watch } from "vue";

export default function SearchResultsView(props) {
  const promiseState = props.model.searchResultPromiseState;
  const movies = promiseState.data || [];
  const state = reactive({
    selectedMovie: null,
    isLoading: !promiseState.data && promiseState.promise,
  });

  watch(
    () => props.model.searchResultPromiseState,
    () => {
      state.isLoading = !promiseState.data && promiseState.promise;
    }
  );

  const handleMovieClick = (movie) => {
    state.selectedMovie = movie;
    console.log("Selected Movie:", movie);
  };

  return (
    <div className="searchResultsContainer">
      <h2>Search Results</h2>
      {state.isLoading ? (
        <div className="loadingContainer">
          <img
            src="https://www.elevateyourwellness.org/Content/image/loader2.gif"
            alt="Loading..."
            className="loadingGif"
          />
        </div>
      ) : (
        <div className="movieGrid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="movieCard"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
