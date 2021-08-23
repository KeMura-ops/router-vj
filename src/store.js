import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Vue全体で特定のプラグインを適用すると言う記述

export default new Vuex.Store({ // データ置き場(グローバル変数のようなもの)
  state: { // 状態という意味
    count: 2 // プロパティ
  },
  getters: { // 算出プロパティ(Vuexにおけるdataの初期値を変更するcomputedの役割を果たすもの)
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  },
  // 現状ではVuexのstateがグローバルな値になっているので、「mutations」を用いてそこから変更できるようにする
  mutations: { // データの予測、追跡をしやすくするために「mutations」を利用する
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    }
  }
})