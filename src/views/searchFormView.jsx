import "/src/style.css";


export default
function SearchbarView(props) {

  // Change later. Should probably be a function in utils.js
  const adContext = import.meta.globEager("/img/misc/magnifying-glass-icon.jpg");
  const source = Object.values(adContext).map((module) => module.default)[0];

  function handleInputUpdateACB(event) {
    props.onInputUpdate(event.target.value);
  }

  function handleSearchRequestACB(event) {
    event.preventDefault();
    props.onSearchRequest();
  }

  return (
    <form onSubmit={handleSearchRequestACB} className="searchFormContainer">
      <input
        className="searchFormInput"
        type="text"
        placeholder="Search..."
        value={props.text || ""}
        onChange={handleInputUpdateACB}
      />
      <button className="searchButton" onClick={handleSearchRequestACB}>
        <img
          src= {source}
          alt="Search"
          className="searchButtonIcon"
        />
      </button>
    </form>
  );
}
