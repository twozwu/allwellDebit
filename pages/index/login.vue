<template>
  <div class="wrap h-100 py-5 mt-7">
    <div class="container">
      <div class="row">
        <div class="form col-lg-6 col-md-8 border rounded-3 shadow mx-auto p-5">
          <!-- Pills navs -->
          <ul id="ex1" class="nav nav-pills nav-justified mb-3" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                id="tab-login"
                class="nav-link"
                :class="{ active: currentTab == 'Login' }"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-login"
                aria-selected="true"
                @click="currentTab = 'Login'"
              >
                登入
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                id="tab-register"
                class="nav-link"
                :class="{ active: currentTab == 'Register' }"
                data-mdb-toggle="pill"
                role="tab"
                aria-controls="pills-register"
                aria-selected="false"
                @click="currentTab = 'Register'"
              >
                註冊
              </button>
            </li>
          </ul>
          <!-- Pills navs -->

          <!-- Pills content -->
          <div class="tab-content">
            <LoginForm v-if="currentTab == 'Login'" @changeTab="changeCurrentTab"/>
            <LoginRegisterForm v-else @changeTab="changeCurrentTab"/>
          </div>
          <!-- Pills content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTab: "Login",
    };
  },
  methods: {
    changeCurrentTab(val) {
      this.currentTab = val;
    }
  }
};
</script>

<style lang="scss" scoped>
// .wrap {
//   background: url("https://images.unsplash.com/photo-1507608158173-1dcec673a2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
//     center / cover;
// }
.form {
  background: rgba(72, 88, 72, 0.1);
}
</style>
