<template>
  <div class="mt-l72">
    <button @click="myfun1">按钮1</button>
    <button @click="getCookie">get</button>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  name: 'App',
  middleware: 'routerAuth',
  meta: {
    requiresAuth: true,
  },
  data() {
    return {
      text1: 1,
    }
  },
  // setu函数是组合api的入口函数
  setup() {
    let age = ref(20)
    const token = 'asdf'

    function myfun1() {
      const insecond = 'Wed, 29 Dec 2021 04:18:25 GMT'
      document.cookie = `allwellToken=${token};expires=${insecond}`
    }
    function getCookie() {
      console.log(document.cookie)
    }
    //optional api可以接到return出去的值
    return { age, myfun1, getCookie }
  },
}
</script>
