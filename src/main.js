import { createApp } from "vue";
import "bootstrap";
import VueAxios from "vue-axios";
import App from "./App.vue";
import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import router from "./router";
import { Field, Form, ErrorMessage, defineRule, configure } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale("zh_TW");
const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
app.use(VueSweetalert2);
app.mount("#app");
