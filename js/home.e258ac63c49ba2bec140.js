(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{7415:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-box"},[r("div",{staticClass:"login-box__logo"},[r("span",[e._v(e._s(e.ui.appName))])]),r("validation-observer",{ref:"observer",scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;return[r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}},[r("el-card",{staticClass:"login-box__body"},[r("p",{staticClass:"login-box__title"},[e._v("登录")]),r("user-name",{attrs:{rules:"required"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),r("user-password",{attrs:{rules:"required"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("el-form-item",{attrs:{size:"small"}},[r("el-button",{staticClass:"login-box__btn",attrs:{type:"primary",loading:e.loading},on:{click:e.login}},[e._v(" 登录 ")])],1)],1)],1)]}}])})],1)},n=[],o=r("5530"),s=r("2f62"),u=r("3d30"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("validation-provider",{attrs:{rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("el-form-item",{attrs:{size:"small"}},[r("el-input",{attrs:{placeholder:"用户",name:"username",value:e.localValue},on:{input:e.updateLocalValue},scopedSlots:e._u([{key:"append",fn:function(){return[e._v("@felixpy.com")]},proxy:!0}],null,!0)}),r("app-form-error",{attrs:{error:a[0]}})],1)]}}])})},i=[],c={name:"user-name",props:{name:String,rules:{type:[String,Object]},value:{required:!1},formValues:{type:Object,required:!1}},setup:function(e,t){var r=Object(u["useFormElement"])(e,t),a=r.dirty,n=r.isRequired,o=r.localValue,s=r.setInitialValue,l=r.updateLocalValue;return{dirty:a,isRequired:n,localValue:o,setInitialValue:s,updateLocalValue:l}},data:function(){return{}}},d=c,p=r("2877"),m=Object(p["a"])(d,l,i,!1,null,"e35f33d4",null),f=m.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("validation-provider",{attrs:{rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("el-form-item",{attrs:{size:"small"}},[r("el-input",{attrs:{"show-password":"",type:"password",name:"password",placeholder:"密码","suffix-icon":"el-icon-d-arrow-righ",value:e.localValue},on:{input:e.updateLocalValue}}),r("app-form-error",{attrs:{error:a[0]}})],1)]}}])})},_=[],h={name:"user-password",props:{name:String,rules:{type:[String,Object]},value:{required:!1},formValues:{type:Object,required:!1}},setup:function(e,t){var r=Object(u["useFormElement"])(e,t),a=r.dirty,n=r.isRequired,o=r.localValue,s=r.setInitialValue,l=r.updateLocalValue;return{dirty:a,isRequired:n,localValue:o,setInitialValue:s,updateLocalValue:l}},data:function(){return{}}},b=h,g=Object(p["a"])(b,v,_,!1,null,"57b6a73f",null),y=g.exports,x={UserName:f,UserPassword:y},w={name:"login-page",components:Object(o["a"])({},x),setup:function(){var e=Object(u["useLoading"])(),t=e.loading,r=e.withLoading;return{loading:t,withLoading:r}},data:function(){return{username:"",password:""}},computed:Object(o["a"])(Object(o["a"])({},Object(s["d"])({ui:function(e){return e.ui||{}}})),{},{userLoginData:function(){var e=this.username,t=this.password;return{username:e,password:t}}}),methods:Object(o["a"])(Object(o["a"])({},Object(s["b"])(["setGlobalAppData"])),{},{login:function(){var e=this;this.$refs.observer.validate().then((function(t){t&&e.withLoading((function(){return e.$dao.commonDao.login({data:e.userLoginData}).then((function(){e.$notify({type:"success",position:"bottom-right",title:"提示",message:"登录成功！"}),e.setGlobalAppData().then((function(){e.$router.push("/")}))})).catch((function(t){e.loading=!1,e.$message({type:"error",message:"登录失败，请重试或联系管理员"})}))}),{autocomplete:!1})}))}})},V=w,O=(r("8393"),Object(p["a"])(V,a,n,!1,null,"86ccc79a",null));t["default"]=O.exports},8393:function(e,t,r){"use strict";var a=r("de82"),n=r.n(a);n.a},"84c2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("home-component")},n=[],o=r("5530"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home-content"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v(" 基于多模块设计、Vue Composition API 的企业级应用 - "),r("a",{attrs:{href:"https://github.com/openfext/vue-admin-next"}},[e._v(" 源码地址 ")])])])])],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:6,sm:12,xs:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v("欢迎使用 Vue Admin Next")])])])],1),r("el-col",{attrs:{md:6,sm:12,xs:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v("欢迎使用 Vue Admin Next")])])])],1),r("el-col",{attrs:{md:6,sm:12,xs:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v("欢迎使用 Vue Admin Next")])])])],1),r("el-col",{attrs:{md:6,sm:12,xs:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v("欢迎使用 Vue Admin Next")])])])],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{md:16,sm:12,xs:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v("欢迎使用 Vue Admin Next")])])])],1),r("el-col",{attrs:{md:8,sm:12,xs:24}},[r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("div",[r("span",[e._v("系统简介")])])]},proxy:!0}])},[r("div",[r("p",[e._v("欢迎使用 Vue Admin Next")])])])],1)],1)],1)},u=[],l={name:"home-component",data:function(){return{}}},i=l,c=r("2877"),d=Object(c["a"])(i,s,u,!1,null,"427a47ad",null),p=d.exports,m={HomeComponent:p},f={name:"home-page",components:Object(o["a"])({},m)},v=f,_=(r("a692"),Object(c["a"])(v,a,n,!1,null,null,null));t["default"]=_.exports},"8d61":function(e,t,r){},a692:function(e,t,r){"use strict";var a=r("8d61"),n=r.n(a);n.a},c28a:function(e,t,r){"use strict";r.r(t);r("ac1f"),r("5319");var a,n,o={name:"refresh-page",computed:{path:function(){var e=this.$route.params.path||"";return atob(e)}},created:function(){this.$router.replace({path:this.path})},render:function(e){return e()}},s=o,u=r("2877"),l=Object(u["a"])(s,a,n,!1,null,null,null);t["default"]=l.exports},de82:function(e,t,r){}}]);
//# sourceMappingURL=home.e258ac63c49ba2bec140.js.map