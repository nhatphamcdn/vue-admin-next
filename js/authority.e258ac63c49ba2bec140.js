(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["authority"],{"8e8a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",[i("p",[e._v(" 通过在 "),i("code",[e._v("CommonDao.getAppUserInfo")]),e._v(" 方法返回的权限信息中追加 "),i("code",[e._v("/authority/uri/?$,")]),e._v(" 权限，可查看此页面。 ")])])},r=[],n={name:"authority-uri",components:{}},o=n,l=i("2877"),s=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=s.exports},db5c:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[i("div",[i("span",[e._v(" 用户"),i("b",[e._v("页面")]),e._v("权限示例 - 可通过修改 "),i("code",[e._v("CommonDao.getAppUserInfo")]),e._v(" 返回的数据变更权限 ")])])]},proxy:!0}])},[i("div",[i("div",[e._v("场景一：无权限的页面")]),i("ul",{staticClass:"list-inline vertical-space-10 horizontal-space-10"},[i("li",[i("router-link",{attrs:{to:"/authority/uri"}},[e._v(" 点击此处访问无权限的页面 - /authority/uri ")])],1)])])]),i("el-divider",{staticClass:"transparent margin-top-bottom-10"}),i("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[i("div",[i("span",[e._v(" 用户"),i("b",[e._v("操作")]),e._v("权限示例 - 可通过修改 "),i("code",[e._v("CommonDao.getAppUserInfo")]),e._v(" 返回的数据变更权限 ")])])]},proxy:!0}])},[i("div",[i("div",[e._v("场景一：无权限禁用按钮")]),i("ul",{staticClass:"list-inline vertical-space-10 horizontal-space-10"},[i("li",[i("auth-provider",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.provider;return[i("el-button",{attrs:{type:"primary",size:"medium",plain:"",disabled:!a.hasActionAuth("example_publish")}},[e._v(" 发布 - AUTH_action_example_publish ")])]}}])})],1),i("li",[i("auth-provider",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.provider;return[i("el-button",{attrs:{type:"primary",size:"medium",plain:"",disabled:!a.hasActionAuth("example_offline")}},[e._v(" 下线 - AUTH_action_example_offline ")])]}}])})],1)]),i("el-divider",{staticClass:"transparent margin-top-bottom-10"}),i("div",[e._v("场景二：无权限隐藏按钮")]),i("ul",{staticClass:"list-inline vertical-space-10 horizontal-space-10"},[i("auth-provider",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.provider;return[a.hasActionAuth("example_publish")?i("li",[i("el-button",{attrs:{type:"primary",size:"medium",plain:""}},[e._v(" 发布 - AUTH_action_example_publish ")])],1):e._e()]}}])}),i("auth-provider",{scopedSlots:e._u([{key:"default",fn:function(t){var a=t.provider;return[a.hasActionAuth("example_offline")?i("li",[i("el-button",{attrs:{type:"primary",size:"medium",plain:""}},[e._v(" 下线 - AUTH_action_example_offline ")])],1):e._e()]}}])})],1)],1)])],1)},r=[],n={name:"authority-home",components:{}},o=n,l=i("2877"),s=Object(l["a"])(o,a,r,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=authority.e258ac63c49ba2bec140.js.map