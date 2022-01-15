import { createApp, ref } from 'vue';
import App from './App.vue';
import { router } from './router';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import 'virtual:windi.css';
import 'virtual:windi-devtools';

const app = createApp(App);
app.config.globalProperties.$loading = {
  fatherLoading: ref(false),
  childLoading: ref(false),
};
app.use(router);
app.use(Antd);

app.mount('#app');
