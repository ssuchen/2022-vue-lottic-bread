<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner,
  },
  data() {
    return {
      //產品列表
      products: [],
      product_id: "",
    };
  },
  methods: {
    getProducts() {
      //1.API獲取商品資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          console.log(res.data.products);
          this.products = res.data.products;
          // console.log(this.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //轉跳單一商品頁面
    // goProduct(id) {
    //   console.log(this.product_id);
    //   this.product_id = id;
    //   //登入成功後轉址
    //   this.$router.push(`/product/?id=${id}`);
    // },
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <Banner />
  <div class="">產品列表</div>
  <!-- menu nav bar start-->
  <nav class="nav d-flex justify-content-center">
    <router-link class="nav-link text-center" to="/about">關於我們</router-link>
    <router-link class="nav-link text-center" to="/news">最新消息</router-link>
    <router-link class="nav-link text-center" to="/">首頁</router-link>
    <router-link class="nav-link text-center" to="/products"
      >門市據點</router-link
    >
    <router-link class="nav-link text-center" to="/products"
      >產品列表</router-link
    >
  </nav>
  <!-- menu nav bar end-->
  <!-- <router-view /> -->
  <section>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        <div v-for="product in products" :key="product.id" class="col">
          <router-link :to="`/product/${product.id}`">
            <div class="card">
              <img :src="product.imageUrl" class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
