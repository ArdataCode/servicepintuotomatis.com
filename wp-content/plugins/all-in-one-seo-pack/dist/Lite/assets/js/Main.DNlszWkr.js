import{J as p}from"./links.rndHrQjc.js";import{a as i}from"./addons.CFb2IwD4.js";import{R as m,a as u}from"./RequiresUpdate.jrH6wLJq.js";import{C as _}from"./Index.Dm8ivQTm.js";import{a as l}from"./Header.CZyFrCa6.js";import{o,c as s,x as d,C as f,m as g,l as h,v as x}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as n}from"./_plugin-vue_export-helper.BN1snXvA.js";import k from"./Overview.DQ9pVtto.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.BYd0a-KO.js";import"./upperFirst.cYf2npu2.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.CPCYjjV1.js";import"./RequiresUpdate.bc0F4XX5.js";import"./license.CFrwgEU2.js";import"./allowed.BiR9eKPM.js";/* empty css             */import"./params.B3T1WKlC.js";import"./Ellipse.BbMe4Rtx.js";import"./Caret.iRBf3wcH.js";import"./ScrollAndHighlight.DwveUXoo.js";import"./LogoGear.BF23BIEd.js";import"./Logo.DoVR4qom.js";import"./Support.B-t20u3s.js";import"./Tabs.DAwM7Jx9.js";import"./TruSeoScore.TjofuHRQ.js";import"./Information.CESrgQJV.js";import"./Slide.CRIn0kdn.js";import"./Url.CdiHqGVc.js";import"./Date.CjYsJ2CI.js";import"./constants.DpuIWwJ9.js";import"./Exclamation.DKtT8kuH.js";import"./Gear.aQH8e4fl.js";import"./AnimatedNumber.D3vhSMTe.js";import"./numbers.zAmItkHM.js";import"./index.BQgiQQKQ.js";import"./AddonConditions.Cik6Ks6F.js";import"./Index.XNbBlAFo.js";import"./Row.CzuhYwfs.js";import"./Blur.DNVDismY.js";import"./Card.DD8bdJAp.js";import"./Tooltip.Jp05nfCy.js";import"./InternalOutbound.C_4tKmQU.js";import"./DonutChartWithLegend.C8x48JXe.js";import"./SeoSiteScore.DqyXVZi0.js";import"./Row.DMGP3siA.js";import"./RequiredPlans.aEVPoUrs.js";const $={};function v(t,r){return o(),s("div")}const A=n($,[["render",v]]),b={};function S(t,r){return o(),s("div")}const y=n(b,[["render",S]]),C={};function R(t,r){return o(),s("div")}const T=n(C,[["render",R]]),w={};function L(t,r){return o(),s("div")}const P=n(w,[["render",L]]),B={setup(){return{linkAssistantStore:p()}},components:{CoreMain:_,CoreProcessingPopup:l,DomainsReport:A,LinksReport:y,Overview:k,PostReport:T,Settings:P},mixins:[m,u],data(){return{strings:{pageName:this.$t.__("Link Assistant",this.$td)}}},computed:{excludedTabs(){const t=(i.isActive("aioseo-link-assistant")?this.getExcludedUpdateTabs("aioseo-link-assistant"):this.getExcludedActivationTabs("aioseo-link-assistant"))||[];return t.push("post-report"),t}},mounted(){window.aioseoBus.$on("changes-saved",()=>{this.linkAssistantStore.getMenuData()}),this.$isPro&&this.linkAssistantStore.suggestionsScan.percent!==100&&i.isActive("aioseo-link-assistant")&&!i.requiresUpgrade("aioseo-link-assistant")&&i.hasMinimumVersion("aioseo-link-assistant")&&this.linkAssistantStore.pollSuggestionsScan()}},M={class:"aioseo-link-assistant"};function U(t,r,q,D,e,a){const c=d("core-main");return o(),s("div",M,[f(c,{"page-name":e.strings.pageName,"exclude-tabs":a.excludedTabs,showTabs:t.$route.name!=="post-report"},{default:g(()=>[(o(),h(x(t.$route.name)))]),_:1},8,["page-name","exclude-tabs","showTabs"])])}const Lt=n(B,[["render",U]]);export{Lt as default};
