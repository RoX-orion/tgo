import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'

createApp(App)
  .use(ElementPlus)
  .use(router)
  .use(mavonEditor)
  .mount('#app')
