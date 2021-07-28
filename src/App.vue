<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/users" class="link">Users</router-link>
      <!-- コンソール上の表示はaタグになる -->
    </nav>
    <!-- router-viewコンポーネントでルーティングするコンポーネントを使用 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }
</style>