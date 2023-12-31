import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, signInAnonymously  } from "firebase/auth";

import { FIREBASE_CONFIG } from "/src/firebaseConfig.js";

import { getMoviesByIdArray } from "/src/movieSource";


const app = initializeApp(FIREBASE_CONFIG);
const db = getDatabase(app);
const PATH = "WatchLater";

const auth = getAuth();
let userId = null;


function modelToPersistence(model) {

    function getMovieIdCB(movie) {
        return movie.id;
    };

    function compareMovieIdCB(id1, id2) {
        return id1 - id2;
    };

    return {
        movies: model.movies.map(getMovieIdCB).sort(compareMovieIdCB),
        currentMovie: model.currentMovie,
    };
};

function persistenceToModel(data, model) {

    function saveMoviesToModelACB(movies) {
        model.movies = movies;
    };

    // defaults
    let movies = [];
    let currentMovie = null;

    // from database
    if (data) {
        if (data.currentMovie) { currentMovie = data.currentMovie; };
        if (data.movies) { movies = data.movies; };
    };

    // update model
    model.setCurrentMovie(currentMovie);
    return getMoviesByIdArray(movies).then(saveMoviesToModelACB);
};

function saveToFirebase(model) {
    if (model.ready) {
        set(ref(db, PATH + "/" + userId), modelToPersistence(model));
    };
};

function readFromFirebase(model) {

    function getFirebaseSnapshotAsJsonACB(snapshot) {
        return persistenceToModel(snapshot.val(), model);
    };

    function setModelReadyCB() {
        model.ready = true;
    };

    model.ready = false;
    get(ref(db, PATH + "/" + userId))
      .then(getFirebaseSnapshotAsJsonACB)
      .then(setModelReadyCB);
};

export function connectToFirebase(model, watchFunction){

    function getModelAsJsonACB() {
        return modelToPersistence(model);
    };

    function saveToFirebaseACB() {
        return saveToFirebase(model);
    };

    function readFromFirebaseCB() {
        readFromFirebase(model);
        watchFunction(
            getModelAsJsonACB,
            saveToFirebaseACB,
        );
    }

    function handleSignInACB(userCredentials) {
        userId = userCredentials.user.uid;
        return Promise.resolve();
    };

    signInAnonymously(auth)
      .then(handleSignInACB)
      .then(readFromFirebaseCB);
};
