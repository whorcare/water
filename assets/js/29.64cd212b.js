(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{166:function(t,a,i){},203:function(t,a,i){"use strict";var n=i(166);i.n(n).a},245:function(t,a,i){"use strict";i.r(a);var n={name:"WLink",props:{tag:{type:String,default:"a"},url:String,target:String,to:Object,size:String,loading:Boolean},computed:{classList:function(){return[{"w-link-loading":this.loading,"w-link-lg":"large"===this.size,"w-link-sm":"small"===this.size,"w-link-loading-lg":this.loadLarge,"w-link-loading-sm":this.loadSmall}]},loadLarge:function(){return this.loading&&"large"===this.size},loadSmall:function(){return this.loading&&"small"===this.size},urlValue:function(){return this.url},targetValue:function(){return this.target||"_self"},toValue:function(){return this.to}}},s=i(1),e=Object(s.a)(n,function(){var t=this,a=t.$createElement,i=t._self._c||a;return t.urlValue?i("a",{staticClass:"w-link",class:t.classList,attrs:{href:t.urlValue,target:t.targetValue}},[t._t("default")],2):t.toValue?i("router-link",{staticClass:"w-link",class:t.classList,attrs:{tag:t.tag,to:t.toValue}},[t._t("default")],2):i("span",{staticClass:"w-link",class:t.classList},[t._t("default")],2)},[],!1,null,null,null);e.options.__file="Link.vue";var l={data:function(){return{sizeStatus:0,loading:!1,groupConfig:["small","","large"]}},components:{WLink:e.exports},methods:{changeGroupStatus:function(t,a){this.sizeStatus=a}}},r=(i(203),Object(s.a)(l,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("br"),t._v(" "),i("div",[i("span",[t._v("尺寸：")]),t._v(" "),i("button",{key:0,staticClass:"inp-btn",class:{on:0===t.sizeStatus},on:{click:function(a){t.changeGroupStatus(a,0)}}},[t._v("小")]),t._v(" "),i("button",{key:1,staticClass:"inp-btn",class:{on:1===t.sizeStatus},on:{click:function(a){t.changeGroupStatus(a,1)}}},[t._v("中")]),t._v(" "),i("button",{key:2,staticClass:"inp-btn",class:{on:2===t.sizeStatus},on:{click:function(a){t.changeGroupStatus(a,2)}}},[t._v("大")]),t._v(" "),i("button",{staticClass:"inp-btn",class:{on:t.loading},on:{click:function(a){t.loading=!t.loading}}},[t._v("加载中")])]),t._v(" "),i("br"),t._v(" "),i("w-link",{attrs:{loading:t.loading,size:t.groupConfig[t.sizeStatus]}},[t._v("这没有链接的超链")]),t._v(" "),i("br"),t._v(" "),i("w-link",{attrs:{url:"http://baidu.com",loading:t.loading,size:t.groupConfig[t.sizeStatus]}},[t._v("百度的超链")]),t._v(" "),i("br"),t._v(" "),i("w-link",{attrs:{url:"http://qq.com",loading:t.loading,target:"_blonk",size:t.groupConfig[t.sizeStatus]}},[t._v("外跳腾讯的超链")]),t._v(" "),i("br"),t._v(" "),i("w-link",{attrs:{to:{path:"/"},loading:t.loading,size:t.groupConfig[t.sizeStatus]}},[t._v("去首页")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"link-超链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#link-超链","aria-hidden":"true"}},[this._v("#")]),this._v(" Link 超链")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"基本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("table",[i("thead",[i("tr",[i("th",[t._v("属性")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("是否必须")]),t._v(" "),i("th",[t._v("默认")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("to")]),t._v(" "),i("td",[t._v("vue的路由内置跳转")]),t._v(" "),i("td",[t._v("Object")]),t._v(" "),i("td",[t._v("否")]),t._v(" "),i("td",[t._v("无")])]),t._v(" "),i("tr",[i("td",[t._v("tag")]),t._v(" "),i("td",[t._v("标签名称，配合 to 参数一起使用")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("否")]),t._v(" "),i("td",[t._v("无")])]),t._v(" "),i("tr",[i("td",[t._v("url")]),t._v(" "),i("td",[t._v("链接到外项目的地址")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("否")]),t._v(" "),i("td",[t._v("无")])]),t._v(" "),i("tr",[i("td",[t._v("target")]),t._v(" "),i("td",[t._v("跳转类型，配合 url 属性一起使用")]),t._v(" "),i("td",[t._v("String")]),t._v(" "),i("td",[t._v("否")]),t._v(" "),i("td",[t._v("无")])]),t._v(" "),i("tr",[i("td",[t._v("size")]),t._v(" "),i("td",[t._v("尺寸设置。可选 large")]),t._v(" "),i("td"),t._v(" "),i("td",[t._v("small")]),t._v(" "),i("td",[t._v("String")])]),t._v(" "),i("tr",[i("td",[t._v("loading")]),t._v(" "),i("td",[t._v("处于加载中状态，点击事件失效，样式也会变")]),t._v(" "),i("td",[t._v("Boolean")]),t._v(" "),i("td",[t._v("否")]),t._v(" "),i("td",[t._v("无")])])])])}],!1,null,null,null));r.options.__file="link.md";a.default=r.exports}}]);