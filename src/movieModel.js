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

    doSearch(searchParams) {
      const promise = getMovieByQuery(searchParams.query | "");
      resolvePromise(promise, this.searchResultPromiseState);
    },
};
