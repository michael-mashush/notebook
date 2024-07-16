import{c as Z,s as f,b as re,a5 as W,u as F,j as e,a6 as T,a7 as $,a8 as ne,a9 as oe,r as i,f as Q,aa as U,ab as ie,ac as le,ad as ce,ae as de,af as me,ag as ue,i as he,ah as ge,ai as X,aj as J,ak as Y,al as xe,B as pe,am as Se,W as fe,an as u,H as ee,ao as je,ap as ve,a3 as _e,aq as Ee}from"./index-D0NLoYlS.js";import{M as Ae,a as be}from"./widget-DZGndchz.js";import{M as Re,a as ye,b as Me,c as Ne,d as we}from"./widget-C2hivEk4.js";import{u as y,M as Ce,a as Ue}from"./store-BDzDOKkQ.js";/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=Z("KeyRound",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.397.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=Z("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]),Te=/^.*$/,$e="It is allowed to use only Latin characters and numbers",se=2,Pe=`The minimum name length is ${se} characters`,ae=64,Ie=`The maximum name length is ${ae} characters`,L={AVATARS:"avatars"};async function Ge(a){var b,S,x;const{name:t,email:r,avatar:s}=a,n=await f.auth.getSession(),l=((S=(b=n.data.session)==null?void 0:b.user.user_metadata)==null?void 0:S.name)!==t,o=((x=n.data.session)==null?void 0:x.user.email)!==r;let h;if(s){const p=await f.storage.from(L.AVATARS).remove([`${n.data.session.user.id}/${n.data.session.user.user_metadata.avatar_url}`]);if(p.error)throw p.error;const c=await f.storage.from(L.AVATARS).upload(`${n.data.session.user.id}/${Date.now()}${s.name.split(".").pop()}`,s,{upsert:!0});if(c.error)throw c.error;h=c.data.path?f.storage.from(L.AVATARS).getPublicUrl(c.data.path).data.publicUrl:void 0}const g=await f.auth.updateUser({data:{user_name:l?t:void 0,avatar_url:h},email:o?r:void 0});if(g.error)throw g.error;return g.data}const Oe="update-user";function ke(){return re({mutationKey:[Oe],mutationFn:Ge})}const De=[{value:"system",label:"System"},{value:"light",label:"Light"},{value:"dark",label:"Dark"}],He=()=>{const a=W(s=>s.colorScheme),t=W(s=>s.setColorScheme),r=F(s=>{s&&t(s)});return e.jsx(T,{value:a,autoClose:!0,startIcon:Fe,placeholder:"Select color scheme",onChange:r,children:De.map(s=>e.jsx($,{value:s.value,label:s.label},s.value))})},Ve=[{value:"grid",label:"Grid"},{value:"rows",label:"Rows"}],qe=()=>{const a=y(s=>s.searchFormat),t=y(s=>s.setSearchFormat),r=F(s=>{s&&t(s)});return e.jsx(T,{value:a,startIcon:ne,autoClose:!0,placeholder:"Select search format",onChange:r,children:Ve.map(s=>e.jsx($,{value:s.value,label:s.label},s.value))})},ze=[{value:12,label:"12"},{value:24,label:"24"},{value:36,label:"36"},{value:48,label:"48"},{value:60,label:"60"}],Be=()=>{const a=y(s=>s.searchLimit),t=y(s=>s.setSearchLimit),r=F(s=>{s&&t(s)});return e.jsx(T,{value:a,startIcon:oe,autoClose:!0,placeholder:"Select search limit",onChange:r,children:ze.map(s=>e.jsx($,{value:s.value,label:s.label},s.value))})},Ke="_form_1l6rs_1",R={form:Ke,"form-columns":"_form-columns_1l6rs_7","form-avatar":"_form-avatar_1l6rs_14","form-fields":"_form-fields_1l6rs_24"},We=()=>{var P,I,G,O,k,D,H,V,q,z,B,K;const a=ke(),t=Q(a.isError),r=Q(a.isSuccess),s=U(d=>{var m;return(m=d.user)==null?void 0:m.user_metadata.user_name}),n=U(d=>{var m;return((m=d.user)==null?void 0:m.email)??""}),l=U(d=>{var m;return(m=d.user)==null?void 0:m.user_metadata.avatar_url}),o=ie({mode:"all",defaultValues:{name:s,email:n}}),h=i.useId(),g=i.useId(),b=i.useId(),S=i.useId(),x=o.register("avatar",{disabled:a.isPending}),p=o.register("name",{pattern:{value:Te,message:$e},minLength:{value:se,message:Pe},maxLength:{value:ae,message:Ie},disabled:a.isPending}),c=o.register("email",{required:{value:le,message:ce},pattern:{value:de,message:me},disabled:a.isPending}),te=o.handleSubmit(d=>{a.mutate({...d,avatar:d.avatar[0]})});return e.jsxs(i.Fragment,{children:[e.jsxs(ue,{className:R.form,onSubmit:te,children:[e.jsxs("div",{className:R["form-columns"],children:[e.jsx("div",{className:R["form-avatar"],children:e.jsx(he,{title:"Upload avatar",children:e.jsx(ge,{preview:l,"aria-label":"upload personal avatar","aria-invalid":!!((P=o.formState.errors.avatar)!=null&&P.message),"aria-disabled":x.disabled,"aria-required":x.required,...x})})}),e.jsxs("div",{className:R["form-fields"],children:[e.jsxs(X,{children:[e.jsx(J,{id:h,variant:"secondary",type:"text",inputMode:"text",autoComplete:"name",placeholder:"John Smith",invalid:!!((I=o.formState.errors.name)!=null&&I.message),"aria-label":"display name from your account","aria-invalid":!!((G=o.formState.errors.name)!=null&&G.message),"aria-disabled":p.disabled,"aria-required":p.required,"aria-autocomplete":"list","aria-errormessage":(O=o.formState.errors.name)!=null&&O.message?g:void 0,...p}),e.jsx(Y,{visible:!!((k=o.formState.errors.name)!=null&&k.message),id:g,children:(D=o.formState.errors.name)==null?void 0:D.message})]}),e.jsxs(X,{children:[e.jsx(J,{id:b,variant:"secondary",type:"email",inputMode:"email",autoComplete:"email",placeholder:"user@example.com",invalid:!!((H=o.formState.errors.email)!=null&&H.message),"aria-label":"email address from your account","aria-invalid":!!((V=o.formState.errors.email)!=null&&V.message),"aria-disabled":c.disabled,"aria-required":c.required,"aria-autocomplete":"list","aria-errormessage":(q=o.formState.errors.email)!=null&&q.message?S:void 0,...c}),e.jsx(Y,{visible:!!((z=o.formState.errors.email)!=null&&z.message),id:S,children:(B=o.formState.errors.email)==null?void 0:B.message})]})]})]}),e.jsx(xe,{children:e.jsx(pe,{type:"submit",disabled:!o.formState.dirtyFields.name&&!o.formState.dirtyFields.email&&!o.formState.dirtyFields.avatar,loading:a.isPending,children:"Save"})})]}),e.jsx(Se,{title:"Great",text:"User data has been successfully changed.",opened:r.isVisible,onClose:r.hide}),e.jsx(fe,{title:"Something went wrong",text:((K=a.error)==null?void 0:K.message)??"",opened:t.isVisible,onClose:t.hide})]})},Qe=i.memo(We),Xe={"settings-group":"_settings-group_odomg_1"},Je=(a,t)=>{const{children:r,className:s,...n}=a;return e.jsx("section",{ref:t,className:u(s,Xe["settings-group"]),...n,children:r})},M=i.forwardRef(Je),Ye={"settings-group-content":"_settings-group-content_1u3eu_1"},Ze=(a,t)=>{const{children:r,className:s,...n}=a;return e.jsx("div",{ref:t,className:u(s,Ye["settings-group-content"]),...n,children:r})},N=i.forwardRef(Ze),es={"settings-group-header":"_settings-group-header_1y7gn_1"},ss=(a,t)=>{const{children:r,className:s,...n}=a;return e.jsx("header",{ref:t,className:u(s,es["settings-group-header"]),...n,children:r})},w=i.forwardRef(ss),as=(a,t)=>{const{children:r,color:s="default",level:n="2",size:l="lg",...o}=a;return e.jsx(ee,{ref:t,color:s,level:n,size:l,...o,children:r})},C=i.forwardRef(as),ts=()=>e.jsxs(M,{children:[e.jsx(w,{children:e.jsx(C,{children:"User"})}),e.jsx(N,{children:e.jsx(Qe,{})})]}),rs=i.memo(ts),ns={"settings-field":"_settings-field_6waog_1"},os=(a,t)=>{const{children:r,className:s,...n}=a;return e.jsx("section",{ref:t,className:u(s,ns["settings-field"]),...n,children:r})},j=i.forwardRef(os),is={"settings-field-content":"_settings-field-content_e4f6j_1"},ls=(a,t)=>{const{children:r,className:s,...n}=a;return e.jsx("div",{ref:t,className:u(s,is["settings-field-content"]),...n,children:r})},v=i.forwardRef(ls),cs={"settings-field-control":"_settings-field-control_13txu_1"},ds=(a,t)=>{const{children:r,className:s,...n}=a;return e.jsx("div",{ref:t,className:u(s,cs["settings-field-control"]),...n,children:r})},_=i.forwardRef(ds),ms={"settings-field-description":"_settings-field-description_tqwpg_1"},us=(a,t)=>{const{children:r,className:s,color:n="muted",...l}=a;return e.jsx(je,{ref:t,className:u(s,ms["settings-field-description"]),color:n,...l,children:r})},E=i.forwardRef(us),hs=(a,t)=>{const{children:r,color:s="default",level:n="3",size:l="sm",weight:o="semibold",...h}=a;return e.jsx(ee,{ref:t,color:s,level:n,size:l,weight:o,...h,children:r})},A=i.forwardRef(hs),gs=()=>e.jsxs(M,{children:[e.jsx(w,{children:e.jsx(C,{children:"Appearance"})}),e.jsx(N,{children:e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(A,{children:"Color scheme"}),e.jsx(E,{children:"What color scheme will be used in the application."})]}),e.jsx(_,{children:e.jsx(He,{})})]})})]}),xs=i.memo(gs),ps=()=>e.jsxs(M,{children:[e.jsx(w,{children:e.jsx(C,{children:"Search"})}),e.jsxs(N,{children:[e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(A,{children:"Limit"}),e.jsx(E,{children:"How many entries will be displayed on the search page."})]}),e.jsx(_,{children:e.jsx(Be,{})})]}),e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(A,{children:"Format"}),e.jsx(E,{children:"How will the data be displayed on the search page."})]}),e.jsx(_,{children:e.jsx(qe,{})})]})]})]}),Ss=i.memo(ps),fs=()=>e.jsxs(M,{children:[e.jsx(w,{children:e.jsx(C,{children:"Account"})}),e.jsxs(N,{children:[e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(A,{children:"Password"}),e.jsx(E,{children:"Update your current password."})]}),e.jsx(_,{children:e.jsx(ve,{href:_e.UPDATE_PASSWORD_PAGE.PATH,startIcon:Le,variant:"outlined",children:"Update password"})})]}),e.jsxs(j,{children:[e.jsxs(v,{children:[e.jsx(A,{children:"Logout"}),e.jsx(E,{children:"Log out of your account."})]}),e.jsx(_,{children:e.jsx(Ee,{})})]})]})]}),js=i.memo(fs),vs=()=>e.jsxs(Re,{children:[e.jsx(ye,{children:e.jsx(Ae,{})}),e.jsxs(Me,{children:[e.jsx(Ce,{children:e.jsx(Ue,{children:"Settings"})}),e.jsxs(be,{children:[e.jsx(rs,{}),e.jsx(xs,{}),e.jsx(Ss,{}),e.jsx(js,{})]})]}),e.jsx(Ne,{children:e.jsx(we,{})})]}),Rs=vs;export{Rs as SettingsPage};
