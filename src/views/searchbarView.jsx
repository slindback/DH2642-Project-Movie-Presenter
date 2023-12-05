/* searchbar with filter options
_____________________________________
| ...   | ... searchbarView|        |
|       |__________________|        |
|       |                  |        |
|       |                  |        |
|       |                  |        |
|       |                  |        |
|       |                  |        |
|       |                  |        |
|_______|__________________|________|
*/
export default
function SearchbarView(props) {

  const inputHandlerACB = (event) => {
    props.onInputChange(event.target.value);
  }

  const handleSearchACB = (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    props.onSearchClick();
    console.log('Search made!');
  }

  return (
    <div className="topnav">
      <form onSubmit={handleSearchACB} className="searchContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Search.."
            value={props.text || ""}
            onChange={inputHandlerACB}
          />
          <button type="submit" className="magnifyingGlassBtn">
            <img
              src="https://thumb.ac-illust.com/26/26a418a965857fa03b8670a3466592cb_t.jpeg"
              alt="Magnifying Glass"
              className="magnifyingGlass"
            />
          </button>
        </div>
      </form>
    </div>
  );
}
