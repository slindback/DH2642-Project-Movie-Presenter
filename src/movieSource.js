import {
    API_OPTIONS,
    BASE_URL,
    SEARCH_PREFIX,
    SEARCH_SUFFIX,
    FIND_PREFIX,
    FIND_SUFFIX,
    TRENDING
} from '/src/tmdbConfig.js'


export function getMovieByID(movieId) {
    const URL = BASE_URL + FIND_PREFIX + movieId + FIND_SUFFIX;
    return fetch(URL, API_OPTIONS)
      .then(responseToJsonACB)
      .then(keepJsonResultsCB);
}

export function getMovieByQuery(query) {
  const URL = (query === "" || query === 0) ? BASE_URL + TRENDING : BASE_URL + SEARCH_PREFIX + query + SEARCH_SUFFIX;

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
