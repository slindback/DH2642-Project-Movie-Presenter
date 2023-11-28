import { createApp } from "vue";
import VueRoot from "./VueRoot.jsx";

const model = null;
const app = createApp(<VueRoot model={model} />);
app.mount("#root");
