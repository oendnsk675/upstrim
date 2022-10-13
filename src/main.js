import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import VueSocialSharing from 'vue-social-sharing'
import 'sweetalert2/dist/sweetalert2.min.css';
import './assets/main.css'

library.add(fas)
library.add(fab)

const app = createApp(App)

// axios.defaults.baseURL = 'https://ef68-140-213-150-169.ap.ngrok.io/api/v1/';
axios.defaults.baseURL = 'http://localhost:8000/api/v1/';

app.use(VueSocialSharing)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.use(VueSweetalert2)
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
