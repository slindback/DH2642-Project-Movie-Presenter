import { getMovieByQuery, getMovieByID } from "/src/movieSource";
import resolvePromise from "/src/utils";

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
        this.removeMovieByID(movieToRemove.id);
    },

    removeMovieByID(movieIDToRemove) {
        function shouldWeKeepMovieCB(movie) {
            return movie.id !== movieIDToRemove;
        }
        this.movies = this.movies.filter(shouldWeKeepMovieCB);
    },

    setCurrentMovie(movieID) {
        if (movieID) {
            if (this.currentMovie !== movieID) {
                this.currentMovie = movieID;
                const promise = getMovieByID(movieID);
                resolvePromise(promise, this.currentMoviePromiseState);
            }
        } else {
            this.currentDish = null;
            this.currentDishPromiseState = {};
        }
    },

    setSearchQuery(_query){
        this.searchParams = {...this.searchParams, query: _query};
    },

    doSearch(searchParams) {
      const promise = getMovieByQuery(searchParams.query || "");
      resolvePromise(promise, this.searchResultPromiseState);
    },
};
