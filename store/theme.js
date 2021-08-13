export const state = () => ({
  theme_dark: true,
})

export const mutations = {
  setDarkTheme(state) {
    state.theme_dark = true;
  },
  setLightTheme(state) {
    state.theme_dark = false;
  }
}

export const actions = {
  async setDarkNow({commit}) {
    try {
      commit('setDarkTheme');
    } catch(err) {
      console.log(err);
    }
  },

  async setLightNow({commit}) {
    try {
      commit('setLightTheme');
    } catch(err) {
      console.log(err);
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
