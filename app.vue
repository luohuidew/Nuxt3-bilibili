<template>
  <!-- 路由链接 -->
  <NuxtLink to="/">首页</NuxtLink>
  <NuxtLink to="/video">视频页</NuxtLink>
  <!-- 页面路由 -->
  <NuxtPage />
</template>
<script lang="ts" setup>
useSeoMeta({
  // 网站标题
  title: '哔哩哔哩 (゜-゜)つロ 干杯~-bilibili',
  // 网站描述
  description:
    'bilibili是国内知名的在线视频弹幕网站，拥有最棒的ACG氛围，哔哩哔哩内容丰富多元，涵盖动漫、电影、二次元舞蹈视频、在线音乐、娱乐时尚、科技生活、鬼畜视频等。下载客户端还可离线下载电影、动漫。',
  // 搜索关键词
  keywords: 'B站,bilibili,哔哩哔哩,哔哩哔哩动画,动漫,电影,在线动漫,高清电影'
})
</script>

<style>
:root {
  --van-primary-color: #fb7299 !important;
  --van-back-top-background: #fbfbfb !important;
  --van-back-top-text-color: #666 !important;
}
</style>
