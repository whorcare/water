(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{127:function(t,e,r){"use strict";var i={name:"WIcon",props:{type:String,spin:Boolean,prefix:String,className:[String,Object]},data:function(){return{}}},a=r(1),n=Object(a.a)(i,function(){var t,e,r,i=this,a=i.$createElement,n=i._self._c||a;return i.type?n("i",{class:["w-font",(t={},t["w-"+i.type]=!!i.type,t),(e={},e[i.prefix+"-font"]=!!i.prefix,e),(r={},r[i.prefix+"-"+i.type]=!!i.prefix&&!!i.type,r),{"w-spin":!!i.spin},i.className]}):i._e()},[],!1,null,null,null);n.options.__file="Icon.vue";e.a=n.exports},128:function(t,e,r){"use strict";var i=r(3),a=r(13),n=r(16),s=r(59),_=r(57),c=r(5),v=r(83).f,u=r(82).f,h=r(8).f,o=r(130).trim,d=i.Number,l=d,f=d.prototype,m="Number"==n(r(58)(f)),p="trim"in String.prototype,b=function(t){var e=_(t,!1);if("string"==typeof e&&e.length>2){var r,i,a,n=(e=p?e.trim():o(e,3)).charCodeAt(0);if(43===n||45===n){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var s,c=e.slice(2),v=0,u=c.length;v<u;v++)if((s=c.charCodeAt(v))<48||s>a)return NaN;return parseInt(c,i)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(m?c(function(){f.valueOf.call(r)}):"Number"!=n(r))?s(new l(b(e)),r,d):b(e)};for(var E,g=r(6)?v(l):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;g.length>w;w++)a(l,E=g[w])&&!a(d,E)&&h(d,E,u(l,E));d.prototype=f,f.constructor=d,r(9)(i,"Number",d)}},130:function(t,e,r){var i=r(11),a=r(19),n=r(5),s=r(131),_="["+s+"]",c=RegExp("^"+_+_+"*"),v=RegExp(_+_+"*$"),u=function(t,e,r){var a={},_=n(function(){return!!s[t]()||"​"!="​"[t]()}),c=a[t]=_?e(h):s[t];r&&(a[r]=c),i(i.P+i.F*_,"String",a)},h=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(v,"")),t};t.exports=u},131:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},159:function(t,e,r){},196:function(t,e,r){"use strict";var i=r(159);r.n(i).a},233:function(t,e,r){"use strict";r.r(e);var i={name:"WBreadcrumb",props:{prefix:String}},a=r(1),n=Object(a.a)(i,function(){var t,e=this.$createElement;return(this._self._c||e)("div",{staticClass:"w-breadcrumb",class:(t={},t[this.prefix+"-breadcrumb"]=this.prefix,t)},[this._t("default")],2)},[],!1,null,null,null);n.options.__file="Breadcrumb.vue";var s=n.exports,_=(r(128),{name:"WBreadcrumbItem",props:{separator:{type:String,default:"/"},open:String,href:String,to:{type:Object,default:function(){}},routerType:{type:[String,Number],default:"push"},click:{type:Function,default:function(){}},prefix:String},data:function(){return{}},methods:{page:function(){this.href&&(window.location.href=this.href),this.open&&window.open(this.open),this.to&&this.$router[this.routerType](this.to),this.click(),this.$emit("click")}}}),c=Object(a.a)(_,function(){var t,e,r,i=this,a=i.$createElement,n=i._self._c||a;return n("span",{staticClass:"w-breadcrumb-item",class:(t={},t[i.prefix+"-breadcrumb-item"]=i.prefix,t)},[n("span",{class:(e={"w-breadcrumb-item-link":i.to||i.href||i.open},e[i.prefix+"-breadcrumb-item-link"]=i.prefix,e),on:{click:i.page}},[i._t("default")],2),i._v(" "),n("i",{staticClass:"w-breadcrumb-item-separator",class:(r={},r[i.prefix+"-breadcrumb-item-separator"]=i.prefix,r),domProps:{innerHTML:i._s(i.separator)}})])},[],!1,null,null,null);c.options.__file="BreadcrumbItem.vue";var v=c.exports,u={components:{WIcon:r(127).a,WBreadcrumb:s,WBreadcrumbItem:v}},h=(r(196),Object(a.a)(u,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("br"),t._v(" "),r("p",[r("w-breadcrumb",{staticClass:"demo1111",attrs:{prefix:"demo"}},[r("w-breadcrumb-item",{staticClass:"demo-item1",attrs:{prefix:"demo",separator:">",to:{path:"/button/zh-cn.html"}}},[t._v("内部跳转到按钮")]),t._v(" "),r("w-breadcrumb-item",{staticClass:"demo-item2",attrs:{prefix:"demo",separator:"<b class='demo'>|</b>"}},[t._v("自定义间隔符号")]),t._v(" "),r("w-breadcrumb-item",{staticClass:"demo-item4",attrs:{prefix:"demo",open:"https://qq.com"}},[t._v("外跳qq")]),t._v(" "),r("w-breadcrumb-item",{staticClass:"demo-item3",attrs:{prefix:"demo",href:"https://baidu.com"}},[t._v("外跳baidu")]),t._v(" "),r("w-breadcrumb-item",{staticClass:"demo-item5",attrs:{prefix:"demo"}},[t._v("now")])],1)],1),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("table",[t._m(11),t._v(" "),r("tbody",[t._m(12),t._v(" "),t._m(13),t._v(" "),r("tr",[r("td",[t._v("routerType")]),t._v(" "),r("td",[t._v("vue-router跳转的类型。可选参数请移步 "),r("a",{attrs:{href:"https://router.vuejs.org/zh-cn/essentials/navigation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程式的导航"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("() => {}")])]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17)])]),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"breadcrumb-面包屑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumb-面包屑","aria-hidden":"true"}},[this._v("#")]),this._v(" Breadcrumb 面包屑")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("显示当前页面在系统层级结构中的位置，并能向上返回。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"如何使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("当系统拥有超过两级以上的层级结构时；")]),this._v(" "),e("li",[this._v("当需要告知用户『你在哪里』时；")]),this._v(" "),e("li",[this._v("当需要向上导航的功能时；")]),this._v(" "),e("li",[this._v("当应用程序具有多层体系结构时；")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"代码演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码演示","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码演示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"w-breadcrumb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-breadcrumb","aria-hidden":"true"}},[this._v("#")]),this._v(" w-breadcrumb")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("是否必填")]),t._v(" "),r("th",[t._v("默认值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("prefix")]),t._v(" "),r("td",[t._v("样式的前缀")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"w-breadcrumb-item"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-breadcrumb-item","aria-hidden":"true"}},[this._v("#")]),this._v(" w-breadcrumb-item")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"属性-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("参数")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("是否必填")]),t._v(" "),r("th",[t._v("默认值")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("separator")]),t._v(" "),r("td",[t._v("自定义分隔符")]),t._v(" "),r("td",[t._v("String | Element String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("-")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("to")]),t._v(" "),r("td",[t._v("vue-router跳转")]),t._v(" "),r("td",[t._v("Object")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("() => {}")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("href")]),t._v(" "),r("td",[t._v("本页面跳转外链")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("open")]),t._v(" "),r("td",[t._v("新标签页打开外链")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("prefix")]),t._v(" "),r("td",[t._v("样式的前缀")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("click")]),t._v(" "),r("td",[t._v("绑定按钮点击事件，循环中 this 改变并传参时使用")]),t._v(" "),r("td",[t._v("Function")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("() => {}")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("事件名")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("返回值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("click")]),t._v(" "),r("td",[t._v("绑定按钮点击事件")]),t._v(" "),r("td",[t._v("无")])])])])}],!1,null,null,null));h.options.__file="breadcrumb.md";e.default=h.exports}}]);