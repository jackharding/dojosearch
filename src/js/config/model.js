export default {
    search: {
        params: {},
        fetching: false,
        update: (state, payload) => {
            state.params = payload;
        }
    }
}