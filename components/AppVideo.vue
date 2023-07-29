<template>
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <div class="video-list">
      <NuxtLink class="v-card" v-for="item in list" :key="item.aid" :to="`/video/${item.bvid}`">
        <div class="card">
          <div class="card-img">
            <img class="pic" :src="item.pic" :alt="item.title" />
          </div>
          <div class="count">
            <span>
              <i class="iconfont icon_shipin_bofangshu"></i>
              {{ item.stat.view }}
            </span>
            <span>
              <i class="iconfont icon_shipin_danmushu"></i>
              {{ item.stat.danmaku }}
            </span>
          </div>
        </div>
        <p class="title">{{ item.title }}</p>
      </NuxtLink>
    </div>
  </van-list>
</template>

<script setup lang="ts">
import type { VideoItem } from '@/types/video'
const list = ref<VideoItem[]>([])
const loading = ref(false)
const finished = ref(false)
let page = 1
let pageSize = 20
const onLoad = () => {
  // 正在加载
  loading.value = true
  const data = videoList.value?.slice((page - 1) * pageSize, page * pageSize) as VideoItem[]
  list.value.push(...data)
  page++
  // 根据页码提取数据
  const timer = setTimeout(() => {
    loading.value = false
  }, 1250)
  // 加载结束
  if (videoList.value?.length === list.value.length) {
    finished.value = true
    clearInterval(timer)
  }
}
const { data: videoList } = await useFetch('/api/video', {
  method: 'GET'
})
// console.log(videoList)
onLoad()
</script>

<style lang="scss" scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
.v-card {
  width: 50%;
  padding: 0 5px 10px;
  .card {
    position: relative;
    background: #f3f3f3 url(@/assets/images/default.png) center no-repeat;
    background-size: 36%;
    border-radius: 2px;
    overflow: hidden;
    .card-img {
      .pic {
        height: 100px;
        width: 100%;
        object-fit: cover;
      }
    }
    .count {
      background-image: linear-gradient(0deg, #000000d9, #0000);
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 6px;
      span {
        .iconfont {
          font-size: 12px;
        }
      }
    }
  }
  .title {
    margin-top: 5px;
    font-size: 12px;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
