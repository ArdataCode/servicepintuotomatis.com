import{b as ct,u as ut,n as dt}from"./links.rndHrQjc.js";import"./default-i18n.Bd0Z306Z.js";import{r as ue,a2 as ft,w as q,a0 as Ie,a3 as Re,i as pt,g as _,z as De,n as ae,a4 as xe,V as de,p as vt,u as ht,a5 as mt,a6 as bt,o as g,c as $,a as S,q as W,H as k,k as Y,f as fe,j as w,W as yt,N as Fe,l as V,m as D,B as wt,v as gt,T as _t,x as P,O as St,C as j,F as oe,K as re,t as R,d as O,D as ie,G as _e}from"./vue.esm-bundler.CWQFYt9y.js";import{u as $t,T as Ct}from"./TruSeoScore.TjofuHRQ.js";import{_ as Tt}from"./_plugin-vue_export-helper.BN1snXvA.js";import{S as Pt,a as kt}from"./Ellipse.BbMe4Rtx.js";import{B as Mt,a as Et,c as Ot}from"./Caret.iRBf3wcH.js";import{S as Lt}from"./Information.CESrgQJV.js";import{T as Nt}from"./Slide.CRIn0kdn.js";const je={locks:{},zIndex:2e3,enableRipple:!0};ue(je);var Ve=ue(je),zt=Object.defineProperty,Bt=Object.defineProperties,Wt=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,$e=(e,t,n)=>t in e?zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rt=(e,t)=>{for(var n in t||(t={}))At.call(t,n)&&$e(e,n,t[n]);if(Se)for(var n of Se(t))It.call(t,n)&&$e(e,n,t[n]);return e},Dt=(e,t)=>Bt(e,Wt(t)),M=e=>typeof e=="string",xt=e=>typeof e=="boolean",pe=e=>typeof e=="number",He=e=>pe(e)||M(e)&&/^[-+]?\d+$/.test(e),Ft=e=>Object.prototype.toString.call(e)==="[object Object]",jt=e=>typeof e=="function",Ue=e=>Array.isArray(e),Vt=e=>e===window,Ht=()=>ee()&&"ontouchstart"in window,ee=()=>typeof window<"u",Ce=(e,t)=>{if(e.length){const n=e.indexOf(t);if(n>-1)return e.splice(n,1)}},Ut=(...e)=>e.map(t=>{if(Ue(t)){const[n,o,r=null]=t;return n?o:r}return t}),qt=()=>typeof globalThis<"u"?globalThis:ee()?window:typeof global<"u"?global:self,le=e=>{const t=qt();return t.requestAnimationFrame?t.requestAnimationFrame(e):t.setTimeout(e)},Yt=()=>new Promise(e=>{le(e)}),qe=()=>new Promise(e=>{le(()=>{le(e)})}),ve=e=>window.getComputedStyle(e),G=e=>{if(Vt(e)){const t=e.innerWidth,n=e.innerHeight,o={x:0,y:0,top:0,left:0,right:t,bottom:n,width:t,height:n};return Dt(Rt({},o),{toJSON:()=>o})}return e.getBoundingClientRect()},Xt=e=>{const t="scrollTop"in e?e.scrollTop:e.scrollY;return Math.max(t,0)},Kt=e=>{const t="scrollLeft"in e?e.scrollLeft:e.scrollX;return Math.max(t,0)};function x(e,...t){if(Ue(e))return e.map(n=>n(...t));if(e)return e(...t)}var Ye=e=>e==null?0:M(e)?(e=parseFloat(e),e=Number.isNaN(e)?0:e,e):xt(e)?Number(e):e,Gt=(e,t,n)=>Math.min(n,Math.max(t,e)),Zt=e=>Jt(e).replace(e.charAt(0),e.charAt(0).toUpperCase()),Jt=e=>e.replace(/-(\w)/g,(t,n)=>n.toUpperCase());function Qt(e){return t=>{const n=`${e}-${t}`,o=r=>r?r[0]==="$"?r.replace("$",e):r.startsWith("--")?`${n}${r}`:`${n}__${r}`:n;return{name:Zt(n),n:o,classes:Ut}}}var en=Object.defineProperty,Z=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable,Te=(e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tn=(e,t)=>{for(var n in t||(t={}))Xe.call(t,n)&&Te(e,n,t[n]);if(Z)for(var n of Z(t))Ke.call(t,n)&&Te(e,n,t[n]);return e},nn=(e,t)=>{var n={};for(var o in e)Xe.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Z)for(var o of Z(e))t.indexOf(o)<0&&Ke.call(e,o)&&(n[o]=e[o]);return n};function Ge(e){let t=!1;De(()=>{e(),ae(()=>{t=!0})}),xe(()=>{t&&e()})}function ce(e,t,n,o={}){if(!ee())return;const{passive:r=!1,capture:i=!1}=o;let a=!1,l=!1;const s=d=>jt(d)?d():ht(d),c=d=>{if(a||l)return;const m=s(d);m&&(m.addEventListener(t,n,{passive:r,capture:i}),a=!0)},u=d=>{if(!a||l)return;const m=s(d);m&&(m.removeEventListener(t,n,{capture:i}),a=!1)};let v;ft(e)&&(v=q(()=>e.value,(d,m)=>{u(m),c(d)}));const h=()=>{v==null||v(),u(e),l=!0};return Ge(()=>{c(e)}),Ie(()=>{u(e)}),Re(()=>{u(e)}),h}function on(e){let t=!1;Re(()=>{t=!0,e()}),mt(()=>{t||e()})}function rn(e){const t=de();return e in t.provides}function sn(e){if(!rn(e))return{index:null,parentProvider:null,bindParent:null};const n=pt(e),{childInstances:o,collect:r,clear:i}=n,a=nn(n,["childInstances","collect","clear"]),l=de();return{index:_(()=>o.indexOf(l)),parentProvider:a,bindParent:u=>{De(()=>{ae().then(()=>{r(l,u)})}),Ie(()=>{ae().then(()=>{i(l,u)})})}}}function an(e){const t=[],n=o=>{if(o!=null&&o.component){n(o==null?void 0:o.component.subTree);return}Array.isArray(o==null?void 0:o.children)&&o.children.forEach(r=>{bt(r)&&(t.push(r),n(r))})};return n(e),t}function ln(e){const t=de(),n=ue([]),o=[],r=_(()=>n.length),i=()=>{const c=an(t.subTree);n.sort((u,v)=>c.indexOf(u.vnode)-c.indexOf(v.vnode))},a=(c,u)=>{n.push(c),o.push(u),i()},l=(c,u)=>{Ce(n,c),Ce(o,u)};return{length:r,childProviders:o,bindChildren:c=>{vt(e,tn({childInstances:n,collect:a,clear:l},c))}}}function Ze(e){ce(()=>window,"resize",e,{passive:!0}),ce(()=>window,"orientationchange",e,{passive:!0})}var cn=Object.defineProperty,un=Object.defineProperties,dn=Object.getOwnPropertyDescriptors,Pe=Object.getOwnPropertySymbols,fn=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable,ke=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vn=(e,t)=>{for(var n in t||(t={}))fn.call(t,n)&&ke(e,n,t[n]);if(Pe)for(var n of Pe(t))pn.call(t,n)&&ke(e,n,t[n]);return e},hn=(e,t)=>un(e,dn(t));function se(e,t){return Array.isArray(t)?t.reduce((n,o)=>(n[o]=e[o],n),{}):e[t]}function he(e,t){const n=t??e;return n.install=function(o){const{name:r}=e;r&&o.component(r,e)},n}function me(e,t){e.setPropsDefaults=function(n){Object.entries(n).forEach(([o,r])=>{const i=t[o];if(i!=null){if(Ft(i)){t[o]=hn(vn({},i),{default:r});return}t[o]={type:i,default:r}}})}}const te=Qt("var");function H(e){return{type:[Function,Array],default:e}}function mn(e,t){return e===!1?null:(e===!0&&t&&(e=t),`var-elevation--${e}`)}var bn=Object.defineProperty,yn=Object.defineProperties,wn=Object.getOwnPropertyDescriptors,Me=Object.getOwnPropertySymbols,gn=Object.prototype.hasOwnProperty,_n=Object.prototype.propertyIsEnumerable,Ee=(e,t,n)=>t in e?bn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t)=>{for(var n in t||(t={}))gn.call(t,n)&&Ee(e,n,t[n]);if(Me)for(var n of Me(t))_n.call(t,n)&&Ee(e,n,t[n]);return e},Sn=(e,t)=>yn(e,wn(t));const{n:Qe}=te("ripple"),Oe=250;function $n(e){const{zIndex:t,position:n}=ve(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden",n==="static"&&(e.style.position="relative"),t==="auto"&&(e.style.zIndex="1")}function Le(e){return"touches"in e}function Cn(e,t){const{top:n,left:o}=G(e),{clientWidth:r,clientHeight:i}=e,a=Math.sqrt(r**2+i**2)/2,l=a*2,s=Le(t)?t.touches[0].clientX-o:r/2,c=Le(t)?t.touches[0].clientY-n:i/2,u=(r-a*2)/2,v=(i-a*2)/2,h=s-a,d=c-a;return{x:h,y:d,centerX:u,centerY:v,size:l}}function be(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker||!Ve.enableRipple)return;const n=()=>{t.tasker=null;const{x:o,y:r,centerX:i,centerY:a,size:l}=Cn(this,e),s=document.createElement("div");s.classList.add(Qe()),s.style.opacity="0",s.style.transform=`translate(${o}px, ${r}px) scale3d(.3, .3, .3)`,s.style.width=`${l}px`,s.style.height=`${l}px`,t.color&&(s.style.backgroundColor=t.color),s.dataset.createdAt=String(performance.now()),$n(this),this.appendChild(s),window.setTimeout(()=>{s.style.transform=`translate(${i}px, ${a}px) scale3d(1, 1, 1)`,s.style.opacity=".25"},20)};t.tasker=window.setTimeout(n,30)}function J(){const e=this._ripple,t=()=>{const n=this.querySelectorAll(`.${Qe()}`);if(!n.length)return;const o=n[n.length-1],r=Oe-performance.now()+Number(o.dataset.createdAt);window.setTimeout(()=>{o.style.opacity="0",window.setTimeout(()=>{var i;return(i=o.parentNode)==null?void 0:i.removeChild(o)},Oe)},r)};e.tasker?window.setTimeout(t,30):t()}function et(){if(!Ht()||!Ve.enableRipple)return;const e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}let Q=!1;function Tn(e){Q||!(e.key===" "||e.key==="Enter")||(be.call(this,e),Q=!0)}function Ne(){Q&&(J.call(this),Q=!1)}function Pn(e,t){var n;e._ripple=Sn(Je({tasker:null},(n=t.value)!=null?n:{}),{removeRipple:J.bind(e)}),e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("touchmove",et,{passive:!0}),e.addEventListener("dragstart",J,{passive:!0}),e.addEventListener("keydown",Tn),e.addEventListener("keyup",Ne),e.addEventListener("blur",Ne),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0}),document.addEventListener("dragend",e._ripple.removeRipple,{passive:!0})}function kn(e){e.removeEventListener("touchstart",be),e.removeEventListener("touchmove",et),e.removeEventListener("dragstart",J),!(!e._ripple||!e._ripple.removeRipple)&&(document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple),document.removeEventListener("dragend",e._ripple.removeRipple))}function Mn(e,t){var n,o,r,i,a,l;const s={color:(n=t.value)==null?void 0:n.color,disabled:(o=t.value)==null?void 0:o.disabled};(s.color!==((r=e._ripple)==null?void 0:r.color)||s.disabled!==((i=e._ripple)==null?void 0:i.disabled))&&(e._ripple=Je({tasker:s.disabled?null:(a=e._ripple)==null?void 0:a.tasker,removeRipple:(l=e._ripple)==null?void 0:l.removeRipple},s))}const En={mounted:Pn,unmounted:kn,updated:Mn,install(e){e.directive("ripple",this)}};var On=En;function Ln(e,t){throw Error(`Varlet [${e}]: ${t}`)}function Nn(e){let t=e;for(;t&&!(!t.parentNode||(t=t.parentNode,t===document.body||t===document.documentElement));){const n=/(scroll|auto)/,{overflowY:o,overflow:r}=ve(t);if(n.test(o)||n.test(r))return t}return window}function zn(){const{width:e,height:t}=G(window);return{vw:e,vh:t,vMin:Math.min(e,t),vMax:Math.max(e,t)}}const Bn=e=>M(e)&&e.endsWith("rem"),Wn=e=>M(e)&&e.endsWith("px")||pe(e),An=e=>M(e)&&e.endsWith("vw"),In=e=>M(e)&&e.endsWith("vh"),Rn=e=>M(e)&&e.endsWith("vmin"),Dn=e=>M(e)&&e.endsWith("vmax"),xn=e=>{if(He(e))return Number(e);if(Wn(e))return+e.replace("px","");if(!ee())return 0;const{vw:t,vh:n,vMin:o,vMax:r}=zn();if(An(e))return+e.replace("vw","")*t/100;if(In(e))return+e.replace("vh","")*n/100;if(Rn(e))return+e.replace("vmin","")*o/100;if(Dn(e))return+e.replace("vmax","")*r/100;if(Bn(e)){const i=+e.replace("rem",""),a=ve(document.documentElement).fontSize;return i*parseFloat(a)}return M(e)?Ye(e):0},Fn=e=>{if(e!=null)return He(e)?`${e}px`:String(e)};function ze(e,{top:t=0,left:n=0,duration:o=300,animation:r}){const i=Date.now(),a=Xt(e),l=Kt(e);return new Promise(s=>{const c=()=>{const u=(Date.now()-i)/o;if(u<1){const v=a+(t-a)*r(u),h=l+(n-l)*r(u);e.scrollTo(h,v),requestAnimationFrame(c)}else e.scrollTo(n,t),s()};requestAnimationFrame(c)})}const Be=e=>e,U={offsetTop:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:10},cssMode:Boolean,disabled:Boolean,onScroll:H()};var We=(e,t,n)=>new Promise((o,r)=>{var i=s=>{try{l(n.next(s))}catch(c){r(c)}},a=s=>{try{l(n.throw(s))}catch(c){r(c)}},l=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);l((n=n.apply(e,t)).next())});const{name:jn,n:Vn,classes:Hn}=te("sticky");function Un(e,t){return g(),$("div",{class:k(e.classes(e.n(),[e.enableCSSMode,e.n("--css-mode")])),ref:"stickyEl",style:Y({zIndex:e.toNumber(e.zIndex),top:e.enableCSSMode?`${e.offsetTop}px`:void 0,width:e.enableFixedMode?e.fixedWidth:void 0,height:e.enableFixedMode?e.fixedHeight:void 0})},[S("div",{class:k(e.n("wrapper")),ref:"wrapperEl",style:Y({zIndex:e.toNumber(e.zIndex),position:e.enableFixedMode?"fixed":void 0,width:e.enableFixedMode?e.fixedWrapperWidth:void 0,height:e.enableFixedMode?e.fixedWrapperHeight:void 0,left:e.enableFixedMode?e.fixedLeft:void 0,top:e.enableFixedMode?e.fixedTop:void 0})},[W(e.$slots,"default")],6)],6)}const tt=fe({name:jn,props:U,setup(e){const t=w(null),n=w(null),o=w(!1),r=w("0px"),i=w("0px"),a=w("auto"),l=w("auto"),s=w("auto"),c=w("auto"),u=_(()=>!e.disabled&&e.cssMode),v=_(()=>!e.disabled&&!e.cssMode&&o.value),h=_(()=>xn(e.offsetTop));let d;q(()=>e.disabled,L),Ge(()=>We(this,null,function*(){yield qe(),f(),y()})),on(A),Ze(L),ce(()=>window,"scroll",y);function m(){const{cssMode:C,disabled:I}=e;if(I)return;let N=0;if(d&&d!==window){const{top:p}=G(d);N=p}const z=n.value,B=t.value,{top:ne,left:E}=G(B),X=ne-N;return X<=h.value?(C||(a.value=`${B.offsetWidth}px`,l.value=`${B.offsetHeight}px`,r.value=`${N+h.value}px`,i.value=`${E}px`,s.value=`${z.offsetWidth}px`,c.value=`${z.offsetHeight}px`,o.value=!0),{offsetTop:h.value,isFixed:!0}):(o.value=!1,{offsetTop:X,isFixed:!1})}function f(){d=Nn(t.value),d!==window&&d.addEventListener("scroll",y)}function y(){const C=m();C&&x(e.onScroll,C.offsetTop,C.isFixed)}function A(){!d||d===window||d.removeEventListener("scroll",y)}function L(){return We(this,null,function*(){o.value=!1,yield Yt(),m()})}return{stickyEl:t,wrapperEl:n,isFixed:o,offsetTop:h,fixedTop:r,fixedLeft:i,fixedWidth:a,fixedHeight:l,fixedWrapperWidth:s,fixedWrapperHeight:c,enableCSSMode:u,enableFixedMode:v,n:Vn,classes:Hn,resize:L,toNumber:Ye}}});tt.render=Un;var ye=tt;he(ye);me(ye,U);var qn=ye;const nt={name:[String,Number],disabled:Boolean,ripple:{type:Boolean,default:!0},onClick:H()},ot=Symbol("TABS_BIND_TAB_KEY");function Yn(){const{childProviders:e,bindChildren:t,length:n}=ln(ot);return{length:n,tabList:e,bindTabList:t}}function Xn(){const{parentProvider:e,bindParent:t,index:n}=sn(ot);return t||Ln("Tab","<var-tab/> must in <var-tabs/>"),{index:n,tabs:e,bindTabs:t}}const{name:Kn,n:K,classes:Gn}=te("tab");function Zn(e,t){const n=yt("ripple");return Fe((g(),$("div",{class:k(e.classes(e.n(),e.n("$--box"),e.computeColorClass(),e.n(`--${e.itemDirection}`))),ref:"tabEl",style:Y({color:e.computeColorStyle()}),onClick:t[0]||(t[0]=(...o)=>e.handleClick&&e.handleClick(...o))},[W(e.$slots,"default")],6)),[[n,{disabled:e.disabled||!e.ripple}]])}const rt=fe({name:Kn,directives:{Ripple:On},props:nt,setup(e){const t=w(null),n=_(()=>t.value),o=_(()=>e.name),r=_(()=>e.disabled),{index:i,tabs:a,bindTabs:l}=Xn(),{onTabClick:s,active:c,activeColor:u,inactiveColor:v,disabledColor:h,itemDirection:d,resize:m}=a,f={name:o,index:i,disabled:r,element:n};l(f),q(()=>[e.name,e.disabled],m);function y(){return e.name!=null?c.value===e.name:c.value===(i==null?void 0:i.value)}function A(){return e.disabled?h.value:y()?u.value:v.value}function L(){return e.disabled?K("$-tab--disabled"):y()?K("$-tab--active"):K("$-tab--inactive")}function C(I){const{disabled:N,name:z,onClick:B}=e;N||(x(B,z??i.value,I),s(f))}return{tabEl:t,active:c,activeColor:u,inactiveColor:v,itemDirection:d,n:K,classes:Gn,computeColorStyle:A,computeColorClass:L,handleClick:C}}});rt.render=Zn;var we=rt;he(we);me(we,nt);var Jn=we;const it={active:{type:[String,Number],default:0},layoutDirection:{type:String,default:"horizontal"},itemDirection:{type:String,default:"horizontal"},fixedBottom:Boolean,activeColor:String,inactiveColor:String,disabledColor:String,color:String,indicatorColor:String,indicatorSize:[String,Number],elevation:{type:[Boolean,String,Number],default:!1},scrollable:{type:String,default:"auto"},indicatorPosition:{type:String,default:"normal"},safeArea:Boolean,sticky:Boolean,stickyCssMode:se(U,"cssMode"),stickyZIndex:se(U,"zIndex"),offsetTop:se(U,"offsetTop"),onClick:H(),onChange:H(),"onUpdate:active":H()};var Ae=(e,t,n)=>new Promise((o,r)=>{var i=s=>{try{l(n.next(s))}catch(c){r(c)}},a=s=>{try{l(n.throw(s))}catch(c){r(c)}},l=s=>s.done?o(s.value):Promise.resolve(s.value).then(i,a);l((n=n.apply(e,t)).next())});const{name:Qn,n:eo,classes:to}=te("tabs");function no(e,t){return g(),V(gt(e.sticky?e.n("$-sticky"):e.Transition),{ref:e.sticky?"stickyComponent":void 0,"css-mode":e.sticky?e.stickyCssMode:void 0,"offset-top":e.sticky?e.offsetTop:void 0,"z-index":e.sticky?e.stickyZIndex:void 0},{default:D(()=>[S("div",wt({class:e.classes(e.n(),e.n("$--box"),e.n(`--item-${e.itemDirection}`),e.n(`--layout-${e.layoutDirection}-padding`),e.formatElevation(e.elevation,4),[e.fixedBottom,e.n("--fixed-bottom")],[e.safeArea,e.n("--safe-area")]),style:{background:e.color}},e.$attrs),[S("div",{ref:"scrollerEl",class:k(e.classes(e.n("tab-wrap"),[e.localScrollable,e.n(`--layout-${e.layoutDirection}-scrollable`)],e.n(`--layout-${e.layoutDirection}`)))},[W(e.$slots,"default"),S("div",{class:k(e.classes(e.n("indicator"),e.n(`--layout-${e.layoutDirection}${e.indicatorPosition}-indicator`))),style:Y({width:e.layoutDirection==="horizontal"?e.indicatorWidth:e.toSizeUnit(e.indicatorSize),height:e.layoutDirection==="horizontal"?e.toSizeUnit(e.indicatorSize):e.indicatorHeight,transform:e.layoutDirection==="horizontal"?`translateX(${e.indicatorX})`:`translateY(${e.indicatorY})`})},[S("div",{class:k(e.classes(e.n("indicator-inner"),e.n(`--layout-${e.layoutDirection}-indicator-inner`))),style:Y({background:e.indicatorColor||e.activeColor})},null,6)],6)],2)],16)]),_:3},8,["css-mode","offset-top","z-index"])}const st=fe({name:Qn,components:{VarSticky:qn},inheritAttrs:!1,props:it,setup(e){const t=w("0px"),n=w("0px"),o=w("0px"),r=w("0px"),i=w(!1),a=w(null),l=_(()=>e.active),s=_(()=>e.activeColor),c=_(()=>e.inactiveColor),u=_(()=>e.disabledColor),v=_(()=>e.itemDirection),h=w(null),d=_(()=>e.indicatorPosition==="reverse"?"-reverse":""),{tabList:m,bindTabList:f,length:y}=Yn();f({active:l,activeColor:s,inactiveColor:c,disabledColor:u,itemDirection:v,resize:E,onTabClick:L}),q(()=>y.value,()=>Ae(this,null,function*(){yield qe(),E()})),q(()=>[e.active,e.scrollable],E),xe(E),Ze(E);function L(p){var b;const T=(b=p.name.value)!=null?b:p.index.value,{active:F,onChange:at,onClick:lt}=e;x(e["onUpdate:active"],T),x(lt,T),T!==F&&x(at,T)}function C(){return m.find(({name:p})=>e.active===p.value)}function I(p){return m.find(({index:b})=>(p??e.active)===b.value)}function N(){if(y.value===0)return;const{active:p}=e;if(pe(p)){const b=Gt(p,0,y.value-1);return x(e["onUpdate:active"],b),I(b)}}function z(){i.value=e.scrollable==="always"||m.length>=5}function B({element:p}){const b=p.value;b&&(e.layoutDirection==="horizontal"?(t.value=`${b.offsetWidth}px`,o.value=`${b.offsetLeft}px`):(n.value=`${b.offsetHeight}px`,r.value=`${b.offsetTop}px`))}function ne({element:p}){if(!i.value)return;const b=a.value,T=p.value;if(e.layoutDirection==="horizontal"){const F=T.offsetLeft+T.offsetWidth/2-b.offsetWidth/2;ze(b,{left:F,animation:Be})}else{const F=T.offsetTop+T.offsetHeight/2-b.offsetHeight/2;ze(b,{top:F,animation:Be})}}function E(){const p=C()||I()||N();!p||p.disabled.value||(z(),B(p),ne(p))}function X(){return Ae(this,null,function*(){e.sticky&&h.value&&(yield h.value.resize())})}return{stickyComponent:h,indicatorWidth:t,indicatorHeight:n,indicatorX:o,indicatorY:r,indicatorPosition:d,localScrollable:i,scrollerEl:a,Transition:_t,toSizeUnit:Fn,n:eo,classes:to,resize:E,resizeSticky:X,formatElevation:mn}}});st.render=no;var ge=st;he(ge);me(ge,it);var oo=ge;const ro={setup(){const{strings:e}=$t();return{postEditorStore:ct(),rootStore:ut(),composableStrings:e}},emits:["changed"],components:{BaseButton:Mt,SvgCaret:Et,SvgCircleCheck:Ot,SvgCircleInformation:Lt,SvgEllipse:Pt,TransitionSlide:Nt,VarTab:Jn,VarTabs:oo},mixins:[kt,Ct],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:dt(this.composableStrings,{saveChanges:this.$t.__("Save Changes",this.$td)})}},computed:{activeTab(){var e;return this.active?this.active:this.$route&&this.$route.name?this.$route.name:(e=this.tabs[0])==null?void 0:e.slug},filteredTabs(){return this.tabs.filter(e=>e.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}},methods:{maybeChangeTab(e){if(this.active){this.$emit("changed",e);return}const t=this.tabs.find(n=>n.slug===e);t&&this.$router.push(t.url)},getActiveTabName(){const e=this.tabs.find(t=>t.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return e?e.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let e=0;this.calculateWidth=!0,this.$nextTick(()=>{e=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let t=0;const n=this.$refs["tabs-button"];if(n){const o=n.querySelector(".aioseo-button");t=o?o.scrollWidth:0}if(e+t>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})},createRipple(e){const t=e.currentTarget,n=document.createElement("span"),o=Math.max(t.clientWidth,t.clientHeight),r=o/2,i=t.getBoundingClientRect();n.style.width=n.style.height=`${o}px`,n.style.left=`${e.clientX-(i.left+r)}px`,n.style.top=`${e.clientY-(i.top+r)}px`,n.classList.add("ripple");const a=t.getElementsByClassName("ripple")[0];a&&a.remove(),t.appendChild(n)}},beforeMount(){window.addEventListener("resize",this.maybeShowMobileMenu)},async mounted(){this.$nextTick(()=>{this.maybeShowMobileMenu();const e=this.$refs["aioseo-tabs"],t=e.querySelector(".var-tab--active"),n=e.querySelector(".var-tabs__indicator");if(!t||!n)return;setTimeout(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)},300),new MutationObserver(()=>{n.style.width==="0px"&&(n.style.width=`${t.offsetWidth}px`,n.style.transform=`translateX(${t.offsetLeft}px)`)}).observe(n,{attributes:!0});const r=e.querySelectorAll(".var-tab");r.length&&r.forEach(i=>{i.addEventListener("click",this.createRipple)})})},beforeUnmount(){window.removeEventListener("resize",this.maybeShowMobileMenu)}},io={class:"tabs-scroller",ref:"tabs-scroller"},so={class:"tab-label"},ao=["textContent"],lo={key:1,class:"warning"},co={key:0,class:"aioseo-mobile-tabs"},uo=S("span",{class:"tab-indicator"},null,-1),fo={class:"tab-links"},po=["onClick"],vo={key:1,class:"button-right",ref:"tabs-button"},ho={class:"tabs-extra"};function mo(e,t,n,o,r,i){const a=P("svg-ellipse"),l=P("svg-circle-check"),s=P("svg-circle-information"),c=P("var-tab"),u=P("var-tabs"),v=P("svg-caret"),h=P("router-link"),d=P("transition-slide"),m=P("base-button");return g(),$("div",{class:k(["aioseo-tabs",{internal:n.internal,skinny:n.skinnyTabs}]),ref:"aioseo-tabs"},[Fe(S("div",io,[j(u,{active:i.activeTab,onClick:i.maybeChangeTab,ref:"var-tabs"},{default:D(()=>[(g(!0),$(oe,null,re(n.tabs,(f,y)=>(g(),V(c,{name:f.slug,key:y},{default:D(()=>[W(e.$slots,"var-tab",{tab:f},()=>[W(e.$slots,"var-tab-icon",{tab:f}),S("span",so,R(f.name),1),f.errorCount>=0?(g(),$("span",{key:0,class:k(["tab-score",e.getErrorClass(o.postEditorStore.currentPost.page_analysis.analysis[f.slug].errors)])},[0<o.postEditorStore.currentPost.page_analysis.analysis[f.slug].errors?(g(),V(a,{key:0,width:"8"})):O("",!0),o.postEditorStore.currentPost.page_analysis.analysis[f.slug].errors===0?(g(),V(l,{key:1,width:"12"})):O("",!0),S("span",{textContent:R(e.getErrorDisplay(o.postEditorStore.currentPost.page_analysis.analysis[f.slug].errors))},null,8,ao)],2)):O("",!0),f.warning&&e.$root._data.screenContext!=="sidebar"?(g(),$("span",lo,[j(s,{width:"15",height:"15"})])):O("",!0)])]),_:2},1032,["name"]))),128))]),_:3},8,["active","onClick"])],512),[[St,!r.showMobileMenu||r.calculateWidth]]),r.showMobileMenu?(g(),$("div",co,[S("div",{class:"active-tab",onClick:t[1]||(t[1]=f=>r.showMobileTabs=!r.showMobileTabs)},[S("div",null,[ie(R(i.getActiveTabName())+" ",1),j(v,{onClick:t[0]||(t[0]=_e(f=>r.showMobileTabs=!r.showMobileTabs,["stop"])),class:k({rotated:!r.showMobileTabs})},null,8,["class"]),uo])]),j(d,{active:r.showMobileTabs,class:"tab-dropdown"},{default:D(()=>[S("div",fo,[n.active?O("",!0):(g(!0),$(oe,{key:0},re(i.filteredTabs,(f,y)=>(g(),V(h,{key:y,to:f.url,onClick:t[2]||(t[2]=A=>r.showMobileTabs=!1)},{default:D(()=>[ie(R(f.name),1)]),_:2},1032,["to"]))),128)),n.active?(g(!0),$(oe,{key:1},re(i.filteredTabs,(f,y)=>(g(),$("a",{href:"#",key:y,onClick:_e(A=>e.$emit("changed",f.slug)&&(r.showMobileTabs=!1),["prevent"])},R(f.name),9,po))),128)):O("",!0)])]),_:1},8,["active"])])):O("",!0),n.showSaveButton?(g(),$("div",vo,[W(e.$slots,"button",{},()=>[j(m,{type:"blue",size:"medium",loading:o.rootStore.loading,onClick:e.processSaveChanges},{default:D(()=>[ie(R(r.strings.saveChanges),1)]),_:1},8,["loading","onClick"])])],512)):O("",!0),S("div",ho,[W(e.$slots,"extra")])],2)}const Po=Tt(ro,[["render",mo]]);export{Po as C};
