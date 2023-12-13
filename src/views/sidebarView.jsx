import "/src/style.css";


export function SidebarView(props) {
  
    return (
      <div>
        <div className="sidebarText">
          <h3>Your Bookmarks</h3>
        </div>
        <div className="sidebarTable">
          {props.movies.map(showBookmarkCB)}
        </div>
      </div>
    );
    
    function showBookmarkCB(movie) {
      return (
        <tr className="sidebarTableRow" key={movie.id} onClick={handleSelectBookmarkACB}>
          {movie.title}
        </tr>
      )

      function handleSelectBookmarkACB(event) {
          props.onSelectBookmark(movie);
          window.location.hash = "details";
      };
    }
};
