<template>
  <div class="container">
    <div class="introduction-wrapper">
      <h1 style="text-align: center">TelegramX</h1>
      <div class="flex-row flex-container">
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
          alt="telegram-screenshot"/>
      </div>
    </div>

    <p class="title text-center">为什么使用TelegramX</p>
    <div class="advantage-container">
      <div
        class="lottie-item"
        v-for="(i, index) in animatedStickerData"
        :key="index">
        <animated-sticker
          size="160"
          :tgs-url="i.path"/>
        <p class="title">{{ i.title }}</p>
        <p class="text">{{ i.text }}</p>
      </div>
    </div>

    <el-divider></el-divider>
    <div style="height: 100px">
      <app-footer/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppFooter from "@/layout/components/AppFooter.vue";
import { LOCAL_TGS_URLS } from "@/assets/animatedAssets";
import AnimatedSticker from "@/components/AnimatedSticker.vue";
const animatedStickerData = [
  {
    path: LOCAL_TGS_URLS.RocketFast,
    title: '高性能',
    text: 'Telegram在弱网络环境下也能表现出高性能'
  },
  {
    path: LOCAL_TGS_URLS.Simple,
    title: '简单',
    text: 'Telegram很简单，即使你没有使用过也能很快上手'
  },
  {
    path: LOCAL_TGS_URLS.Private,
    title: '隐私',
    text: 'Telegram使用256位AES对称加密加密数据及2048位RSA和Diffie–Hellman算法生成密钥'
  },
  {
    path: LOCAL_TGS_URLS.Synced,
    title: '同步',
    text: 'Telegram允许您从多个设备访问聊天。'
  },
  {
    path: LOCAL_TGS_URLS.Fast,
    title: '快速',
    text: 'Telegram比任何其他应用程序传递消息的速度都快'
  },
  {
    path: LOCAL_TGS_URLS.Powerful,
    title: '强大的',
    text: 'Telegram has no limits on the size of your media and chats.'
  },
  {
    path: LOCAL_TGS_URLS.Open,
    title: '开源',
    text: 'Telegram has an open API and source code free for everyone.'
  },
  {
    path: LOCAL_TGS_URLS.Secure,
    title: '安全',
    text: 'Telegram使您的信息免受黑客攻击'
  },
  // {
  //   path: LOCAL_TGS_URLS.Social,
  //   title: 'Social',
  //   text: 'Telegram groups can hold up to 200,000 members.'
  // },
  // {
  //   path: LOCAL_TGS_URLS.Expressive,
  //   title: 'Expressive',
  //   text: 'Telegram lets you completely customize your messenger.'
  // },
]
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}

.introduction-wrapper {
  max-width: 53rem;
  margin: 2rem auto;

  .flex-container {
    justify-content: center;
    flex-wrap: wrap;

    .introduction {
      max-width: 21rem;
      line-height: 2rem;

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
    }

    .telegram-screenshot {
      max-width: 450px;
      padding: 1rem;
    }
  }
}

.title {
  font-size: 1.5rem;
  font-weight: 500;
}

.advantage-container {
  text-align: center;
  max-width: 100rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;

  .lottie-item {
    padding: 10px;
    width: 20rem;
    .title {
      font-size: 1.5rem;
      color: #0088cc;
    }

    .text {
      line-height: 1.7rem;
    }
  }
}
</style>
