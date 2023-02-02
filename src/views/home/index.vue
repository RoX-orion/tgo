<template>
  <div class="container">
    <div class="introduction-wrapper">
      <h1 style="text-align: center">TelegramX</h1>
      <div class="flex-col introduction">
        <p >
          Telegram（非正式简称TG、电报）是跨平台的即时通信软件，
          其客户端是自由及开放源代码软件，但服务端是专有软件。
          TelegramX是其服务端的个人实现。
        </p>
        <div class="start">快速开始</div>
      </div>
      <img
        class="telegram-screenshot"
        src="../../assets/telegram-screenshot-1.png"
        alt="telegram-screenshot">
    </div>

    <div class="advantage-container">
      <p class="title text-center">为什么使用TelegramX</p>
      <div>

      </div>
    </div>
    <div style="height: 100px">
      <app-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppFooter from "@/layout/components/AppFooter.vue";

</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}

.introduction-wrapper {
  max-width: 53rem;
  height: 21rem;
  margin: 2rem auto;
}

.introduction {
  max-width: 21rem;
  line-height: 2rem;
  display: inline-block;
}

.start {
  width: 4rem;
  height: 1.8rem;
  color: white;
  font-weight: 500;
  background-color: #29B6F6 ;
  padding: .5rem 1rem;
  border-radius: .3rem;
  cursor: pointer;
}

.telegram-screenshot {
  float: right;
  display: inline-block;
  max-width: 450px;
}

.advantage-container {
  max-width: 900px;
  margin: 60px auto;
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
