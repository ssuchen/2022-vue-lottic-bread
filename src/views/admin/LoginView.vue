<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      // temp: {},
      // products: [],
    };
  },
  methods: {
    getUser() {
      // 1.定義api的網址 使用者及密碼
      const user = {
        username: this.username,
        password: this.password,
      };
      //2.串接API 進行驗正
      const apiUrl = `${process.env.VUE_APP_API}/admin/signin`;
      this.$http
        .post(apiUrl, user)
        .then((res) => {
          //3.取得token 及時間
          const { token, expired } = res.data;
          //4.將 token 及時間 傳入Cookie
          document.cookie = `hexToken=${token}; expire=${new Date(expired)}`;
          //登入成功後轉址
          this.$router.push("/admin/products");
        })
        .catch(() => {
          alert("錯誤");
        });
    },
  },
  mounted() {
    // const hexToken = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,
    //   "$1"
    // );
    // 設定header(axios);
    // this.$http.defaults.headers.common["Authorization"] = hexToken;
  },
};
</script>

<template>
  <div class="">這是後台</div>
  <section>
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="col-8">
          <form id="form" class="form-sigIn">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="name@example.com"
                required
                autofocus
                v-model="username"
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
                v-model="password"
              />
              <label for="password">Password</label>
            </div>
            <button
              @click="getUser"
              class="btn btn-lg btn-primary w-100 mt-3"
              type="button"
            >
              登入
            </button>
          </form>
        </div>
      </div>
      <p class="mt-5 mb-3 text-muted">&copy; 2022閣樓麵包</p>
    </div>
  </section>
</template>
<style lang="scss">
.form-signIn {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.btn-primary {
  background-color: rgb(9, 40, 75);
}
.btn-primary:hover {
  background-color: rgb(19, 56, 98);
}
</style>
