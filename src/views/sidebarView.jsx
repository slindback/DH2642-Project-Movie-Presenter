import "/src/style.css";


export function SidebarView(props) {

    // TODO: change later - should probably be a function in utils.jsx
    const imgContext = import.meta.globEager("/img/misc/*.png");
    const imgSource = Object.values(imgContext).map((module) => module.default);

    return (
      <div>
        <div className="sidebarText">
          <button className="removeAllButton" onClick={handleRemoveAllACB}>
            <img
              src = {imgSource[2]}
              className = "filterButtonIcon"
            />
          </button>
          Watchlist
          <button className="removeAllButton" onClick={handleSortACB}>
            <img
              src = {imgSource[3]}
              className = "filterButtonIcon"
            />
          </button>
        </div>
        <div className="sidebarTable">
          {props.movies.map(renderTableRowCB)}
        </div>
      </div>
    );

    function handleRemoveAllACB() {
        // Show confirmation pop-up
        const isConfirmed = window.confirm("Are you sure you want to clear your watchlist?");

        // If the user confirms, proceed with removing all movies
        if (isConfirmed) {
            props.onRemoveAll();
        }
    };

    function handleSortACB(event) {
        console.log("Not yet implemented") // TODO
    };

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
