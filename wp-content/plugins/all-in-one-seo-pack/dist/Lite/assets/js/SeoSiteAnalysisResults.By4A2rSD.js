import{T as B}from"./Tags.CClbM7yB.js";import{S as m}from"./links.rndHrQjc.js";import{C as R}from"./GoogleSearchPreview.DeMLqAU8.js";import{a as T,c as C,e as I}from"./Caret.iRBf3wcH.js";import{S as P}from"./Information.CESrgQJV.js";import{S as A}from"./Gear.aQH8e4fl.js";import{T as L}from"./Slide.CRIn0kdn.js";import{x as v,o as s,c as n,a as d,l as h,H as k,v as x,t as _,C as S,d as c,m as p,D as G,F as y,K as f}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as b}from"./_plugin-vue_export-helper.BN1snXvA.js";const H={components:{SvgCaret:T,SvgCircleCheck:C,SvgCircleClose:I,SvgCircleInformation:P,SvgGear:A,TransitionSlide:L},props:{test:{type:String,required:!0},result:{type:Object,required:!0},showInstructions:Boolean},data(){return{active:!1,loading:!1}},computed:{getIcon(){return this.result.status==="passed"?"svg-circle-check":this.result.status==="error"?"svg-circle-close":this.result.status==="warning"?"svg-gear":"svg-circle-information"},getTestTitle(){return m.personalize=this.showInstructions,m.head(this.test,this.result)},getBody(){return m.personalize=this.showInstructions,m.body(this.test,this.result)}}},O={class:"aioseo-seo-site-analysis-result"},j={class:"result-header"},E={class:"result-icon"},M={class:"result-content"},q={class:"result-body"},U={key:0,class:"result-code"},z=["innerHTML"],D={key:1,class:"result-code-alt"},V=["innerHTML"],F={key:3,class:"result-action"};function K(a,o,t,i,r,e){const w=v("svg-caret"),g=v("base-button"),u=v("transition-slide");return s(),n("div",O,[d("div",j,[d("div",E,[(s(),h(x(e.getIcon),{class:k(t.result.status)},null,8,["class"]))]),d("div",M,_(e.getTestTitle),1),t.showInstructions||e.getBody.code||e.getBody.codeAlt?(s(),n("div",{key:0,class:k(["result-toggle",{active:r.active}]),onClick:o[0]||(o[0]=l=>r.active=!r.active)},[S(w)],2)):c("",!0)]),t.showInstructions||e.getBody.code||e.getBody.codeAlt?(s(),h(u,{key:0,active:r.active},{default:p(()=>[d("div",q,[e.getBody.code?(s(),n("div",U,[d("pre",null,[d("code",{innerHTML:e.getBody.code},null,8,z)])])):c("",!0),e.getBody.codeAlt?(s(),n("div",D,[d("pre",null,[d("code",null,_(e.getBody.codeAlt),1)])])):c("",!0),e.getBody.message&&t.showInstructions?(s(),n("div",{key:2,class:"result-message",innerHTML:e.getBody.message},null,8,V)):c("",!0),e.getBody.buttonLink&&t.showInstructions?(s(),n("div",F,[S(g,{href:e.getBody.buttonLink,tag:"a",target:"_blank",type:"blue",size:"medium",loading:r.loading},{default:p(()=>[G(_(e.getBody.buttonText),1)]),_:1},8,["href","loading"])])):c("",!0)])]),_:1},8,["active"])):c("",!0)])}const N=b(H,[["render",K]]),J={components:{CoreGoogleSearchPreview:R,CoreSeoSiteAnalysisResult:N},mixins:[B],props:{section:{type:String,required:!0},allResults:{type:Object,required:!0},showGooglePreview:Boolean,showInstructions:Boolean},data(){return{searchPreviewHostname:"",searchPreviewUrl:"",strings:{basic:this.$t.__("Basic SEO",this.$td),advanced:this.$t.__("Advanced SEO",this.$td),performance:this.$t.__("Performance",this.$td),security:this.$t.__("Security",this.$td)}}},methods:{filterResults(a){const o={...a};if(Object.keys(o).forEach(i=>{const r=o[i];m.head(i,r)||["keywords","keywordsInTitleDescription","searchPreview","mobileSearchPreview","mobileSnapshot"].includes(i)&&delete o[i]}),this.section==="all-items")return o;const t={passed:"good-results",warning:"recommended-improvements",error:"critical"};return Object.keys(o).forEach(i=>{const r=o[i];t[r.status]!==this.section&&delete o[i]}),o},shouldShowGroup(a){return Object.keys(this.filterResults(this.allResults[a])).length}},mounted(){var t,i;if(!((i=(t=this.allResults)==null?void 0:t.advanced)!=null&&i.searchPreview))return;const a=document.createElement("div");a.innerHTML=this.allResults.advanced.searchPreview;const o=a.querySelector(".domain");if(o){const r=new URL(o.innerText);this.searchPreviewUrl=r.href,this.searchPreviewHostname=r.host}}},Q={class:"aioseo-seo-site-analysis-results"},W={key:1,class:"group-header"},X={key:2,class:"group-header"},Y={key:3,class:"group-header"},Z={key:4,class:"group-header"};function $(a,o,t,i,r,e){const w=v("core-google-search-preview"),g=v("core-seo-site-analysis-result");return s(),n("div",Q,[t.showGooglePreview&&t.section==="all-items"?(s(),h(w,{key:0,hostname:r.searchPreviewHostname,url:r.searchPreviewUrl,title:a.parseTags(t.allResults.basic.title.value),description:a.parseTags(t.allResults.basic.description.value)},null,8,["hostname","url","title","description"])):c("",!0),e.shouldShowGroup("basic")?(s(),n("div",W,_(r.strings.basic),1)):c("",!0),(s(!0),n(y,null,f(e.filterResults(t.allResults.basic),(u,l)=>(s(),h(g,{key:l,test:l,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128)),e.shouldShowGroup("advanced")?(s(),n("div",X,_(r.strings.advanced),1)):c("",!0),(s(!0),n(y,null,f(e.filterResults(t.allResults.advanced),(u,l)=>(s(),h(g,{key:l,test:l,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128)),e.shouldShowGroup("performance")?(s(),n("div",Y,_(r.strings.performance),1)):c("",!0),(s(!0),n(y,null,f(e.filterResults(t.allResults.performance),(u,l)=>(s(),h(g,{key:l,test:l,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128)),e.shouldShowGroup("security")?(s(),n("div",Z,_(r.strings.security),1)):c("",!0),(s(!0),n(y,null,f(e.filterResults(t.allResults.security),(u,l)=>(s(),h(g,{key:l,test:l,result:u,"show-instructions":t.showInstructions},null,8,["test","result","show-instructions"]))),128))])}const ae=b(J,[["render",$]]);export{ae as C};
