export const state = () => ({
  invoice_list: [],
})

export const mutations = {
  setInvoiceData(state) {
    const obj = JSON.parse(localStorage.invoice_list);
    state.invoice_list = obj;
  },
}

export const actions = {
  async loadInvoiceData({commit}) {
    try {
      commit('setInvoiceData');
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
