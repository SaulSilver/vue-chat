<template>
  <div class="message-list card">
    <h4 class="title">{{ activeRoom.name}}</h4>
    <hr align="left">
    <div id="chat-messages" class="message-group" v-chat-scroll="{smooth: true}">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <div class="clearfix">
          <h4 class="message-title">{{ message.name }}</h4>
          <small class="text-muted float-right">@{{message.username}}</small>
        </div>
        <p class="message-text">{{message.text}}</p>
        <div class="clearfix">
          <small class="text-muted float-right">{{message.date}}</small>
        </div>
      </div>
    </div>
    <div class="user-typing">
      <small class="text-muted" v-if="userTyping">@{{userTyping}} is typing...</small>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MessageList",
  computed: { ...mapState(["messages", "userTyping", "activeRoom"]) }
};
</script>
