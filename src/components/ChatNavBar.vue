<template>
  <div class="chat-navbar">
    <a class="home-navigation" href="#">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="86.178"
        height="81.673"
        viewBox="0 0 86.178 81.673"
      >
        <defs>
          <filter
            id="Union_1"
            x="0"
            y="0"
            width="86.178"
            height="81.673"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha"></feOffset>
            <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
            <feFlood flood-opacity="0.161"></feFlood>
            <feComposite operator="in" in2="blur"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
          </filter>
          <linearGradient
            id="linear-gradient"
            x1="-0.054"
            y1="1.173"
            x2="0.302"
            y2="0.054"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#b41414"></stop>
          </linearGradient>
        </defs>
        <g id="vue_chat_logo" data-name="vue chat logo" transform="translate(9 6)">
          <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Union_1)">
            <path
              id="Union_1-2"
              data-name="Union 1"
              d="M22.143,63.632a4.089,4.089,0,0,1-3.392-2.957L.274,12.254a4.109,4.109,0,1,1,7.667-2.96L22.716,48.011,37.653,8.868a4.084,4.084,0,1,1,7.62,2.943L26.737,60.386A4.122,4.122,0,0,1,24.188,63.4a4.062,4.062,0,0,1-2.045.234ZM46.709,0,68.178,22.46Z"
              transform="translate(9 6)"
              fill="#b41414"
            ></path>
          </g>
          <path
            id="Path_3"
            data-name="Path 3"
            d="M752.032,436.638s-18.013,61.812-6.484,52.9.609,6.2,7.34,0,7.286-2.989,4.325-4.275-3.014,14.45,5.391,4.275,11.228-15.882,11.228-15.882"
            transform="translate(-706.649 -426.644)"
            fill="url(#linear-gradient)"
          ></path>
          <path
            id="Path_4"
            data-name="Path 4"
            d="M762.414,436.053s-8.983,44.208-5.985,44.459,5.157-3.107,6.741-1.7-.124,4.836,1.242,3.559a7.671,7.671,0,0,1,3.8-1.542s.112,6.418,1.992,5.054,14.763-11.105,14.763-11.105"
            transform="translate(-716.559 -427.54)"
            fill="#ebf7ff"
          ></path>
        </g>
      </svg>
    </a>
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
