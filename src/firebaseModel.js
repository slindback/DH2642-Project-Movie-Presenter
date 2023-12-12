import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import firebaseConfig from "/src/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "WatchLater";


function modelToPersistence(model) {
    function getMovieIdCB(movie) {
        return movie.id;
    }
    function compareMovieIdCB(id1, id2) {
        return id1 - id2;
    }
    
    return {
        movies: model.movies.map(getMovieIdCB).sort(compareMovieIdCB),
        currentMovie: model.currentMovie,
    }
}

function persistenceToModel(data, model) {
    function saveMoviesToModelACB(movies) {
        model.movies = movies;
    }

    // defaults
    let movies = [];
    let currentMovie = null;

    // from database
    if (data) {
        if (data.currentMovie) { currentMovie = data.currentMovie; }
        if (data.movies) { movies = data.movies; }
    }

    // update model
    model.setCurrentMovie(currentMovie);
    return getMovieDetails(movies).then(saveMoviesToModelACB);
}

function saveToFirebase(model) {
    if (model.ready) {
        set(ref(db, PATH + "/persistence"), modelToPersistence(model))
    }
}

function readFromFirebase(model) {
    function getFirebaseSnapshotAsJsonACB(snapshot) {
        return persistenceToModel(snapshot.val(), model);
    }
    function setModelReadyCB(model) {
        model.ready = true; 
    }

    model.ready = false;

    get(ref(db, PATH + "/persistence"))
      .then(getFirebaseSnapshotAsJsonACB)
      .then(setModelReadyCB)
}

export function connectToFirebase(model, watchFunction){
    function getModelAsJsonACB() {
        return modelToPersistence(model);
    }

    function saveToFirebaseACB() {
        return saveToFirebase(model);
    }

    readFromFirebase(model);
    watchFunction(getModelAsJsonACB, saveToFirebaseACB);
}
