(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(t,e,n){"use strict";var o={name:"WIcon",props:{type:String,spin:Boolean,prefix:String,className:[String,Object]},data:function(){return{}}},i=n(1),r=Object(i.a)(o,function(){var t,e,n,o=this,i=o.$createElement,r=o._self._c||i;return o.type?r("i",{class:["w-font",(t={},t["w-"+o.type]=!!o.type,t),(e={},e[o.prefix+"-font"]=!!o.prefix,e),(n={},n[o.prefix+"-"+o.type]=!!o.prefix&&!!o.type,n),{"w-spin":!!o.spin},o.className]}):o._e()},[],!1,null,null,null);r.options.__file="Icon.vue";e.a=r.exports},128:function(t,e,n){"use strict";var o=n(3),i=n(13),r=n(16),s=n(59),a=n(57),c=n(5),u=n(83).f,l=n(82).f,p=n(8).f,v=n(130).trim,f=o.Number,d=f,h=f.prototype,m="Number"==r(n(58)(h)),_="trim"in String.prototype,g=function(t){var e=a(t,!1);if("string"==typeof e&&e.length>2){var n,o,i,r=(e=_?e.trim():v(e,3)).charCodeAt(0);if(43===r||45===r){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,i=49;break;case 79:case 111:o=8,i=55;break;default:return+e}for(var s,c=e.slice(2),u=0,l=c.length;u<l;u++)if((s=c.charCodeAt(u))<48||s>i)return NaN;return parseInt(c,o)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof f&&(m?c(function(){h.valueOf.call(n)}):"Number"!=r(n))?s(new d(g(e)),n,f):g(e)};for(var b,w=n(6)?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;w.length>y;y++)i(d,b=w[y])&&!i(f,b)&&p(f,b,l(d,b));f.prototype=h,h.constructor=f,n(9)(o,"Number",f)}},130:function(t,e,n){var o=n(11),i=n(19),r=n(5),s=n(131),a="["+s+"]",c=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),l=function(t,e,n){var i={},a=r(function(){return!!s[t]()||"​"!="​"[t]()}),c=i[t]=a?e(p):s[t];n&&(i[n]=c),o(o.P+o.F*a,"String",i)},p=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(u,"")),t};t.exports=l},131:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},132:function(t,e,n){"use strict";var o=n(127),i="".concat("w-button","-"),r={name:"WButton",props:{type:String,size:String,icon:String,loading:Boolean,circle:Boolean,ghost:Boolean,disabled:Boolean,htmlType:{type:String,default:"button"},prefix:String,className:[String,Object],stop:Boolean,click:{type:Function,default:function(){}},mouseover:{type:Function,default:function(){}},mouseout:{type:Function,default:function(){}}},data:function(){var t=this.$parent,e=void 0===t?{index:0}:t,n=this.$vnode,o=e.index,r=e.$options,s=(r=void 0===r?{_componentTag:""}:r)._componentTag,a=n.data.key;return{name:"w-button",prefixCls:i,clicked:!1,index:o,status:o===(void 0===a?0:a)&&s==="".concat(i,"group")}},methods:{clickFn:function(t){this.clicked=!0;var e=this.$vnode.data.key;this.click(t,e),this.$emit("click",t,e),this.stop&&t.stopPropagation()},mouseoverFn:function(t){var e=this.$vnode.data.key;this.mouseover(t,e),this.$emit("mouseover",t,e)},mouseoutFn:function(t){var e=this.$vnode.data.key;this.mouseout(t,e),this.$emit("mouseout",t,e)},removeClickName:function(){this.clicked=!1},updateIndex:function(){var t=this.$parent.index,e=void 0===t?0:t,n=this.$vnode.data.key,o=void 0===n?0:n;this.index=e,this.status=e===o}},components:{WIcon:o.a}},s=n(1),a=Object(s.a)(r,function(){var t,e,n=this,o=n.$createElement,i=n._self._c||o;return i("button",{class:[n.name,(t={},t[n.prefixCls+"primary"]="primary"===n.type,t[n.prefixCls+"dashed"]="dashed"===n.type,t[n.prefixCls+"danger"]="danger"===n.type,t[n.prefixCls+"ghost"]=n.ghost,t[n.prefixCls+"lg"]="large"===n.size,t[n.prefixCls+"sm"]="small"===n.size,t[n.prefixCls+"loading"]=n.loading,t[n.prefixCls+"circle"]=n.circle,t[n.prefixCls+"click"]=n.clicked,t[n.prefixCls+"disabled"]=n.disabled,t[n.prefixCls+"on"]=n.status,t[n.prefixCls+"primary-on"]="primary"===n.type&&n.status,t[n.prefixCls+"dashed-on"]="dashed"===n.type&&n.status,t[n.prefixCls+"danger-on"]="danger"===n.type&&n.status,t[n.prefixCls+"ghost-on"]="ghost"===n.type&&n.status,t),n.prefix?n.prefix+"-button":"",n.prefix&&n.status?n.prefix+"-button-on":"",n.className],attrs:{type:n.htmlType,disabled:n.disabled},on:{animationend:n.removeClickName,click:function(t){n.clickFn(t)},mouseover:function(t){n.mouseoverFn(t)},mouseout:function(t){n.mouseoutFn(t)}}},[n.loading||n.icon?i("w-icon",{directives:[{name:"show",rawName:"v-show",value:n.loading||n.icon,expression:"loading || icon"}],class:[n.prefix?n.prefix+"-button-icon":""],attrs:{type:n.icon?n.icon:"loading1",spin:n.loading||n.icon.indexOf("loading")>-1}}):n._e(),n._v(" "),n.$slots.default?i("span",{class:(e={},e[n.prefixCls+"text"]=n.loading||n.icon,e[n.prefix+"-button-text"]=n.prefix,e[n.prefixCls+"text-lg"]=(n.loading||n.icon)&&"large"===n.size,e[n.prefixCls+"text-sm"]=(n.loading||n.icon)&&"small"===n.size,e)},[n._t("default")],2):n._e()],1)},[],!1,null,null,null);a.options.__file="Button.vue";e.a=a.exports},133:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"f",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"e",function(){return c});n(84),n(134),n(12),n(17),n(20);var o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i=Object.keys,r=function(t){return null===t?"[object Null]":Object.prototype.toString.call(t)},s=function(t){return"[object Array]"===r(t)},a=function(t){return"[object Function]"===r(t)},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"disabled",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"children",r=[];return function t(s){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]&&arguments[2];s.forEach(function(s,u){var l=a?"".concat(a).concat(" / ").concat(s[e]):s[e],p=c||s[n]||!1;if(o(s,i))t(s[i],l,p);else{var v=l.split(" / ");r.push({path:l,disabled:p,option:s,value:v,nextPanel:[],floor:v.length-1,index:u})}})}(t),r}},134:function(t,e,n){"use strict";n(136);var o=n(7),i=n(81),r=n(6),s=/./.toString,a=function(t){n(9)(RegExp.prototype,"toString",t,!0)};n(5)(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?a(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!r&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=s.name&&a(function(){return s.call(this)})},135:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return o})},136:function(t,e,n){n(6)&&"g"!=/./g.flags&&n(8).f(RegExp.prototype,"flags",{configurable:!0,get:n(81)})},137:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n(135);function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){Object(o.a)(t,e,n[e])})}return t}},141:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return a}),n.d(e,"c",function(){return c});var o=n(133),i={isVerCenter:function(){return/\b(top|bottom)\b/g.test(this.placement)},isVerEndRight:function(){return/Right/g.test(this.placement)},isVerEndLeft:function(){return/Left/g.test(this.placement)},isVerLeft:function(){return/left/g.test(this.placement)},isVerRight:function(){return/right/g.test(this.placement)},isHorCenter:function(){return/\b(left|right)\b/g.test(this.placement)},isHorEndBottom:function(){return/Bottom/g.test(this.placement)},isVerEndTop:function(){return/Top/g.test(this.placement)},isHorTop:function(){return/top/g.test(this.placement)},isHorBottom:function(){return/bottom/g.test(this.placement)}},r=function(t,e){var n=e?"scrollTop":"scrollLeft",o=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof o&&(o=window.document.documentElement[n]),o},s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=e.getBoundingClientRect(),s=i.x,a=i.width,c=s;return n(),new Promise(function(e){t.$nextTick(function(){var n=t.$refs.popElem,i=(void 0===n?{offsetWidth:0}:n).offsetWidth,s=c;o(),t.isVerCenter?s=c+a/2-i/2:t.isVerLeft?s=c-i-t.interval:t.isVerEndRight?s=c+a-i:t.isVerRight&&(s=c+a+t.interval),e(s+r(window))})})},a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=e.getBoundingClientRect(),s=i.y,a=i.height,c=s;return n(),new Promise(function(e){t.$nextTick(function(){var n=t.$refs.popElem,i=(void 0===n?{offsetHeight:0}:n).offsetHeight,s=c;o(),t.isHorCenter?s=c+a/2-i/2:t.isHorEndBottom?s=c+a-i:t.isHorTop?s=c-i-t.interval:t.isHorBottom&&(s=c+a+t.interval),e(s+r(window,!0))})})},c=function(t,e){var n=t.$refs.popElem;Object(o.a)(t.$refs,e)&&Object(o.a)(t.$refs,"popElem")&&(s(t,t.$refs[e]).then(function(t){n.style.left="".concat(t,"px")}),a(t,t.$refs[e]).then(function(t){n.style.top="".concat(t,"px")}))}},147:function(t,e,n){"use strict";var o={name:"WSwitch",data:function(){return{status:this.value}},props:{value:Boolean,size:String,disabled:Boolean,loading:Boolean,stop:Boolean,before:Function,change:{type:Function,default:function(){}}},methods:{changeFn:function(t){var e=this;this.before?this.before().then(function(){e.changeStatus()}):this.changeStatus();this.change(this.status),this.$emit("change",this.status),this.$emit("input",this.status),this.stop&&t.stopPropagation()},changeStatus:function(){this.status=!this.status}},watch:{value:function(t){this.status=t}}},i=n(1),r=Object(i.a)(o,function(){var t,e,n=this,o=n.$createElement,i=n._self._c||o;return i("span",{staticClass:"w-switch",class:(t={},t["w-switch-"+n.size]="small"===n.size,t["w-switch-loading"]=n.loading,t["w-switch-"+n.size+"-loading"]="small"===n.size&&n.loading,t["w-switch-on"]=n.status,t["w-switch-"+n.size+"-on"]="small"===n.size&&n.status,t["w-switch-disabled"]=n.disabled,t),on:{click:function(t){n.changeFn(t)}}},[i("span",{staticClass:"w-switch-inner",class:(e={},e["w-switch-"+n.size+"-inner"]="small"===n.size,e["w-switch-on-inner"]=n.status,e["w-switch-"+n.size+"-on-inner"]="small"===n.size&&n.status,e)},[n.status?n._t("open"):n._t("close")],2)])},[],!1,null,null,null);r.options.__file="Switch.vue";e.a=r.exports},184:function(t,e,n){},226:function(t,e,n){"use strict";var o=n(184);n.n(o).a},241:function(t,e,n){"use strict";n.r(e);var o=n(127),i=n(147),r=n(132),s=(n(128),n(0)),a=n(137),c=n(141),u={name:"WTooltipWarp",data:function(){return{left:0,top:0,status:!1}},model:{prop:"value",event:"model"},props:{getLayout:Function,content:String,value:Boolean,placement:{type:String,default:"top"},interval:{type:Number,default:8}},computed:Object(a.a)({contentValue:function(){return this.content},tooltipClass:function(){return[{"w-tooltip-horbottom":this.isHorBottom,"w-tooltip-hortop":this.isHorTop,"w-tooltip-horleft":this.isVerLeft,"w-tooltip-horright":this.isVerRight}]},arrowClass:function(){return[{"w-tooltip-arrow-hortop":this.isHorTop,"w-tooltip-arrow-horbottom":this.isHorBottom,"w-tooltip-arrow-verendright":this.isVerEndRight,"w-tooltip-arrow-verendleft":this.isVerEndLeft,"w-tooltip-arrow-vercenter":this.isVerCenter,"w-tooltip-arrow-horleft":this.isVerLeft,"w-tooltip-arrow-horright":this.isVerRight,"w-tooltip-arrow-horendbottom":this.isHorEndBottom,"w-tooltip-arrow-horendtop":this.isVerEndTop,"w-tooltip-arrow-horcenter":this.isHorCenter}]}},c.a),mounted:function(){var t=this;this.$nextTick(function(){var e=t.getLayout();Object(c.b)(t,e,function(){t.setStatus(!0)},function(){t.setStatus(t.value)}).then(function(e){t.left=e}),Object(c.d)(t,e,function(){t.setStatus(!0)},function(){t.setStatus(t.value)}).then(function(e){t.top=e})})},methods:{setStatus:function(t){this.status=t}},watch:{value:function(t){this.setStatus(t)}}},l=n(1),p=Object(l.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.contentValue?n("div",{directives:[{name:"show",rawName:"v-show",value:t.status,expression:"status"}],ref:"popElem",staticClass:"w-tooltip",class:t.tooltipClass,style:{left:t.left+"px",top:t.top+"px"}},[n("i",{staticClass:"w-tooltip-arrow",class:t.arrowClass}),t._v(" "),n("div",{staticClass:"w-tooltip-content"},[t._v("\n      "+t._s(t.contentValue)+"\n    ")])]):t._e()])},[],!1,null,null,null);p.options.__file="Tooltip.vue";var v=p.exports,f={data:function(){return{sizeStatus:0,oneStatus:!1,groupConfig:["small","","large"]}},components:{WTooltip:{name:"WTooltip",data:function(){return{render:null,status:!1}},model:{prop:"value",event:"model"},props:{value:Boolean,enterDelay:{type:Number,default:0},leaveDelay:{type:Number,default:100},trigger:{type:String,default:"hover"},getContainer:{type:Function,default:function(){return document.body}},placement:{type:String,default:"top"},change:{type:Function,default:function(){}},mountEnd:{type:Function,default:function(){}},content:String,coreName:{type:[String,Array,Object],default:function(){}}},computed:{isHover:function(){return!!this.trigger&&"hover"===this.trigger},contentValue:function(){return this.content}},mounted:function(){var t=this.createBox(),e=this.createTooltip();this.getContainer().appendChild(t),t.appendChild(e),this.setStatus(this.value,!0),this.mountEnd(this.value,e),this.$emit("mountEnd",this.value,e),this.bindDomClick()},destroyed:function(){this.unbindDomClick()},methods:{bindDomClick:function(){document.addEventListener("click",this.bodyClick)},unbindDomClick:function(){document.removeEventListener("click",this.bodyClick)},bodyClick:function(){this.setStatus(this.isHover,!this.isHover,!0)},setStatus:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e&&(this.status=t),e&&n&&(this.change(t),this.$emit("change",t),this.$emit("model",t))},createTooltip:function(){var t=this;return new s.a({render:function(e){return e(v,{props:{getLayout:function(){return t.$el},placement:t.placement,value:t.status,content:t.contentValue}})}}).$mount().$el},createBox:function(){var t=document.createElement("div");return t.setAttribute("class","w-tooltip-box"),t},mouseenter:function(){var t=this;setTimeout(function(){t.setStatus(!t.status,t.isHover,!0)},this.enterDelay)},mouseleave:function(){var t=this;setTimeout(function(){t.setStatus(!t.status,t.isHover,!0)},this.enterDelay)},click:function(t){var e=this;setTimeout(function(){e.setStatus(!e.status,!e.isHover,!0)},this.status?this.leaveDelay:this.enterDelay),t.stopPropagation()}},watch:{value:function(t){this.setStatus(t,!0)}},render:function(t){return t("div",{class:["w-tooltip-core",this.coreName],on:{mouseenter:this.mouseenter,mouseleave:this.mouseleave,click:this.click}},this.$slots.default)}},WButton:r.a,WIcon:o.a,WSwitch:i.a},methods:{changeOneStatus:function(){this.oneStatus=!this.oneStatus}}},d=(n(226),Object(l.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("br"),t._v(" "),n("p",[n("w-tooltip",{attrs:{content:"文字提示"}},[n("a",{attrs:{href:"javascript:;"}},[t._v("鼠标输入时将显示工具提示。")])])],1),t._v(" "),t._m(6),t._v(" "),n("br"),t._v(" "),n("p",[t._v("\n  示例： "),n("w-tooltip",{attrs:{content:"文字提示"},model:{value:t.oneStatus,callback:function(e){t.oneStatus=e},expression:"oneStatus"}},[n("a",{attrs:{href:"javascript:;"}},[t._v("移入上去")])])],1),t._v(" "),n("p",[n("w-switch",{model:{value:t.oneStatus,callback:function(e){t.oneStatus=e},expression:"oneStatus"}},[n("span",{attrs:{slot:"open"},slot:"open"},[t._v("不显示")]),t._v(" "),n("span",{attrs:{slot:"close"},slot:"close"},[t._v("显示")])])],1),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"demo"},[n("div",{staticClass:"demo-popover-top"},[n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"topLeft",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("topLeft")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("top")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"topRight",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("topRight")])],1)],1),t._v(" "),n("div",{staticClass:"demo-popover-left"},[n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"leftTop",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("leftTop")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"left",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("left")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"leftBottom",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("leftBottom")])],1)],1),t._v(" "),n("div",{staticClass:"demo-popover-right"},[n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"rightTop",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("rightTop")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"right",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("right")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"rightBottom",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("rightBottom")])],1)],1),t._v(" "),n("div",{staticClass:"demo-popover-bottom"},[n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"bottomLeft",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("bottomLeft")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"bottom",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("Bottom")])],1),t._v(" "),n("w-tooltip",{attrs:{coreName:"demo-popover-core",placement:"bottomRight",content:"文字提示"}},[n("w-button",{attrs:{prefix:"demo"}},[t._v("bottomRight")])],1)],1)]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tooltip-文字提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tooltip-文字提示","aria-hidden":"true"}},[this._v("#")]),this._v(" Tooltip 文字提示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("简单的文字提示气泡框。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"何时使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#何时使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 何时使用")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。\n可用来代替系统默认的 "),e("code",[this._v("title")]),this._v(" 提示，提供一个按钮/文字/操作的文案解释。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("最简单的用法。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"可控制的文字提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可控制的文字提示","aria-hidden":"true"}},[this._v("#")]),this._v(" 可控制的文字提示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_12方向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12方向","aria-hidden":"true"}},[this._v("#")]),this._v(" 12方向")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("是否必须")]),t._v(" "),n("th",[t._v("默认")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("enterDelay")]),t._v(" "),n("td",[t._v("鼠标移入后延时多少才显示 Tooltip，单位：毫秒")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("0")])]),t._v(" "),n("tr",[n("td",[t._v("leaveDelay")]),t._v(" "),n("td",[t._v("鼠标移出后延时多少才隐藏 Tooltip，单位：秒")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("100")])]),t._v(" "),n("tr",[n("td",[t._v("trigger")]),t._v(" "),n("td",[t._v("触发行为，可选 hover|click")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("hover")])]),t._v(" "),n("tr",[n("td",[t._v("getContainer")]),t._v(" "),n("td",[t._v("浮层渲染父节点，默认渲染到 body 上")]),t._v(" "),n("td",[t._v("Function(triggerNode)")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("() => document.body")])]),t._v(" "),n("tr",[n("td",[t._v("placement")]),t._v(" "),n("td",[t._v("气泡框位置")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("top")])]),t._v(" "),n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("气泡框内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("无")])]),t._v(" "),n("tr",[n("td",[t._v("coreName")]),t._v(" "),n("td",[t._v("气泡框包裹元素的 class 名")]),t._v(" "),n("td",[t._v("String|Array|Object")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("() => {}")])]),t._v(" "),n("tr",[n("td",[t._v("change")]),t._v(" "),n("td",[t._v("显示隐藏触发的方法，返回当前状态")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("()=>{}")])]),t._v(" "),n("tr",[n("td",[t._v("mountEnd")]),t._v(" "),n("td",[t._v("初始化完成之后触发，返回当前状态，和当前元素")]),t._v(" "),n("td",[t._v("Function")]),t._v(" "),n("td",[t._v("否")]),t._v(" "),n("td",[t._v("()=>{}")])])])])}],!1,null,null,null));d.options.__file="tooltip.md";e.default=d.exports}}]);