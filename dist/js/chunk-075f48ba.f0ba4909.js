(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-075f48ba"],{"0b1d":function(t,o,e){},"166d":function(t,o,e){"use strict";var n=e("0b1d"),r=e.n(n);r.a},"4b3f":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container"},[e("div",{staticClass:"logo"},[e("van-image",{attrs:{src:"/images/home/xiaomilogo.png"}})],1),e("p",{staticClass:"title"},[t._v("手机号码登录")]),e("van-cell-group",[e("van-field",{attrs:{placeholder:"请输入手机号","error-message":t.phoneError},model:{value:t.phone,callback:function(o){t.phone=o},expression:"phone"}}),e("van-field",{attrs:{placeholder:"请输入短信验证码","error-message":t.codeError},model:{value:t.code,callback:function(o){t.code=o},expression:"code"}},[e("van-button",{attrs:{slot:"button",size:"small",type:"primary"},slot:"button"},[t._v("发送验证码")])],1)],1),e("van-row",[e("van-col",{attrs:{span:"24"}},[e("van-button",{staticClass:"btn",attrs:{type:"default",round:"",block:""},on:{click:t.login}},[t._v("登 录")])],1),e("van-col",{attrs:{span:"24"}},[e("van-button",{staticClass:"btn",attrs:{type:"default",round:"",block:""}},[t._v("注 册")])],1)],1)],1)},r=[],a={name:"login",data:function(){return{phone:"",code:"",phoneError:"",codeError:""}},methods:{login:function(){/^1[3456789]\d{9}$/.test(this.phone)?(this.phoneError="",""!==this.code?(this.codeError="",sessionStorage.setItem("userId",this.phone),this.$router.push("/home")):this.codeError="验证码不能为空"):this.phoneError="请输入正确的手机号码"}}},s=a,c=(e("166d"),e("2877")),i=Object(c["a"])(s,n,r,!1,null,"4ab5ac9a",null);o["default"]=i.exports}}]);
//# sourceMappingURL=chunk-075f48ba.f0ba4909.js.map