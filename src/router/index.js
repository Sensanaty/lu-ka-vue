import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

// Pages
import Home from "../views/Home";
import About from "../views/About";
import Projects from "../views/Projects";
import Contact from "../views/Contact";
import Rambling from "../views/Rambling";
import InvalidPage from "../views/InvalidPage";

Vue.use(VueRouter);
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
});

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    },
    {
        path: "/rambling",
        name: "Rambling",
        component: Rambling
    },
    {
        path: "*",
        component: InvalidPage
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
