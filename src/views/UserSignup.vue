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
          <h2 class="fw-bold mt-4">Đăng ký</h2>
          <div class="card-body py-5 px-md-5">
            <UserFormSignup @on-signup="onSignup" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Transition>
    <Popup v-if="isShowPopup" @cancel="hidePopup" :message="message" />
  </Transition>
</template>

<script setup>
import UserFormSignup from "../components/UserFormSignup.vue";
import userService from "../services/user.service";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Popup from "../components/Popup.vue";

const router = useRouter();
const message = ref("");

async function onSignup(user) {
  try {
    await userService.signup(user);
    router.push({ name: "user.login" });
  } catch (err) {
    if (err.response.data.message === "Email is valid") {
      sendErrorMessage("Email đã được đăng ký ở tài khoản khác.");
    }
    console.log(err);
  }
}

const isShowPopup = ref(false);

function sendErrorMessage(data) {
  message.value = data;
  isShowPopup.value = true;
}

function hidePopup() {
  isShowPopup.value = false;
}
</script>

<style scoped>
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
