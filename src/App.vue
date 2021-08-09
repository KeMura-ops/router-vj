<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <!-- router-viewコンポーネントでルーティングするコンポーネントを使用 -->
    <!-- 名前付きルータービューの使用(HeaderUser.vueの使用) -->
    <router-view name="header"></router-view>
    <transition
      name="fade"
      mode="out-in"
      @before-enter="beforeEnter"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    beforeEnter() {
      // $rootでmain.jsにあるVueインスタンスにアクセスしている(App.vueということになる)
      this.$root.$emit('triggerScroll');
    }
  }
};
</script>

<style scoped>
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
</style>