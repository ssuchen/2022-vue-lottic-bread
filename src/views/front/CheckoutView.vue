<script>
//表單驗證
//=====================
//***標單套件
//=====================
// import { Field, Form } from "vee-validate";

export default {
  // components: {
  //   Field,
  //   Form,
  // },
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
      const order = this.form;
      this.$http
        .post(apiUrl, { data: order })
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.removeCartAll();
          //轉至結帳網址
          this.$router.push({ path: "/Paymoney" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>
<template>
  <div class="my-5 row justify-content-center">
    <Form ref="form" v-slot="{ errors }" class="col-md-6" @submit="submitOrder">
      <div class="mb-3">
        <label for="email" class="form-label">收件人地址信箱</label>
        <Field
          id="name"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入email"
          rules="required"
          v-model="form.user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <Field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['姓名'] }"
          v-model="form.user.name"
          placeholder="請輸入姓名"
          rules="required"
        ></Field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <Field
          id="tel"
          name="電話"
          type="tel"
          class="form-control"
          :class="{ 'is-invalid': errors['電話'] }"
          v-model="form.user.tel"
          placeholder="請輸入電話"
          rules="required|min:8"
        ></Field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': errors['地址'] }"
          v-model="form.user.address"
          placeholder="請輸入地址"
          rules="required"
        ></Field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea
          name=""
          id="message"
          class="form-control"
          cols="30"
          rows="10"
          v-model="form.message"
        ></textarea>
      </div>

      <div class="text-end">
        <button type="submit" class="btn btn-danger">送出訂單</button>
      </div>
    </Form>
  </div>
</template>
<style></style>
