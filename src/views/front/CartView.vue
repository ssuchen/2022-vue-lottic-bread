<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  data() {
    return {
      cartData: {},
      isLoadingItem: "",
    };
  },
  methods: {
    removeCartAll() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http
        .delete(apiUrl)
        .then((res) => {
          console.log(res);
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeCartItem(id) {
      // console.log(id);
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoadingItem = id;
      this.$http
        .delete(apiUrl)
        .then((res) => {
          console.log(res);
          this.getCart();
          this.isLoadingItem = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCartItem(item) {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const updataId = {
        data: {
          product_id: item.id,
          qty: item.qty,
        },
      };
      this.isLoadingItem = item.id;
      this.$http
        .put(apiUrl, updataId)
        .then((res) => {
          console.log(res);
          this.getCart();
          this.isLoadingItem = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCart() {
      //1.API獲取資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          // console.log(res.data.data);
          this.cartData = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getCart();
  },
};
</script>

<template>
  <div class="">這是購物車</div>
  <!-- 購物車列表 -->
  <!-- <div class="text-end">
    <button class="btn btn-outline-danger" type="button" @click="removeCartAll">
      清空購物車
    </button>
  </div> -->
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cartData.carts">
        <tr v-for="item in cartData.carts" :key="item.id">
          <td>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeCartItem(item.id)"
            >
              <i
                class="fas fa-spinner fa-pulse"
                v-show="isLoadingItem === item.id"
              ></i>
              x
            </button>
          </td>
          <td>{{ item.product.title }}</td>

          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select
                  name=""
                  id=""
                  class="form-select"
                  v-model="item.qty"
                  @change="updateCartItem(item)"
                  :disabled="isLoadingItem === item.id"
                >
                  <option
                    :value="num"
                    v-for="num in 30"
                    :key="`${num}-${item.id}`"
                  >
                    {{ num }}
                  </option>
                </select>
                <!-- <input
                          min="1"
                          type="number"
                          class="form-control"
                          v-model.number="item.qty"
                        /> -->
                <span class="input-group-text" id="basic-addon2">{{
                  item.product.unit
                }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <!-- <small class="text-success">折扣價：</small> -->
            {{ item.total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cartData.total }}</td>
      </tr>
      <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ }}</td>
              </tr> -->
    </tfoot>
  </table>
  <div class="text-end">
    <button
      class="btn btn-outline-danger me-2"
      type="button"
      @click="removeCartAll"
    >
      清空購物車
    </button>
    <router-link to="/checkout">
      <button class="btn btn-outline-primary me-2" type="button">去買單</button>
    </router-link>
  </div>
</template>
