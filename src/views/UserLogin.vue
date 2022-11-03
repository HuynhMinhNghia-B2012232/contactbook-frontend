<template>
  <section class="text-center text-lg-start">
    <div class="card mb-3 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5">
      <div class="row g-0 d-flex align-items-center justify-content-around">
        <div class="col-lg-6 d-none d-lg-flex align-items-center">
          <img
            src="./../assets/img/ContactBook_logo.png"
            class="w-50"
            alt="ContactBook cover"
          />
          <div class="info">
            <p class="h2 text-warning">CONTACT BOOK</p>
            <p class="">Lưu giữ thông tin người thân của bạn</p>
          </div>
        </div>

        <div class="col-lg-6">
          <h2 class="fw-bold mt-4">Đăng nhập</h2>
          <div class="card-body py-5 px-md-5">
            <UserFormLogin :user="user" @login:user="login" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Popup v-if="isShowPopup" @cancel="hidePopup" :message="message" />
</template>

<script>
import UserFormLogin from "../components/UserFormLogin.vue";
import UserService from "../services/user.service";
import Popup from "../components/Popup.vue";
export default {
  data() {
    return {
      user: {},
      status: "",
      isShowPopup: false,
    };
  },
  components: {
    UserFormLogin,
    Popup,
  },
  computed: {
    message() {
      return this.status;
    },
  },
  methods: {
    hidePopup() {
      this.isShowPopup = false;
    },

    async login(user) {
      try {
        await UserService.login(user);
        this.$router.push({ name: "contactbook" });
      } catch (err) {
        if (err.response.data.message === "Wrong password")
          this.sendErrorMessage(
            "Sai email hoặc mật khẩu đăng nhập. Vui lòng đăng nhập lại."
          );
        console.log(err);
      }
    },

    sendErrorMessage(data) {
      this.status = data;
      this.isShowPopup = true;
    },
  },
};
</script>

<style>
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>
