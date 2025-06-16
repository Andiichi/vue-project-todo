<template>
    <div class="bg-gray-300 rounded-sm">
        <div class="flex items-center px-4 py-3 border-b 
border-gray-400 last:border-b-0">
            <div class="flex items-center justify-center 
mr-2">
                <button :class="{
                    'text-gray-400': !isCompleted,
                    'text-green-500': isCompleted,
                    'cursor-pointer': true
                }" @click="onCheckClick">
                    <svg class="w-5 h-5 hover:text-green-500 transition-colors duration-200" fill="none"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                </button>
            </div>

            <div class="w-full">

                <input v-model="title" type="text" @keyup.enter="onTitleChange" :class="[
                    'bg-gray-300 placeholder-gray-500 text-gray-700 font-light focus:outline-none block w-full appearance-none leading-normal mr-3',
                    isCompleted ? 'line-through text-gray-500' : ''
                ]" />
            </div>

            <div class="ml-auto flex items-center justify-center">
                <button @click="onDeleteTodo" class="focus:outline-none cursor-pointer">
                    <svg class="ml-3 h-4 w-4 text-gray-500 hover:text-red-500 transition-colors duration-200"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7L18.1327 19.1425C18.0579 
20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 
19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 
3 9 3.44772 9 4V7M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            default: () => ({}),
        },
    },

    data() {
        return {
            title: this.todo.title, // inicializando o título da tarefa
            // mudando o estado de uma propriedade localmente
            isCompleted: this.todo.completed,
        }
    },

    methods: {
        // Atualiza o título da tarefa
        onTitleChange() {
            if (!this.title) {
                alert('O título da tarefa não pode ser vazio');
                this.title = this.todo.title; // Reverte para o título original
                return
            }

            this.updateTodo();
        },

        // Atualiza a tarefa no Vuex
        updateTodo($evt) {
            const payload = {
                id: this.todo.id,
                data: {
                    title: this.title,
                    completed: this.isCompleted
                }
            }
            this.$store.dispatch('updateTodo', payload)
        },

        // Alterna o estado de conclusão da tarefa
        onCheckClick() {
            this.isCompleted = !this.isCompleted;

            this.updateTodo()
        },

        onDeleteTodo() {
            this.$store.dispatch('deleteTodo', this.todo.id)
        }
    },

}
</script>