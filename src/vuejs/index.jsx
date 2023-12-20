import { createApp, reactive, watch } from "vue";

import { createVuetify } from "vuetify";
import { VRating } from 'vuetify/components'

import { VueRoot, makeRouter } from "/src/vuejs/VueRoot.jsx";
import { connectToFirebase } from "/src/firebaseModel";
import model from "/src/movieModel.js";


// app
const reactiveModel = reactive(model);
const app = createApp(<VueRoot model={reactiveModel}/>);

// vuetify
const vuetify = createVuetify({
    components: {
        VRating,
    },
});
app.use(vuetify);

// router
const router = makeRouter(reactiveModel);
app.use(router);

// mounting
app.mount("#root");

// bootstrapping
connectToFirebase(reactiveModel, watch);
reactiveModel.doSearch({});
