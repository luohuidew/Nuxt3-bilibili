<template>
  <!-- 公共头部 -->

  <AppHeader />

  <!-- 频道模块 -->
  <van-tabs>
    <van-tab v-for="item in chnnelList" :key="item.id" :title="item.name" />
  </van-tabs>
  <!-- 视频列表 -->
  <AppVideo />
</template>
<script setup lang="ts">
const { data: chnnelList } = await useFetch('/api/channel', {
  method: 'GET'
})
</script>

<style lang="scss" scoped>
// 视频卡片
</style>
