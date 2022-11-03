import { createWebHistory, createRouter } from "vue-router";

import ContactBook from "@/views/ContactBook.vue";
import getcookie from "../utils/getCookie";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
    beforeEnter: (to, from, next) => {
      if (getcookie("jwt") && getcookie("jwt") !== "loggedout") {
        next();
      } else {
        next({ name: "user.login" });
      }
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true,
  },
  {
    path: "/contacts/create",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
  },
  {
    path: "/login",
    name: "user.login",
    component: () => import("@/views/UserLogin.vue"),
  },
  {
    path: "/signup",
    name: "user.signup",
    component: () => import("@/views/UserSignup.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
