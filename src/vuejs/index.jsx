import { createApp, reactive, watch } from "vue";

import { VueRoot, makeRouter } from "/src/vuejs/VueRoot.jsx";

import { connectToFirebase } from "/src/firebaseModel";
import model  from "/src/movieModel.js";


// application state
const reactiveModel = reactive(model);

// mounting
const app = createApp(<VueRoot model={reactiveModel}/>);
app.use(makeRouter(reactiveModel));
app.mount("#root");

// bootstrapping
connectToFirebase(reactiveModel, watch);
reactiveModel.doSearch({});

// debug
window.myModel = reactiveModel;
