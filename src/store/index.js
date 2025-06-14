// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
      todos: []
  },

  mutations: {
   storeTodos(state, playload) {
      state.todos = playload;
    }
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const data = await response.json();
        commit('setTodos', data);
      } catch (error) {
        console.error('Erro ao buscar todos:', error);
      }
    }
  },
  getters: {
    todos: (state) => state.todos,
  }
});

export default store;