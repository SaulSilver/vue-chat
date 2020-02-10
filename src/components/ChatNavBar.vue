<template>
  <div class="chat-navbar">
    <a class="home-navigation" href="#">Vue Chat</a>
    <div class="right-navigation">
      <label>{{ user.name }}</label>
      <label>|</label>
      <a href="#" @click="onLogout">Logout</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "ChatNavBar",
  computed: {
    ...mapState(["user", "reconnect"])
  },
  methods: {
    ...mapActions[("logout", "login")],
    ...mapMutations(["setReconnect"]),
    onLogout() {
      this.$router.push({ path: "/" });
      this.$store.dispatch("logout");
    },
    unload() {
      if (this.user.username) this.setReconnect(true);
    }
  },
  mounted() {
    window.addEventListener("beforeunload", this.unload);
    if (this.reconnect) this.$store.dispatch("login", this.user.username);
  }
};
</script>
