<script>
export default {
  data() {
    return {
      id: "",
      status: false,
      statusMsg: "",
      order: {},
    };
  },
  methods: {
    getOrderList() {
      //1.API獲取商品資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.id}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          console.log(res.data.order);
          this.order = res.data.order;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goHomePage() {
      //轉至結帳網址
      this.$router.push({ path: "/" });
    },
    //確認付款
    checkPay() {
      console.log("check");
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.id}`;
      this.$http
        .post(apiUrl)
        .then((res) => {
          // console.log(res.data.message);
          this.statusMsg = res.data.message;
          this.status = true;
          console.log(this.statusMsg);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.getOrderList(this.id);
  },
};
</script>
<template>
  <div>
    <p>這是最新消息</p>
    <div class="">{{ order.user }}</div>
    <div class="">{{ order.total }}</div>
    <p>付款狀態</p>
    <div v-if="this.status === true" class="">{{ statusMsg }}</div>
    <div v-else class="">未付款</div>
    <button
      class="btn btn-primary"
      :class="{ disabled: status }"
      @click="checkPay"
    >
      付款
    </button>
    <button class="btn btn-primary" @click="goHomePage">繼續逛逛</button>
  </div>
</template>
<style></style>
