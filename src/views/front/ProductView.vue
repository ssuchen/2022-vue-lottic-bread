<script>
export default {
  data() {
    return {
      product: [],
      id: "",
      qty: 1,
    };
  },
  methods: {
    getProduct(id) {
      //1.API獲取商品資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          // console.log(res.data.product);
          this.product = res.data.product;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //加入購物車
    addToCart() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const addId = {
        data: {
          product_id: this.id,
          qty: this.qty,
        },
      };
      console.log(addId);
      this.$http
        .post(apiUrl, addId)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct(this.id);
  },
};
</script>

<template>
  <!-- <router-view /> -->
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6">
        <div
          class="productImg"
          :style="{ backgroundImage: `url(${product.imageUrl})` }"
        ></div>
        <!-- <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="product.imageUrl" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div> -->
      </div>
      <div class="col-md-6">
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT.{{ product.origin_price }}元</del>
        </p>
        <p class="h4 fw-bold text-end">
          NT.{{ product.price }}元/{{ product.unit }}
        </p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <!-- <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                >
                  <i class="fas fa-minus"></i>
                </button> -->
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                v-model.number="qty"
              />
              <!-- <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div> -->
            </div>
          </div>
          <div class="col-6">
            <button
              @click="addToCart"
              href=""
              class="text-nowrap btn btn-dark w-100 py-2"
            >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-3">
        <p class="text-muted">
          {{ product.content }}
        </p>
      </div>
      <div class="col-md-4">
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style len="scss" scoped>
.container {
  margin-top: 8em;
}
.productImg {
  height: 260px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
