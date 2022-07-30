<template>
  <!-- menu -->
  <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">閣樓麵包</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-lg-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link class="nav-link text-center" to="/news"
            >最新消息</router-link
          >
          <router-link class="nav-link text-center" to="/about"
            >關於我們</router-link
          >
          <router-link class="nav-link text-center" to="/shop"
            >門市據點</router-link
          >
          <router-link class="nav-link text-center" to="/products"
            >產品列表</router-link
          >

          <router-link class="nav-link text-center" to="/cart"
            >我的購物車
            <span>{{ len }}</span>
          </router-link>

          <router-link class="nav-link text-center" to="/admin"
            >後台管理</router-link
          >
          <a href="" class="nav-link text-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import emitter from "@/assets/js/mitt";
export default {
  data() {
    return {
      len: 0,
    };
  },
  methods: {
    //得到購物車內容數量
    getCartsLen() {
      //1.API獲取資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          this.len = res.data.data.carts.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCartLen() {
      emitter.on("cartLenData", (data) => {
        this.len = data;
      });
    },
  },
  mounted() {
    this.getCartsLen();
    this.updateCartLen();
  },
};
</script>

<style></style>
