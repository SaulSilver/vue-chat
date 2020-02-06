<template>
  <form class="login-form" @submit.prevent="onSubmit">
    <label class="error danger" :show="hasError">{{ error }}</label>

    <div class="input-field">
      <!-- TODO: change the camel casing to kebab -->
      <input
        id="userInput"
        type="text"
        class="shadow"
        placeholder="Username"
        v-model="userId"
        autocomplete="off"
        :disabled="loading"
        required
      >
    </div>

    <button
      type="submit"
      class="shadow"
      variant="primary"
      :class="{ running: loading }"
      :disabled="isValid"
    >
      Login
      <!-- TODO: add a cool spinner  -->
    </button>
  </form>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "LoginForm",
  data: () => ({ userId: "" }),
  computed: {
    isValid() {
      const result = this.userId.length < 3;
      return result ? result : this.loading;
    },
    ...mapState(["loading", "error"]),
    ...mapGetters(["hasError"])
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      const result = await this.login(this.userId);
      if (result) this.$router.push("chat");
    }
  }
};
</script>