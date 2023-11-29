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
  const handleSearch = (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    console.log('Search made!');
  };

  return (
    <div className="topnav">
      <form onSubmit={handleSearch} className="searchContainer">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Search.."
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
