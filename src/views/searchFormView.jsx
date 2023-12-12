import "/src/style.css";


export function SearchFormView(props) {

    // TODO: change later - should probably be a function in utils.jsx
    const adContext = import.meta.globEager("/img/misc/magnifying-glass-icon.jpg");
    const adSource = Object.values(adContext).map((module) => module.default)[0];

    return (
      <form onSubmit={handleSearchRequestACB} className="searchFormContainer">
        <input
          className = "searchFormInput"
          type = "text"
          placeholder = "Search..."
          value = {props.text || ""}
          onChange = {handleInputUpdateACB}
        />
        <button className="searchFormButton" onClick={handleSearchRequestACB}>
          <img
            src = {adSource}
            alt = "Search"
            className = "searchFormButtonIcon"
          />
        </button>
      </form>
    );

    function handleInputUpdateACB(event) {
        props.onInputUpdate(event.target.value);
    };

    function handleSearchRequestACB(event) {
        event.preventDefault();
        props.onSearchRequest();
    };
};
