<template>
  <!-- <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">Vue Chat</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ user.name }} |</b-nav-text>
      <b-nav-item href="#" @click="onLogout">Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>-->
  <div id="chat-navbar">
    <a class="navigate-home" href="#">Vue Chat</a>
    <label>{{ user.name }} |</label>
    <a href="#" @click="onLogout">Logout</a>
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

<style>
#chat-navbar {
  margin-bottom: 15px;
}
</style>
