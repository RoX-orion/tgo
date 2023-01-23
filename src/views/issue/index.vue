<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="input" @click="searchIssue">

      </div>
    </div>

    <div class="filter-wrapper flex-row">
      <div>
        所有
      </div>
      <div>
        Bug
      </div>
      <div>
        建议
      </div>
      <div style="float: right; ">
        <div>热度</div>
        <div>时间</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchIssue = () => {

}
</script>

<style scoped>
.container {
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
}

.search-wrapper {
  max-width: 550px;
  height: 45px;
  border: rgba(0, 0, 0, .1) solid 2px;
  border-radius: 6px;
  outline: none;
  margin: 20px auto;
}

.input {
  height: 100%;
  width: 90%;
}

.input:focus {
  border: #409eff solid 2px;
  border-radius: 4px;
}

.filter-wrapper {
  margin: 0 auto;
  max-width: 550px;
}

.filter-wrapper div {
  padding: 5px 10px;
}
</style>