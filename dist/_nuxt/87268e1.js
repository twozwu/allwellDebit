(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{512:function(t,o,n){"use strict";n.r(o);n(29);var e=n(108),l={};l.setup=function(t,o){function n(t){"connected"===t.status?(html="已登入 FB，並加入 友廷等公車應用程式<br/>",FB.api("/me?fields=id,name,email",(function(t){console.log(t),html+="會員暱稱："+t.name+"<br/>",html+="會員 email："+t.email+"<br/>",html+="會員 uid :"+t.id,console.log(html)}))):"not_authorized"===t.status?console.log("已登入 FB，但未加入 友廷等公車應用程式 應用程式"):console.log("未登入 FB")}var l,c="";return Object(e.c)((function(){c=document.getElementById("googleLoginBtn"),gapi.load("auth2",(function(){var element;l=gapi.auth2.init({client_id:"74791824651-d7f52jtbe5u7dd5jpfg0pqjcj3l4oaob.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}),element=c,l.attachClickHandler(element,{},(function(t){var o=t.getAuthResponse().id_token;console.log(o);var n=t.getBasicProfile();console.log("ID: "+n.getId()),console.log("Name: "+n.getName()),console.log("Image URL: "+n.getImageUrl()),console.log("Email: "+n.getEmail())}),(function(t){console.log(t)}))}))})),{fbLogin:function(){FB.login((function(t){n(t)}),{scope:"public_profile,email"})},lineLogin:function(){window.location.href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656689693&redirect_uri=http://localhost:3000&state=login&scope=openid%20profile"}}};var c=l,r=n(74),component=Object(r.a)(c,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{},[n("button",{staticClass:"btn btn-primary btn-floating mx-1",attrs:{type:"button"},on:{click:t.fbLogin}},[n("i",{staticClass:"bi bi-facebook"})]),t._v(" "),t._m(0),t._v(" "),n("button",{staticClass:"btn btn-primary btn-floating mx-1",attrs:{type:"button"},on:{click:t.lineLogin}},[n("i",{staticClass:"bi bi-line"})])])}),[function(){var t=this.$createElement,o=this._self._c||t;return o("button",{staticClass:"btn btn-primary btn-floating mx-1",attrs:{id:"googleLoginBtn",type:"button"}},[o("i",{staticClass:"bi bi-google"})])}],!1,null,null,null);o.default=component.exports}}]);