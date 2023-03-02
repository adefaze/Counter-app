import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp({
    data() {
        return {
            pageTitle: "Project Title",
            content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis placeat commodi rem veniam laudantium facilis
      aliquam delectus deleniti molestias incidunt! Neque a et illo vitae.Debitis fuga voluptatum blanditiis assumenda?`
        };

    }
}).mount('#app')
