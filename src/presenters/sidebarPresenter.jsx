import { SidebarView } from "/src/views/sidebarView.jsx";


export function Sidebar(props) {
    
    return (
      <SidebarView
        movies = {props.model.movies}
        onSelect = {handleSelectACB}
      />
    );

    function handleSelectACB(movie) {
      props.model.setCurrentMovie(movie.id)
    }
};
