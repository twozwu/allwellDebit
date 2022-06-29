// FB初始化
window.fbAsyncInit = function () {
    FB.init({
        appId: '255355824488', // 填入 FB APP ID
        cookie: true,
        xfbml: true,
        version: 'v12.0'
    });
    FB.getLoginStatus(function (response) {
        // statusChangeCallback(response);
        console.log(response);
        FB.AppEvents.logPageView();
    });
};
// 處理各種登入身份
// function statusChangeCallback(response) {
//     // 登入 FB 且已加入會員
//     if (response.status === 'connected') {
//         html = "已登入 FB，並加入 友廷等公車應用程式<br/>";
//         FB.api('/me?fields=id,name,email', function (response) {
//             console.log(response);
//             html += "會員暱稱：" + response.name + "<br/>";
//             html += "會員 email：" + response.email + "<br/>";
//             html += "會員 uid :" + response.id;
//             console.log(html);
//         });
//     }
//     // 登入 FB, 未偵測到加入會員
//     else if (response.status === "not_authorized") {
//         console.log('已登入 FB，但未加入 友廷等公車應用程式 應用程式');
//     }
//     // 未登入 FB
//     else {
//         console.log("未登入 FB");
//     }
// }
// // 查看登入狀態
// function checkLoginState() {
//     FB.getLoginStatus(function (response) {
//         statusChangeCallback(response);
//     });
// }

// 載入 FB SDK
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/zh_TW/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// function fbLogin() {
//     // 進行登入程序
//     FB.login(function (response) {
//         statusChangeCallback(response);
//     }, {
//         scope: 'public_profile,email'
//     });
// }