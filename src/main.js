import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
app.mount("#app");

// add fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronDown);
app.component("font-awesome-icon", FontAwesomeIcon);
