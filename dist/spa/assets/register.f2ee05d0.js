import{Q as y,a as g}from"./QForm.cd140c2a.js";import{Q as t}from"./QInput.153c3252.js";import{Q as b}from"./QToggle.443edf09.js";import{aI as c,r as m,H as v,k as x,aA as _,aJ as Q,p as a,n as U,aK as h,q as n,aL as d,az as r,aB as k,av as q}from"./index.a020516c.js";import{api as p}from"./axios.d841bc99.js";import"./use-field.6c4bc13c.js";import"./use-checkbox.33cf8691.js";const B={class:"container"},P={class:"position"},A={__name:"register",setup(R){const u=c();let i=m(!1),s=m(!0);const o=v({name:"",email:"",password:"",password_confirmation:""}),f=()=>{s.value=!s.value},w=()=>{p.get("/sanctum/csrf-cookie").then(V=>{p.post("/register",o).then(e=>{u.push("/verify-email")}).catch(e=>{console.log(e),console.log(e.response)})})};return(V,e)=>(x(),_("div",B,[Q("div",P,[a(y,{src:"signup.png","spinner-color":"white",style:{display:"flex","max-height":"300px","max-width":"300px"}}),a(g,{class:"q-gutter-md",onSubmit:h(w,["prevent"])},{default:U(()=>[a(t,{type:"text",filled:"",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=l=>o.name=l),label:"Name",required:""},null,8,["modelValue"]),a(t,{type:"email",filled:"",modelValue:o.email,"onUpdate:modelValue":e[1]||(e[1]=l=>o.email=l),label:"Email",required:""},null,8,["modelValue"]),n(a(t,{type:"password",filled:"",modelValue:o.password,"onUpdate:modelValue":e[2]||(e[2]=l=>o.password=l),label:"Password",required:""},null,8,["modelValue"]),[[d,r(s)]]),n(a(t,{type:"text",filled:"",modelValue:o.password,"onUpdate:modelValue":e[3]||(e[3]=l=>o.password=l),label:"Password"},null,8,["modelValue"]),[[d,!r(s)]]),n(a(t,{type:"password",filled:"",modelValue:o.password_confirmation,"onUpdate:modelValue":e[4]||(e[4]=l=>o.password_confirmation=l),label:"Repeat Password",required:""},null,8,["modelValue"]),[[d,r(s)]]),n(a(t,{type:"text",filled:"",modelValue:o.password_confirmation,"onUpdate:modelValue":e[5]||(e[5]=l=>o.password_confirmation=l),label:"Repeat Password"},null,8,["modelValue"]),[[d,!r(s)]]),a(b,{modelValue:r(i),"onUpdate:modelValue":e[6]||(e[6]=l=>k(i)?i.value=l:i=l),onClick:f,label:"show pass",color:"pink",style:{float:"left"}},null,8,["modelValue"]),a(q,{color:"blue",type:"submit",label:"Submit",style:{float:"right"}})]),_:1},8,["onSubmit"])])]))}};export{A as default};
