import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      array: [],
    };
  },
  getters: {
    array(state) {
      return state.array;
    },
  },
  mutations: {
    update(state, newArray) {
      state.array = newArray;
    },
  },
  actions: {
    update(context, newArray) {
      context.commit("update", newArray);
    },
  },
});

export default store;
