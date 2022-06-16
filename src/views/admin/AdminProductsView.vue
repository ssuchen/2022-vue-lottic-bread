<script>
// //匯入元件
import Pagenation from "@/components/Pagination.vue";
import DelModal from "@/components/DelModal.vue";
import ProductModal from "@/components/ProductModal.vue";
//=====================
//***執行登入api串接
//=====================
// let productModal;
// let delProductModal;
//獲取token
// const hexToken = document.cookie.replace(
//   /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
//   "$1"
// );
//設定header(axios)
// axios.defaults.headers.common["Authorization"] = hexToken;
export default {
  data() {
    return {
      temp: {},
      products: [],
      isNew: false,
      deleItemId: "",
      changeItemId: "",
      pagenation: {},
      page: 1,
      // addTemp: {
      //   imagesUrl: [],
      // },
    };
  },
  components: { Pagenation, DelModal, ProductModal },
  methods: {
    showlist(page = 1) {
      //1.API獲取資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          //2.將資料載入
          this.products = res.data.products;
          //傳出api＿pagination物件
          this.pagenation = res.data.pagination;
          // console.log(this.pagenation);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // looklist(item) {
    //   temp = item;
    // },
    // 判斷新增或修改
    checkItem(isNew, item) {
      if (isNew) {
        // console.log(this.temp.id);
        this.temp = {};
        this.isNew = true;
      } else {
        this.temp = { ...item };
        this.isNew = false;
        // console.log(this.temp);
      }
      const productModal = this.$refs.productModal;
      productModal.openModal();
    },
    // 確認新增項目
    updateProductItem(item) {
      console.log("id=", item);
      this.temp = item;
      let apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      let title = "新增產品";

      if (!this.isNew) {
        apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.temp.id}`;
        httpMethod = "put";
        title = "更新產品";
      }
      const productModal = this.$refs.productModal;
      this.$http[httpMethod](apiUrl, { data: this.temp })
        .then((res) => {
          productModal.hideModal();
          this.showlist(this.page);
          this.$httpMessageState(res.response, title);
        })
        .catch((err) => {
          //title = "新增產品";
          console.log(err);
          // this.$httpMessageState(err.response, title);
        });
    },

    //確認新增項目
    // addItem() {
    //   // this.temp = this.addTemp;
    //   let newData = { data: this.addTemp };
    //   const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
    //   this.$http
    //     .post(apiUrl, newData)
    //     .then(() => {
    //       console.log("ss");
    //       // this.showlist();
    //       // productModal.hide();
    //     })
    //     .catch((err) => {
    //       alert(`${err.data.message}`);
    //     });
    // },
    // //刪除選取項目
    deleteItem() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.deleItemId}`;
      this.$http
        .delete(apiUrl)
        .then(() => {
          this.showlist();
          const delComponent = this.$refs.delModal;
          delComponent.hideModal();
        })
        .catch((err) => {
          console.log(err);
          // alert(`${err.data.message}`);
        });
    },
    //修改選取的項目
    // changeItem() {
    //   let newData = { data: this.addTemp };
    //   const apiUrl = `${url}/api/${path}/admin/product/${this.changeItemId}`;
    //   axios
    //     .put(apiUrl, newData)
    //     .then((res) => {
    //       this.showlist();
    //       productModal.hide();
    //     })
    //     .catch((err) => {
    //       alert(`${err.data.message}`);
    //     });
    // },

    // showModal() {
    //   this.addTemp = {};
    //   productModal.show();
    // },
    // 開啟刪除視窗
    OpenDelProductModal(item) {
      this.deleItemId = item.id;
      const delComponent = this.$refs.delModal;
      delComponent.openModal();
    },
  },
  mounted() {
    this.showlist();
    // productModal = new bootstrap.Modal(document.getElementById("productModal"));
    // delProductModal = new bootstrap.Modal(
    //   document.getElementById("delProductModal")
    // );
  },
};
</script>

<template>
  <div class="">管理商品列表</div>
  <div class="text-end mt-4">
    <button class="btn btn-primary" type="button" @click="checkItem(true)">
      建立新的產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th class="text-end" width="120">原價</th>
        <th class="text-end" width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-end">{{ item.origin_price }}</td>
        <td class="text-end">{{ item.price }}</td>
        <td>
          <span v-if="item.is_enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary btn-sm"
              @click="checkItem(false, item)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="OpenDelProductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagenation :pages="pagenation" @getProduct="showlist"></Pagenation>

  <!-- Modal -->
  <DelModal :item="deleItemId" @del-item="deleteItem" ref="delModal"></DelModal>
  <ProductModal
    :item="temp"
    :isNew="isNew"
    @update-item="updateProductItem"
    ref="productModal"
  ></ProductModal>
  <!-- Modal -->
</template>
