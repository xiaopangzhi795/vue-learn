import { createApp } from 'vue'
import App from './App.vue'
import installElement from './element';
import router from "./router";
import store from './store';

const app = createApp(App);
installElement(app);
app.use(router);
app.use(store);

app.mount('#app')
