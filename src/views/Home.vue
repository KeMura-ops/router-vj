<template>
  <div>
    <h3>Home</h3>
    <button @click="toUsers">Usersのページへ行く</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <input type="text" v-model="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      message: {
        get() {
          return this.$store.getters.message;
        },
        set(value) {
          this.$store.dispatch("updateMessage", value);
        }
      }
    },
    methods: {
      toUsers() {
        this.$router.push({
          name: 'users-id-profile',
          params: {id: 1}
          });
      }
    }
  }
</script>