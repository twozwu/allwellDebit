(window.webpackJsonp=window.webpackJsonp||[]).push([[23,9,10],{467:function(e,t,r){"use strict";r.r(t);var l={name:"ToolView",setup:function(e,t){var r=t.emit,img="";return{selectImg:function(e){var t=e.target.files[0];img=t;var l=new FileReader;l.onload=function(){r("changeImgUrl",l.result)},l.readAsDataURL(t)},download:function(){return r("downloadImg")},img:img}},emits:["changeImgUrl","downloadImg"]},n=r(74),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("input",{staticClass:"form-control mb-3",attrs:{id:"formFile",type:"file",accept:"image/png,image/jpeg,image/gif,image/jpg"},on:{change:e.selectImg}})])}),[],!1,null,null,null);t.default=component.exports},474:function(e,t,r){e.exports=r.p+"img/ID1.10191e5.jpg"},475:function(e,t,r){e.exports=r.p+"img/ID2.1332404.jpg"},476:function(e,t,r){e.exports=r.p+"img/ID3.ec84a58.jpg"},477:function(e,t,r){e.exports=r.p+"img/handleID.1a06f6b.png"},487:function(e,t,r){"use strict";r.r(t);var l=r(108),n={name:"TheWatermark",props:["canvasId","prePhoto"],emits:["getFileUrl"],setup:function(e,t){var canvas,r,img,n,o,c=t.emit,m=Object(l.d)(e.prePhoto),d=Object(l.d)(""),v=Object(l.d)("此證件僅供歐維信貸認證使用，他用無效"),f=Object(l.d)("#999"),_=Object(l.d)("20"),h=Object(l.d)("100");var w=function(){canvas.width=img.width,canvas.height=img.height,n=canvas.width/2,o=canvas.height/2,r.drawImage(img,0,0,img.width,img.height),r.save(),r.translate(n,o),r.rotate(30*Math.PI/180),r.translate(-n,-o),r.fillStyle=f.value,r.font="bold ".concat(_.value,"px sans-serif");for(var a=-img.width/h.value;a<img.width/h.value;a++)for(var b=-img.height/h.value;b<img.height/h.value*2;b++)r.fillText(v.value,a*h.value*4,10+b*h.value);r.restore();var e=canvas.toDataURL();c("getFileUrl",e)};return{changeImgUrl:function(t){d.value=t,m.value="",canvas=document.getElementById(e.canvasId),r=canvas.getContext("2d"),(img=document.createElement("img")).onload=w,img.src=d.value},downloadImg:function(){return document.createElement("a").download="xx",canvas.toDataURL()},preview:m}}},o=r(74),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"bg-light p-3",staticStyle:{"min-height":"235px"}},[l("WatermarkToolView",{on:{changeImgUrl:e.changeImgUrl,"download-img":e.downloadImg}}),e._v(" "),l("canvas",{directives:[{name:"show",rawName:"v-show",value:!e.preview,expression:"!preview"}],staticClass:"img-fluid",attrs:{id:e.canvasId}}),e._v(" "),e.preview?l("div",{},["ID1"==e.preview?l("img",{staticClass:"img-fluid",attrs:{src:r(474),alt:""}}):e._e(),e._v(" "),"ID2"==e.preview?l("img",{staticClass:"img-fluid",attrs:{src:r(475),alt:""}}):e._e(),e._v(" "),"ID3"==e.preview?l("img",{staticClass:"img-fluid",attrs:{src:r(476),alt:""}}):e._e(),e._v(" "),"handleID"==e.preview?l("img",{staticClass:"img-fluid",attrs:{src:r(477),alt:""}}):e._e(),e._v(" "),l("span",{staticClass:"d-block"},[e._v("(請保持證件清晰)")])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WatermarkToolView:r(467).default})},511:function(e,t,r){"use strict";r.r(t);r(29),r(16),r(26),r(151);var l=r(108),n=r(55),o={middleware:"isLogin",setup:function(){var e=Object(l.d)(0),form=Object(l.d)({user:{name:"",email:"",tel:"",zip:"",address:"",nickName:""}}),t=new FormData,r=Object(l.d)(null);Object(n.c)().then((function(e){var t=e.data.data[0];form.value.user.email=t.account,form.value.user.name=t.name,form.value.user.tel=t.phone,form.value.user.zip=t.zip,form.value.user.address=t.address,form.value.user.nickName=t.nickName})).catch((function(e){console.log("Profile讀取失敗",e)}));var o=Object(l.a)((function(){return["name","email","tel","zip","address"].every((function(e){return""!==form.value.user[e]}))}));return{currentStep:e,form:form,profileData:r,last:function(){e.value--<=0&&(e.value=0)},next:function(){e.value++>1&&(e.value=0)},getFileUrl:function(e){var r=e.split(";")[1].split(",")[1];t.append("image",r)},checkData:o}}},c=r(74),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container my-l100"},[r("el-steps",{attrs:{active:e.currentStep,"finish-status":"success","align-center":""}},[r("el-step",{attrs:{title:"確認基本資料"}}),e._v(" "),r("el-step",{attrs:{title:"身分驗證"}})],1),e._v(" "),r("ValidationObserver",{staticClass:"d-flex mt-l60",attrs:{tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){t.errors;return[r("div",{directives:[{name:"show",rawName:"v-show",value:0==e.currentStep,expression:"currentStep == 0"}],staticClass:"col-12 col-md-6 mx-auto"},[r("div",{staticClass:"row g-3 align-items-center mb-3"},[r("div",{staticClass:"col-4 col-md-2"},[r("label",{staticClass:"col-form-label",attrs:{for:"account"}},[e._v("帳號")])]),e._v(" "),r("div",{staticClass:"col-8 col-md-10"},[r("ValidationProvider",{attrs:{rules:"required|email",name:"email"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:{"is-invalid":l[0],"is-valid":e.form.user.email},attrs:{id:"account",type:"email","aria-describedby":"email",name:"email"},domProps:{value:e.form.user.email},on:{input:function(t){t.target.composing||e.$set(e.form.user,"email",t.target.value)}}}),e._v(" "),r("span",{staticClass:"invalid-feedback",attrs:{name:"email"}},[e._v(e._s(l[0]))])]}}],null,!0)})],1)]),e._v(" "),r("div",{staticClass:"row g-3 align-items-center mb-3"},[r("div",{staticClass:"col-4 col-md-2"},[r("label",{staticClass:"col-form-label",attrs:{for:"name"}},[e._v("姓名")])]),e._v(" "),r("div",{staticClass:"col-8 col-md-10"},[r("ValidationProvider",{attrs:{rules:"required",name:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:{"is-invalid":l[0],"is-valid":e.form.user.name},attrs:{id:"name",type:"text","aria-describedby":"name",name:"name"},domProps:{value:e.form.user.name},on:{input:function(t){t.target.composing||e.$set(e.form.user,"name",t.target.value)}}}),e._v(" "),r("span",{staticClass:"invalid-feedback",attrs:{name:"name"}},[e._v(e._s(l[0]))])]}}],null,!0)})],1)]),e._v(" "),r("div",{staticClass:"row g-3 align-items-center mb-3"},[r("div",{staticClass:"col-4 col-md-2"},[r("label",{staticClass:"col-form-label",attrs:{for:"phone"}},[e._v("手機")])]),e._v(" "),r("div",{staticClass:"col-8 col-md-10"},[r("ValidationProvider",{attrs:{rules:"required|isPhone",name:"tel"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:{"is-invalid":l[0],"is-valid":e.form.user.tel},attrs:{id:"phone",type:"tel","aria-describedby":"name",name:"tel"},domProps:{value:e.form.user.tel},on:{input:function(t){t.target.composing||e.$set(e.form.user,"tel",t.target.value)}}}),e._v(" "),r("span",{staticClass:"invalid-feedback",attrs:{name:"tel"}},[e._v(e._s(l[0]))])]}}],null,!0)})],1)]),e._v(" "),r("div",{staticClass:"row g-3 align-items-center mb-3"},[r("div",{staticClass:"col-4 col-md-2"},[r("label",{staticClass:"col-form-label",attrs:{for:"zip"}},[e._v("郵遞區號")])]),e._v(" "),r("div",{staticClass:"col-8 col-md-10"},[r("ValidationProvider",{attrs:{rules:"required|max:5",name:"zip"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.zip,expression:"form.user.zip"}],staticClass:"form-control",class:{"is-invalid":l[0],"is-valid":e.form.user.zip},attrs:{id:"zip",type:"text","aria-describedby":"zip",name:"zip",oninput:"if(value.length>5) value=value.slice(0,5)"},domProps:{value:e.form.user.zip},on:{input:function(t){t.target.composing||e.$set(e.form.user,"zip",t.target.value)}}}),r("span",{staticClass:"invalid-feedback",attrs:{name:"zip"}},[e._v(e._s(l[0]))])]}}],null,!0)})],1)]),e._v(" "),r("div",{staticClass:"row g-3 align-items-center mb-3"},[r("div",{staticClass:"col-4 col-md-2"},[r("label",{staticClass:"col-form-label",attrs:{for:"address"}},[e._v("地址")])]),e._v(" "),r("div",{staticClass:"col-8 col-md-10"},[r("ValidationProvider",{attrs:{rules:"required",name:"email"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.form.user.address,expression:"form.user.address",modifiers:{number:!0}}],staticClass:"form-control",class:{"is-invalid":l[0],"is-valid":e.form.user.address},attrs:{id:"address",type:"text","aria-describedby":"address",name:"address"},domProps:{value:e.form.user.address},on:{input:function(t){t.target.composing||e.$set(e.form.user,"address",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),r("span",{staticClass:"invalid-feedback",attrs:{name:"address"}},[e._v(e._s(l[0]))])]}}],null,!0)})],1)]),e._v(" "),r("div",{staticClass:"row g-3 align-items-center mb-3"},[r("div",{staticClass:"col-4 col-md-2"},[r("label",{staticClass:"col-form-label",attrs:{for:"nickname"}},[e._v("暱稱")])]),e._v(" "),r("div",{staticClass:"col-8 col-md-10"},[r("ValidationProvider",{attrs:{name:"暱稱"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.form.user.nickName,expression:"form.user.nickName",modifiers:{number:!0}}],staticClass:"form-control",class:{"is-invalid":l[0],"is-valid":e.form.user.nickName},attrs:{id:"nickname",type:"text","aria-describedby":"nickname",name:"nickname"},domProps:{value:e.form.user.nickName},on:{input:function(t){t.target.composing||e.$set(e.form.user,"nickName",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"invalid-feedback",attrs:{name:"nickname"}},[e._v(e._s(l[0]))])]}}],null,!0)})],1)])])]}}])}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:1==e.currentStep,expression:"currentStep == 1"}]},[r("h5",{staticClass:"fw-bold"},[e._v("第一證件(身分證正面 / 反面)")]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("WatermarkTheWatermark",{attrs:{"canvas-id":"canvas1","pre-photo":"ID1"},on:{getFileUrl:e.getFileUrl}})],1),e._v(" "),r("div",{staticClass:"col-12 col-md-6 mt-3 mt-md-0"},[r("WatermarkTheWatermark",{attrs:{"canvas-id":"canvas2","pre-photo":"ID2"},on:{getFileUrl:e.getFileUrl}})],1)]),e._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("h5",{staticClass:"fw-bold mt-5"},[e._v("第二證件(駕照、護照、健保卡擇一)")]),e._v(" "),r("WatermarkTheWatermark",{attrs:{"canvas-id":"canvas3","pre-photo":"ID3"},on:{getFileUrl:e.getFileUrl}})],1),e._v(" "),r("div",{staticClass:"col-12"},[r("h5",{staticClass:"fw-bold mt-5"},[e._v("第三手持證件照")]),e._v(" "),r("WatermarkTheWatermark",{attrs:{"canvas-id":"canvas4","pre-photo":"handleID"},on:{getFileUrl:e.getFileUrl}})],1)]),e._v(" "),r("div",{staticClass:"hstack mt-5 justify-content-center"},[r("el-button",{attrs:{disabled:0==e.currentStep},on:{click:e.last}},[r("i",{staticClass:"bi bi-arrow-left"})]),e._v(" "),r("el-button",{attrs:{disabled:!e.checkData||1==e.currentStep},on:{click:e.next}},[r("i",{staticClass:"bi bi-arrow-right"})]),e._v(" "),r("button",{directives:[{name:"show",rawName:"v-show",value:1==e.currentStep,expression:"currentStep == 1"}],staticClass:"btn btn-primary ms-auto my-0",staticStyle:{"min-height":"2.5rem"},attrs:{type:"submit"}},[e._v("\n      送出資料\n    ")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WatermarkTheWatermark:r(487).default})}}]);