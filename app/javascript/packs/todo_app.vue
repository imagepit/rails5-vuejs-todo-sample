<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <input v-model="todo_input">
    <button @click="clicked">Todo追加</button>
    <ul>
      <todo v-for="item in todos" v-bind:todo="item"></todo>
    </ul>
  </div>
</template>

<script>
import todo from './todo.vue'
import axios from 'axios'
export default {
  created () {
        this.fetchTodos()
  },
  data () {
    return {
      message: 'Todoアプリ',
      todo_input: "",
      todos: [],
    }
  },
  methods: {
    clicked: function() {
      console.log("ボタンクリック！！")
      if(this.todo_input != ''){
          this.postTodo()
      }else{
          alert("何も入力されていないよ！！")
      }
    },
    fetchTodos: function(){
      axios.get('/api/v1/todos')
        .then(res => {
          this.todos = res.data
        })
        .catch(error => {
          throw error
        })
    },
    postTodo: function(){
          var todo = { 
            title:this.todo_input,
            completed:false
          } 
          axios.post('/api/v1/todos',todo)
            .then(res => {
                this.todo_input = '' // 入力内容クリア
                this.fetchTodos() // TODOデータ再取得
                })
                .catch(error => {
                throw error
                })
      },
  },
  components: { todo }
}
</script>