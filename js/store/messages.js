export const messages = {
    state: {
        messages: []
    },
    mutations: {
        SET_MESSAGES(state, payload) {
            state.messages = payload
        }
    },
    actions: {
        async GET_MESSAGES({ commit }) {
            try {
                const response = await fetch('./db/messages.json');
                const messages = await response.json();
                commit('SET_MESSAGES', messages);
                return await messages
            } catch (e) {
                throw e;
            }
        }
    },
    getters: {
        messages: (s) => s.messages
    }
};
