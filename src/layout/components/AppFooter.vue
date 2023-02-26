<template>
  <div class="container">
    <div class="gray" style="  padding: 20px 0;">
      Copyright &copy 2018-2023 Andre Lina.<br>
      Powered by Andre Lina.
    </div>
    <div class="flex-row link-wrapper">
      <div class="link">
        <span>关于</span>
        <div class="item">隐私政策</div>
        <div class="item">FAQ</div>
      </div>
      <div class="link">
        <span>应用程序</span>
        <div class="item">Web</div>
        <div class="item">Android</div>
      </div>
      <div class="link">
        <span>社区</span>
        <a class="item" href="https://github.com/RoX-orion/im" target="_blank">Github</a>
        <a class="item">TelegramX</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 62rem;
  margin: 0 auto;
  padding: 0 10px;
}


.link-wrapper {
  max-width: 80%;
  padding: 20px 0;
  justify-content: space-between;

  .link {
    line-height: 1rem;
    width: 8rem;
    span {
      font-size: 14px;
    }
  }
}

.item {
  color: #409eff;
  font-size: 13px;
  margin: 10px 0;
  cursor: pointer;
  display: block;
  text-decoration: none;
}
</style>
