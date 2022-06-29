<template>
        <div class="buyClaims">
            <div class="hstack flex-wrap flex-md-nowrap mt-md-7 mt-4">
                <label for="status" class="text-nowrap">認證狀態：</label>
                <select
                    class="form-select mb-3 mb-md-0"
                    aria-label="Default select example"
                    @change="search('status')"
                    v-model="caseStatus"
                >
                    <option selected value="all">全部</option>
                    <option value="buy">可認購</option>
                    <option value="done">認購完成</option>
                    <option value="close">已結案</option>
                </select>
                <!-- <label for="area" class="text-nowrap ms-2">地區：</label>
                  <input
            type="text"
            class="form-control mb-3 mb-md-0"
            id="area"
            @change="filterArea"
            v-model="areaSearch"
                  />
                  <label for="num" class="text-nowrap ms-2">編號：</label>
                <input type="text" class="form-control mb-3 mb-md-0" id="num" />-->
                <button
                    class="btn btn-primary w-100 w-md-50 text-nowrap ms-md-3 ms-auto mt-2 mt-md-0 mb-0"
                    style="height: 38px"
                >查詢</button>
            </div>
            <div class="wrap mt-7">
                <div
                    class="card hover claimsCard mb-4"
                    :class="{ close: !item.status }"
                    v-for="item in claims"
                    :key="item.key"
                >
                    <div
                        class="hstack flex-column flex-md-row justify-content-md-between justify-content-center text-center bg-light p-3"
                    >
                        <h5 class="card-title mb-0">債權編號：{{ item.id }}</h5>
                        <h6 class="card-title mb-0 mt-3 mt-md-0">開放認購時間：{{ item.startDate }}</h6>
                    </div>
                    <div class="row allBody">
                        <!-- <div class="col-md-4">
                <img :src="item.imgUrl" class="img-fluid w-100" alt="..." />
                        </div>-->
                        <div class="col-md-12">
                            <div class="card-body h-100">
                                <div class="row h-100">
                                    <div class="col-md-10 col-lg-11">
                                        <div class="row justify-content-start">
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <h6 class>債權金額</h6>
                                                <p class="text-danger fs-lg-4">
                                                    {{ currency(Math.floor(item.totalAmount / 10000)) }}
                                                    <span
                                                        class="fs-6"
                                                    >萬元</span>
                                                </p>
                                            </div>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <h6 class>月息</h6>
                                                <p class="text-danger fs-lg-4">
                                                    {{ item.monthlyInterest }}
                                                    <span class="fs-6">%</span>
                                                </p>
                                            </div>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <h6 class>年化報酬</h6>
                                                <p class="text-danger fs-lg-4">
                                                    {{ item.yearInterest }}
                                                    <span class="fs-6">%</span>
                                                </p>
                                            </div>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <h6 class>還款狀態</h6>
                                                <p
                                                    class="fs-lg-4"
                                                >{{ item.status == true ? "繳息中" : "已結案" }}</p>
                                            </div>
                                            <div class="col-6 col-md-4 col-lg-9">
                                                <h6 class>地址</h6>
                                                <p
                                                    class="address overflow-hidden fs-lg-4 mb-0"
                                                >{{ item.address[Math.floor(Math.random() * 5)+1] }}</p>
                                            </div>
                                            <div class="col-6 col-md-4 col-lg-3">
                                                <h6 class>剩餘投資金額</h6>
                                                <p
                                                    class="text-danger fs-lg-4"
                                                >{{ currency(item.remainInvest) }} 元</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-1 mb-3 mb-md-0">
                                        <button
                                            class="btn btn-outline-primary hstack justify-content-center w-100 h-100 m-0 mt-3 mt-md-0 p-lg-2 stretched-link"
                                        >我要認購</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="overflow-auto text-center">
                <el-pagination class="page" background layout="prev, pager, next" :page-count="100"></el-pagination>
            </div>
        </div>
</template>

<script setup>
import { ref } from "@nuxtjs/composition-api";
import { apiClaimItem } from "@/api";
import { currency } from "@/assets/js/functions.js";

const claims = ref({});
let claimsOrigin = {};
apiClaimItem()
    .then((res) => {
        const data = res.data.data;
        claimsOrigin = data;
        search();
    })
    .catch((res) => {
        console.log(res);
    });

//搜尋功能
const caseStatus = ref("buy");
function search() {
    switch (caseStatus.value) {
        case "all": {
            claims.value = claimsOrigin;
            break;
        }
        case "buy": {
            claims.value = claimsOrigin.filter((item) => {
                return item.status == true;
            });
            break;
        }
        case "close": {
            claims.value = claimsOrigin.filter((item) => {
                return item.status == false;
            });
            break;
        }
    }
}

const areaSearch = ref("");
function filterArea() {
    claims.value = claimsOrigin.filter((item) => {
        return item.address.includes(areaSearch.value);
    });
}
</script>

<style scoped>
::v-deep(.el-pagination.is-background li) {
    /*对页数的样式进行修改*/
    background-color: #10263c;
    color: #fff;
}
.msg-pagination-container.is-background .btn-next {
    /*对下一页的按钮样式进行修改*/
    background-color: #10263c;
    color: #fff;
}
.msg-pagination-container.is-background .btn-prev {
    /*对上一页的按钮样式进行修改*/
    background-color: #10263c;
    color: #fff;
}
/*当前选中页数的样式进行修改*/
/* ::v-deep(.el-pagination.is-background .el-pager li:not(.disabled).active) {
  background-color: #e64a0d;
  color: #fff;
} */
</style>
