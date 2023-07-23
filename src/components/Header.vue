<template>
  <header class="header">
    <MenuNav />
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade h-100 position-relative menu-bg"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/assets/banner.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/banner02.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="@/assets/banner03.jpg" class="d-block w-100" alt="..." />
        </div>
      </div>
      <!-- menu 標題 -->
      <div class="row position-absolute menu-title">
        <div class="col">
          <h1>THE<span></span>LOTTIC<span></span>BREAD</h1>

          <p class="subtitle">
            Happiness is not about being immortal nor having food or rights in
            one’s hand、<span></span> It’s about having each tiny wish come
            true, or having something to eat <span></span> when you are hungry
            or having someone’s love when you need love.<span></span>
          </p>
        </div>
        <div class="col">
          <p class="subtitle-upright">
            童畫般的初心 <span></span> 用最溫柔的雙手 <span></span>
            製作出最柔和的口感
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import MenuNav from "@/components/MenuNav.vue";
export default {
  components: {
    MenuNav,
  },
};
</script>

<style lang="scss">
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
    background: rgba(0, 0, 0, 0.7);
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
