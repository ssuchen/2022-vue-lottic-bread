<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http
      .post(api)
      .then(() => {
        this.$router.push("/admin/products");
        // console.log(`${res.data.message}`);
      })
      .catch((error) => {
        this.$router.push("/admin");
        console.log(`${error.data.message}`);
      });
  },
};
</script>
<template>
  <router-link to="/">回到前台</router-link> |
  <!-- <div class="">管理列表</div> -->
  <router-view />
  <Footer />
</template>
