<script>
// typical import
import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  methods: {
    svgSCroll() {
      const paths = [...document.querySelectorAll("path.path-anim")];
      console.log(paths);
      paths.forEach((el) => {
        //el 最靠近 svg 的 tag
        // const svgEl = el.closest("svg");
        const elA = el;
        //獲取要改變的 path 路徑（藏在dateset裏）
        const pathTo = el.dataset.pathTo;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: elA,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
          .to(el, {
            ease: "none",
            attr: { d: pathTo },
          });
      });
    },
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.svgSCroll();
    // this.$swal("Hello Vue world!!!");
  },
};
</script>
<template>
  <!-- carousel start-->
  <section class="bannerSection">
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade h-100 position-relative menu-bg"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="img img-1"></div>
        </div>
        <div class="carousel-item">
          <div class="img img-2"></div>
        </div>
        <div class="carousel-item">
          <div class="img img-3"></div>
        </div>
      </div>
      <!-- menu 標題 -->
      <div class="row position-absolute menu-title">
        <div class="col title-content">
          <!-- <img src="" alt="閣樓面包坊" /> -->

          <h1>
            <img src="@/assets/image/bread.png" alt="..." width="100px" /><br />
            THE<span></span>LOTTIC<span></span>BREAD
          </h1>
          <p class="subtitle">
            Happiness is not about being immortal nor having food or rights in
            one’s hand、<span></span> It’s about having each tiny wish come
            true, or having something to eat <span></span> when you are hungry
            or having someone’s love when you need love.<span></span>
          </p>
        </div>
        <div class="col">
          <p class="subtitle-upright">
            童畫般的初心! <span></span> 用最溫柔的雙手 <span></span>
            製作出最柔和的口感
          </p>
        </div>
      </div>
    </div>
    <div class="svgSection">
      <svg
        class="separator separator--down"
        width="100%"
        height="100%"
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
      >
        <path
          class="path-anim"
          data-path-to="M 24 0 C 33 0 37 10 49 10 C 61 10 65 0.1 74 0 C 83 0 90 10 100 0 L 100 10 L 0 10 L 0 0 C 9 7 15 0.1 24 0 Z"
          d="M 24 0 C 33 0 30 0 49 0 C 64 0 65 0.1 74 0 C 83 0 82 0 100 0 L 100 10 L 0 10 L 0 0 C 11 0 15 0.1 24 0 Z"
        />
      </svg>
    </div>
  </section>

  <!-- carousel end-->
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
  <!-- container start-->
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            class="img-fluid img-thumbnail"
            src="@/assets/image/index_pic01.jpg"
            alt=""
          />
        </div>
        <div class="col">
          <p>
            麥田香氣 <span></span>在最溫柔的烘托下<span
            ></span> 雀躍地在舌尖上旋轉
          </p>
          <button class="btn btn-primary">關於我們</button>
          <p>
            <small>
              The shortest way to do many things is to only one thing at a time.
            </small>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>文學的氣息下 <span></span>咀嚼詩人般的浪漫情懷</p>
          <button class="btn btn-primary">活動資訊</button>
          <p>
            <small
              >Live beautifully, dream passionately, love completely.</small
            >
          </p>
        </div>
        <div class="col">
          <img
            class="img-fluid img-thumbnail"
            src="@/assets/image/index_pic02.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <img
            class="img-fluid img-thumbnail"
            src="@/assets/image/index_pic05.jpg"
            alt=""
          />
        </div>
        <div class="col">
          <p>最適當的溫度<span></span>烘出最澄澈的外衣</p>
          <button class="btn btn-primary">造訪秘密基地</button>
          <p>
            <small>
              Logic will get you from A to B. Imagination will take you
              everywhere.</small
            >
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- container end-->

  <!-- <router-view /> -->
</template>
<style lang="scss">
.bannerSection {
  position: relative;
}
.svgSection {
  position: absolute;
  bottom: 0;
  z-index: 9;
  width: 100%;
}
.separator {
  fill: #fff;
  height: 80px;
}

.carousel-item {
  .img {
    height: calc(100vh + 80px);
    background-size: cover;
    background-position: center center;
  }
  .img-1 {
    background-image: url("~@/assets/image/banner.jpg");
  }
  .img-2 {
    background-image: url("~@/assets/image/banner02.jpg");
  }
  .img-3 {
    background-image: url("~@/assets/image/banner03.jpg");
  }
  // img {
  //   height: 125vh;
  // }
}
.menu-title {
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  h1 {
    color: #fff;

    font-family: "Spartan", sans-serif;
    font-weight: 400;
    font-size: 3.2em;
    line-height: 1.5em;
    letter-spacing: 0.2em;
    width: 100%;
    span {
      display: block;
    }
  }
  .subtitle {
    // position: absolute;
    line-height: 1.5em;
    font-size: 0.8em;
    opacity: 0.8;
    bottom: 0;
  }
  .subtitle-upright {
    font-family: "Noto Serif TC", serif;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
    top: 30vh;
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
.title-content {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-top: 30vh;
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
.carousel-item {
  transform: scale(1);
  transition: all 1s;
}
.carousel-item.active {
  transform: scale(1.05);
  transition: all 3s;
  opacity: 0.6;
}
</style>
