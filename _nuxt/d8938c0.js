(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{466:function(e,t,o){var content=o(469);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(110).default)("a13adff4",content,!0,{sourceMap:!1})},468:function(e,t,o){"use strict";o(466)},469:function(e,t,o){var n=o(109)(!1);n.push([e.i,'#header[data-v-3e593309]{z-index:997;transition:all .5s;padding:15px 0;background:hsla(0,0%,100%,.95)}#header.header-transparent[data-v-3e593309]{background:transparent}#header.header-scrolled[data-v-3e593309]{background:hsla(0,0%,100%,.95);box-shadow:0 2px 15px rgba(0,0,0,.1)}#header .logo h1[data-v-3e593309]{font-size:30px;margin:0;line-height:1;font-weight:400;letter-spacing:2px}#header .logo h1 a[data-v-3e593309],#header .logo h1 a[data-v-3e593309]:hover{color:#5777ba;text-decoration:none}#header .logo img[data-v-3e593309]{margin:0;max-height:40px}.navbar[data-v-3e593309]{padding:0}.navbar ul[data-v-3e593309]{margin:0;padding:0;display:flex;list-style:none;align-items:center}.navbar li[data-v-3e593309]{position:relative}.navbar a[data-v-3e593309],.navbar a[data-v-3e593309]:focus{display:flex;align-items:center;justify-content:space-between;padding:10px 0 10px 30px;font-family:"Raleway",sans-serif;font-size:15px;color:#47536e;white-space:nowrap;transition:.3s}.navbar a:focus i[data-v-3e593309],.navbar a i[data-v-3e593309]{font-size:12px;line-height:0;margin-left:5px}.navbar .active[data-v-3e593309],.navbar .active[data-v-3e593309]:focus,.navbar a[data-v-3e593309]:hover,.navbar li:hover>a[data-v-3e593309]{color:#5777ba}.navbar .getstarted[data-v-3e593309],.navbar .getstarted[data-v-3e593309]:focus{background:#5777ba;padding:12px 25px;margin-left:30px;color:#fff;line-height:1;border-radius:50px}.navbar .getstarted[data-v-3e593309]:focus:hover,.navbar .getstarted[data-v-3e593309]:hover{background:#748ec6;color:#fff;cursor:pointer}.navbar .dropdown ul[data-v-3e593309]{display:block;position:absolute;left:14px;top:calc(100% + 30px);margin:0;padding:10px 0;z-index:99;opacity:0;visibility:hidden;background:#fff;box-shadow:0 0 30px rgba(127,137,161,.25);transition:.3s;border-radius:4px}.navbar .dropdown ul li[data-v-3e593309]{min-width:200px}.navbar .dropdown ul a[data-v-3e593309]{padding:10px 20px;font-size:15px;text-transform:none;font-weight:600}.navbar .dropdown ul a i[data-v-3e593309]{font-size:12px}.navbar .dropdown ul .active[data-v-3e593309]:hover,.navbar .dropdown ul a[data-v-3e593309]:hover,.navbar .dropdown ul li:hover>a[data-v-3e593309]{color:#5777ba}.navbar .dropdown:hover>ul[data-v-3e593309]{opacity:1;top:100%;visibility:visible}.navbar .dropdown .dropdown ul[data-v-3e593309]{top:0;left:calc(100% - 30px);visibility:hidden}.navbar .dropdown .dropdown:hover>ul[data-v-3e593309]{opacity:1;top:0;left:100%;visibility:visible}@media (max-width:1366px){.navbar .dropdown .dropdown ul[data-v-3e593309]{left:-90%}.navbar .dropdown .dropdown:hover>ul[data-v-3e593309]{left:-100%}}.mobile-nav-toggle[data-v-3e593309]{color:#47536e;font-size:28px;cursor:pointer;display:none;line-height:0;transition:.5s}.mobile-nav-toggle.bi-x[data-v-3e593309]{color:#fff}@media (max-width:991px){.mobile-nav-toggle[data-v-3e593309]{display:block}.navbar ul[data-v-3e593309]{display:none}}.navbar-mobile[data-v-3e593309]{position:fixed;overflow:hidden;top:0;right:0;left:0;bottom:0;background:rgba(51,60,79,.9);transition:.3s;z-index:999}.navbar-mobile .mobile-nav-toggle[data-v-3e593309]{position:absolute;top:15px;right:15px}.navbar-mobile ul[data-v-3e593309]{display:block;position:absolute;top:55px;right:15px;bottom:15px;left:15px;padding:10px 0;border-radius:6px;background-color:#fff;overflow-y:auto;transition:.3s}.navbar-mobile a[data-v-3e593309],.navbar-mobile a[data-v-3e593309]:focus{padding:10px 20px;font-size:15px;color:#47536e}.navbar-mobile .active[data-v-3e593309],.navbar-mobile a[data-v-3e593309]:hover,.navbar-mobile li:hover>a[data-v-3e593309]{color:var(--bs-blue)}.navbar-mobile .getstarted.active[data-v-3e593309],.navbar-mobile .getstarted[data-v-3e593309]:focus{margin:15px;color:var(--bs-primary)}.navbar-mobile .dropdown ul[data-v-3e593309]{position:static;display:none;margin:10px 20px;padding:10px 0;z-index:99;opacity:1;visibility:visible;background:#fff;box-shadow:0 0 30px rgba(127,137,161,.25)}.navbar-mobile .dropdown ul li[data-v-3e593309]{min-width:200px}.navbar-mobile .dropdown ul a[data-v-3e593309]{padding:10px 20px}.navbar-mobile .dropdown ul a i[data-v-3e593309]{font-size:12px}.navbar-mobile .dropdown ul .active[data-v-3e593309]:hover,.navbar-mobile .dropdown ul a[data-v-3e593309]:hover,.navbar-mobile .dropdown ul li:hover>a[data-v-3e593309]{color:#5777ba}.navbar-mobile .dropdown>.dropdown-active[data-v-3e593309]{display:block}',""]),e.exports=n},482:function(e,t,o){"use strict";o.r(t);var n=o(111),r=o.n(n),l={data:function(){return{isActive:!1,isDropdown:!1}},computed:{isLogin:function(){return this.$store.state.isLogin}},mounted:function(){this.$store.dispatch("resetLoginState")},methods:{routerPush:function(e){this.$router.push(e),this.isActive=!1},logout:function(){r.a.remove("allwellToken"),this.$store.commit("logout"),this.$message({message:"已登出",type:"success",showClose:!0}),this.isActive=!1,this.$router.push("/")}}},d=(o(468),o(74)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"fixed-top",attrs:{id:"header"}},[o("div",{staticClass:"container d-flex align-items-center justify-content-between"},[o("div",{staticClass:"logo"},[o("h1",[o("router-link",{attrs:{to:"/"}},[e._v("歐維信貸")])],1)]),e._v(" "),o("nav",{staticClass:"navbar",class:{"navbar-mobile":e.isActive},attrs:{id:"navbar"}},[o("ul",[o("li",[o("a",{staticClass:"nav-link scrollto",class:{active:"index-member"==e.$route.name},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.routerPush("/member")}}},[e._v("會員中心")])]),e._v(" "),o("li",[o("a",{staticClass:"nav-link scrollto",class:{active:"index-claims"==e.$route.name||"index-claims-buyRecord"==e.$route.name},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.routerPush("/claims")}}},[e._v("我要認購")])]),e._v(" "),o("li",[o("a",{staticClass:"nav-link scrollto",class:{active:"index-service"==e.$route.name},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.routerPush("/service")}}},[e._v("服務項目")])]),e._v(" "),o("li",[o("a",{staticClass:"nav-link scrollto",class:{active:"index-qa"==e.$route.name},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.routerPush("/qa")}}},[e._v("常見問題")])]),e._v(" "),o("li",[o("a",{staticClass:"nav-link scrollto",class:{active:"index-about"==e.$route.name},attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.routerPush("/about")}}},[e._v("關於我們")])]),e._v(" "),e.isLogin?o("li",[o("a",{staticClass:"getstarted scrollto",class:{active:"index-login"==e.$route.name},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v("登出")])]):o("li",[o("a",{staticClass:"getstarted scrollto",class:{active:"index-login"==e.$route.name},on:{click:function(t){return t.preventDefault(),e.routerPush("/login")}}},[e._v("登入 / 註冊")])])]),e._v(" "),o("i",{staticClass:"bi bi-list mobile-nav-toggle",class:{"bi-x":e.isActive},on:{click:function(t){e.isActive=!e.isActive}}})])])])}),[],!1,null,"3e593309",null);t.default=component.exports}}]);