<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <!-- アクティブクラス属性とイグザクト属性を用いてアクティブなリンクとする -->
      <!-- イグザクトは対象のリンクをアクティブにする -->
      <router-link to="/" active-class="link--active" exact="" class="link">Home</router-link>
      <router-link to="/users" active-class="link--active" exact="" class="link">Users</router-link>
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

  /* リンクがアクティブな際のスタイル付与 */
  .link--active {
    font-size: 20px;
  }
</style>