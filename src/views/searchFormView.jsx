import "/src/style.css";


export function SearchFormView(props) {

    // TODO: change later - should probably be a function in utils.jsx
    const imgContext = import.meta.globEager("/img/misc/magnifying-glass-icon.png");
    const imgSource = Object.values(imgContext).map((module) => module.default)[0];

    return (
      <form onSubmit={handleSearchRequestACB} className="searchFormContainer">
        <input
          className = "searchFormInput"
          type = "text"
          placeholder = "Search"
          value = {props.text || ""}
          onChange = {handleInputUpdateACB}
        />
        <button className="searchFormButton" onClick={handleSearchRequestACB}>
          <img
            src = {imgSource}
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
