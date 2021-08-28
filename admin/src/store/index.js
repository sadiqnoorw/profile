import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: null
}
export default new Vuex.Store({
  modules: {
  },
  state,

  //getter just use for return states values
  getters: {
    user:(state) => {
      return state.user
    }
  },
  //update status values
  mutations: {
    USER(state, userinfo) {
      state.user = userinfo
    }
  },
  // update or commit mutations methods
  actions: {
    user(context, userinfo) {
      context.commit('USER', userinfo)
    }
  },
});
