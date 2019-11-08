<template>
  <div class="login">
    <b-jumbotron header="Vue.js Chat" lead="hello" bg-variant="info" text-variant="white">
      <b-btn target="_blank" href="https://pusher.com/chatkit">{{ $t('homepage.more-info') }}</b-btn>
    </b-jumbotron>

    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <LoginForm></LoginForm>
        </b-col>
        <b-col lg="4" md="3"></b-col>
      </b-row>
    </b-container>
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
