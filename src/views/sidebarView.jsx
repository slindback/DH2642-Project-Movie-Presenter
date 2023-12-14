import "/src/style.css";


export function SidebarView(props) {

    // TODO: change later - should probably be a function in utils.jsx
    const imgContext = import.meta.globEager("/img/misc/*.png");
    const imgSource = Object.values(imgContext).map((module) => module.default);

    return (
      <div>
        <div className="sidebarText">
          Watchlist
        </div>
        <div className="sideBarOptionsContainer">
          <div className="filterButtonContainer">
            <button className="filterButton" onClick={openFilterMenuACB}>
              <img
                src = {imgSource[0]}
                alt = "Filter"
                className = "filterButtonIcon"
              />
            </button>
          </div>
          <div>
            <button className="removeAllButton" onClick={handleRemoveAllClickACB}>
              <img
                src = {imgSource[2]}
                alt = "Remove all"
                className = "filterButtonIcon"
              />
            </button>
          </div>
        </div>
        <div className="sidebarTable">
          {props.movies.map(renderTableRowCB)}
        </div>
      </div>
    );

    function handleRemoveAllClickACB() {
        // Show confirmation pop-up
        const isConfirmed = window.confirm("Are you sure you want to clear your watchlist?");

        // If the user confirms, proceed with removing all movies
        if (isConfirmed) {
            props.onRemoveAll();
        }
    }

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
    function openFilterMenuACB(event) {
        console.log("Not yet implemented") // TODO
    };
};
