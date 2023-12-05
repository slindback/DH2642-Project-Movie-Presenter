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
import { reactive } from "vue";
export default function SearchResultsView(props) {
  const promise = props.model.searchResultPromiseState.data;
  const movies = (promise === undefined || promise === null) ? [] : promise;
  const state = reactive({
    selectedMovie: null,
  });

  const handleMovieClick = (movie) => {
    state.selectedMovie = movie;
    console.log("Selected Movie:", movie); // TODO: remove debug print
  };

  return (
    <div className="searchResultsContainer">
      <h2>Search Results</h2>
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
    </div>
  );
}
