<template>
  <div class="container my-l100">
    <el-steps :active="currentStep" finish-status="success" align-center>
      <el-step title="確認基本資料"></el-step>
      <el-step title="身分驗證"></el-step>
      <!-- <el-step title="匯款帳號"></el-step> -->
    </el-steps>
    <!-- 確認基本資料 -->
    <ValidationObserver v-slot="{ errors }" tag="div" class="d-flex mt-l60">
      <div v-show="currentStep == 0" class="col-12 col-md-6 mx-auto">
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
                  'is-valid': form.user.email,
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
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="name"
            >
              <input
                id="name"
                v-model="form.user.name"
                type="text"
                class="form-control"
                aria-describedby="name"
                name="name"
                :class="{
                  'is-invalid': errors[0],
                  'is-valid': form.user.name,
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
                  'is-valid': form.user.tel,
                }"
              />
              <span name="tel" class="invalid-feedback">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="row g-3 align-items-center mb-3">
          <div class="col-4 col-md-2">
            <label for="zip" class="col-form-label">郵遞區號</label>
          </div>
          <div class="col-8 col-md-10">
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|max:5"
              name="zip"
            >
              <input
                id="zip"
                v-model="form.user.zip"
                type="text"
                class="form-control"
                aria-describedby="zip"
                name="zip"
                :class="{
                  'is-invalid': errors[0],
                  'is-valid': form.user.zip,
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
                  'is-valid': form.user.address,
                }"
              />
              <span name="address" class="invalid-feedback">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="row g-3 align-items-center mb-3">
          <div class="col-4 col-md-2">
            <label for="nickname" class="col-form-label">暱稱</label>
          </div>
          <div class="col-8 col-md-10">
            <ValidationProvider v-slot="{ errors }" name="暱稱">
              <input
                id="nickname"
                v-model.number="form.user.nickName"
                type="text"
                class="form-control"
                aria-describedby="nickname"
                name="nickname"
                :class="{
                  'is-invalid': errors[0],
                  'is-valid': form.user.nickName,
                }"
              /><span name="nickname" class="invalid-feedback">{{
                errors[0]
              }}</span>
            </ValidationProvider>
          </div>
        </div>
      </div>
    </ValidationObserver>
    <!-- 身分驗證 -->
    <div v-show="currentStep == 1" class="">
      <h5 class="fw-bold">第一證件(身分證正面 / 反面)</h5>
      <div class="row">
        <div class="col-12 col-md-6">
          <WatermarkTheWatermark
            :canvas-id="'canvas1'"
            :pre-photo="'ID1'"
            @getFileUrl="getFileUrl"
          />
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0">
          <WatermarkTheWatermark
            :canvas-id="'canvas2'"
            :pre-photo="'ID2'"
            @getFileUrl="getFileUrl"
          />
        </div>
      </div>
      <div class="col-12 col-md-6">
        <h5 class="fw-bold mt-5">第二證件(駕照、護照、健保卡擇一)</h5>
        <WatermarkTheWatermark
          :canvas-id="'canvas3'"
          :pre-photo="'ID3'"
          @getFileUrl="getFileUrl"
        />
      </div>
      <div class="col-12">
        <h5 class="fw-bold mt-5">第三手持證件照</h5>
        <WatermarkTheWatermark
          :canvas-id="'canvas4'"
          :pre-photo="'handleID'"
          @getFileUrl="getFileUrl"
        />
      </div>
      <!-- <label class="col-3 btn btn-primary" for="imgFile">上传图片</label> -->
    </div>

    <div class="hstack mt-5 justify-content-center">
      <el-button :disabled="currentStep == 0" @click="last">
        <i class="bi bi-arrow-left"></i>
      </el-button>
      <el-button :disabled="!checkData || currentStep == 1" @click="next">
        <i class="bi bi-arrow-right"></i>
      </el-button>
      <button
        v-show="currentStep == 1"
        class="btn btn-primary ms-auto my-0"
        type="submit"
        style="min-height: 2.5rem"
      >
        送出資料
      </button>
      <!-- :disabled="
            Object.keys(errors).length >= 1 || !checkData || fileList.length < 3
        "-->
      <!-- <span class="btn" @click="test">下载图片</span> -->
    </div>
  </div>
</template>

<script>
import { ref, computed } from '@nuxtjs/composition-api'
import { apiUserGetProfile } from '@/api'

export default {
  middleware: 'isLogin',
  setup() {
    const currentStep = ref(0)
    const form = ref({
      user: {
        name: '',
        email: '',
        tel: '',
        zip: '',
        address: '',
        nickName: '',
      },
    })
    let ImageURL = ''

    const formData = new FormData()
    const profileData = ref(null)

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
          console.log('ok')
        }
      })
    }
    const checkData = computed(() => {
      const attrs = ['name', 'email', 'tel', 'zip', 'address']
      return attrs.every((item) => form.value.user[item] !== '')
    })

    function last() {
      if (currentStep.value-- <= 0) {
        currentStep.value = 0
      }
    }
    function next() {
      if (currentStep.value++ > 1) {
        currentStep.value = 0
      }
    }

    function getFileUrl(val) {
      // console.log(val)
      ImageURL = val

      const block = ImageURL.split(';')
      const realData = block[1].split(',')[1] // In this case "R0lGODlhPQBEAPeoAJosM...."

      formData.append('image', realData)
    }

    function onSubmit() {
      fetch('https://api.imgur.com/3/image', {
        // Ajax 行為改為 Post
        method: 'POST',
        // headers 加入 json 格式
        headers: {
          Authorization: 'Client-ID 4ef4ca52de4b42c',
        },
        body: formData,
      })
        .then((response) => {
          return response.json()
        })
        .then((Data) => {
          console.log(Data)
        })
        .catch((err) => {
          console.log('錯誤:', err)
        })
    }
    return {
      currentStep,
      form,
      profileData,
      last,
      next,
      getFileUrl,
      checkData
    }
  },
}
</script>
