<template>
  <div class="container">
    <div class="gray">
      Copyright &copy 2018-2023 Andre Lina. Powered by Andre Lina
    </div>
    <div>
      <span>关于</span>
      <div class="item">隐私政策</div>
      <div class="item">FAQ</div>
    </div>
    <div>
      <span>应用程序</span>
      <div class="item">Web</div>
      <div class="item">Android</div>
    </div>
    <div>
      <span>社区</span>
      <a class="item" href="">Github</a>
      <a class="item">TelegramX</a>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
}

.item {
  color: #409eff;
  font-size: 13px;
  margin: 10px 0;
  cursor: pointer;
  display: block;
}
</style>