import { createStore } from "vuex";
const url =
  "https://api.weatherapi.com/v1/current.json?key=51f24f2e79af4a4f9a0194642210410&q=casablanca&country=morocco";
export default createStore({
  state: {
    infos: null,
  },
  mutations: {
    infosloaded: (state, payload) => (state.infos = payload),
  },
  actions: {
    loadInfos: async ({ commit }) => {
      const response = await fetch(url);
      const infos = await response.json();

      return commit("infosloaded", await infos);
    },
  },

  getters: {
    currentInfos: (state) => state.infos,
  },

  modules: {},
});
