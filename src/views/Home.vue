<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
  </div>
</template>

<script>
  export default {
    methods: {
      toUsers() {
        // Homeからアクセスする
        this.$router.push({
          name: 'users-id-profile',
          params: {id: 1}
          });
      }
    }
  }
</script>