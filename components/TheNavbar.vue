<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1>
          <router-link to="/">歐維信貸</router-link>
        </h1>
      </div>

      <nav id="navbar" class="navbar" :class="{ 'navbar-mobile': isActive }">
        <ul>
          <li>
            <a
              class="nav-link scrollto"
              href="#"
              :class="{ active: $route.name == 'index-member' }"
              @click.prevent="routerPush('/member')"
              >會員中心</a
            >
          </li>
          <!-- <li>
            <a class="nav-link scrollto"
             :class="{ active: $route.name == 'index-verify' }" href="#" @click.prevent="routerPush('/verify')">會員驗證</a>
          </li> -->
          <li>
            <a
              class="nav-link scrollto"
              :class="{
                active:
                  $route.name == 'index-claims' ||
                  $route.name == 'index-claims-buyRecord',
              }"
              href="#"
              @click.prevent="routerPush('/claims')"
              >我要認購</a
            >
          </li>
          <li>
            <a
              class="nav-link scrollto"
              :class="{ active: $route.name == 'index-service' }"
              href="#"
              @click.prevent="routerPush('/service')"
              >服務項目</a
            >
          </li>
          <li>
            <a
              class="nav-link scrollto"
              :class="{ active: $route.name == 'index-qa' }"
              href="#"
              @click.prevent="routerPush('/qa')"
              >常見問題</a
            >
          </li>
          <!-- <li class="dropdown">
            <a href="#" @click.prevent="isDropdown = !isDropdown">
              <span>Drop Down</span>
              <i class="bi bi-chevron-down"></i>
            </a>
            <ul :class="{ 'dropdown-active': isDropdown }">
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li class="dropdown">
                <a href="#">
                  <span>Deep Drop Down</span>
                  <i class="bi bi-chevron-right"></i>
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 4</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Drop Down 2</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
            </ul>
          </li> -->
          <li>
            <a
              class="nav-link scrollto"
              :class="{ active: $route.name == 'index-about' }"
              href="#"
              @click.prevent="routerPush('/about')"
              >關於我們</a
            >
          </li>
          <li v-if="!isLogin">
            <a
              class="getstarted scrollto"
              :class="{ active: $route.name == 'index-login' }"
              @click.prevent="routerPush('/login')"
              >登入 / 註冊</a
            >
          </li>
          <li v-else>
            <a
              class="getstarted scrollto"
              :class="{ active: $route.name == 'index-login' }"
              @click.prevent="logout"
              >登出</a
            >
          </li>
        </ul>
        <i
          class="bi bi-list mobile-nav-toggle"
          :class="{ 'bi-x': isActive }"
          @click="isActive = !isActive"
        ></i>
      </nav>
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      isActive: false,
      isDropdown: false,
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    },
  },
  mounted() {
    this.$store.dispatch('resetLoginState')
  },
  methods: {
    routerPush(route) {
      this.$router.push(route)
      this.isActive = false
    },
    logout() {
      Cookies.remove('allwellToken')
      this.$store.commit('logout')
      this.$message({
        message: '已登出',
        type: 'success',
        showClose: true,
      })
      this.isActive = false
      this.$router.push('/')
    },
  },
  // setup() {
  //   let isActive = false
  //   let isDropdown = false

  //   function routerPush(route) {
  //     this.$router.push(route)
  //     this.isActive = false
  //   }

  //   return {
  //     isActive,
  //     isDropdown,
  //     routerPush,
  //   }
  // },
}
</script>

<style scoped>
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.95);
}
#header.header-transparent {
  background: transparent;
}
#header.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
}
#header .logo h1 {
  font-size: 30px;
  margin: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 2px;
}
#header .logo h1 a,
#header .logo h1 a:hover {
  color: #5777ba;
  text-decoration: none;
}
#header .logo img {
  margin: 0;
  max-height: 40px;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  color: #47536e;
  white-space: nowrap;
  transition: 0.3s;
}
.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  /* color: #5777ba; */
  color: #5777ba;
}
.navbar .getstarted,
.navbar .getstarted:focus {
  background: #5777ba;
  color: #fff;
  padding: 12px 25px;
  margin-left: 30px;
  color: #fff;
  line-height: 1;
  border-radius: 50px;
}
.navbar .getstarted:hover,
.navbar .getstarted:focus:hover {
  background: #748ec6;
  color: #fff;
  cursor: pointer;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 15px;
  text-transform: none;
  font-weight: 600;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover > a {
  color: #5777ba;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}

/**
* Mobile Navigation
*/
.mobile-nav-toggle {
  color: #47536e;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}
.mobile-nav-toggle.bi-x {
  color: #fff;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(51, 60, 79, 0.9);
  transition: 0.3s;
  z-index: 999;
}
.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
}
.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 6px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}
.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #47536e;
}
.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover > a {
  /* color: #5777ba; */
  color: var(--bs-blue);
}
.navbar-mobile .getstarted.active,
.navbar-mobile .getstarted:focus {
  margin: 15px;
  color: var(--bs-primary);
}
.navbar-mobile .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}
.navbar-mobile .dropdown ul li {
  min-width: 200px;
}
.navbar-mobile .dropdown ul a {
  padding: 10px 20px;
}
.navbar-mobile .dropdown ul a i {
  font-size: 12px;
}
.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover > a {
  color: #5777ba;
}
.navbar-mobile .dropdown > .dropdown-active {
  display: block;
}
</style>
