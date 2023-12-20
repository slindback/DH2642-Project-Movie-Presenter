import { DetailsView } from "/src/views/detailsView.jsx";

import { renderPromiseState } from "/src/utils.jsx";


export function Details(props) {

    return renderPromiseState(
        props.model.currentMoviePromiseState,
        detailsViewRenderCB,
    );

    function detailsViewRenderCB() {
        return (
          <DetailsView
            movie = {props.model.currentMoviePromiseState.data}
            isInWatchLater = {isInWatchLaterCB}
            onMovieAdd = {handleMovieAddACB}
            onMovieRemove = {handleMovieRemoveACB}
          />
        );
    };

    function isInWatchLaterCB() {
        function moviesToKeepCB(movie) {
            return movie.id === props.model.currentMovie;
        };
        return props.model.movies.find(moviesToKeepCB);
    }

    function handleMovieAddACB() {
        props.model.addMovie(props.model.currentMoviePromiseState.data);
    };

    function handleMovieRemoveACB() {
        props.model.removeMovie(props.model.currentMoviePromiseState.data);
    };
};
