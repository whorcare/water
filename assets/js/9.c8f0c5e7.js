(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{127:function(t,e,r){"use strict";var n={name:"WIcon",props:{type:String,spin:Boolean,prefix:String,className:[String,Object]},data:function(){return{}}},i=r(1),a=Object(i.a)(n,function(){var t,e,r,n=this,i=n.$createElement,a=n._self._c||i;return n.type?a("i",{class:["w-font",(t={},t["w-"+n.type]=!!n.type,t),(e={},e[n.prefix+"-font"]=!!n.prefix,e),(r={},r[n.prefix+"-"+n.type]=!!n.prefix&&!!n.type,r),{"w-spin":!!n.spin},n.className]}):n._e()},[],!1,null,null,null);a.options.__file="Icon.vue";e.a=a.exports},128:function(t,e,r){"use strict";var n=r(3),i=r(13),a=r(16),s=r(59),o=r(57),_=r(5),v=r(83).f,c=r(82).f,d=r(8).f,u=r(130).trim,l=n.Number,h=l,f=l.prototype,p="Number"==a(r(58)(f)),m="trim"in String.prototype,g=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var r,n,i,a=(e=m?e.trim():u(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+e}for(var s,_=e.slice(2),v=0,c=_.length;v<c;v++)if((s=_.charCodeAt(v))<48||s>i)return NaN;return parseInt(_,n)}}return+e};if(!l(" 0o1")||!l("0b1")||l("+0x1")){l=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof l&&(p?_(function(){f.valueOf.call(r)}):"Number"!=a(r))?s(new h(g(e)),r,l):g(e)};for(var b,x=r(6)?v(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;x.length>y;y++)i(h,b=x[y])&&!i(l,b)&&d(l,b,c(h,b));l.prototype=f,f.constructor=l,r(9)(n,"Number",l)}},130:function(t,e,r){var n=r(11),i=r(19),a=r(5),s=r(131),o="["+s+"]",_=RegExp("^"+o+o+"*"),v=RegExp(o+o+"*$"),c=function(t,e,r){var i={},o=a(function(){return!!s[t]()||"​"!="​"[t]()}),_=i[t]=o?e(d):s[t];r&&(i[r]=_),n(n.P+n.F*o,"String",i)},d=c.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(_,"")),2&e&&(t=t.replace(v,"")),t};t.exports=c},131:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},132:function(t,e,r){"use strict";var n=r(127),i="".concat("w-button","-"),a={name:"WButton",props:{type:String,size:String,icon:String,loading:Boolean,circle:Boolean,ghost:Boolean,disabled:Boolean,htmlType:{type:String,default:"button"},prefix:String,className:[String,Object],stop:Boolean,click:{type:Function,default:function(){}},mouseover:{type:Function,default:function(){}},mouseout:{type:Function,default:function(){}}},data:function(){var t=this.$parent,e=void 0===t?{index:0}:t,r=this.$vnode,n=e.index,a=e.$options,s=(a=void 0===a?{_componentTag:""}:a)._componentTag,o=r.data.key;return{name:"w-button",prefixCls:i,clicked:!1,index:n,status:n===(void 0===o?0:o)&&s==="".concat(i,"group")}},methods:{clickFn:function(t){this.clicked=!0;var e=this.$vnode.data.key;this.click(t,e),this.$emit("click",t,e),this.stop&&t.stopPropagation()},mouseoverFn:function(t){var e=this.$vnode.data.key;this.mouseover(t,e),this.$emit("mouseover",t,e)},mouseoutFn:function(t){var e=this.$vnode.data.key;this.mouseout(t,e),this.$emit("mouseout",t,e)},removeClickName:function(){this.clicked=!1},updateIndex:function(){var t=this.$parent.index,e=void 0===t?0:t,r=this.$vnode.data.key,n=void 0===r?0:r;this.index=e,this.status=e===n}},components:{WIcon:n.a}},s=r(1),o=Object(s.a)(a,function(){var t,e,r=this,n=r.$createElement,i=r._self._c||n;return i("button",{class:[r.name,(t={},t[r.prefixCls+"primary"]="primary"===r.type,t[r.prefixCls+"dashed"]="dashed"===r.type,t[r.prefixCls+"danger"]="danger"===r.type,t[r.prefixCls+"ghost"]=r.ghost,t[r.prefixCls+"lg"]="large"===r.size,t[r.prefixCls+"sm"]="small"===r.size,t[r.prefixCls+"loading"]=r.loading,t[r.prefixCls+"circle"]=r.circle,t[r.prefixCls+"click"]=r.clicked,t[r.prefixCls+"disabled"]=r.disabled,t[r.prefixCls+"on"]=r.status,t[r.prefixCls+"primary-on"]="primary"===r.type&&r.status,t[r.prefixCls+"dashed-on"]="dashed"===r.type&&r.status,t[r.prefixCls+"danger-on"]="danger"===r.type&&r.status,t[r.prefixCls+"ghost-on"]="ghost"===r.type&&r.status,t),r.prefix?r.prefix+"-button":"",r.prefix&&r.status?r.prefix+"-button-on":"",r.className],attrs:{type:r.htmlType,disabled:r.disabled},on:{animationend:r.removeClickName,click:function(t){r.clickFn(t)},mouseover:function(t){r.mouseoverFn(t)},mouseout:function(t){r.mouseoutFn(t)}}},[r.loading||r.icon?i("w-icon",{directives:[{name:"show",rawName:"v-show",value:r.loading||r.icon,expression:"loading || icon"}],class:[r.prefix?r.prefix+"-button-icon":""],attrs:{type:r.icon?r.icon:"loading1",spin:r.loading||r.icon.indexOf("loading")>-1}}):r._e(),r._v(" "),r.$slots.default?i("span",{class:(e={},e[r.prefixCls+"text"]=r.loading||r.icon,e[r.prefix+"-button-text"]=r.prefix,e[r.prefixCls+"text-lg"]=(r.loading||r.icon)&&"large"===r.size,e[r.prefixCls+"text-sm"]=(r.loading||r.icon)&&"small"===r.size,e)},[r._t("default")],2):r._e()],1)},[],!1,null,null,null);o.options.__file="Button.vue";e.a=o.exports},160:function(t,e,r){},189:function(t,e,r){"use strict";r(12),r(128);var n={name:"WButtonGroup",props:{prefix:String,className:String,on:{type:Number,default:0}},data:function(){return{name:"w-button-group",index:this.on}},mounted:function(){this.updateChild()},methods:{updateChild:function(){this.$children.forEach(function(t){t.updateIndex()})}},watch:{on:function(t){this.index=t,this.updateChild()}}},i=r(1),a=Object(i.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:[this.name,this.prefix?this.prefix+"-button-group":"",this.className]},[this._t("default")],2)},[],!1,null,null,null);a.options.__file="ButtonGroup.vue";e.a=a.exports},197:function(t,e,r){"use strict";var n=r(160);r.n(n).a},253:function(t,e,r){"use strict";r.r(e);var n=r(132),i=r(189),a={data:function(){return{groupStatus:2,loadStatus:!1,disableStatus:!1,groupConfig:["small","","large"]}},methods:{changeGroupStatus:function(t,e){this.groupStatus=e},changeLoadStatus:function(){this.loadStatus=!0},changeDisableStatus:function(){this.disableStatus=!0}},components:{WButton:n.a,WButtonGroup:i.a}},s=(r(197),r(1)),o=Object(s.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。")]),t._v(" "),t._m(3),t._v(" "),r("br"),t._v(" "),r("p",[r("w-button",{attrs:{prefix:"demo",type:"primary"}},[t._v("Primary")]),t._v(" "),r("w-button",{attrs:{prefix:"demo"}},[t._v("Default")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"dashed"}},[t._v("Dashed")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"danger"}},[t._v("Danger")])],1),t._v(" "),t._m(4),t._v(" "),r("br"),t._v(" "),r("p",[r("w-button",{attrs:{prefix:"demo",type:"primary",circle:"",icon:"loading3"}}),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"primary",icon:"loading3"}},[t._v("Search")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",circle:"",icon:"loading3"}}),t._v(" "),r("w-button",{attrs:{prefix:"demo",icon:"loading3"}},[t._v("Search")]),t._v(" "),r("br"),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"danger",circle:"",icon:"loading3"}}),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"danger",icon:"loading3"}},[t._v("Search")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"dashed",circle:"",icon:"loading3"}}),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"dashed",icon:"loading3"}},[t._v("Search")])],1),t._v(" "),t._m(5),t._v(" "),r("br"),t._v(" "),r("p",[r("w-button",{attrs:{prefix:"demo",size:t.groupConfig[t.groupStatus],loading:t.loadStatus},on:{click:t.changeLoadStatus}},[t._v("点击加载中")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",size:t.groupConfig[t.groupStatus],disabled:t.disableStatus},on:{click:t.changeDisableStatus}},[t._v("点击禁用")])],1),t._v(" "),t._m(6),t._v(" "),r("br"),t._v(" "),r("p",[t._v("当前选中："+t._s(t.groupStatus)+"， 按钮大小为： "+t._s(t.groupConfig[t.groupStatus]||"default"))]),t._v(" "),r("p",[r("w-button-group",{attrs:{on:t.groupStatus}},[r("w-button",{key:0,attrs:{prefix:"demo"},on:{click:t.changeGroupStatus}},[t._v("小")]),t._v(" "),r("w-button",{key:1,attrs:{prefix:"demo"},on:{click:t.changeGroupStatus}},[t._v("中")]),t._v(" "),r("w-button",{key:2,attrs:{prefix:"demo"},on:{click:t.changeGroupStatus}},[t._v("大")])],1)],1),t._v(" "),r("p",[r("w-button-group",[r("w-button",{key:1,attrs:{prefix:"demo",size:t.groupConfig[t.groupStatus]}},[t._v("普通按钮")]),t._v(" "),r("w-button",{key:2,attrs:{prefix:"demo",type:"danger",size:t.groupConfig[t.groupStatus],icon:"star"}},[t._v("图标按钮")]),t._v(" "),r("w-button",{key:3,attrs:{prefix:"demo",type:"dashed",size:t.groupConfig[t.groupStatus],icon:"heart",circle:""}})],1)],1),t._v(" "),t._m(7),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"ghost"},[r("w-button",{attrs:{prefix:"demo",ghost:""}},[t._v("普通按钮")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"danger",ghost:"",icon:"star"}},[t._v("图标按钮")]),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"primary",ghost:"",icon:"heart",circle:""}}),t._v(" "),r("w-button",{attrs:{prefix:"demo",type:"dashed",ghost:"",icon:"heart"}})],1),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("table",[t._m(11),t._v(" "),r("tbody",[t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),r("tr",[r("td",[t._v("htmlType")]),t._v(" "),r("td",[t._v("设置 button 原生的 type 值，可选值请参考 "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 标准"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("button")])]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24)])]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"button-按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#button-按钮","aria-hidden":"true"}},[this._v("#")]),this._v(" Button 按钮")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("按钮用于开始一个即时操作。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"何时使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 何时使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"按钮类型用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按钮类型用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 按钮类型用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"图标按钮用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图标按钮用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 图标按钮用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"加载中状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载中状态","aria-hidden":"true"}},[this._v("#")]),this._v(" 加载中状态")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"按钮组合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#按钮组合","aria-hidden":"true"}},[this._v("#")]),this._v(" 按钮组合")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"幽灵按钮"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#幽灵按钮","aria-hidden":"true"}},[this._v("#")]),this._v(" 幽灵按钮")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"w-button-组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-button-组件","aria-hidden":"true"}},[this._v("#")]),this._v(" w-button 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("是否必须")]),t._v(" "),r("th",[t._v("默认")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("type")]),t._v(" "),r("td",[t._v("设置按钮类型，可选值为 "),r("code",[t._v("primary")]),t._v(","),r("code",[t._v("dashed")]),t._v(","),r("code",[t._v("danger")])]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("size")]),t._v(" "),r("td",[t._v("设置按钮大小，可选值为 "),r("code",[t._v("small")]),t._v(","),r("code",[t._v("large")])]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("icon")]),t._v(" "),r("td",[t._v("设置按钮的图标类型")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("loading")]),t._v(" "),r("td",[t._v("设置按钮载入状态")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("circle")]),t._v(" "),r("td",[t._v("设置按钮形状为圆形")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("ghost")]),t._v(" "),r("td",[t._v("幽灵属性，使按钮背景透明")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("disabled")]),t._v(" "),r("td",[t._v("按钮处于不可用状态，点击事件失效，样式也会变")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("prefix")]),t._v(" "),r("td",[t._v("自定义样式的前缀")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("className")]),t._v(" "),r("td",[t._v("自定义样式的 class 名")]),t._v(" "),r("td",[t._v("String|Object")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("click")]),t._v(" "),r("td",[t._v("绑定按钮点击事件，循环中 this 改变并传参时使用。会返回 "),r("code",[t._v("Event 对象")]),t._v(", "),r("code",[t._v("索引")])]),t._v(" "),r("td",[t._v("Function")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("() => {}")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("mouseover")]),t._v(" "),r("td",[t._v("绑定按钮鼠标移入事件，循环中 this 改变并传参时使用。会返回 "),r("code",[t._v("Event 对象")]),t._v(", "),r("code",[t._v("索引")])]),t._v(" "),r("td",[t._v("Function")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("() => {}")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("mouseout")]),t._v(" "),r("td",[t._v("绑定按钮鼠标移出事件，循环中 this 改变并传参时使用。会返回 "),r("code",[t._v("Event 对象")]),t._v(", "),r("code",[t._v("索引")])]),t._v(" "),r("td",[t._v("Function")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("() => {}")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[t._v("stop")]),t._v(" "),r("td",[t._v("是否点击事件冒泡")]),t._v(" "),r("td",[t._v("Boolean")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("事件名")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("返回值")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("click")]),t._v(" "),r("td",[t._v("绑定按钮点击事件")]),t._v(" "),r("td",[r("code",[t._v("Event 对象")]),t._v(", "),r("code",[t._v("索引")])])]),t._v(" "),r("tr",[r("td",[t._v("mouseover")]),t._v(" "),r("td",[t._v("绑定按钮鼠标移入事件")]),t._v(" "),r("td",[r("code",[t._v("Event 对象")]),t._v(", "),r("code",[t._v("索引")])])]),t._v(" "),r("tr",[r("td",[t._v("mouseout")]),t._v(" "),r("td",[t._v("绑定按钮鼠标移出事件")]),t._v(" "),r("td",[r("code",[t._v("Event 对象")]),t._v(", "),r("code",[t._v("索引")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"w-button-group-组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#w-button-group-组件","aria-hidden":"true"}},[this._v("#")]),this._v(" w-button-group 组件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("如果需要自定义索引( on )，需要与子组件的 key 值对应。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"属性-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("是否必须")]),t._v(" "),r("th",[t._v("默认")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("prefix")]),t._v(" "),r("td",[t._v("自定义样式的前缀")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("className")]),t._v(" "),r("td",[t._v("自定义样式的 class 名")]),t._v(" "),r("td",[t._v("String|Object")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("无")])]),t._v(" "),r("tr",[r("td",[t._v("on")]),t._v(" "),r("td",[t._v("定义当前选中的索引。必须子组件 key 对应")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("否")]),t._v(" "),r("td",[t._v("0")])])])])}],!1,null,null,null);o.options.__file="button.md";e.default=o.exports}}]);