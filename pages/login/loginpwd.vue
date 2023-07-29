<template>
  <div class="header">
    <p>登录bilibili</p>
    <NuxtLink class="face" to="/login/logintel">
      <span style="display: none">密码登录</span>
      <span>短信登录</span>
    </NuxtLink>
  </div>

  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      label="账号"
      name="username"
      placeholder="你的手机号/邮箱"
      :rules="[{ required: true, message: '请输入你的手机号/邮箱' }]"
    />
    <van-field
      style="margin-top: 5px"
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="请输入密码"
      :rules="[{ required: true, message: '请输入密码' }]"
    />
    <div class="form-button">
      <nuxt-link to="/login/logintel">
        <van-button
          type="default"
          style="color: #fb7299; border: 1px solid #fb7299"
          native-type="submit"
          >注册</van-button
        >
      </nuxt-link>
      <nuxt-link to="/">
        <van-button type="primary" native-type="submit"> 登录</van-button>
      </nuxt-link>
    </div>
  </van-form>
  <div class="notify" style="color: #fb7299">
    <p style="font-size: 12px">未注册过哗哩哗哩的手机号，我们将自动帮你注册账号</p>
    <p style="font-size: 12px">登录或完成注册即代表你同意用户协议和隐私政策</p>
  </div>
</template>

<script lang="ts" setup>
const username = ref('')
const password = ref('')

const onSubmit = (values: any) => {
  console.log('submit', values)
  username.value = ''
  password.value = ''
}

useSeoMeta({
  title: '账号安全'
})
</script>

<style scoped lang="scss">
.header {
  height: 44px;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  p {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    position: absolute;
    right: 4%;
    font-size: 12px;
    line-height: 44px;
  }
}
.van-form {
  .form-button {
    display: flex;
    margin-top: 16px;
    justify-content: center;
    align-items: center;
    .van-button {
      margin: 5px;
      width: 170px;
      height: 40px;
    }
  }
}
</style>
