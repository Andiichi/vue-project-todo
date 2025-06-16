<template>
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
         
            <TodoFormAdd />

            <TodoSpinner v-if="loading" />
            <template v-else>
                <TodoItems v-if="$store.state.todos.length" />

                <TodoEmpty v-else />
            </template>
        </div>
    </div>
</template>

<script>
// Importando o vue e vuex 
import { ref } from 'vue';
import { useStore } from 'vuex';

// Importando os componentes necessários
import TodoSpinner from '@/components/TodoSpinner.vue';
import TodoFormAdd from '@/components/TodoFormAdd.vue';
import TodoItems from '@/components/TodoItems.vue';
import TodoEmpty from '@/components/TodoEmpty.vue';


// refatoriando o componente para composition API do vue 3

export default {
    name: 'App',
    components: { TodoEmpty, TodoItems, TodoFormAdd, TodoSpinner },

    setup(){
        // criando uma referência reativa para o estado de loading
        const loading = ref(false);
        const store = useStore();

        loading.value = true;
        store.dispatch('getTodos').finally(() => {
            loading.value = false;
        })

        return loading;
    },
}

    // data() {
    //     return {
    //         loading: false
    //     }
    // },

    // created() {
    //     this.loading = true
    //     this.$store.dispatch('getTodos').finally(() => {
    //         this.loading = false
    //     })
    // },
</script>