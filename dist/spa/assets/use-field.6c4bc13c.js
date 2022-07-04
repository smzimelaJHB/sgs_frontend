import{i as ue,w as A,o as j,aD as ie,g as V,P as se,c as de,S as ce,a as i,h as a,U as fe,r as C,L as ve,au as me,aj as ge,ah as pe,V as he,x as be,N as ye,O as Ce,v as xe,e as qe,X as E,J as Se,K as _e,aE as we,d as z,t as K,aF as Be,ag as ke}from"./index.a020516c.js";function Re({validate:e,resetValidation:t,requiresQForm:r}){const l=ue(ie,!1);if(l!==!1){const{props:s,proxy:d}=V();Object.assign(d,{validate:e,resetValidation:t}),A(()=>s.disable,n=>{n===!0?(typeof t=="function"&&t(),l.unbindComponent(d)):l.bindComponent(d)}),s.disable!==!0&&l.bindComponent(d),j(()=>{s.disable!==!0&&l.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const J=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,W=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,X=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,M=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,O=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,G={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>J.test(e),hexaColor:e=>W.test(e),hexOrHexaColor:e=>X.test(e),rgbColor:e=>M.test(e),rgbaColor:e=>O.test(e),rgbOrRgbaColor:e=>M.test(e)||O.test(e),hexOrRgbColor:e=>J.test(e)||M.test(e),hexaOrRgbaColor:e=>W.test(e)||O.test(e),anyColor:e=>X.test(e)||M.test(e)||O.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const Ae={...se,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function Fe(e,t,r){return r<=t?t:Math.min(r,Math.max(t,e))}function Le(e,t,r){if(r<=t)return t;const l=r-t+1;let s=t+(e-t)%l;return s<t&&(s=l+s),s===0?0:s}const D=50,te=2*D,oe=te*Math.PI,Ve=Math.round(oe*1e3)/1e3;de({name:"QCircularProgress",props:{...Ae,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=V(),l=ce(e),s=i(()=>{const h=(r.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(r.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-h}deg)`:`rotate3d(0, 0, 1, ${h-90}deg)`}}),d=i(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),n=i(()=>te/(1-e.thickness/2)),b=i(()=>`${n.value/2} ${n.value/2} ${n.value} ${n.value}`),p=i(()=>Fe(e.value,e.min,e.max)),w=i(()=>oe*(1-(p.value-e.min)/(e.max-e.min))),m=i(()=>e.thickness/2*n.value);function S({thickness:h,offset:y,color:x,cls:B}){return a("circle",{class:"q-circular-progress__"+B+(x!==void 0?` text-${x}`:""),style:d.value,fill:"transparent",stroke:"currentColor","stroke-width":h,"stroke-dasharray":Ve,"stroke-dashoffset":y,cx:n.value,cy:n.value,r:D})}return()=>{const h=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&h.push(a("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:D-m.value/2,cx:n.value,cy:n.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&h.push(S({cls:"track",thickness:m.value,offset:0,color:e.trackColor})),h.push(S({cls:"circle",thickness:m.value,offset:w.value,color:e.color}));const y=[a("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:b.value,"aria-hidden":"true"},h)];return e.showValue===!0&&y.push(a("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[a("div",p.value)])),a("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:l.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:p.value},fe(t.internal,y))}}});const $e=["rejected"],Ee=[...$e,"start","finish","added","removed"],ze=()=>!0;function Me(e){const t={};return e.forEach(r=>{t[r]=ze}),t}Me(Ee);let P,I=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const Oe=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let l=t;l>0;l--)r.push(Math.floor(Math.random()*256));return r}})(),Y=4096;function Ie(){(P===void 0||I+16>Y)&&(I=0,P=Oe(Y));const e=Array.prototype.slice.call(P,I,I+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}const Pe=[!0,!1,"ondemand"],De={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Pe.includes(e)}};function Ue(e,t){const{props:r,proxy:l}=V(),s=C(!1),d=C(null),n=C(null);Re({validate:x,resetValidation:y});let b=0,p;const w=i(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),m=i(()=>r.disable!==!0&&w.value===!0),S=i(()=>r.error===!0||s.value===!0),h=i(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:d.value);A(()=>r.modelValue,()=>{B()}),A(()=>r.reactiveRules,q=>{q===!0?p===void 0&&(p=A(()=>r.rules,()=>{B(!0)})):p!==void 0&&(p(),p=void 0)},{immediate:!0}),A(e,q=>{q===!0?n.value===null&&(n.value=!1):n.value===!1&&(n.value=!0,m.value===!0&&r.lazyRules!=="ondemand"&&t.value===!1&&k())});function y(){b++,t.value=!1,n.value=null,s.value=!1,d.value=null,k.cancel()}function x(q=r.modelValue){if(m.value!==!0)return!0;const R=++b;t.value!==!0&&r.lazyRules!==!0&&(n.value=!0);const _=(v,g)=>{s.value!==v&&(s.value=v);const c=g||void 0;d.value!==c&&(d.value=c),t.value=!1},F=[];for(let v=0;v<r.rules.length;v++){const g=r.rules[v];let c;if(typeof g=="function"?c=g(q):typeof g=="string"&&G[g]!==void 0&&(c=G[g](q)),c===!1||typeof c=="string")return _(!0,c),!1;c!==!0&&c!==void 0&&F.push(c)}return F.length===0?(_(!1),!0):(t.value=!0,Promise.all(F).then(v=>{if(v===void 0||Array.isArray(v)===!1||v.length===0)return R===b&&_(!1),!0;const g=v.find(c=>c===!1||typeof c=="string");return R===b&&_(g!==void 0,g),g===void 0},v=>(R===b&&(console.error(v),_(!0)),!1)))}function B(q){m.value===!0&&r.lazyRules!=="ondemand"&&(n.value===!0||r.lazyRules!==!0&&q!==!0)&&k()}const k=ve(x,0);return j(()=>{p!==void 0&&p(),k.cancel()}),Object.assign(l,{resetValidation:y,validate:x}),me(l,"hasError",()=>S.value),{isDirtyModel:n,hasRules:w,hasError:S,errorMessage:h,validate:x,resetValidation:y}}const ee=/^on[A-Z]/;function je(e,t){const r={listeners:C({}),attributes:C({})};function l(){const s={},d={};for(const n in e)n!=="class"&&n!=="style"&&ee.test(n)===!1&&(s[n]=e[n]);for(const n in t.props)ee.test(n)===!0&&(d[n]=t.props[n]);r.attributes.value=s,r.listeners.value=d}return ge(l),l(),r}function U(e){return e===void 0?`f_${Ie()}`:e}function Ne(e){return e!=null&&(""+e).length>0}const He={...Se,...De,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Qe=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function Ze(){const{props:e,attrs:t,proxy:r,vnode:l}=V();return{isDark:_e(e,r.$q),editable:i(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:C(!1),focused:C(!1),hasPopupOpen:!1,splitAttrs:je(t,l),targetUid:C(U(e.for)),rootRef:C(null),targetRef:C(null),controlRef:C(null)}}function Ke(e){const{props:t,emit:r,slots:l,attrs:s,proxy:d}=V(),{$q:n}=d;let b;e.hasValue===void 0&&(e.hasValue=i(()=>Ne(t.modelValue))),e.emitValue===void 0&&(e.emitValue=o=>{r("update:modelValue",o)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:N,onFocusout:T}),Object.assign(e,{clearValue:L,onControlFocusin:N,onControlFocusout:T,focus:c}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(t.counter!==!1){const o=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,u=t.maxlength!==void 0?t.maxlength:t.maxValues;return o+(u!==void 0?" / "+u:"")}}));const{isDirtyModel:p,hasRules:w,hasError:m,errorMessage:S,resetValidation:h}=Ue(e.focused,e.innerLoading),y=e.floatingLabel!==void 0?i(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),x=i(()=>t.bottomSlots===!0||t.hint!==void 0||w.value===!0||t.counter===!0||t.error!==null),B=i(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),k=i(()=>`q-field row no-wrap items-start q-field--${B.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(y.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(m.value===!0?" q-field--error":"")+(m.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&x.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),q=i(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(m.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),R=i(()=>t.labelSlot===!0||t.label!==void 0),_=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&m.value!==!0?` text-${t.labelColor}`:"")),F=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:y.value,modelValue:t.modelValue,emitValue:e.emitValue})),v=i(()=>{const o={for:e.targetUid.value};return t.disable===!0?o["aria-disabled"]="true":t.readonly===!0&&(o["aria-readonly"]="true"),o});A(()=>t.for,o=>{e.targetUid.value=U(o)});function g(){const o=document.activeElement;let u=e.targetRef!==void 0&&e.targetRef.value;u&&(o===null||o.id!==e.targetUid.value)&&(u.hasAttribute("tabindex")===!0||(u=u.querySelector("[tabindex]")),u&&u!==o&&u.focus({preventScroll:!0}))}function c(){pe(g)}function re(){we(g);const o=document.activeElement;o!==null&&e.rootRef.value.contains(o)&&o.blur()}function N(o){clearTimeout(b),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",o))}function T(o,u){clearTimeout(b),b=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,r("blur",o)),u!==void 0&&u())})}function L(o){he(o),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",t.modelValue),be(()=>{h(),n.platform.is.mobile!==!0&&(p.value=!1)})}function le(){const o=[];return l.prepend!==void 0&&o.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:E},l.prepend())),o.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ne())),m.value===!0&&t.noErrorIcon===!1&&o.push($("error",[a(K,{name:n.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?o.push($("inner-loading-append",l.loading!==void 0?l.loading():[a(Be,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&o.push($("inner-clearable-append",[a(K,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||n.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:L})])),l.append!==void 0&&o.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:E},l.append())),e.getInnerAppend!==void 0&&o.push($("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&o.push(e.getControlChild()),o}function ne(){const o=[];return t.prefix!==void 0&&t.prefix!==null&&o.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&o.push(e.getShadowControl()),e.getControl!==void 0?o.push(e.getControl()):l.rawControl!==void 0?o.push(l.rawControl()):l.control!==void 0&&o.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},l.control(F.value))),R.value===!0&&o.push(a("div",{class:_.value},z(l.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&o.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),o.concat(z(l.default))}function ae(){let o,u;m.value===!0?S.value!==null?(o=[a("div",{role:"alert"},S.value)],u=`q--slot-error-${S.value}`):(o=z(l.error),u="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(o=[a("div",t.hint)],u=`q--slot-hint-${t.hint}`):(o=z(l.hint),u="q--slot-hint"));const Q=t.counter===!0||l.counter!==void 0;if(t.hideBottomSpace===!0&&Q===!1&&o===void 0)return;const Z=a("div",{key:u,class:"q-field__messages col"},o);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?Z:a(ke,{name:"q-transition--field-message"},()=>Z),Q===!0?a("div",{class:"q-field__counter"},l.counter!==void 0?l.counter():e.computedCounter.value):null])}function $(o,u){return u===null?null:a("div",{key:o,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},u)}Object.assign(d,{focus:c,blur:re});let H=!1;return ye(()=>{H=!0}),Ce(()=>{H===!0&&t.autofocus===!0&&d.focus()}),xe(()=>{qe.value===!0&&t.for===void 0&&(e.targetUid.value=U()),t.autofocus===!0&&d.focus()}),j(()=>{clearTimeout(b)}),function(){const u=e.getControl===void 0&&l.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...v.value}:v.value;return a("label",{ref:e.rootRef,class:[k.value,s.class],style:s.style,...u},[l.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:E},l.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:q.value,tabindex:-1,...e.controlEvents},le()),x.value===!0?ae():null]),l.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:E},l.after()):null])}}export{Qe as a,Ze as b,Ke as c,Fe as d,Ne as f,Le as n,He as u};
