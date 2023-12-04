import { getMovieByQuery } from "/src/movieSource";
import resolvePromise from "/src/utils";

export default {
    movies: [],
    searchResultPromiseState: {},

    addMovie(movieToAdd) {
        this.movies = [...this.movies, movieToAdd];
    },

    removeMovie(movieToRemove) {
        this.removeMovieByID(movieToRemove.id);
    },

    removeMovieByID(movieIdToRemove) {
        function shouldWeKeepMovieCB(movie) {
            return movie.id !== movieIdToRemove;
        }
        this.movies = this.movies.filter(shouldWeKeepMovieCB);
    },

    setSearchQuery(_query){
        this.searchParams = {...this.searchParams, query: _query};
    },

    async doSearch(searchParams) {
        try {
            const movies = await getMovieByQuery(searchParams.query || "");
            this.movies = movies; // Set the movies variable to the list of movies
            resolvePromise(Promise.resolve(movies), this.searchResultPromiseState);
        } catch (error) {
            // Handle the error if needed
            console.error("Error in doSearch:", error);
            resolvePromise(Promise.reject(error), this.searchResultPromiseState);
        }
    },
};
