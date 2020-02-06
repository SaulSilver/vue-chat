<template>
  <div class="chat-dashboard">
    <ChatNavBar/>

    <div class="chat-container" :class="{running: loading}">
      <RoomList/>
      <MessageList/>
      <MessageForm/>
      <UserList/>
    </div>
  </div>
</template>

<script>
import ChatNavBar from "@/components/ChatNavBar.vue";
import RoomList from "@/components/RoomList.vue";
import MessageList from "@/components/MessageList.vue";
import MessageForm from "@/components/MessageForm.vue";
import UserList from "@/components/UserList.vue";
import { mapState } from "vuex";

export default {
  name: "Chat",
  components: {
    ChatNavBar,
    RoomList,
    UserList,
    MessageList,
    MessageForm
  },
  computed: {
    ...mapState(["loading"])
  }
};
</script>

<style lang="scss">
.chat-container {
  display: grid;
  grid-template-rows: repeat(1fr, 2fr, 1fr);
}
</style>
