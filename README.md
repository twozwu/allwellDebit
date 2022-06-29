# nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

# 歐維信貸-前端文件

### 網站架構&路由：

    App.vue：主進入點
    |
    |-api 接口/
    |       |-index.js
    |
    |-assets 載入資源/
    |       |-img/ ( 圖片資源 )
    |       |-js/ ( js資源 )
    |       |-scss/ ( scss資源 )
    |               |-components/ ( 元件 )
    |                           |-_card.scss ( 卡片相關 )
    |                           |-_nav.scss ( 導覽列相關 )
    |       |-all.scss/ ( 全部scss )
    |
    |
    |-components 組件/
    |       |-login 登入組件/
    |              |-LoginForm.vue ( 登入介面 )
    |              |-RegisterForm.vue ( 註冊頁 )
    |              |-ThirdpartyLogin.vue ( 第三方登入 )
    |       |-member 會員頁面/
    |              |-UserData.vue ( 會員資訊分頁 )
    |              |-UserInfo.vue ( 公告分頁 )
    |       |-watermark 浮水印元件/
    |              |-TheWatermark.vue ( 浮水印code )
    |              |-ToolView.vue ( 上傳按鈕 )
    |       |-TheFooter.vue ( 網頁footer )
    |       |-TheNavbar.vue ( 導覽列 )
    |
    |
    |-pages/ 所有網頁
    |       |-index/
    |            |-claims/
    |                  |-buyRecord.vue( 購買紀錄 )
    |                  |-index.vue ( 不動產列表首頁 )
    |            |-about.vue( 關於我們 )
    |            |-claims ( 不動產列表layout )
    |            |-index.vue( 首頁 )
    |            |-login.vue( 登入/註冊 )
    |            |-member.vue( 會員中心 )
    |            |-qa.vue( 常見問題 )
    |            |-service.vue( 服務項目 )
    |            |-verify.vue( 會員驗證 )
    |       |-index.vue ( layout )
    |
    |
    |-plugins/ 外掛套件
    |       |-element-ui.js ( UI套件 )
    |       |-fb-sdk.js ( 第三方登入套件 )
    |       |-mock.js ( 模擬套件 )
    |       |-vee-validate.js ( 表單套件 )
