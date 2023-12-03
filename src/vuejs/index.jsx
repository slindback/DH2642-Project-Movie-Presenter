import { createApp, reactive } from "vue";
import { VueRoot } from "/src/vuejs/VueRoot.jsx";
import model from "/src/movieModel.js"


// application state
const reactiveModel = reactive(model);

// mounting
const app = createApp(<VueRoot model={reactiveModel}/>);
app.mount("#root");

// bootstrapping
reactiveModel.doSearch({});
