import{c as F,a as u,h as w,d as P,i as j,r as Q,e as J,w as f,o as D,f as G,g as K,l as U,_ as A,j as E,k as y,m as b,n as o,p as l,q as p,Q as x,s as v,t as B,u as h,R as V}from"./index.a020516c.js";import{Q as W,a as X,b as H,c as Y,d as Z}from"./QLayout.f7a12685.js";import{Q as ee}from"./QList.4d44654b.js";var L=F({name:"QToolbarTitle",props:{shrink:Boolean},setup(a,{slots:_}){const i=u(()=>"q-toolbar__title ellipsis"+(a.shrink===!0?" col-shrink":""));return()=>w("div",{class:i.value},P(_.default))}}),te=F({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(a,{slots:_,emit:i}){const{proxy:{$q:m}}=K(),t=j(U,()=>{console.error("QFooter needs to be child of QLayout")}),c=Q(parseInt(a.heightHint,10)),s=Q(!0),k=Q(J.value===!0||t.isContainer.value===!0?0:window.innerHeight),g=u(()=>a.reveal===!0||t.view.value.indexOf("F")>-1||m.platform.is.ios&&t.isContainer.value===!0),q=u(()=>t.isContainer.value===!0?t.containerHeight.value:k.value),z=u(()=>{if(a.modelValue!==!0)return 0;if(g.value===!0)return s.value===!0?c.value:0;const e=t.scroll.value.position+q.value+c.value-t.height.value;return e>0?e:0}),C=u(()=>a.modelValue!==!0||g.value===!0&&s.value!==!0),T=u(()=>a.modelValue===!0&&C.value===!0&&a.reveal===!0),R=u(()=>"q-footer q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-bottom"+(a.bordered===!0?" q-footer--bordered":"")+(C.value===!0?" q-footer--hidden":"")+(a.modelValue!==!0?" q-layout--prevent-focus"+(g.value!==!0?" hidden":""):"")),I=u(()=>{const e=t.rows.value.bottom,n={};return e[0]==="l"&&t.left.space===!0&&(n[m.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),e[2]==="r"&&t.right.space===!0&&(n[m.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),n});function r(e,n){t.update("footer",e,n)}function d(e,n){e.value!==n&&(e.value=n)}function $({height:e}){d(c,e),r("size",e)}function M(){if(a.reveal!==!0)return;const{direction:e,position:n,inflectionPoint:O}=t.scroll.value;d(s,e==="up"||n-O<100||t.height.value-q.value-n-c.value<300)}function N(e){T.value===!0&&d(s,!0),i("focusin",e)}f(()=>a.modelValue,e=>{r("space",e),d(s,!0),t.animate()}),f(z,e=>{r("offset",e)}),f(()=>a.reveal,e=>{e===!1&&d(s,a.modelValue)}),f(s,e=>{t.animate(),i("reveal",e)}),f([c,t.scroll,t.height],M),f(()=>m.screen.height,e=>{t.isContainer.value!==!0&&d(k,e)});const S={};return t.instances.footer=S,a.modelValue===!0&&r("size",c.value),r("space",a.modelValue),r("offset",z.value),D(()=>{t.instances.footer===S&&(t.instances.footer=void 0,r("size",0),r("offset",0),r("space",!1))}),()=>{const e=G(_.default,[w(W,{debounce:0,onResize:$})]);return a.elevated===!0&&e.push(w("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),w("footer",{class:R.value,style:I.value,onFocusin:N},e)}}});const ae={},oe=h(" J&J School Grading System"),le=h(" Home "),ne=h(" Login "),re=h(" Signup "),ue=h(" 2022 - ST Mzimela");function se(a,_){const i=E("router-view");return y(),b(X,{view:"lHh Lpr lFf"},{default:o(()=>[l(Y,{elevated:"",class:"bg-cyan-8"},{default:o(()=>[l(H,null,{default:o(()=>[l(L,{style:{"text-align":"center"}},{default:o(()=>[oe]),_:1})]),_:1}),l(H,null,{default:o(()=>[l(ee,{style:{display:"inline-flex",color:"orange"}},{default:o(()=>[p((y(),b(x,{clickable:"",to:"/"},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{name:"home",color:"orange"})]),_:1}),l(v,{style:{color:"white"}},{default:o(()=>[le]),_:1})]),_:1})),[[V]]),p((y(),b(x,{active:"",clickable:"",to:"/login"},{default:o(()=>[l(v,{avatar:""},{default:o(()=>[l(B,{name:"login",color:"orange"})]),_:1}),l(v,{style:{color:"white"}},{default:o(()=>[ne]),_:1})]),_:1})),[[V]]),p((y(),b(x,{clickable:"",to:"/register"},{default:o(()=>[l(v,{style:{color:"white"}},{default:o(()=>[re]),_:1})]),_:1})),[[V]])]),_:1})]),_:1})]),_:1}),l(Z,null,{default:o(()=>[l(i)]),_:1}),l(te,{elevated:"",class:"teal lighten-1 white--text text-center"},{default:o(()=>[l(H,null,{default:o(()=>[l(L,null,{default:o(()=>[ue]),_:1})]),_:1})]),_:1})]),_:1})}var fe=A(ae,[["render",se]]);export{fe as default};
