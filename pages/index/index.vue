<template>
  <div class="sticky">
    <!-- 公共头部 -->
    <AppHeader />
    <!-- 频道模块 -->
    <van-tabs>
      <van-tab v-for="item in chnnelList" :key="item.id" :title="item.name" />
    </van-tabs>
  </div>
  <!-- 视频列表 -->
  <AppVideo />
  <van-back-top right="15vw" bottom="10vh" type="primary" />
</template>
<script setup lang="ts">
const { data: chnnelList } = await useFetch('/api/channel', {
  method: 'GET'
})
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0px;
  z-index: 1;
}
</style>
