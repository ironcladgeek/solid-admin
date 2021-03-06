import './bootstrap.js';

import Vue from 'vue';
import App from './App.vue';

/**
 * Import 'axios' and register it as global plugin.
 * Now in other components can be called with 'this.$axios'
 */
import axios from 'axios';
Vue.prototype.$axios = axios;

// Global `Event` object for firing and listening to custom events (Event Bus)
window.Event = new Vue();

// Router object with configured routes
import { router } from './routes/routes';

// Central store object
import { store } from './store/store';

// Import modal component and registers it as global component
// to be accessible in all other components
import SaModal from './components/features/modal';
Vue.prototype.$modal = SaModal;

// Import notification component and register it as global component
import SaNotification from './components/features/notification';
Vue.prototype.$notification = SaNotification;

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
