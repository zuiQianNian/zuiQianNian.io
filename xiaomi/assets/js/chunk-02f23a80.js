(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02f23a80"],{"11eb":function(s,t,a){},"5dcd":function(s,t,a){"use strict";var e=a("f7eb"),n=a.n(e);n.a},"6c65":function(s,t,a){"use strict";var e=a("11eb"),n=a.n(e);n.a},e36e:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("user-header"),a("user-body"),a("bottom-nav"),a("router-view")],1)},n=[],i=a("c549"),o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"box"},[s._m(0),s.user?a("span",{staticClass:"btn"},[s._v("欢迎您,"+s._s(s.user))]):a("router-link",{attrs:{to:"/login"}},[a("span",{staticClass:"btn"},[s._v("登录/注册")])])],1)},c=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"icon"},[a("span",{staticClass:"iconfont icon-wode-"})])}],r={name:"user-header",data:function(){return{userId:""}},created:function(){this.user=sessionStorage.getItem("userId")}},l=r,u=(a("6c65"),a("2877")),p=Object(u["a"])(l,o,c,!1,null,"2d877e15",null),v=p.exports,d=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"order"},[a("p",{staticClass:"my-order"},[a("span",{staticClass:"title-order"},[s._v("我的订单")]),a("span",{staticClass:"all-order",on:{click:s.toOrder}},[s._v("全部订单 >")])]),a("van-row",[a("van-col",{attrs:{span:"8"}},[a("span",{staticClass:"iconfont icon-daifukuan",on:{click:s.toOrder}}),a("p",[s._v("待付款")])]),a("van-col",{attrs:{span:"8"}},[a("span",{staticClass:"iconfont icon-yifahuo",on:{click:s.toOrder}}),a("p",[s._v("待收货")])]),a("van-col",{attrs:{span:"8"}},[a("span",{staticClass:"iconfont icon-tuihuanhuo",on:{click:s.toOrder}}),a("p",[s._v("退换修")])])],1)],1),a("div",{staticClass:"member"},[a("div",{staticClass:"item first",on:{click:s.toMember}},[a("img",{attrs:{src:"/images/user/huiyuanzhongxin.png",alt:""}}),a("span",{staticClass:"left"},[s._v("会员中心")]),a("span",{staticClass:"right"},[s._v(">")])]),a("div",{staticClass:"item",on:{click:function(t){s.showList=!0}}},[a("img",{attrs:{src:"/images/user/wodeyouhui.png",alt:""}}),a("span",{staticClass:"left"},[s._v("我的优惠")]),a("span",{staticClass:"right"},[s._v(">")])])]),a("div",{staticClass:"member"},[a("div",{staticClass:"item first",on:{click:s.toServe}},[a("img",{attrs:{src:"/images/user/fuwuzhongxin.png",alt:""}}),a("span",{staticClass:"left"},[s._v("服务中心")]),a("span",{staticClass:"right"},[s._v(">")])]),a("div",{staticClass:"item",on:{click:s.toMiHome}},[a("img",{attrs:{src:"/images/user/xiaomizhijia.png",alt:""}}),a("span",{staticClass:"left"},[s._v("大米之家")]),a("span",{staticClass:"right"},[s._v(">")])])]),a("div",{staticClass:"member"},[a("div",{staticClass:"item",on:{click:s.toFMa}},[a("img",{attrs:{src:"/images/user/fmatongdao.png",alt:""}}),a("span",{staticClass:"left"},[s._v("F码通道")]),a("span",{staticClass:"right"},[s._v(">")])])]),a("div",{staticClass:"member",on:{click:s.toSet}},[s._m(0)]),a("van-popup",{attrs:{position:"bottom"},model:{value:s.showList,callback:function(t){s.showList=t},expression:"showList"}},[a("van-coupon-list",{attrs:{coupons:s.coupons,"chosen-coupon":s.chosenCoupon,"disabled-coupons":s.disabledCoupons},on:{change:s.onChange,exchange:s.onExchange}})],1)],1)},h=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"item"},[a("img",{attrs:{src:"/images/user/shezhi.png",alt:""}}),a("span",{staticClass:"left"},[s._v("设置")]),a("span",{staticClass:"right"},[s._v(">")])])}],m={name:"user-body",data:function(){return{coupons:[{available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"}],chosenCoupon:-1,disabledCoupons:[{available:1,condition:"无使用门槛\n最多优惠12元",reason:"",value:150,name:"优惠券名称",startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"元"}],showList:!1}},methods:{toSet:function(){this.$router.push("/set")},toOrder:function(){this.$router.push("/order")},toMember:function(){this.$router.push("/user/member")},toServe:function(){this.$router.push("/user/serve")},toMiHome:function(){this.$router.push("/user/mihome")},toFMa:function(){this.$router.push("/user/fma")},onChange:function(s){this.showList=!1,this.chosenCoupon=s},onExchange:function(s){console.log("兑换优惠券回调")}}},f=m,C=(a("5dcd"),Object(u["a"])(f,d,h,!1,null,"2567a7bc",null)),g=C.exports,_={name:"",components:{BottomNav:i["a"],UserHeader:v,UserBody:g}},b=_,w=Object(u["a"])(b,e,n,!1,null,"8281484e",null);t["default"]=w.exports},f7eb:function(s,t,a){}}]);
//# sourceMappingURL=chunk-02f23a80.js.map