<template>
  <div class="login-page">
    <div class="login card">
      <header>
        <h1>Vue.js Chat</h1>
        <h4>{{$t('homepage.subtitle')}}</h4>
        <a target="_blank" href="https://pusher.com/chatkit">{{ $t('homepage.more-info') }}</a>
      </header>

      <LoginForm></LoginForm>
      <!-- TODO: add a language selector -->
    </div>
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

