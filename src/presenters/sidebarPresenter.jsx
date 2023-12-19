import { SidebarView } from "/src/views/sidebarView.jsx";


export function Sidebar(props) {

    return (
      <SidebarView
        model={props.model}
        movies={props.model.movies}
        onSelect={handleSelectACB}
        onRemoveAll={handleRemoveAllACB}
      />
    );

    function handleSelectACB(movie) {
      props.model.setCurrentMovie(movie.id)
    }

    function handleRemoveAllACB() {
        props.model.removeAllMovies();
    }
};
