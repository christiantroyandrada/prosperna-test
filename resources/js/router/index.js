import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        component: () => import("../components/view-product/index.vue"),
        path: "/view-product/:id",
        name: "view-product",
    },
    {
        component: () => import("../components/landing-page/index.vue"),
        path: "/",
        name: "view-product",
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0, behavior: "smooth" };
        }
    }
});


export default router;
