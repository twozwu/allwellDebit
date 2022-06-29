<template>
  <div class="">
    <button
      type="button"
      class="btn btn-primary btn-floating mx-1"
      @click="fbLogin"
    >
      <i class="bi bi-facebook"></i>
    </button>
    <button
      id="googleLoginBtn"
      type="button"
      class="btn btn-primary btn-floating mx-1"
    >
      <i class="bi bi-google"></i>
    </button>
    <button
      type="button"
      class="btn btn-primary btn-floating mx-1"
      @click="lineLogin"
    >
      <i class="bi bi-line"></i>
    </button>
  </div>
</template>

<script setup>
import { onMounted } from '@nuxtjs/composition-api'

// 處理各種登入身份
function statusChangeCallback(response) {
  // 登入 FB 且已加入會員
  if (response.status === 'connected') {
    html = '已登入 FB，並加入 友廷等公車應用程式<br/>'
    FB.api('/me?fields=id,name,email', function (response) {
      console.log(response)
      html += '會員暱稱：' + response.name + '<br/>'
      html += '會員 email：' + response.email + '<br/>'
      html += '會員 uid :' + response.id
      console.log(html)
    })
  }
  // 登入 FB, 未偵測到加入會員
  else if (response.status === 'not_authorized') {
    console.log('已登入 FB，但未加入 友廷等公車應用程式 應用程式')
  }
  // 未登入 FB
  else {
    console.log('未登入 FB')
  }
}
// 查看登入狀態
function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response)
  })
}

function fbLogin() {
  // 進行登入程序
  FB.login(
    function (response) {
      statusChangeCallback(response)
    },
    {
      scope: 'public_profile,email'
    }
  )
}

// ------------Google登入---------------
const googleUser = {}
let googleLoginBtn = ''
let auth2

onMounted(() => {
  googleLoginBtn = document.getElementById('googleLoginBtn')
  gapi.load('auth2', function () {
    // 初始化GoogleAuth對象
    auth2 = gapi.auth2.init({
      client_id:
        '74791824651-d7f52jtbe5u7dd5jpfg0pqjcj3l4oaob.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin'
    })
    // 綁定登入按鈕
    attachSignin(googleLoginBtn)
  })
})

function attachSignin(element) {
  // auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);   需要四個參數
  auth2.attachClickHandler(
    element,
    {},
    function (googleUser) {
      // 取得token
      const id_token = googleUser.getAuthResponse().id_token
      console.log(id_token)
      // 取得個人資料
      const profile = googleUser.getBasicProfile()
      console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName())
      console.log('Image URL: ' + profile.getImageUrl())
      console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
    },
    function (error) {
      console.log(error)
    }
  )
}

// ------------Line登入---------------
function lineLogin() {
  const client_id = '1656689693' // 你的Channel ID
  const redirect_uri = 'http://localhost:3000' // 網站域名，需與Callback URL一樣
  let link = 'https://access.line.me/oauth2/v2.1/authorize?'
  link += 'response_type=code'
  link += '&client_id=' + client_id
  link += '&redirect_uri=' + redirect_uri
  link += '&state=login' // 自己設定的驗證碼
  link += '&scope=openid%20profile' // 你想取得的資料(openid profile email)
  window.location.href = link
}
</script>
