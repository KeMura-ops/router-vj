<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <!-- router-viewコンポーネントでルーティングするコンポーネントを使用 -->
    <!-- 名前付きルータービューの使用(HeaderUser.vueの使用) -->
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>
