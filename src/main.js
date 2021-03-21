import "es6-promise/auto";

import App from "./App.vue";
import { createApp } from "vue";
import store from "./store";

let app = createApp(App);
app.use(store);
app.mount("#app");
