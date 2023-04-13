import { createApp } from "vue";
import App from "./app.vue";
import rtui from "@rt-demo-ui/components";
const app = createApp(App);
app.use(rtui);
app.mount("#app");
