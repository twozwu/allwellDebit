import Cookies from 'js-cookie'
import { apiUserCheckToken } from '@/api'

export const state = () => ({
  isLogin: false
})

export const mutations = {
  isLogin(state, bool) {
    state.isLogin = bool
  },
  logout(state) {
    state.isLogin = false
  }
}

export const actions = {
  resetLoginState({ commit }) {
    const token = Cookies.get('allwellToken')
    if (token !== undefined) {
      commit('isLogin', true)
    }
  },
}
