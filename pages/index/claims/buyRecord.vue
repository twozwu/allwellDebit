<template>
  <div class="buyRecord">
    <h5 class="border-bottom my-5">
      <i class="bi bi-card-list"></i> 我的認購紀錄：
    </h5>
    <div class="card col-8 text-white bg-dark mb-3 mx-auto" v-if="!isLogin">
      <div class="card-header"><h6 class="mb-0">請先登入後查看</h6></div>
    </div>

    <el-table :data="tableData" stripe style="width: 100%" v-else>
      <el-table-column prop="id" label="認購編號" width />
      <el-table-column prop="monthly" label="月息" width />
      <el-table-column prop="yearly" label="年化報酬" width />
      <el-table-column prop="invest" label="投資金額" width />
      <el-table-column prop="date" label="認購時間" width />
    </el-table>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import { currency } from '@/assets/js/functions'
import { apiUserBuyList } from '@/api'

export default {
  data() {
    return {
      // tableData: [],
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin
    }
  },
  // mounted() {
  //   apiUserBuyList().then((res) => {
  //     const data = res.data.data
  //     this.tableData = data.map((item) => {
  //       const invest = currency(item.invest)
  //       const monthly = item.monthly + ' %'
  //       const yearly = item.yearly + ' %'
  //       return { ...item, invest, monthly, yearly }
  //     })
  //   })
  // },
  setup() {
    const tableData = ref([])

    apiUserBuyList().then((res) => {
      const data = res.data.data
      const newData = data.map((item) => {
        const invest = currency(item.invest)
        const monthly = item.monthly + ' %'
        const yearly = item.yearly + ' %'
        return { ...item, invest, monthly, yearly }
      })
      tableData.value = newData
    })

    return {
      tableData,
    }
  }
}
</script>
