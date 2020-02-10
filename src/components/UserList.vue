<template>
  <aside class="user-list">
    <h4>Members</h4>
    <hr>
    <div v-for="user in users" :key="user.username">
      {{user.name}}
      <label
        v-if="user.presence"
        :variant="statusColor(user.presence)"
        pill
      >{{user.presence}}</label>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UserList",
  computed: { ...mapState(["loading", "users"]) },
  methods: {
    statusColor: status => (status === "online" ? "success" : "warning")
  }
};
</script>
