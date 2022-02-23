import { createApp } from "vue";
import Varlet from "@varlet/ui";
import App from "./App.vue";
import "@varlet/ui/es/style.js";
import { createRouter, createWebHistory } from "vue-router";

import EventSearchPage from "./components/EventSearchPage.vue";
import EventDetailsPage from "./components/EventDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/event-search",
    },
    {
      path: "/event-search",
      component: EventSearchPage,
    },
    {
      path: "/event-details/:eventId",
      component: EventDetailsPage,
      props: true
    },
    {
      path: "/:something(.*)",
      redirect:"/event-search",
    }
  ],
});

const app = createApp(App);

app.use(router);
app.use(Varlet).mount("#app");
