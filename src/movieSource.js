import {
    API_OPTIONS,
    BASE_URL,
    SEARCH_PREFIX,
    SEARCH_SUFFIX,
    FIND,
    TRENDING,
} from '/src/tmdbConfig.js';


export function getMoviesByIdArray(movieIdArray) {
    return new Promise((resolve) => {
        resolve(movieIdArray.map(getMovieById));
    });
}

export function getMovieById(movieId) {
    const URL = BASE_URL + FIND + movieId;

    return fetch(URL, API_OPTIONS)
      .then(responseToJsonACB)
      .then(getDataCB);
};

export function getMovieByQuery(query) {
    const URL = BASE_URL + (query ? (SEARCH_PREFIX + query + SEARCH_SUFFIX) : TRENDING) 

    return fetch(URL, API_OPTIONS)
      .then(responseToJsonACB)
      .then(keepJsonResultsCB);
};

function responseToJsonACB(resp) {
    return resp.json();
};

function keepJsonResultsCB(json) {
    return json.results || [];
};

function getDataCB(data) {
    return data || [];
};
