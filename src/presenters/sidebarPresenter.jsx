import { SidebarView } from "/src/views/sidebarView.jsx";


export function Sidebar(props) {
    
    return (
      <SidebarView
        movies = {props.model.movies}
        onSelectBookmark = {handleSelectBookmarkACB}
      />
    );

    function handleSelectBookmarkACB(movie) {
      props.model.setCurrentMovie(movie.id)
    }
};
