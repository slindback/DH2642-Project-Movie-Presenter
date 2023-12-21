export const API_READ_ACCESS_TOKEN = null;
export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_READ_ACCESS_TOKEN,
    },
};


export const BASE_URL = "https://api.themoviedb.org/3/";

export const SEARCH_PREFIX = "search/movie?query=";
export const SEARCH_SUFFIX = "&include_adult=false&page=1";

export const FIND = "movie/";

export const TRENDING = "trending/movie/day?language=en-US";
