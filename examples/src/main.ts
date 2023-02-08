import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

import hviewPlus from "hview-plus";
import "@hview-plus/theme-chalk";
// import "hview-plus/theme-chalk/style.css";
app.use(hviewPlus);

// import { Button, Link } from "hview-plus";
// app.use(Button);
// app.use(Link);

// import Button from "hview/es/button";
// app.use(Button);

app.mount("#app");
