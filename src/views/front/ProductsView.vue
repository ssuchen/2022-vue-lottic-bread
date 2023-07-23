<script>
import Banner from "@/components/Banner.vue";

export default {
  components: {
    Banner,
  },
  data() {
    return {
      product: [],
      id: "",
      qty: 1,
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
    //加入購物車
    addToCart(productId) {
      this.id = productId;
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const addId = {
        data: {
          product_id: this.id,
          qty: this.qty,
        },
      };
      // console.log(addId);
      this.$http
        .post(apiUrl, addId)
        .then((res) => {
          console.log(res);
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
  <!-- <nav class="nav d-flex justify-content-center">
    <router-link class="nav-link text-center" to="/about">關於我們</router-link>
    <router-link class="nav-link text-center" to="/news">最新消息</router-link>
    <router-link class="nav-link text-center" to="/">首頁</router-link>
    <router-link class="nav-link text-center" to="/products"
      >門市據點</router-link
    >
    <router-link class="nav-link text-center" to="/products"
      >產品列表</router-link
    >
  </nav> -->
  <!-- menu nav bar end-->
  <!-- <router-view /> -->
  <section>
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        <div v-for="product in products" :key="product.id" class="col">
          <router-link :to="`/product/${product.id}`">
            <div class="card">
              <div class="card-img">
                <img :src="product.imageUrl" class="card-img-top" alt="" />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <div class="text-item small">
                  <span>原售價</span>
                  <p>{{ product.price }}</p>
                </div>
                <div class="text-item">
                  <span>$</span>
                  <p>{{ product.origin_price }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}

.card {
  border-radius: 0.5em;
  padding: 1em;
  // background: #f3f3f3;
  border: 0px;
  p {
    margin-bottom: 0;
  }
}
.card-img {
  background: #f3f3f3;
  border-radius: 0.5em;
  padding: 0.5em;
  height: 14em;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  img {
    transform: scale(1);
    transition: all 1s;
  }
}
.card {
  padding: 1em 0 0 0;
  .text-item {
    display: flex;
    color: #212529;
  }
  &:hover {
    .card-img {
      background: rgb(222, 214, 214);
      transition: all 1s;
      img {
        transform: scale(1.1);
        transition: all 1s;
      }
    }
  }
}
.card-body {
  padding: 0.5em 0 0 0;
}
.card-title {
  color: #212529;
  font-size: 1.15em;
  font-weight: 600;
  margin-bottom: 0;
}
</style>
