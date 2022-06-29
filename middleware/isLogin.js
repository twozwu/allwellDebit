import Cookies from 'js-cookie'
import { Message } from 'element-ui';

export default ({ store, route, redirect }) => {
  let isLogin = false; // 改為 true 就可以進入了
  const token = Cookies.get('allwellToken')
  if (token !== undefined) {
    isLogin = true
  }
  if (!isLogin) { // 若沒有登入就使用返回登入頁面
    Message({
      message: '請先登入會員',
      type: 'warning',
      showClose: true,
    })
    return redirect('/login')
  }
}
