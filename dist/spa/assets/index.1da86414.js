import{api as t}from"./axios.d841bc99.js";import{aI as r,H as c,v as u,k as l,aA as i,aJ as a,aO as _}from"./index.a020516c.js";const p=a("h1",null,"Home PAge",-1),f={__name:"index",setup(m){const o=r(),s=c({name:"",email:"",email_verified_at:"",created_at:"",updated_at:"",id:""}),n=()=>{t.post("/logout").then(e=>{o.push("/")}).catch(e=>{console.log(e)})};return u(()=>{t.get("/api/user").then(e=>{s.value=e.data})}),(e,d)=>(l(),i(_,null,[p,a("button",{onClick:n},"Logout")],64))}};export{f as default};