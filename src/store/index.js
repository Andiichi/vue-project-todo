import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      todos: []
    };
  },

  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    storeTodo(state, payload) {
      state.todos.push(payload);
    },
    updateTodoInState(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    }
  },

  actions: {
    getTodos({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          return axios.get('http://localhost:3000/todos')
            .then((response) => {
              commit('storeTodos', response.data)
              resolve()
            })
        }, 1000)
      })
    },
    async addTodo({ commit, state }, data) {
      const nextId = state.todos.length > 0
        ? Math.max(...state.todos.map(t => parseInt(t.id))) + 1
        : 1;

      const newTodo = { id: nextId, ...data };

      return axios.post('http://localhost:3000/todos', newTodo)
        .then(response => {
          commit('storeTodo', response.data);
        })
        .catch(error => {
          console.error('Erro ao adicionar todo:', error);
          throw error;
        });
    },

    updateTodo(context, { id, data }) {
      return axios.put(`http://localhost:3000/todos/${id}`, data)
    }

  },
  
  getters: {
  },
  modules: {
  }
})