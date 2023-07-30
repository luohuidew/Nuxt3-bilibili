<template>
  <div class="header">
    <p>登录bilibili</p>
    <NuxtLink class="face" to="/login/loginpwd">
      <span>密码登录</span>
      <span style="display: none">短信登录</span>
    </NuxtLink>
  </div>
  <div class="city">
    <van-cell :title="countryName" is-link @click="showPopup" />
    <van-popup v-model:show="show" :style="{ height: '45%' }" position="bottom">
      <van-cell
        v-for="item in telList"
        :key="item.id"
        :title="item.country"
        :style="{ textAlign: 'center' }"
        @click="handleCheckCountry(item.id)"
      />
    </van-popup>
  </div>

  <van-form @submit="onSubmit">
    <div class="form">
      <van-field
        v-model="phone"
        :label="tel"
        name="phone"
        placeholder="请输入常用手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-button size="small" type="primary">获取验证码</van-button>
    </div>

    <van-field
      v-model="vcode"
      type="number"
      name="vcode"
      label="验证码"
      placeholder="请输入验证码"
      :rules="[{ required: true, message: '请填写验证码' }]"
    />
    <div style="margin: 16px">
      <van-button block type="primary" native-type="submit"> 登录/注册 </van-button>
    </div>
  </van-form>
  <div class="notify" style="text-align: center; color: #757575; margin-top: 26px">
    <p style="font-size: 12px">未注册过哗哩哗哩的手机号，我们将自动帮你注册账号</p>
    <p style="font-size: 12px">
      登录或完成注册即代表你同意<span style="color: #fb7299">用户协议</span>和<span
        style="color: #fb7299"
        >隐私政策</span
      >
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { PhoneNumberData } from '@/types/phoneList'
const show = ref(false)
const tel = ref('+86')
const countryName = ref('中国大陆')
const phone = ref('')
const vcode = ref('')
const telList = ref<PhoneNumberData[]>([])
const showPopup = () => {
  show.value = true
}
useFetch('/api/phone').then((res) => {
  // console.log(res.data)
  telList.value = res.data.value as PhoneNumberData[]
})
const handleCheckCountry = (id: number) => {
  // console.log(id, telList.value[id - 1])
  tel.value = telList.value[id - 1].tel
  countryName.value = telList.value[id - 1].country
  show.value = false
}

const onSubmit = (values: any) => {
  console.log('submit', values)
  phone.value = ''
  vcode.value = ''
}

useSeoMeta({
  // 网站标题
  title: '账号安全'
})
</script>

<style scoped lang="scss">
.header {
  height: 44px;
  width: 100%;
  position: relative;
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
.city {
  margin-top: 20px;
}
.form {
  margin-top: 20px;
  display: flex;
  padding: 0 10px;
  .van-button {
    width: 100px;
  }
}
</style>
