var app = new Vue({
  el: '#app',

  data: {
    userInput: {
      titulo: null,
      descricao: null,
      prioridade: null,
      status: null
    },

    todos: []
  },

  methods: {
    addTodo: function() {
      this.todos.push({
        id: this.todos.length+1,
        titulo: this.userInput.titulo,
        descricao: this.userInput.descricao,
        status: this.userInput.status,
        prioridade: this.userInput.prioridade
      })
      this.userInput.titulo = null
      this.userInput.descricao = null
      this.userInput.prioridade = null
    },

    removeTodo: function() {
      this.todos.splice(this.todos.id, 1)
    }
  }
})