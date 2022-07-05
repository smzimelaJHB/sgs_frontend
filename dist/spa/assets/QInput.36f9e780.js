import{u as G,a as ee,f as W,b as te,c as ae}from"./use-field.41e8bf0d.js";import{r as Q,w as I,x as B,an as ne,a as S,h as K,a0 as ue,c as re,am as p,o as le,v as ie,ah as oe,g as se}from"./index.0a2022b6.js";const J={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},L={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Y=Object.keys(L);Y.forEach(e=>{L[e].regex=new RegExp(L[e].pattern)});const fe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Y.join("")+"])|(.)","g"),X=/[.*+?^${}()|[\]\\]/g,k=String.fromCharCode(1),ce={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function de(e,b,g,m){let f,M,A,V;const x=Q(null),d=Q(R());function $(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,Z),I(()=>e.mask,a=>{if(a!==void 0)q(d.value,!0);else{const n=F(d.value);Z(),e.modelValue!==n&&b("update:modelValue",n)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&q(d.value,!0)}),I(()=>e.unmaskedValue,()=>{x.value===!0&&q(d.value)});function R(){if(Z(),x.value===!0){const a=z(F(e.modelValue));return e.fillMask!==!1?_(a):a}return e.modelValue}function j(a){if(a<f.length)return f.slice(-a);let n="",r=f;const l=r.indexOf(k);if(l>-1){for(let i=a-r.length;i>0;i--)n+=k;r=r.slice(0,l)+n+r.slice(l)}return r}function Z(){if(x.value=e.mask!==void 0&&e.mask.length>0&&$(),x.value===!1){V=void 0,f="",M="";return}const a=J[e.mask]===void 0?e.mask:J[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(X,"\\$&"),l=[],i=[],u=[];let c=e.reverseFillMask===!0,o="",v="";a.replace(fe,(y,t,h,E,P)=>{if(E!==void 0){const C=L[E];u.push(C),v=C.negate,c===!0&&(i.push("(?:"+v+"+)?("+C.pattern+"+)?(?:"+v+"+)?("+C.pattern+"+)?"),c=!1),i.push("(?:"+v+"+)?("+C.pattern+")?")}else if(h!==void 0)o="\\"+(h==="\\"?"":h),u.push(h),l.push("([^"+o+"]+)?"+o+"?");else{const C=t!==void 0?t:P;o=C==="\\"?"\\\\\\\\":C.replace(X,"\\\\$&"),u.push(C),l.push("([^"+o+"]+)?"+o+"?")}});const O=new RegExp("^"+l.join("")+"("+(o===""?".":"[^"+o+"]")+"+)?$"),N=i.length-1,s=i.map((y,t)=>t===0&&e.reverseFillMask===!0?new RegExp("^"+r+"*"+y):t===N?new RegExp("^"+y+"("+(v===""?".":v)+"+)?"+(e.reverseFillMask===!0?"$":r+"*")):new RegExp("^"+y));A=u,V=y=>{const t=O.exec(y);t!==null&&(y=t.slice(1).join(""));const h=[],E=s.length;for(let P=0,C=y;P<E;P++){const H=s[P].exec(C);if(H===null)break;C=C.slice(H.shift().length),h.push(...H)}return h.length>0?h.join(""):y},f=u.map(y=>typeof y=="string"?y:k).join(""),M=f.split(k).join(n)}function q(a,n,r){const l=m.value,i=l.selectionEnd,u=l.value.length-i,c=F(a);n===!0&&Z();const o=z(c),v=e.fillMask!==!1?_(o):o,O=d.value!==v;l.value!==v&&(l.value=v),O===!0&&(d.value=v),document.activeElement===l&&B(()=>{if(v===M){const s=e.reverseFillMask===!0?M.length:0;l.setSelectionRange(s,s,"forward");return}if(r==="insertFromPaste"&&e.reverseFillMask!==!0){const s=i-1;w.right(l,s,s);return}if(["deleteContentBackward","deleteContentForward"].indexOf(r)>-1){const s=e.reverseFillMask===!0?i===0?v.length>o.length?1:0:Math.max(0,v.length-(v===M?0:Math.min(o.length,u)+1))+1:i;l.setSelectionRange(s,s,"forward");return}if(e.reverseFillMask===!0)if(O===!0){const s=Math.max(0,v.length-(v===M?0:Math.min(o.length,u+1)));s===1&&i===1?l.setSelectionRange(s,s,"forward"):w.rightReverse(l,s,s)}else{const s=v.length-u;l.setSelectionRange(s,s,"backward")}else if(O===!0){const s=Math.max(0,f.indexOf(k),Math.min(o.length,i)-1);w.right(l,s,s)}else{const s=i-1;w.right(l,s,s)}});const N=e.unmaskedValue===!0?F(v):v;String(e.modelValue)!==N&&g(N,!0)}function U(a,n,r){const l=z(F(a.value));n=Math.max(0,f.indexOf(k),Math.min(l.length,n)),a.setSelectionRange(n,r,"forward")}const w={left(a,n,r,l){const i=f.slice(n-1).indexOf(k)===-1;let u=Math.max(0,n-1);for(;u>=0;u--)if(f[u]===k){n=u,i===!0&&n++;break}if(u<0&&f[n]!==void 0&&f[n]!==k)return w.right(a,0,0);n>=0&&a.setSelectionRange(n,l===!0?r:n,"backward")},right(a,n,r,l){const i=a.value.length;let u=Math.min(i,r+1);for(;u<=i;u++)if(f[u]===k){r=u;break}else f[u-1]===k&&(r=u);if(u>i&&f[r-1]!==void 0&&f[r-1]!==k)return w.left(a,i,i);a.setSelectionRange(l?n:r,r,"forward")},leftReverse(a,n,r,l){const i=j(a.value.length);let u=Math.max(0,n-1);for(;u>=0;u--)if(i[u-1]===k){n=u;break}else if(i[u]===k&&(n=u,u===0))break;if(u<0&&i[n]!==void 0&&i[n]!==k)return w.rightReverse(a,0,0);n>=0&&a.setSelectionRange(n,l===!0?r:n,"backward")},rightReverse(a,n,r,l){const i=a.value.length,u=j(i),c=u.slice(0,r+1).indexOf(k)===-1;let o=Math.min(i,r+1);for(;o<=i;o++)if(u[o-1]===k){r=o,r>0&&c===!0&&r--;break}if(o>i&&u[r-1]!==void 0&&u[r-1]!==k)return w.leftReverse(a,i,i);a.setSelectionRange(l===!0?n:r,r,"forward")}};function D(a){if(ne(a)===!0)return;const n=m.value,r=n.selectionStart,l=n.selectionEnd;if(a.keyCode===37||a.keyCode===39){const i=w[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];a.preventDefault(),i(n,r,l,a.shiftKey)}else a.keyCode===8&&e.reverseFillMask!==!0&&r===l?w.left(n,r,l,!0):a.keyCode===46&&e.reverseFillMask===!0&&r===l&&w.rightReverse(n,r,l,!0)}function z(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return T(a);const n=A;let r=0,l="";for(let i=0;i<n.length;i++){const u=a[r],c=n[i];if(typeof c=="string")l+=c,u===c&&r++;else if(u!==void 0&&c.regex.test(u))l+=c.transform!==void 0?c.transform(u):u,r++;else return l}return l}function T(a){const n=A,r=f.indexOf(k);let l=a.length-1,i="";for(let u=n.length-1;u>=0&&l>-1;u--){const c=n[u];let o=a[l];if(typeof c=="string")i=c+i,o===c&&l--;else if(o!==void 0&&c.regex.test(o))do i=(c.transform!==void 0?c.transform(o):o)+i,l--,o=a[l];while(r===u&&o!==void 0&&c.regex.test(o));else return i}return i}function F(a){return typeof a!="string"||V===void 0?typeof a=="number"?V(""+a):a:V(a)}function _(a){return M.length-a.length<=0?a:e.reverseFillMask===!0&&a.length>0?M.slice(0,-a.length)+a:a+M.slice(a.length)}return{innerValue:d,hasMask:x,moveCursorForPaste:U,updateMaskValue:q,onMaskedKeydown:D}}const ge={name:String};function be(e={}){return(b,g,m)=>{b[g](K("input",{class:"hidden"+(m||""),...e.value}))}}function me(e){return S(()=>e.name||e.for)}function ve(e,b){function g(){const m=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(m)===m&&("length"in m?Array.from(m):[m]).forEach(M=>{f.items.add(M)}),{files:f.files}}catch{return{files:void 0}}}return b===!0?S(()=>{if(e.type==="file")return g()}):S(g)}const he=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ke=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Me=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,xe=/[a-z0-9_ -]$/i;function ye(e){return function(g){if(g.type==="compositionend"||g.type==="change"){if(g.target.qComposing!==!0)return;g.target.qComposing=!1,e(g)}else g.type==="compositionupdate"&&g.target.qComposing!==!0&&typeof g.data=="string"&&(ue.is.firefox===!0?xe.test(g.data)===!1:he.test(g.data)===!0||ke.test(g.data)===!0||Me.test(g.data)===!0)===!0&&(g.target.qComposing=!0)}}var Fe=re({name:"QInput",inheritAttrs:!1,props:{...G,...ce,...ge,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ee,"paste","change"],setup(e,{emit:b,attrs:g}){const m={};let f=NaN,M,A,V,x;const d=Q(null),$=me(e),{innerValue:R,hasMask:j,moveCursorForPaste:Z,updateMaskValue:q,onMaskedKeydown:U}=de(e,b,c,d),w=ve(e,!0),D=S(()=>W(R.value)),z=ye(u),T=te(),F=S(()=>e.type==="textarea"||e.autogrow===!0),_=S(()=>F.value===!0||["text","search","url","tel","password"].includes(e.type)),a=S(()=>{const t={...T.splitAttrs.listeners.value,onInput:u,onPaste:i,onChange:v,onBlur:O,onFocus:p};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=z,j.value===!0&&(t.onKeydown=U),e.autogrow===!0&&(t.onAnimationend=o),t}),n=S(()=>{const t={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:$.value,...T.splitAttrs.attributes.value,id:T.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return F.value===!1&&(t.type=e.type),e.autogrow===!0&&(t.rows=1),t});I(()=>e.type,()=>{d.value&&(d.value.value=e.modelValue)}),I(()=>e.modelValue,t=>{if(j.value===!0){if(A===!0&&(A=!1,String(t)===f))return;q(t)}else R.value!==t&&(R.value=t,e.type==="number"&&m.hasOwnProperty("value")===!0&&(M===!0?M=!1:delete m.value));e.autogrow===!0&&B(o)}),I(()=>e.autogrow,t=>{t===!0?B(o):d.value!==null&&g.rows>0&&(d.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&B(o)});function r(){oe(()=>{const t=document.activeElement;d.value!==null&&d.value!==t&&(t===null||t.id!==T.targetUid.value)&&d.value.focus({preventScroll:!0})})}function l(){d.value!==null&&d.value.select()}function i(t){if(j.value===!0&&e.reverseFillMask!==!0){const h=t.target;Z(h,h.selectionStart,h.selectionEnd)}b("paste",t)}function u(t){if(!t||!t.target)return;if(e.type==="file"){b("update:modelValue",t.target.files);return}const h=t.target.value;if(t.target.qComposing===!0){m.value=h;return}if(j.value===!0)q(h,!1,t.inputType);else if(c(h),_.value===!0&&t.target===document.activeElement){const{selectionStart:E,selectionEnd:P}=t.target;E!==void 0&&P!==void 0&&B(()=>{t.target===document.activeElement&&h.indexOf(t.target.value)===0&&t.target.setSelectionRange(E,P)})}e.autogrow===!0&&o()}function c(t,h){x=()=>{e.type!=="number"&&m.hasOwnProperty("value")===!0&&delete m.value,e.modelValue!==t&&f!==t&&(f=t,h===!0&&(A=!0),b("update:modelValue",t),B(()=>{f===t&&(f=NaN)})),x=void 0},e.type==="number"&&(M=!0,m.value=t),e.debounce!==void 0?(clearTimeout(V),m.value=t,V=setTimeout(x,e.debounce)):x()}function o(){const t=d.value;if(t!==null){const h=t.parentNode.style,{overflow:E}=t.style;h.marginBottom=t.scrollHeight-1+"px",t.style.height="1px",t.style.overflow="hidden",t.style.height=t.scrollHeight+"px",t.style.overflow=E,h.marginBottom=""}}function v(t){z(t),clearTimeout(V),x!==void 0&&x(),b("change",t.target.value)}function O(t){t!==void 0&&p(t),clearTimeout(V),x!==void 0&&x(),M=!1,A=!1,delete m.value,e.type!=="file"&&setTimeout(()=>{d.value!==null&&(d.value.value=R.value!==void 0?R.value:"")})}function N(){return m.hasOwnProperty("value")===!0?m.value:R.value!==void 0?R.value:""}le(()=>{O()}),ie(()=>{e.autogrow===!0&&o()}),Object.assign(T,{innerValue:R,fieldClass:S(()=>`q-${F.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:S(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:d,emitValue:c,hasValue:D,floatingLabel:S(()=>D.value===!0||W(e.displayValue)),getControl:()=>K(F.value===!0?"textarea":"input",{ref:d,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:N()}:w.value}),getShadowControl:()=>K("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(F.value===!0?"":" text-no-wrap")},[K("span",{class:"invisible"},N()),K("span",e.shadowText)])});const s=ae(T),y=se();return Object.assign(y.proxy,{focus:r,select:l,getNativeElement:()=>d.value}),s}});export{Fe as Q,me as a,ye as b,be as c,ge as u};