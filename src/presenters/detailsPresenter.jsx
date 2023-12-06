import DetailsView from "/src/views/detailsView.jsx";

export default
function Details(props) {
  if (!props.model.currentMoviePromiseState.promise) {
    return "No data...";
  }

  if (props.model.currentMoviePromiseState.error) {
    return props.model.currentMoviePromiseState.error;
  }

  if (props.model.currentMoviePromiseState.data) {
    return <DetailsView
      movieDetails={props.model.currentMoviePromiseState.data}
    />;
  }

  return (
    <img className="loadingImage"
      src = "https://www.elevateyourwellness.org/Content/image/loader2.gif"
    />
  );
}
