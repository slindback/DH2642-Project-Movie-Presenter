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
        <div className="searchFormOptionsContainer">
          <div className="sortButtonContainer">
            <button className="sortButton" onClick={handleSortACB}>
              <img
                src = {imgSource[3]}
                alt = "Sort"
                className = "sortButtonIcon"
              />
            </button>
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
        console.log("Filters not yet implemented") // TODO
    };

    function handleSortACB(event) {
      event.stopPropagation(); // Stop the click event from propagating to the form

      const sortButton = event.currentTarget;
      let dropdown = document.querySelector(".dropdown");

      if (dropdown) {
          document.body.removeChild(dropdown);
          return;
      }

      dropdown = document.createElement("div");
      dropdown.className = "dropdown";

      const options = ["rating", "popularity", "year"];

      options.forEach((option) => {
          const optionElement = document.createElement("div");
          optionElement.innerText = option;
          optionElement.className = "dropdown-item";
          optionElement.addEventListener("click", () => handleSortOptionSelected(option));
          dropdown.appendChild(optionElement);
      });

      document.body.appendChild(dropdown);

      const rect = sortButton.getBoundingClientRect();
      dropdown.style.position = "absolute";
      dropdown.style.top = `${rect.bottom}px`;
      dropdown.style.left = `${rect.left}px`;

      let dropdownRemoved = false; // Flag to track whether dropdown is removed

      document.addEventListener("click", handleOutsideClick);

      function handleSortOptionSelected(option) {
          console.log(`Sort by ${option}`);
          // TODO: Implement sorting logic based on the selected option
          document.body.removeChild(dropdown);
          document.removeEventListener("click", handleOutsideClick);
          dropdownRemoved = true;
      }

      function handleOutsideClick(e) {
          if (!dropdownRemoved && !dropdown.contains(e.target) && e.target !== sortButton) {
              document.body.removeChild(dropdown);
              document.removeEventListener("click", handleOutsideClick);
          }
      }
  }
};
