<template>
  <div v-if="checkStatusLogin">
    <button @click="goLogout" class="btn btn-sm btn-danger mr-2">
      <font-awesome-icon icon="right-from-bracket" />
      Đăng xuất
    </button>
  </div>
  <div v-else>
    <button @click="goLogin" class="btn btn-sm text-light mr-2">
      <font-awesome-icon icon="right-to-bracket" /> Đăng nhập
    </button>
    <button @click="goSignup" class="btn btn-sm btn-primary">
      <font-awesome-icon icon="address-card" /> Đăng ký
    </button>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  computed: {
    checkStatusLogin() {
      return (
        this.$route.name !== "user.login" && this.$route.name !== "user.signup"
      );
    },
  },
  methods: {
    goLogin() {
      this.$router.push({ name: "user.login" });
    },
    goSignup() {
      this.$router.push({ name: "user.signup" });
    },
    goLogout() {
      UserService.logout();
      this.$router.push({ name: "user.login" });
    },
  },
};
</script>

<style></style>
