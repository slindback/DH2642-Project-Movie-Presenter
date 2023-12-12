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
            movieDetails = {props.model.currentMoviePromiseState.data}
          />
        );
    };
};
