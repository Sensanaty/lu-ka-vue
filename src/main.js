import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/normalize.css";
import "@/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

console.log(
    `%c
 _        _    _   _  __                 __  __   ______ 
| |      | |  | | | |/ /     /\\         |  \\/  | |  ____|
| |      | |  | | | ' /     /  \\        | \\  / | | |__   
| |      | |  | | |  <     / /\\ \\       | |\\/| | |  __|  
| |____  | |__| | | . \\   / ____ \\   _  | |  | | | |____ 
|______|  \\____/  |_|\\_\\ /_/    \\_\\ (_) |_|  |_| |______|
\n\t\t\t   %cMade with %c❤️ %cby %cLuka Salević %caka %cSensanaty\n\t\t\t\t\t\t\t\t\t\t\t %c(on Github)\n`,
    "font-size: 15px; color: #e69900;",
    "color: #26FD3C; font-size: 13px;",
    "color: red",
    "color: #26FD3C; font-size: 13px;",
    "color: #26FD3C; font-size: 15px;",
    "color: #26FD3C; font-size: 13px;",
    "color: #26FD3C; font-size: 15px;",
    "color: #26FD3C; font-size: 9px;"
);
console.log(
    `\t\t\t\t\t\t%cCurious about the source? It's on GitHub!\n\t\t\t\t\t   https://github.com/Sensanaty/lu-ka-vue`,
    "color: #FFA500; font-size: 13px;"
);
