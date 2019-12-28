export default {
    actions: {
        async fetchCards(ctx) {
            const res = await fetch("http://134.209.138.34/items");
            const cards = await res.json();
            ctx.commit('updateCards', cards)
        },
        async getInformation(ctx, id){
            const res = await fetch(`http://134.209.138.34/item/${id}`);
            const info = await res.json();
            ctx.commit('updateInfo', info)
        }
    },
    mutations: {
        updateCards(state, cards) {
            state.cards = cards
        },
        updateInfo(state, info){
            state.info = info
        }
    },
    state: {
        cards: [],
        info: []
    },
    getters: {
        allCards(state) {
            return state.cards
        },
        getInfo(state){
            return state.info[0]
        }
    }
}