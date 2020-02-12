<template>
  <div class="chat-dashboard">
    <ChatNavBar/>

    <div class="chat-container" :class="{running: loading}">
      <aside class="chat-sidebar card">
        <RoomList/>
        <UserList/>
      </aside>
      <div class="messages-main">
        <MessageList/>
        <MessageForm/>
      </div>
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
