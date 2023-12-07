import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import firebaseConfig from "/src/firebaseConfig";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const PATH = "MoviePlanner";


function connectToFirebase(model, watchFunction){
    /*
    function getModelAsJsonACB() {
        return modelToPersistence(model);
    }
    function saveToFirebaseACB() {
        return saveToFirebase(model);
    }

    readFromFirebase(model);
    watchFunction(getModelAsJsonACB, saveToFirebaseACB);
    */
}


export default connectToFirebase;
