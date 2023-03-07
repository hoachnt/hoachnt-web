import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { vuetify } from "@/plugins/vuetify"
import {
  faArrowRight,
  faCode,
  faDatabase,
  faPlay,
  faLayerGroup,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faFacebook,
  faJs,
  faVuejs,
  faCss3,
  faHtml5,
  faGitAlt,
  faSass,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./style.css";

const app = createApp(App);

library.add(
  faArrowRight,
  faCode,
  faDatabase,
  faPlay,
  faLayerGroup,
  faGithub,
  faJs,
  faVuejs,
  faCss3,
  faHtml5,
  faBars,
  faFacebook,
  faGitAlt,
  faSass,
  faReact
);

app.use(createPinia());
app.use(VueAxios, axios);
app.use(router);
app.use(vuetify)
app.use(MotionPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
