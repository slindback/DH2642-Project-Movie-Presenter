import "/src/style.css";


export function SidebarView(props) {

    return (
      <div>
        <div className="sidebarText">
          Watchlist
        </div>
        <div className="sidebarTable">
          {props.movies.map(renderTableRowCB)}
        </div>
      </div>
    );

    function renderTableRowCB(movie) {
        return (
          <img className="sidebarTableRow"
            src = {"https://image.tmdb.org/t/p/w154" + movie.poster_path}
            onClick = {handleSelectACB}
            key = {movie.title}
          />
        );

        function handleSelectACB(event) {
            props.onSelect(movie);
            window.location.hash = "details";
        };
    };
};
