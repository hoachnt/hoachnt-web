import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Ripple from "primevue/ripple";
import Tag from "primevue/tag";
import App from "./App.vue";
import router from "./router";
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
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
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

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
app.use(PrimeVue, { ripple: true });
app.use(MotionPlugin);
app.directive("ripple", Ripple);
app.component("Sidebar-Prime", Sidebar);
app.component("Button-Prime", Button);
app.component("Tag-Prime", Tag);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
