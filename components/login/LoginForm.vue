<template>
  <!-- login -->
  <div id="pills-login" class role="tabpanel" aria-labelledby="tab-login">
    <ValidationObserver ref="form">
      <!-- <div class="text-center mb-3">
        <p>使用第三方登入:</p>
        <LoginThirdpartyLogin />
      </div>
      <p class="text-center">或:</p> -->
      <!-- Tel input -->
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|isPhone"
        name="tel"
      >
        <div class="form-outline mb-4 mt-7">
          <input
            id="tel"
            v-model="data.mobile"
            name="tel"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors[0], 'is-valid': data.mobile }"
          />
          <span class="invalid-feedback">{{ errors[0] }}</span>
          <label class="d-block form-label" for="registerName">手機號</label>
        </div>
      </ValidationProvider>
      <!-- Name input -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="密碼">
        <div class="form-outline mb-4">
          <input
            id="name"
            v-model="data.password"
            name="name"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors[0], 'is-valid': data.password }"
          />
          <span class="invalid-feedback">{{ errors[0] }}</span>
          <label class="d-block form-label" for="registerName">密碼</label>
        </div>
      </ValidationProvider>
      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Checkbox -->
          <div class="form-check mb-3 mb-md-0">
            <input
              id="loginCheck"
              class="form-check-input"
              type="checkbox"
              v-model="remember"
              @change="rememberMe"
            />
            <label class="form-check-label" for="loginCheck">記住我</label>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <a href="#!">忘記密碼?</a>
        </div>
      </div>
      <!-- Submit button -->
      <button
        type="submit"
        class="btn btn-primary btn-block mb-4"
        @click="login"
      >
        登入
      </button>
      <!-- Register buttons -->
      <div class="text-center">
        <span>
          非會員?
          <a href="#" @click.prevent="$emit('changeTab', 'Register')">註冊</a>
        </span>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import axios from 'axios'
import { apiUserLogin } from '@/api'
import { ref, useRouter } from '@nuxtjs/composition-api'
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      // data: {
      //   mobile: '',
      //   password: '',
      //   userType: 1,
      // },
    }
  },
  mounted() {
    if (localStorage.getItem('phone')) {
      this.data.mobile = localStorage.getItem('phone')
      this.remember = true
    }
  },
  methods: {
    login() {
      const submit = this.$refs.form.validate()

      submit.then((isValid) => {
        if (isValid) {
          apiUserLogin(this.data)
            .then((res) => {
              if (res.data.code == 0) {
                const token = res.data.data.token
                const insecond = new Date(new Date().getTime() + 10 * 60 * 1000)
                Cookies.set('allwellToken', token, {
                  expires: insecond,
                })

                axios.defaults.headers.common.Authorization = token

                this.$store.commit('isLogin', true)
                this.$message({
                  message: '已成功登入',
                  type: 'success',
                  showClose: true,
                })
                this.$router.push('member')
              } else {
                this.$message({
                  message: res.data.message,
                  type: 'error',
                  showClose: true,
                })
              }
            })
            .catch((error) => {
              this.$message({
                message: error,
                type: 'error',
                showClose: true,
              })
            })
        }
      })
    },
  },
  setup() {
    let remember = ref(false)
    const data = ref({
      mobile: '0901234567',
      password: '1234',
      userType: 1,
    })
    function rememberMe() {
      if (remember.value) {
        localStorage.setItem('phone', data.value.mobile)
      } else {
        localStorage.removeItem('phone')
      }
    }
    return {
      data,
      remember,
      rememberMe,
    }
  },
}
</script>
