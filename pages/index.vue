<template>
  <!-- <Tutorial/> -->
  <div>
    <TheNavbar />
    <span id="top"></span>
    <nuxt-child />
    <TheFooter />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  data() {
    return {
      isLogin: false,
    }
  },
  // provide() {
  //   return {
  //     isLogin: this,
  //   }
  // },
  mounted() {

  },
})
</script>
