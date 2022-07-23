<script>
export default {
  methods: {
    goHomePage() {
      //轉至結帳網址
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<template>
  <div>
    <p>這是最新消息</p>
    <button class="btn btn-primary" @click="goHomePage">付款</button>
  </div>
</template>
<style></style>
