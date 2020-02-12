<template>
  <div class="user list">
    <h4 class="title">Members</h4>
    <hr align="left">
    <ul>
      <li v-for="user in users" :key="user.username" class="list-item">
        <label>{{user.name}}</label>
        <span class="circle" :class="user.presence"></span>
      </li>
    </ul>
  </div>
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
