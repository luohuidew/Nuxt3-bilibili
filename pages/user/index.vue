<template>
  <AppHeader :avatar_url="avatar_url" :avatar="true" />
  <div class="banner"></div>
  <div class="info-card">
    <div class="part1">
      <div class="face">
        <img
          class="bfs-img avatar"
          src="https://i1.hdslb.com/bfs/face/ddc768b90d4b9f87398a35822294ad6a9e1c425d.jpg"
        />
      </div>
      <div class="relation">
        <div class="count">
          <span class="fans">
            <span class="num">3</span><br />
            <span class="type">粉丝</span>
          </span>
          <span class="split"></span>
          <span class="follow">
            <span class="num">44</span><br />
            <span class="type">关注</span>
          </span>
          <span class="split"></span>
          <span class="likes">
            <span class="num">28</span><br />
            <span class="type">获赞</span>
          </span>
          <span class="split"></span>
        </div>
        <div class="follow-btn">
          <button class="white">编辑资料</button>
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="base">
        <span class="name">小天才之心</span>
        <span class="gender">
          <i class="iconfont ic_male" style="color: #92d1e5"></i>
        </span>
        <span class="level">
          <i class="iconfont ic_userlevel_3" style="color: #92d1e5"></i>
        </span>
      </div>
      <div class="desc">
        <div class="content">点个赞吧</div>
        <a class="spread-btn" @click="handleDisplay">{{ isShow ? '收起' : '展开' }}</a>
      </div>
      <div class="tags" v-show="isShow">
        <span>uid:{{ '229444927' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const avatar_url = ref<string>('')
const isShow = ref<boolean>(true)
useFetch('/api/user').then((res: any) => {
  console.log(res.data.value)
  avatar_url.value = res.data.value.data.info.avatar
})

const handleDisplay = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped lang="scss">
.banner {
  width: 100vmin;
  height: 25vmin;
  overflow: hidden;
  background: url(http://s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/bannerTop_new.png);
  background-size: cover;
  background-position: 50%;
}
.part1 {
  padding: 0 3.2vmin;
  .face {
    float: left;
    position: relative;
    width: 22.4vmin;
    height: 22.4vmin;
    .avatar {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      margin-top: -1.6vmin;
    }
  }
  .relation {
    float: right;
    width: 58.66667vmin;
    padding-top: 2.13333vmin;
    color: #e7e7e7;
    .count {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      justify-content: space-around;
    }
    .count > span {
      width: 19.2vmin;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
    }
    .count .split {
      vertical-align: middle;
      width: 1px;
      height: 4.26667vmin;
      background: #e7e7e7;
    }
    .count .num {
      font-size: 3.73333vmin;
      color: #212121;
      line-height: 4.26667vmin;
    }
    .count .type {
      font-size: 2.93333vmin;
      color: #999;
    }
    .follow-btn button {
      width: 100%;
      display: block;
      height: 8vmin;
      box-sizing: border-box;
      border-radius: 1.06667vmin;
      font-size: 3.73333vmin;
      margin-top: 3.2vmin;
      outline: none;
    }
    .white {
      background: #fff;
      border: 1px solid #fb7299;
      color: #fb7299;
    }
  }
}
.iconfont {
  font-family: iconfont !important;
  font-size: 5.5vw;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.part2 {
  clear: both;
  padding: 3.2vmin;
  .base {
    .name {
      font-size: 4.8vmin;
      color: #212121;
      max-width: 62.66667vmin;
      vertical-align: middle;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
    }
    .gender {
      margin-left: 1.06667vmin;
      display: inline-block;
      vertical-align: middle;
      padding-top: 0.53333vmin;
    }
    .level {
      margin-left: 1.6vmin;
      vertical-align: middle;
    }
  }
}
.desc {
  clear: both;
  .content {
    margin-top: 2.13333vmin;
    font-size: 3.46667vmin;
    color: #999;
    line-height: 4.53333vmin;
    width: 83.46667vmin;
    height: 4.53333vmin;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    float: left;
  }
  .spread-btn {
    margin-top: 1.86667vmin;
    float: right;
    font-size: 3.46667vmin;
    color: #1389bf;
  }
}
.tags span {
  display: inline-block;
  font-size: 3.73333vmin;
  padding: 0.53333vmin 1.33333vmin;
  margin-right: -2.66667vmin;
  color: #505050;
  background: #f4f4f4;
  border-radius: 0.53333vmin;
  -webkit-transform: scale(0.71);
  transform: scale(0.71);
  -webkit-transform-origin: left;
  transform-origin: left;
}
</style>
