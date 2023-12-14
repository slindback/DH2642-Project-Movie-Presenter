import "/src/style.css";


export function SearchFormView(props) {

    // TODO: change later - should probably be a function in utils.jsx
    const imgContext = import.meta.globEager("/img/misc/*.png");
    const imgSource = Object.values(imgContext).map((module) => module.default);

    return (
      <div className="searchBarContainer">
        <div>
          <form className="searchFormContainer" onSubmit={handleSearchRequestACB}>
            <input
              className = "searchFormInput"
              type = "text"
              placeholder = "Search"
              value = {props.text || ""}
              onChange = {handleInputUpdateACB}
            />
            <button className="searchFormButton" onClick={handleSearchRequestACB}>
              <img
                src = {imgSource[1]}
                alt = "Search"
                className = "searchFormButtonIcon"
              />
            </button>
          </form>
        </div>
        <div className="filterButtonContainer">
          <button className="filterButton" onClick={openFilterMenuACB}>
            <img
              src = {imgSource[0]}
              alt = "Filter"
              className = "filterButtonIcon"
            />
          </button>
        </div>
      </div>
    );

    function handleInputUpdateACB(event) {
        props.onInputUpdate(event.target.value);
    };

    function handleSearchRequestACB(event) {
        event.preventDefault();
        props.onSearchRequest();
    };

    function openFilterMenuACB(event) {
        console.log("Not yet implemented") // TODO
    };
};
