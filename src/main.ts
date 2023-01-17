import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "./style.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
library.add(faArrowRight);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, { ripple: true });
app.component("Button-Prime", Button);
app.component("Dialog-Prime", Dialog);
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app");
