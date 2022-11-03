<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark rounded">
    <a href="/" class="navbar-brand">Ứng dụng Quản lý danh bạ</a>
    <div class="mr-auto navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'contactbook' }" class="nav-link">
          Danh bạ
          <font-awesome-icon icon="address-book" />
        </router-link>
      </li>
    </div>
    <UserNav />
  </nav>
</template>

<script>
import UserNav from "./UserNav.vue";
export default {
  components: {
    UserNav,
  },
};
</script>
