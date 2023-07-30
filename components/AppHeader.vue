<template>
  <header class="app-header">
    <NuxtLink class="logo" to="/">
      <i class="iconfont Navbar_logo"></i>
    </NuxtLink>
    <a class="search" href="#">
      <i class="iconfont ic_search_tab"></i>
    </a>
    <NuxtLink class="face" to="/login/logintel">
      <img :src="avatar_url || 'https://pic.imgdb.cn/item/64c4e1ce1ddac507cc7d3dd6.png'" />
    </NuxtLink>
    <nuxt-link
      to="https://d.bilibili.com/download_app.html?preUrl=https%3A%2F%2Fm.bilibili.com%2Fspace%2F229444927&schema=bilibili%3A%2F%2Fspace%2F229444927&h5awaken=b3Blbl9hcHBfZnJvbV90eXBlPWg1Jm9wZW5fYXBwX3V1aWQ9NzY3NkQ2NUUtN0JFNS1DMTAxMDQtM0Q1Mi05RjkzN0YxOTVDRTczMzA4NmluZm9jJm9wZW5fYXBwX2dyb3VwaWQ9JTdCJTdEJm9wZW5fYXBwX3VybD1odHRwcyUzQSUyRiUyRm0uYmlsaWJpbGkuY29tJTJGc3BhY2UlM0Zmcm9tJTNEaGVhZGxpbmUmb3Blbl9hcHBfYWRkaXRpb249JTdCJTIydGVjaF90eXBlJTIyJTNBJTIydW5pdmVyc2FsJTIyJTJDJTIydWFTb3VyY2UlMjIlM0ElMjIlMjIlMkMlMjJic291cmNlJTIyJTNBJTIyZGVmYXVsdCUyMiUyQyUyMnNwbWlkJTIyJTNBJTIyMzMzLjIuY2xpY2sudG9wRG93bmxvYWQlMjIlMkMlMjJoNV9idXZpZCUyMiUzQSUyMjIxMkVCMTc5LUJEQzUtNTg5QS05RjlBLUIwQkIxOUI5QjdBNjMyMTY3aW5mb2MlMjIlMkMlMjJoNV9taWQlMjIlM0ElMjIyMjk0NDQ5MjclMjIlMkMlMjJ0cyUyMiUzQTE2OTA3Mjg2MTY3NDklMkMlMjJ1YSUyMiUzQSUyMk1vemlsbGElMkY1LjAlMjAoaVBob25lJTNCJTIwQ1BVJTIwaVBob25lJTIwT1MlMjAxM18yXzMlMjBsaWtlJTIwTWFjJTIwT1MlMjBYKSUyMEFwcGxlV2ViS2l0JTJGNjA1LjEuMTUlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwVmVyc2lvbiUyRjEzLjAuMyUyME1vYmlsZSUyRjE1RTE0OCUyMFNhZmFyaSUyRjYwNC4xJTIyJTJDJTIyYml6X3R5cGUlMjIlM0ElMjJtc3RhdGlvbiUyMiUyQyUyMnNlc3Npb25JZCUyMiUzQSUyMm9hODE4OWlyeGs0OTlremJsa3BrNXQ1aiUyMiUyQyUyMml0ZW1faWQlMjIlM0ElN0IlMjJpZCUyMiUzQSUyMjIyOTQ0NDkyNyUyMiU3RCUyQyUyMm9wZW5pZCUyMiUzQSUyMiUyMiUyQyUyMnd4ZmlkJTIyJTNBJTIyJTIyJTdE"
      class="down-app"
    >
      <div>下载 APP</div></nuxt-link
    >
  </header>
</template>

<script setup lang="ts">
const props = defineProps(['avatar_url'])
console.log(props)
</script>

<style scoped lang="scss">
// 公共头部
.app-header {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: #fff;
  .logo {
    flex: 1;
    .Navbar_logo {
      color: #fb7299;
      font-size: 28px;
    }
  }
  .search {
    padding: 0 8px;
    .ic_search_tab {
      color: #ccc;
      font-size: 22px;
    }
  }
  .face {
    padding: 0 15px;
    img {
      width: 24px;
      height: 24px;
      border-radius: 3.2vmin;
    }
  }
  .down-app {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
