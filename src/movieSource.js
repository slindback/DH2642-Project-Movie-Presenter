import {
    API_OPTIONS,
    BASE_URL,
    SEARCH_PREFIX,
    SEARCH_SUFFIX,
    FIND_PREFIX,
    FIND_SUFFIX
} from '/src/tmdbConfig.js'


export function getMovieByID(movieId) {
    const URL = BASE_URL + FIND_PREFIX + movieId + FIND_SUFFIX;
    return fetch(URL, API_OPTIONS)
      .then(responseToJsonACB)
      .then(keepJsonResultsCB);
}

export function getMovieByQuery(query) {

    let URL;
    if (query) {
        URL = BASE_URL + SEARCH_PREFIX + query + SEARCH_SUFFIX;
    } else {
        // should this be it's own function?
        // e.g. getTrendingMovies()
        URL = BASE_URL + "trending/movie/day?language=en-US";
    }

    return fetch(URL, API_OPTIONS)
      .then(responseToJsonACB)
      .then(keepJsonResultsCB);
}


function responseToJsonACB(resp) {
    return resp.json();
}

function keepJsonResultsCB(json) {
    return json.results || [];
}
