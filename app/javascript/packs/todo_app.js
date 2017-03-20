import Vue from 'vue'
import App from './todo_app.vue'

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('todo'))
  const app = new Vue({
    el: 'todo',
    template: '<App/>',
    components: { App }
  })
  console.log(app)
})