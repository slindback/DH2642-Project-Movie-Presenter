import "/src/style.css";


export default
function SearchbarView(props) {

  function handleInputChangeACB(event) {
    props.onInputChange(event.target.value);
  }

  function handleSearchRequestACB(event) {
    event.preventDefault();
    props.onSearchRequest();
  }

  return (
    <form onSubmit={handleSearchRequestACB}>
      <input
        className="searchFormInput"
        type="text"
        placeholder="Search..."
        value={props.text || ""}
        onChange={handleInputChangeACB}
      />
      <button className="searchButton" onClick={handleSearchRequestACB}>
        <img
          src="/img/misc/magnifying-glass-icon.jpg"
          alt="Search"
          className="searchButtonIcon"
        />
      </button>
    </form>
  );
}
