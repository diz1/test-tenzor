import { store } from './store/index.js'

new Vue ({
    el: '#app',
    data: () => ({
        title: 'Linear Chart',
        messages: []
    }),
    async mounted() {
        this.messages = await store.dispatch('GET_MESSAGES')
    }
});
