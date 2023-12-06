import "/src/style.css";


export default
function SearchbarView(props) {

  function handleInputChangeACB(event) {
    props.onInputChange(event.target.value);
  }

  function handleSearchRequestACB(event) {
    // Prevents the form from submitting and refreshing the page
    event.preventDefault();
    props.onSearchRequest();
  }

  return (
    <form onSubmit={handleSearchRequestACB}>
      <input className="searchFormInput"
        type = "text"
        placeholder = "Search..."
        value = {props.text || ""}
        onChange = {handleInputChangeACB}
      />
    </form>
  );
}
