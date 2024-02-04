

import { createApp } from 'vue';
import App from './App.vue';
import Spisak from './components/Spisak.vue';




const app = createApp(App);
const app1 = createApp(App);
app.component('spisak-comp',Spisak)


app.mount('#app')
app1.mount('#app1')





