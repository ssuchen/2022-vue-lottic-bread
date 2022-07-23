<script></script>
<template>
  <!-- carousel start-->
  <div
    id="carouselExampleFade"
    class="carousel slide carousel-fade h-100 position-relative menu-bg"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/image/banner.jpg" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/image/banner02.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/image/banner03.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <!-- menu 標題 -->
    <div class="row position-absolute menu-title">
      <div class="col">
        <!-- <img src="" alt="閣樓面包坊" /> -->
        <h1>THE<span></span>LOTTIC<span></span>BREAD</h1>
        <p class="subtitle">
          Happiness is not about being immortal nor having food or rights in
          one’s hand、<span></span> It’s about having each tiny wish come true,
          or having something to eat <span></span> when you are hungry or having
          someone’s love when you need love.<span></span>
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
  <!-- carousel end-->
  <!-- menu nav bar start-->
  <nav class="nav d-flex justify-content-center">
    <router-link class="nav-link text-center" to="/about">關於我們</router-link>
    <router-link class="nav-link text-center" to="/news">最新消息</router-link>
    <router-link class="nav-link text-center" to="/">首頁</router-link>
    <router-link class="nav-link text-center" to="/products"
      >門市據點</router-link
    >
    <router-link class="nav-link text-center" to="/products"
      >產品列表</router-link
    >
  </nav>
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
