import { getMovieByQuery, getMovieById } from "/src/movieSource";
import { resolvePromise } from "/src/utils";

// Pointless comment since Github for some reason doesn't think I've made changes to the file.
export default {
    movies: [],

    currentMovie: null,
    currentMoviePromiseState: {},

    searchParams: {},
    searchResultPromiseState: {},

    addMovie(movieToAdd) {
        this.movies = [...this.movies, movieToAdd];
    },

    removeMovie(movieToRemove) {
        this.removeMovieById(movieToRemove.id);
    },

    removeAllMovies() {
        this.movies = [];
    },

    removeMovieById(movieIdToRemove) {
        function shouldWeKeepMovieCB(movie) {
            return movie.id !== movieIdToRemove;
        }
        this.movies = this.movies.filter(shouldWeKeepMovieCB);
    },

    setCurrentMovie(movieId) {
        if (movieId) {
            if (this.currentMovie !== movieId) {
                this.currentMovie = movieId;
                const promise = getMovieById(movieId);
                resolvePromise(promise, this.currentMoviePromiseState);
            };
        } else {
            this.currentMovie = null;
            this.currentMoviePromiseState = {};
        };
    },

    setSearchQuery(_query){
        this.searchParams = {...this.searchParams, query: _query};
    },

    doSearch(searchParams) {
      const promise = getMovieByQuery(searchParams.query || "");
      resolvePromise(promise, this.searchResultPromiseState);
    },

    setSortedSearchResults(sortedResults) {
      this.searchResultPromiseState.data = sortedResults;
    },
};
