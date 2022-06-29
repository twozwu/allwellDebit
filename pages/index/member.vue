<template>
  <div class="container pb-l60">
    <!-- 尚未實名認證 -->
    <div class="hstack bg-warning mt-l72">
      <h6 class="mb-0 p-1">您未完成實名認證還無法認購喔</h6>
      <!-- <a href="#" class="" @click.prevent="goToVerify">按此前往</a> -->
    </div>
    <!-- <el-radio-group
      v-model="tabPosition"
      class="mt-l60"
      style="margin-bottom: 30px"
    >
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>-->

    <el-tabs v-model="activeName" :tab-position="tabPosition" class="mt-5">
      <el-tab-pane label="公告" name="first">
        <MemberUserInfo />
      </el-tab-pane>
      <el-tab-pane label="會員資料" name="second">
        <MemberUserData />
      </el-tab-pane>
      <!-- <el-tab-pane label="服務人員">Role</el-tab-pane>
      <el-tab-pane label="推薦碼">Task</el-tab-pane>-->
    </el-tabs>
  </div>
</template>

<script>

export default {
  middleware: 'isLogin',
  data() {
    return {}
  },
  // computed: {
  //   isLogin() {
  //     return this.$store.state.isLogin
  //   },
  // },
  // mounted() {
  //   if (!this.isLogin) {
  //     this.$message({
  //       message: '請先登入會員',
  //       type: 'warning',
  //       showClose: true,
  //     })
  //     this.$router.push('/login')
  //   }
  // },
  setup() {
    // el-ui參數
    const tabPosition = 'top'
    const currentTab = 'second' // 默认选择系统推送
    const activeName = 'first' // 預設載入頁簽
    return {
      tabPosition,
      currentTab,
      activeName,
    }
  },
}
</script>

<!-- export default {
  components: { UserData, Info },
  data() {
    return {
      tabPosition: "top",
      currentTab: "second", //默认选择系统推送
      activeName: "first",  //預設載入頁簽
    };
  },
  mounted() {
    // this.showface();
  },
  method: {},
}; -->
