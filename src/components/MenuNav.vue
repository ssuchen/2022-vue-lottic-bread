<template>
  <!-- menu -->
  <div class="navSection" :class="{ 'navbar-anime': navbarAnime }">
    <nav class="navbar navbar-expand-lg navbar-bg">
      <div class="container-fluid navbar-item">
        <router-link class="navbar-brand navbar-logo" to="/"
          >THE LOTTIC BREAD</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4b1c1c"
              viewBox="0 0 448 512"
            >
              <path
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
              />
            </svg>
          </span>
          <span class="navbar-toggler-close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#4b1c1c"
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
              />
            </svg>
          </span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link text-center" to="/news"
              >最新消息</router-link
            >
            <router-link class="nav-link text-center" to="/about"
              >關於我們</router-link
            >
            <router-link class="nav-link text-center" to="/shop"
              >門市據點</router-link
            >
            <router-link class="nav-link text-center" to="/products"
              >產品列表</router-link
            >
            <!-- <router-link
              class="nav-link text-center list-icon admin-link"
              :class="{ 'mobile-Style': mobileStyle }"
              to="/admin"
            >
              後台管理
            </router-link> -->
          </div>
        </div>
      </div>
      <div class="navbar-item navbar-item-tool">
        <router-link class="nav-link text-center crat-icon" to="/cart">
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-fill"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
          <span class="text">購物車</span>
          <span class="cart_num">{{ len }}</span>
        </router-link>
        <router-link class="nav-link text-center list-icon" to="/admin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-card-list"
            viewBox="0 0 16 16"
          >
            <path
              d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
            />
            <path
              d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
            />
          </svg>
          <span class="text">後台管理</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import emitter from "@/assets/js/mitt";
export default {
  data() {
    return {
      navbarAnime: false,
      // mobileStyle: false,
      len: 0,
    };
  },
  methods: {
    //得到購物車內容數量
    getCartsLen() {
      //1.API獲取資料
      const apiUrl = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http
        .get(apiUrl)
        .then((res) => {
          this.len = res.data.data.carts.length;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateCartLen() {
      emitter.on("cartLenData", (data) => {
        this.len = data;
      });
    },
    navScrollStyle() {
      window.addEventListener("scroll", () => {
        const sbHeight = parseInt(window.pageYOffset);
        if (sbHeight > 300) {
          this.navbarAnime = true;
        } else {
          this.navbarAnime = false;
        }
      });
    },
    addMobileStyle() {
      const W = document.body.clientWidth;
      if (W < 992) {
        this.mobileStyle = true;
      } else {
        this.mobileStyle = false;
      }
    },
    // screenWidth() {
    //   window.addEventListener("resize", function () {
    //     const W = document.body.clientWidth;
    //     if (W < 992) {
    //       this.mobileStyle = true;
    //     } else {
    //       this.mobileStyle = false;
    //     }
    //   });
    // },
  },
  mounted() {
    this.getCartsLen();
    this.updateCartLen();
    this.navScrollStyle();
    // this.addMobileStyle();
    // this.screenWidth();
  },
};
</script>

<style lang="scss">
.navSection {
  padding-top: 1em;
  position: fixed;
  width: 100%;

  z-index: 999;
  display: flex;
  justify-content: center;
  top: 0;
  nav {
    width: 80%;
    transition: all 1s;
    max-width: 1200px;
    .navbar-collapse {
      .navbar-nav {
        margin: 0 auto;
        transition: all 1s;
      }
    }
    .admin-link {
      display: none;
    }
    .mobile-Style {
      display: block;
    }
    a {
      color: rgb(75, 28, 28);
    }
  }

  .container-fluid.navbar-item {
    // width: 73%;
    margin-right: 2%;
  }
  .navbar-item {
    background: #fff;
    padding: 0.5em;
    display: flex;
    white-space: nowrap;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.5em;
    transition: all 0.5s;
    .navbar-logo {
      width: 0px;
      // background: #ccc;
      transition: all 1s;
      overflow: hidden;
    }
  }
  .navbar-item.navbar-item-tool {
    background: rgb(75, 28, 28);

    a {
      color: #fff;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 0.2em;
    }
    .crat-icon {
      position: relative;
    }
    .text {
      transition: all 1s;
      width: 65px;
    }
  }
  @media (max-width: 991.98px) {
    .navbar-item.navbar-item-tool {
      position: fixed;
      bottom: 10px;
      right: 20px;
      .list-icon {
        display: none;
      }
    }
    .container-fluid.navbar-item {
      @media (max-width: 991.98px) {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 10px;
        left: 10px;
        z-index: 999;
        .navbar-logo {
          display: none;
        }
        button {
          // border: 2px solid red;
          padding: 0;
          position: fixed;
          z-index: 99;
        }
      }
    }
    .navbar-nav {
      transition: 0.5s all;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #ccc;
      a {
        color: rgb(75, 28, 28);
      }
    }
  }
}
.navSection.navbar-anime nav {
  width: 96%;
}
.navSection.navbar-anime nav a {
  color: #fff;
}
.navbar-anime {
  nav .navbar-collapse {
    .navbar-nav {
      margin-right: 0;
    }
  }
  .navbar-item {
    background: rgb(75, 28, 28) !important;
    transition: all 1s;
    .navbar-logo {
      width: 200px;
      // background: #ccc;
      transition: all 1s;
      overflow: hidden;
    }
    nav a {
      color: #fff;
    }
    svg {
      transform: scale(1);
    }
  }
  .navbar-item.navbar-item-tool {
    background: #fff !important;
    .text {
      transition: all 1s;
      width: 0;
      overflow: hidden;
    }
    a {
      color: rgb(75, 28, 28);
    }
    svg {
      transform: scale(1.5);
    }
    .cart_num {
      background: rgb(203, 157, 157);
      position: absolute;
      padding: 0.1em 0.5em;
      top: -5px;
      right: 0px;
      border-radius: 0.75em;
      color: #fff;
    }
  }
}
.navbar-toggler-close {
  display: none;
}

@media (max-width: 991.98px) {
  .navSection.navbar-anime nav a {
    color: rgb(75, 28, 28);
  }
  .navSection.navbar-anime nav {
    svg {
      fill: #fff;
    }
  }
}
</style>
