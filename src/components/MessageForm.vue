<template>
  <div class="message-form card">
    <small class="text-muted">@{{user.username}}</small>
    <form @submit.prevent="onSubmit" :class="{runnning: sending}">
      <!-- <div class="ld ld-ring ld-spin"></div> -->
      <div class="danger" :show="hasError">{{ error }}</div>
      <fieldset>
        <input
          id="message-input"
          type="text"
          v-model="message"
          @input="isTyping"
          placeholder="Enter Message.."
          autocomplete="off"
          required
        >
      </fieldset>
      <div class="clearfix">
        <button type="submit" variant="primary" class="float-right">Send</button>
      </div>
    </form>
  </div>
</template>


<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { isTyping } from "../chatkit.js";

export default {
  name: "MessageForm",
  data: function() {
    return { message: "" };
  },
  computed: {
    ...mapState(["user", "sending", "error", "activeRoom"]),
    ...mapGetters(["hasError"])
  },
  methods: {
    ...mapActions(["sendMessage"]),
    async onSubmit() {
      const result = await this.sendMessage(this.meesage);
      if (result) this.message = "";
    },
    async isTyping() {
      await isTyping(this.activeRoom.id);
    }
  }
};
</script>
