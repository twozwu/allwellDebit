<template>
  <div class="d-flex justify-content-center p-2">
    <ValidationObserver ref="profileData" class="col-12 col-md-7 mt-3">
      <div class="row g-3 align-items-center mb-3">
        <div class="col-4 col-md-2">
          <label for="account" class="col-form-label">帳號</label>
        </div>
        <div class="col-8 col-md-10">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|email"
            name="email"
          >
            <input
              id="account"
              v-model="form.user.email"
              type="email"
              aria-describedby="email"
              class="form-control"
              name="email"
              :class="{
                'is-invalid': errors[0],
                'is-valid': form.user.email
              }"
            />
            <span name="email" class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-4 col-md-2">
          <label for="name" class="col-form-label">姓名</label>
        </div>
        <div class="col-8 col-md-10">
          <ValidationProvider v-slot="{ errors }" rules="required" name="name">
            <input
              id="name"
              v-model="form.user.name"
              type="text"
              class="form-control"
              aria-describedby="name"
              name="name"
              :class="{
                'is-invalid': errors[0],
                'is-valid': form.user.name
              }"
            />
            <span name="name" class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-4 col-md-2">
          <label for="phone" class="col-form-label">手機</label>
        </div>
        <div class="col-8 col-md-10">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required|isPhone"
            name="tel"
          >
            <input
              id="phone"
              v-model="form.user.tel"
              type="tel"
              class="form-control"
              aria-describedby="name"
              name="tel"
              :class="{
                'is-invalid': errors[0],
                'is-valid': form.user.tel
              }"
            />
            <span name="tel" class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="row g-0 align-items-center mb-3">
        <div class="col-4 col-md-2">
          <label for="zip" class="col-form-label">郵遞區號</label>
        </div>
        <div class="col-8 col-md-10">
          <ValidationProvider v-slot="{ errors }" rules="required|max:5" name="zip">
            <input
              id="zip"
              v-model="form.user.zip"
              type="text"
              class="form-control"
              aria-describedby="zip"
              name="zip"
              :class="{
                'is-invalid': errors[0],
                'is-valid': form.user.zip
              }"
              oninput="if(value.length>5) value=value.slice(0,5)"
            /><span name="zip" class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-4 col-md-2">
          <label for="address" class="col-form-label">地址</label>
        </div>
        <div class="col-8 col-md-10">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="email"
          >
            <input
              id="address"
              v-model.number="form.user.address"
              type="text"
              class="form-control"
              aria-describedby="address"
              name="address"
              :class="{
                'is-invalid': errors[0],
                'is-valid': form.user.address
              }"
            />
            <span name="address" class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="row g-3 align-items-center mb-3">
        <div class="col-4 col-md-2">
          <label for="nickname" class="col-form-label">暱稱</label>
        </div>
        <div class="col-8 col-md-10">
          <ValidationProvider
            v-slot="{ errors }"
            name="暱稱"
          >
            <input
              id="nickname"
              v-model.number="form.user.nickName"
              type="text"
              class="form-control"
              aria-describedby="nickname"
              name="nickname"
              :class="{
                'is-invalid': errors[0],
                'is-valid': form.user.nickName
              }"
            /><span name="nickname" class="invalid-feedback">{{
              errors[0]
            }}</span>
          </ValidationProvider>
        </div>
      </div>

      <button class="btn btn-primary d-block ms-auto" @click="submit">修改資料</button>
    </ValidationObserver>
  </div>
</template>

<script setup>
import { ref, computed } from '@nuxtjs/composition-api'
import { apiUserGetProfile } from '@/api'

const form = ref({
  user: {
    name: '',
    email: '',
    tel: '',
    zip: '',
    address: '',
    nickName: ''
  }
})
const profileData = ref(null);

apiUserGetProfile()
  .then((res) => {
    const user = res.data.data[0]
    form.value.user.email = user.account
    form.value.user.name = user.name
    form.value.user.tel = user.phone
    form.value.user.zip = user.zip
    form.value.user.address = user.address
    form.value.user.nickName = user.nickName
  })
  .catch((res) => {
    console.log('Profile讀取失敗', res)
  })

function submit() {
  profileData.value.validate().then((isValid) => {
    if (isValid) {
      console.log('ok');
    }
  })
}
</script>
