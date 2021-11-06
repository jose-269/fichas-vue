import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/seminuevos",
    name: "Seminuevos",
    component: () =>
      import(/* webpackChunkName: "seminuevos" */ "../views/Seminuevos.vue"),
  },
  {
    path: "/financiamiento",
    name: "Financiamiento",
    component: () =>
      import(/* webpackChunkName: "financiamiento" */ "../views/Financiamiento.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
  },
  {
    path: "/autos/:id",
    name: "Autos",
    component: () =>
      import(/* webpackChunkName: "page" */ "../views/Autos.vue"),
  },
  {
    path: "/compramos-tu-auto",
    name: "Compramos-tu-auto",
    component: () =>
      import(/* webpackChunkName: "compramos-tu-auto" */ "../views/Compramos-tu-auto.vue"),
  },
  {
    path: "/comparador",
    name: "Comparador",
    component: () =>
      import(/* webpackChunkName: "comparador" */ "../views/Comparador.vue"),
  },
  {
    path: "/cotizacion-cliente",
    name: "Cotizacion-cliente",
    component: () =>
      import(/* webpackChunkName: "cotizacion-cliente" */ "../views/Cotizacion-cliente.vue"),
  },
  {
    path: "/mailto",
    name: "Mailto",
    component: () =>
      import(/* webpackChunkName: "mailto" */ "../views/Mailto.vue"),
  },
  {
    path: "/formulario-contacto",
    name: "Formulario-contacto",
    component: () =>
      import(/* webpackChunkName: "formulario-contacto" */ "../views/Formulario-contacto.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
