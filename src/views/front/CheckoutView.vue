<script>
//表單驗證
//=====================
//***標單套件
//=====================
import { Field, Form } from "vee-validate";

export default {
  components: {
    Field,
    Form,
  },
  data() {
    return {
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  methods: {
    // Validator function
    isRequired(value) {
      return value ? true : "This field is required";
    },
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
    submitOrder() {
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      //   const order = this.form;
      this.$http
        .post(apiUrl, { data: this.form })
        .then((res) => {
          console.log(res);

          alert(res.data.message);
          this.$refs.form.resetForm();
          this.removeCartAll();
        })
        .catch((err) => {
          alert(err.data.message);
        });
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="my-5 row justify-content-center">
      <Form v-slot="{ errors }" class="col-md-6" @submit="submitOrder">
        <div class="mb-3">
          <label for="email" class="form-label">收件人地址信箱</label>

          <Field
            name="field"
            class="form-control"
            placeholder="請輸入email"
            :rules="isRequired"
          />
          <span>{{ errors.field }}</span>
        </div>
      </Form>
    </div>
  </div>
</template>
<style></style>
