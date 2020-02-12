<template>
  <div class="room list">
    <h4 class="title">Channels</h4>
    <hr align="left">
    <ul v-if="activeRoom">
      <li
        class="list-item"
        v-for="room in rooms"
        :key="room.name"
        :class="{active: activeRoom.id === room.id}"
        href="#"
        @click="onChange(room)"
      >
        <label># {{room.name}}</label>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "RoomList",
  computed: {
    ...mapState(["rooms", "activeRoom"])
  },
  methods: {
    ...mapActions(["changeRoom"]),
    onChange(room) {
      this.changeRoom(room.id);
    }
  }
};
</script>
