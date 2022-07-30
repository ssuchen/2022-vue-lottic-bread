import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/FrontView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/front/IndexView.vue"),
      },
      {
        path: "about",
        component: () => import("../views/front/AboutView.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/front/CartView.vue"),
      },
      // {
      //   path: "login",
      //   component: () => import("../views/front/LoginView.vue"),
      // },
      {
        path: "news",
        component: () => import("../views/front/NewsView.vue"),
      },
      {
        path: "products",
        component: () => import("../views/front/ProductsView.vue"),
      },
      {
        path: "product/:id",
        name: "product",
        component: () => import("../views/front/ProductView.vue"),
      },
      {
        path: "shop",
        component: () => import("../views/front/ShopView.vue"),
      },
      {
        path: "checkout",
        name: "checkout",
        component: () => import("../views/front/CheckoutView.vue"),
      },
      {
        path: "pay/:id",
        name: "Pay",
        component: () => import("../views/front/PaymentView.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../views/AdminView.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/admin/LoginView.vue"),
      },
      {
        path: "products",
        component: () => import("../views/admin/AdminProductsView.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
