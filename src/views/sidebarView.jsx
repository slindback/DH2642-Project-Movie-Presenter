import "/src/style.css";


export function SidebarView(props) {

    // TODO: change later - should probably be a function in utils.jsx
    const imgContext = import.meta.globEager("/img/misc/*.png");
    const imgSource = Object.values(imgContext).map((module) => module.default);

    return (
      <div>
        <div className="sidebarText">
          <button className="removeAllButton" onClick={handleRemoveAllACB}>
            <img
              src = {imgSource[2]}
              alt = "Remove all"
              className = "filterButtonIcon"
            />
          </button>
          Watchlist
          <button className="sortButton" onClick={handleSortACB}>
            <img
              src = {imgSource[3]}
              alt = "Sort"
              className = "sortButtonIcon"
            />
          </button>
        </div>
        <div className="sidebarTable">
          {props.movies.map(renderTableRowCB)}
        </div>
      </div>
    );

    function handleSortACB(event) {
      event.stopPropagation(); // Stop the click event from propagating to the form

      const sortButton = event.currentTarget;
      let dropdown = document.querySelector(".dropdown");

      if (dropdown && document.body.contains(dropdown)) {
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
        console.log(props.movies);
        const sortedResults = sortSearchResults(option, props.movies);
        console.log(sortedResults);
        props.model.setSortedMovies(sortedResults);
        document.body.removeChild(dropdown);
        document.removeEventListener("click", handleOutsideClick);
        dropdownRemoved = true;
      }

      function sortSearchResults(option, results) {
        return results.slice().sort((a, b) => {
          switch (option) {
            case 'rating':
              return b.vote_average - a.vote_average;
            case 'popularity':
              return b.popularity - a.popularity;
            case 'year':
              return parseInt(b.release_date.substring(0, 4)) - parseInt(a.release_date.substring(0, 4));
            default:
              return 0;
          }
        });
      }

      function handleOutsideClick(e) {
        if (dropdown && !dropdownRemoved) {
          if (!dropdown.contains(e.target) && e.target !== sortButton) {
            document.body.removeChild(dropdown);
            dropdownRemoved = true;
            document.removeEventListener("click", handleOutsideClick);
          }
        }
      }
    }

    function handleSortACB(event) {
      event.stopPropagation(); // Stop the click event from propagating to the form

      const sortButton = event.currentTarget;
      let dropdown = document.querySelector(".dropdown");

      if (dropdown && document.body.contains(dropdown)) {
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
        console.log(props.movies);
        const sortedResults = sortSearchResults(option, props.movies);
        console.log(sortedResults);
        props.model.setSortedMovies(sortedResults);
        document.body.removeChild(dropdown);
        document.removeEventListener("click", handleOutsideClick);
        dropdownRemoved = true;
      }

      function sortSearchResults(option, results) {
        return results.slice().sort((a, b) => {
          switch (option) {
            case 'rating':
              return b.vote_average - a.vote_average;
            case 'popularity':
              return b.popularity - a.popularity;
            case 'year':
              return parseInt(b.release_date.substring(0, 4)) - parseInt(a.release_date.substring(0, 4));
            default:
              return 0;
          }
        });
      }

      function handleOutsideClick(e) {
        if (dropdown && !dropdownRemoved) {
          if (!dropdown.contains(e.target) && e.target !== sortButton) {
            document.body.removeChild(dropdown);
            dropdownRemoved = true;
            document.removeEventListener("click", handleOutsideClick);
          }
        }
      }
    }

    function handleRemoveAllACB() {
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
};
