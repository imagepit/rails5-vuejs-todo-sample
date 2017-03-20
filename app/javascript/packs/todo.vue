<template>
  <li>
    <span 
        @click="complete(todo.id)" 
        v-bind:class="{ completed: todo.completed }">
    {{ todo.title }}
    </span>
    <button @click="deleteTodo(todo.id)">削除</button>
  </li>
</template>

<script>
import axios from 'axios'
import app from './todo_app.vue'
export default {
    props: ['todo'],
    methods: {
        complete: function(index) {
          var todo_update = { 
            "todo" : { 
              "completed": !this.todo.completed 
              } 
          }
          axios.put('/api/v1/todos/' + this.todo.id, todo_update)
          .then(res => {
              this.$parent.fetchTodos()
            })
            .catch(error => {
              throw error
            })
        },
        deleteTodo: function(index) {
          if(window.confirm('削除していいですか？')){
              axios.delete('/api/v1/todos/' + this.todo.id )
              .then(res => {
                  this.$parent.fetchTodos() // 親コンポーネントのメソッド実行
                })
                .catch(error => {
                  throw error
                })
          }
        }
    }
}
</script>

<style scoped>
.completed {
  color: #ccc;
  text-decoration:line-through;
}
</style>