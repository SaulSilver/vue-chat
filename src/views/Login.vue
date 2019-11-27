<template>
  <div class="login">
    <header>
      <h1>Vue.js Chat</h1>
      <h4>{{$t('homepage.subtitle')}}</h4>
      <a target="_blank" href="https://pusher.com/chatkit">{{ $t('homepage.more-info') }}</a>
    </header>

    <LoginForm></LoginForm>
    <!-- TODO: add a language selector -->
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss">
header {
  margin-bottom: 100px;
}
</style>
