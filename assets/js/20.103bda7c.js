(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{127:function(t,e,a){"use strict";var s={name:"WIcon",props:{type:String,spin:Boolean,prefix:String,className:[String,Object]},data:function(){return{}}},r=a(1),i=Object(r.a)(s,function(){var t,e,a,s=this,r=s.$createElement,i=s._self._c||r;return s.type?i("i",{class:["w-font",(t={},t["w-"+s.type]=!!s.type,t),(e={},e[s.prefix+"-font"]=!!s.prefix,e),(a={},a[s.prefix+"-"+s.type]=!!s.prefix&&!!s.type,a),{"w-spin":!!s.spin},s.className]}):s._e()},[],!1,null,null,null);i.options.__file="Icon.vue";e.a=i.exports},128:function(t,e,a){"use strict";var s=a(3),r=a(13),i=a(16),n=a(59),_=a(57),v=a(5),o=a(83).f,c=a(82).f,u=a(8).f,l=a(130).trim,d=s.Number,h=d,f=d.prototype,b="Number"==i(a(58)(f)),g="trim"in String.prototype,m=function(t){var e=_(t,!1);if("string"==typeof e&&e.length>2){var a,s,r,i=(e=g?e.trim():l(e,3)).charCodeAt(0);if(43===i||45===i){if(88===(a=e.charCodeAt(2))||120===a)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:s=2,r=49;break;case 79:case 111:s=8,r=55;break;default:return+e}for(var n,v=e.slice(2),o=0,c=v.length;o<c;o++)if((n=v.charCodeAt(o))<48||n>r)return NaN;return parseInt(v,s)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof d&&(b?v(function(){f.valueOf.call(a)}):"Number"!=i(a))?n(new h(m(e)),a,d):m(e)};for(var p,w=a(6)?o(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;w.length>C;C++)r(h,p=w[C])&&!r(d,p)&&u(d,p,c(h,p));d.prototype=f,f.constructor=d,a(9)(s,"Number",d)}},130:function(t,e,a){var s=a(11),r=a(19),i=a(5),n=a(131),_="["+n+"]",v=RegExp("^"+_+_+"*"),o=RegExp(_+_+"*$"),c=function(t,e,a){var r={},_=i(function(){return!!n[t]()||"​"!="​"[t]()}),v=r[t]=_?e(u):n[t];a&&(r[a]=v),s(s.P+s.F*_,"String",r)},u=c.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(o,"")),t};t.exports=c},131:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},158:function(t,e,a){},195:function(t,e,a){"use strict";var s=a(158);a.n(s).a},240:function(t,e,a){"use strict";a.r(e);var s=a(127),r=(a(128),{name:"WBadge",model:{prop:"value",event:"model"},props:{value:{type:Number,default:0},overflowCount:{type:Number,default:99},status:String,text:String,showZero:Boolean,dot:Boolean,title:String},computed:{showStatus:function(){return""!==this.status},slotDefault:function(){return!!this.$slots.default},slotCount:function(){return!!this.$slots.count},count:function(){return this.overflowCount>this.value?this.value:"".concat(this.overflowCount,"+")},zeroCount:function(){return this.count<1},showCount:function(){return!this.zeroCount||this.showZero},titleValue:function(){return this.title||this.count}}}),i=a(1),n=Object(i.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.slotDefault?a("div",{staticClass:"w-badge"},[!t.showCount||t.slotCount||t.dot?!t.zeroCount&&t.dot?a("i",{staticClass:"w-badge-dot"}):t._e():a("sup",{staticClass:"w-badge-sup",attrs:{title:t.titleValue}},[t._v(t._s(t.count))]),t._v(" "),t.slotCount?a("span",{staticClass:"w-badge-custom"},[t._t("count")],2):t._e(),t._v(" "),t._t("default")],2):!t.slotDefault&&!t.showStatus||t.showCount?a("span",{staticClass:"w-badge-sup w-badge-count",attrs:{title:t.titleValue}},[t._v(t._s(t.count))]):!t.slotDefault&&t.showStatus?a("div",{staticClass:"w-badge-status"},[a("span",{staticClass:"w-badge-status-dot",class:["w-badge-status-"+t.status]}),t._v(" "),t.text?a("p",{staticClass:"w-badge-status-text"},[t._v(t._s(t.text))]):t._e()]):t._e()},[],!1,null,null,null);n.options.__file="Badge.vue";var _={data:function(){return{base:10}},components:{WBadge:n.exports,WIcon:s.a}},v=(a(195),Object(i.a)(_,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-badge",{staticClass:"demo-badge",attrs:{value:5}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})]),t._v(" "),a("w-badge",{staticClass:"demo-badge",attrs:{showZero:""}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})]),t._v(" "),a("w-badge",{staticClass:"demo-badge"},[a("a",{staticClass:"demo-link",attrs:{href:"#"}}),t._v(" "),a("w-icon",{staticStyle:{color:"#f5222d"},attrs:{slot:"count",type:"heart"},slot:"count"})],1)],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-badge",{attrs:{value:10}}),t._v(" "),a("w-badge",{staticStyle:{"line-height":"18px",background:"#fff",border:"1px solid #dcdcdc",color:"#999","box-shadow":"'0 0 0 1px #d9d9d9 inset'"},attrs:{value:36}}),t._v(" "),a("w-badge",{staticStyle:{background:"#52c41a"},attrs:{value:69}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(6),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-badge",{staticClass:"demo-badge",attrs:{value:99}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})]),t._v(" "),a("w-badge",{staticClass:"demo-badge",attrs:{value:100}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})]),t._v(" "),a("w-badge",{staticClass:"demo-badge",attrs:{value:99,overflowCount:10}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})]),t._v(" "),a("w-badge",{staticClass:"demo-badge",attrs:{value:1e5,overflowCount:999}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("a",{attrs:{href:"#"}},[a("w-badge",{staticClass:"demo-badge",attrs:{value:5}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})])],1)]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-badge",{staticClass:"demo-badge",attrs:{dot:""}},[a("w-icon",{attrs:{type:"heart"}})],1),t._v(" "),a("w-badge",{staticClass:"demo-badge",attrs:{value:1,dot:""}},[a("w-icon",{attrs:{type:"heart"}})],1),t._v(" "),a("w-badge",{staticClass:"demo-badge",attrs:{value:1,dot:""}},[a("a",{attrs:{href:"#"}},[t._v("Link something")])])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-badge",{staticClass:"demo-badge",attrs:{title:"这是自定义标题"},model:{value:t.base,callback:function(e){t.base=e},expression:"base"}},[a("a",{staticClass:"demo-link",attrs:{href:"#"}})]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"inp-btn",on:{click:function(e){t.base--}}},[t._v("-")]),t._v(" "),a("button",{staticClass:"inp-btn",on:{click:function(e){t.base++}}},[t._v("+")])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("div",[a("w-badge",{attrs:{status:"success"}}),t._v(" "),a("w-badge",{attrs:{status:"error"}}),t._v(" "),a("w-badge",{attrs:{status:"default"}}),t._v(" "),a("w-badge",{attrs:{status:"processing"}}),t._v(" "),a("w-badge",{attrs:{status:"warning"}}),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("w-badge",{attrs:{status:"success",text:"成功"}}),t._v(" "),a("br"),t._v(" "),a("w-badge",{attrs:{status:"error",text:"报错"}}),t._v(" "),a("br"),t._v(" "),a("w-badge",{attrs:{status:"default",text:"默认"}}),t._v(" "),a("br"),t._v(" "),a("w-badge",{attrs:{status:"processing",text:"进行中"}}),t._v(" "),a("br"),t._v(" "),a("w-badge",{attrs:{status:"warning",text:"提醒"}})],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"badge-徽章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#badge-徽章","aria-hidden":"true"}},[this._v("#")]),this._v(" Badge 徽章")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("图标右上角的圆形徽标数字")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"独立使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#独立使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 独立使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("不包裹任何元素即是独立使用，可自定样式展现。在右上角的 badge 则限定为红色。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"封顶数字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#封顶数字","aria-hidden":"true"}},[this._v("#")]),this._v(" 封顶数字")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"可点击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可点击","aria-hidden":"true"}},[this._v("#")]),this._v(" 可点击")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("用 a 标签进行包裹即可。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"小红点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小红点","aria-hidden":"true"}},[this._v("#")]),this._v(" 小红点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("没有具体的数字。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自定义标题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义标题","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义标题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("设置鼠标放在状态点上时显示的文字")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"状态点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态点","aria-hidden":"true"}},[this._v("#")]),this._v(" 状态点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("用于表示状态的小圆点。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("属性")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必须")]),t._v(" "),a("th",[t._v("默认")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("overflowCount")]),t._v(" "),a("td",[t._v("展示封顶的数字值")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("99")])]),t._v(" "),a("tr",[a("td",[t._v("dot")]),t._v(" "),a("td",[t._v("不展示数字，只有一个小红点")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("showZero")]),t._v(" "),a("td",[t._v("当数值为 0 时，是否展示 Badge")]),t._v(" "),a("td",[t._v("Boolean")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("status")]),t._v(" "),a("td",[t._v("设置 Badge 为状态点，可选参数：success, error, default, processing, warning")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("text")]),t._v(" "),a("td",[t._v("在设置了 status 的前提下有效，设置状态点的文本")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("无")])]),t._v(" "),a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("设置鼠标放在状态点上时显示的文字")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("徽章数")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("事件名")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("返回值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("change")]),t._v(" "),a("td",[t._v("改变的时候触发")]),t._v(" "),a("td",[a("code",[t._v("Event 对象")]),t._v(", "),a("code",[t._v("当前状态")])])])])])}],!1,null,null,null));v.options.__file="badge.md";e.default=v.exports}}]);