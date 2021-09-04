const state = {
  count: 2
};

const getters = {
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3
};

const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  }
};

const actions = {
  increment({ commit }, number) {
    commit('increment', number);
  },
  decrement({ commit }, number) {
    commit('decrement', number);
  }
};

export default {
  // 名前空間
  /*
    各モジュール間で、gettersやmutationsなど同じ名前のものをそのまま使用できるようにする
  */
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};