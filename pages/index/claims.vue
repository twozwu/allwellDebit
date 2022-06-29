<template>
  <div class="claims">
    <div class="bg-light mt-l72">
      <div class="container">
        <div class="claimsNav hstack py-3">
          <!-- <img src="/img/claim.png" alt class="d-none d-md-inline" /> -->
          <h4 class="text-nowrap mb-0">
            <i class="bi bi-house-fill"></i>債權認購
          </h4>
          <ul class="nav justify-content-md-end justify-content-center w-100">
            <li
              class="nav-item"
              :class="{ active: $route.name == 'index-claims' }"
            >
              <a
                class="nav-link"
                aria-current="page"
                href="claims"
                @click.prevent="routerPush('/claims')"
                >購買債權</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="record"
                :class="{ active: $route.name == 'index-claims-buyRecord' }"
                @click.prevent="routerPush('/claims/buyRecord')"
                >認購紀錄</a
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">平台即時動態</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >常見問題</a
              >
            </li>-->
          </ul>
        </div>
      </div>
    </div>
    <div class="container pb-l60">
      <nuxt-child />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from '@nuxtjs/composition-api'
const router = useRouter()

function routerPush(route) {
  router.push(route)
}
</script>
