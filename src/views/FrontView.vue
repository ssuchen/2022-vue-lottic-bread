<script>
import MenuNav from "@/components/MenuNav.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    MenuNav,
    Footer,
  },
};
</script>
<template>
  <MenuNav />
  <router-view />
  <Footer />
</template>
<style lang="scss">
.carousel {
  margin-top: -56px;
}
.carousel-item {
  img {
    height: 100vh;
  }
}
.menu-title {
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  padding: 0 3%;
  h1 {
    color: #fff;
    margin-top: 35%;
    font-family: "Spartan", sans-serif;
    font-weight: 400;
    font-size: 3.2em;
    line-height: 1.5em;
    letter-spacing: 0.2em;
    span {
      display: block;
    }
  }
  .subtitle {
    position: absolute;
    line-height: 1.5em;
    font-size: 0.8em;
    opacity: 0.8;
    bottom: 0;
  }
  .subtitle-upright {
    font-family: "Noto Serif TC", serif;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    top: 35%;
    right: 0;
    position: absolute;
    line-height: 2em;
    letter-spacing: 0.3em;
    font-size: 1.3em;
  }
  p {
    color: #fff;
    span {
      display: block;
    }
  }
}
.menu-bg {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    top: 0;
    z-index: 1;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
  }
}
.header {
  position: relative;
  height: 100vh;
  .navbar {
    position: absolute;
    width: 100%;
    //background-color: rgba(0, 0, 0, 1);
  }
  a {
    color: #fff;
  }
  .carousel-inner {
    height: 100vh;
    img {
      height: 100vh;
    }
  }
}
</style>
