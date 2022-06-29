import Mock from "mockjs"
import { base } from '@/api'

// 傳送資料
Mock.mock(`${base}/api/core/userInfo/signUp`, 'post', (options) => {
  console.log('body>>>>>>');
  return {
    code: 200,
    message: '请求列表成功！',
    data: options
  };
})
Mock.mock(`${base}/api/core/userInfo/login`, 'post', (options) => {
  console.log('body>>>>>>');
  return {
    code: 0,
    message: '請求登入成功！',
    data: { token: 'asdf' }
  };
})
Mock.mock(`${base}/api/core/userInfo/checkToken`, 'post', () => {
  console.log('body>>>>>>');
  return {
    code: 0,
    message: '请求列表成功！',
    data: {}
  };
})


Mock.mock(`${base}/api/core/userInfo/getProfile`, {
  "data|10": [
    {
      //   account: `@word`, // 英文单词
      account: '@email', // 英文单词
      name: '張小明', // 中文名 "@cname"
      phone: /09[0-9]{8}/, // 正则模式
      zip: '@string("number", 5)',
      address: '台中市神岡區',
      nickName: "大明", // 随机2-4字中文单词，Mock.mock("@cword(2,4)")
      id: "@guid", // guid
    },
  ],
});

Mock.mock(`${base}/api/core/userInfo/getClaims`, {
  "data|4": [
    {
      id: "@word(3)@natural(1000, 9999)",
      date: "@date",
      monthly: "@float(0,0,2,2)",
      yearly: "@float(8,10,2,2)",
      invest: "@natural(1000,50000)",
    },
  ],
});


//==============claims=========

Mock.mock(`${base}/api/claim/getClaims`, {
  "data|10": [
    {
      id: "@word(3)@natural(1000, 9999)",
      startDate: "@date",
      imgUrl: Mock.Random.image("100x100"),
      totalAmount: "@natural(1000000,100000000)",
      monthlyInterest: "@float(0,0,2,2)",
      yearInterest: "@float(8,10,2,2)",
      status: "@boolean",
      address: {
        1: "台中市神岡區",
        2: "台南市永康區",
        3: "高雄市小港區",
        4: "屏東縣萬巒區",
        5: "彰化縣鹿港鎮",
      }, //@county(true)
      remainInvest: "@natural(1000000,100000000)",
    },
  ],
});
