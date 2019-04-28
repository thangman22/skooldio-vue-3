import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "",
    excerpt: ""
  },
  mutations: {
    changeTitle(state, title) {
      state.title = title;
    },
    changeExcerpt(state, excerpt) {
      state.excerpt = excerpt;
    }
  },
  actions: {
    changeHeader(context, payload) {
      // {
      //   title:"",
      //   excerpt:""
      // }
      context.commit("changeTitle", payload.title);
      context.commit("changeExcerpt", payload.excerpt);
    }
  }
});
