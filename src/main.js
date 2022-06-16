import { createApp } from "vue";
import "bootstrap";
import VueAxios from "vue-axios";
import App from "./App.vue";
import axios from "axios";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
// app.component("Form", Form);
// app.component("Field", Field);
app.mount("#app");
