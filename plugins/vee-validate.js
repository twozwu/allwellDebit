import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";

//引入部分規則
import { required, email, max, min, confirmed } from "vee-validate/dist/rules";
extend("required", {
    ...required,
    message: "此欄位必填",
});
extend("email", email);
extend("max", max);
extend("min", min);
extend("confirmed", { ...confirmed, message: "密碼不一致" });

extend('isPhone', (value) => {
    const phoneNumber = /^(09)[0-9]{8}$/
    return phoneNumber.test(value) ? true : '電話號碼格式錯誤'
})

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);