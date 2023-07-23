<template>
  <!-- footer -->
  <footer>
    <div class="container">
      <div class="logo">
        <h5>THE LOTTIC BREAD</h5>
        <img src="" alt="" />
        <small>Copyright © Foods Inc.All Rights Reserved.</small>
      </div>
      <ul>
        <li>地址 台北市中正南路 蜂鳥5街 閣樓巷5-13號 (閣樓小劇場斜對面)</li>
        <li>電話 02-3345-5433</li>
        <li>傳真 02-5577-7755</li>
        <li>電子信箱 attic-bread@bird.com.tw</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
footer {
  // background: rgb(75, 28, 28);
  background: #f4f2e9;
  color: rgb(75, 28, 28);
  padding: 3rem 0;
  .logo {
    h5 {
      display: block;
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  small {
    font-size: 0.5rem;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
