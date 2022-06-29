<template>
  <!-- register -->
  <div id="pills-register" class role="tabpanel" aria-labelledby="tab-register">
    <ValidationObserver ref="form">
      <!-- <div class="text-center mb-3">
        <p>使用第三方註冊:</p>
        <LoginThirdpartyLogin />
      </div>
      <p class="text-center">或:</p> -->
      <!-- Tel input -->
      <ValidationProvider
        v-slot="{ errors }"
        ref="phone"
        rules="required|isPhone"
        name="tel"
      >
        <div class="form-outline mb-4 mt-7">
          <div class="input-group">
            <input
              id="tel"
              v-model="data.mobile"
              name="tel"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors[0], 'is-valid': data.mobile }"
            />
            <button class="btn btn-outline-primary" @click="getCode">
              驗證
            </button>
          </div>
          <span class="invalid-feedback" :class="{ 'd-block': errors[0] }">{{
            errors[0]
          }}</span>
          <label class="d-block form-label" for="registerName">手機號</label>
        </div>
      </ValidationProvider>
      <!-- Tel check -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="telcheck">
        <div class="form-outline mb-4">
          <input
            id="telCheck"
            v-model="data.code"
            name="tel"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors[0], 'is-valid': data.code }"
          />
          <span class="invalid-feedback">{{ errors[0] }}</span>
          <label class="d-block form-label" for="registerName">驗證碼</label>
        </div>
      </ValidationProvider>
      <!-- password input -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="password">
        <div class="form-outline mb-4">
          <input
            id="password"
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
      <!-- password check -->
      <ValidationProvider
        v-slot="{ errors }"
        rules="required|confirmed:password"
        name="codecheck"
      >
        <div class="form-outline mb-4">
          <input
            v-model="passwordCheck"
            name="password-check"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors[0], 'is-valid': passwordCheck }"
          />
          <span class="invalid-feedback">{{ errors[0] }}</span>
          <label class="d-block form-label" for="registerName">密碼確認</label>
        </div>
      </ValidationProvider>
      <!-- Checkbox -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="clause">
        <div class="mb-4">
          <div class="d-flex justify-content-center">
            <input
              id="registerCheck"
              v-model="agreement"
              name="clause"
              class="form-check-input me-2"
              :class="{ 'is-invalid': errors[0] }"
              type="checkbox"
              aria-describedby="registerCheckHelpText"
            />
            <label class="form-check-label" for="registerCheck"
              >我已閱讀並接受同意條款</label
            >
          </div>
        </div>
      </ValidationProvider>
      <!-- Submit button -->
      <button
        type="button"
        class="btn btn-primary btn-block mb-3"
        @click="submit"
      >
        註冊
      </button>
    </ValidationObserver>
  </div>
</template>

<script>
import { apiUserSignUp } from '@/api'
import { ref, useRouter } from '@nuxtjs/composition-api'
export default {
  data() {
    return {
      agreement: '',
      data: {
        code: '',
        mobile: '',
        password: '',
        userType: 1,
      },
      passwordCheck: ''
    }
  },
  methods: {
    getCode() {
      const submit = this.$refs.phone.validate()
      submit.then((res) => {
        if (res.valid) {
          this.data.code = 'eJxILf8'
        }
      })
    },
    submit() {
      // 送出表單
      const submit = this.$refs.form.validate()

      submit.then((isValid) => {
        if (isValid) {
          apiUserSignUp(this.data).then((res) => {
            // const data = res.data.data.body
            // console.log(JSON.parse(data))
            this.$message({
              message: '註冊成功，請重新登入',
              type: 'success'
            })
            this.$emit('changeTab', 'Login')
          }).catch((error) => {
            this.$message({
              message: error,
              type: 'error',
            })
          })
        } else {
            this.$message({
              message: '請輸入完整資料',
              type: 'error',
            })
        }
        if (!this.agreement) {
          this.agreement = ''
        }
      })
    },
  },
}
</script>
