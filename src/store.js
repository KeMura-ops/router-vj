import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); // Vue全体で特定のプラグインを適用すると言う記述

export default new Vuex.Store({ // データ置き場(グローバル変数のようなもの)
  state: { // 状態という意味
    count: 2 // プロパティ
  }
})