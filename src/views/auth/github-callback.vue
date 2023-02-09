<template>
  <div>qqqqqqqqqqqqqqqqqqqqqqq</div>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import {githubOauth2Callback} from "@/api/auth";
import {setToken} from "@/util/auth";

const route = useRoute();
const router = useRouter();
onMounted(() => {
  const code = route.query.code;
  if (code !== null) {
    oauth2Callback(code.toString());
  }
});

const oauth2Callback = (code: string) => {
  console.log('code', code);
  githubOauth2Callback(code).then(async response => {
    const {code, data} = response;
    if (code === 200) {
      await setToken(data.token);
      await router.push('/');
    }
  });
}
</script>

<style scoped>

</style>
