export default ({ route, redirect }) => {
  console.log('routerAuth');
  console.log(route.meta[1].requiresAuth)
  if (route.meta[1].requiresAuth) {
    console.log('需要驗證');
    const authStates = false; // 改為 true 就可以進入了
    if (!authStates) { // 若沒有登入就使用返回登入頁面
      return redirect('/login')
    }
  }
}
