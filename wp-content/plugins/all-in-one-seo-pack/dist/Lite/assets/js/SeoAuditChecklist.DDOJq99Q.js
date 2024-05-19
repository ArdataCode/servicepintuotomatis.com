import{C as g,n as O,a as C,u as R,f as L,e as E}from"./links.CKSg78-h.js";import{C as I}from"./Card.C6Yzm1Gr.js";import{C as M}from"./Tabs.Cl9YKSoz.js";import{C as B}from"./SeoSiteAnalysisResults.DZSlcLAT.js";import{p as w}from"./popup.Dv7cb5WI.js";import"./default-i18n.BtxsUzQk.js";import{u as D,S as G}from"./SeoSiteScore.9LP7E1ph.js";import{y as s,o as a,c as u,D as n,d,a as o,t as l,l as y,m as i,H,E as k,I as x}from"./vue.esm-bundler.DzelZkHk.js";import{_ as f}from"./_plugin-vue_export-helper.BN1snXvA.js";import{C as N}from"./Blur.B433XVqJ.js";import{C as P}from"./Index.S3yt8Lmc.js";import{S as U}from"./Book.iWCUYtMr.js";import{C as W}from"./Tooltip.DcUmvaHX.js";import{S as V}from"./Refresh.BTBdxJdv.js";import{a as Y}from"./index.DX4OhBfI.js";import"./isArrayLikeObject.CkjpbQo7.js";import"./Caret.Cuasz9Up.js";import"./Slide.BfXXFx9A.js";import"./TruSeoScore.-L7x872T.js";import"./Ellipse.HvxcRElJ.js";import"./Information.Dx9dnFtu.js";import"./Tags.BcJqtOJO.js";import"./tags.BOsOOXAU.js";import"./postSlug.D1i5fFFO.js";import"./metabox.BW1QyeRU.js";import"./cleanForSlug.C_GG_Tvc.js";import"./toString.EVG10Qqs.js";import"./_baseTrim.BYZhh0MR.js";import"./_stringToArray.DnK4tKcY.js";import"./get.CmvQfcJ_.js";import"./GoogleSearchPreview.C5aCQaFX.js";import"./strings.gPxlDykU.js";import"./isString.Dmb68Xbt.js";import"./constants.DARe-ccJ.js";import"./Gear.CzHv0eD2.js";import"./params.B3T1WKlC.js";const q={setup(){return{analyzerStore:g()}},components:{CoreSiteScore:P,SvgBook:U},props:{score:Number,loading:Boolean,description:String,summary:{type:Object,default(){return{}}}},data(){return{strings:{yourOverallSiteScore:this.$t.__("Your Overall Site Score",this.$td),goodResult:this.$t.sprintf(this.$t.__("A very good score is between %1$s%3$d and %4$d%2$s.",this.$td),"<strong>","</strong>",50,75),forBestResults:this.$t.sprintf(this.$t.__("For best results, you should strive for %1$s%3$d and above%2$s.",this.$td),"<strong>","</strong>",70),anErrorOccurred:this.$t.__("An error occurred while analyzing your site.",this.$td),criticalIssues:this.$t.__("Important Issues",this.$td),warnings:this.$t.__("Warnings",this.$td),recommendedImprovements:this.$t.__("Recommended Improvements",this.$td),goodResults:this.$t.__("Good Results",this.$td),completeSiteAuditChecklist:this.$t.__("Complete Site Audit Checklist",this.$td),readUltimateSeoGuide:this.$t.__("Read the Ultimate WordPress SEO Guide",this.$td)}}},computed:{getError(){switch(this.analyzerStore.analyzeError){case"invalid-url":return this.$t.__("The URL provided is invalid.",this.$td);case"missing-content":return this.$t.sprintf("%1$s %2$s",this.$t.__("We were unable to parse the content for this site.",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzerIssues",!0));case"invalid-token":return this.$t.sprintf(this.$t.__("Your site is not connected. Please connect to %1$s, then try again.",this.$td),"AIOSEO")}return this.analyzerStore.analyzeError}}},j={class:"aioseo-site-score-analyze"},F={key:0,class:"aioseo-seo-site-score-score"},K={key:1,class:"aioseo-seo-site-score-description"},Q=["innerHTML"],J=["innerHTML"],X={class:"d-flex"},Z=["href"],ee={key:2,class:"analyze-errors"},te=["innerHTML"];function se(e,p,m,t,r,c){const h=s("core-site-score"),_=s("svg-book");return a(),u("div",j,[t.analyzerStore.analyzeError?d("",!0):(a(),u("div",F,[n(h,{loading:m.loading,score:m.score,description:m.description,strokeWidth:1.75},null,8,["loading","score","description"])])),t.analyzerStore.analyzeError?d("",!0):(a(),u("div",K,[o("h2",null,l(r.strings.yourOverallSiteScore),1),o("div",{innerHTML:r.strings.goodResult},null,8,Q),o("div",{innerHTML:r.strings.forBestResults},null,8,J),o("div",X,[n(_),o("a",{href:e.$links.getDocUrl("ultimateGuide"),target:"_blank"},l(r.strings.readUltimateSeoGuide),9,Z)])])),t.analyzerStore.analyzeError?(a(),u("div",ee,[o("h3",null,l(r.strings.anErrorOccurred),1),o("span",{innerHTML:c.getError},null,8,te)])):d("",!0)])}const oe=f(q,[["render",se]]),re={setup(){const{strings:e}=D();return{analyzerStore:g(),connectStore:O(),optionsStore:C(),rootStore:R(),strings:e}},components:{CoreBlur:N,CoreSiteScoreAnalyze:oe},mixins:[G],data(){return{score:0}},watch:{"optionsStore.internalOptions.internal.siteAnalysis.score"(e){this.score=e}},computed:{getSummary(){return{recommended:this.analyzerStore.recommendedCount(),critical:this.analyzerStore.criticalCount(),good:this.analyzerStore.goodCount()}}},methods:{openPopup(e){w(e,this.connectWithAioseo,600,630,!0,["token"],this.completedCallback,this.closedCallback)},completedCallback(e){return this.connectStore.saveConnectToken(e.token)},closedCallback(e){e&&this.analyzerStore.runSiteAnalyzer(),this.analyzerStore.analyzing=!0}},mounted(){!this.optionsStore.internalOptions.internal.siteAnalysis.score&&this.optionsStore.internalOptions.internal.siteAnalysis.connectToken&&(this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer()),this.score=this.optionsStore.internalOptions.internal.siteAnalysis.score}},ne={class:"aioseo-seo-site-score"},ie={key:1,class:"aioseo-seo-site-score-cta"};function ae(e,p,m,t,r,c){const h=s("core-site-score-analyze"),_=s("core-blur");return a(),u("div",ne,[t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?d("",!0):(a(),y(_,{key:0},{default:i(()=>[n(h,{score:85,description:e.description},null,8,["description"])]),_:1})),t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?d("",!0):(a(),u("div",ie,[o("a",{href:"#",onClick:p[0]||(p[0]=H(z=>c.openPopup(t.rootStore.aioseo.urls.connect),["prevent"]))},l(e.connectWithAioseo),1),k(" "+l(t.strings.toSeeYourSiteScore),1)])),t.optionsStore.internalOptions.internal.siteAnalysis.connectToken?(a(),y(h,{key:2,score:r.score,description:e.description,loading:e.analyzing,summary:c.getSummary},null,8,["score","description","loading","summary"])):d("",!0)])}const le=f(re,[["render",ae]]),ce={setup(){return{analyzerStore:g(),licenseStore:L(),optionsStore:C(),settingsStore:E()}},components:{CoreCard:I,CoreMainTabs:M,CoreSeoSiteAnalysisResults:B,CoreSeoSiteScoreAnalyze:le,CoreTooltip:W,SvgRefresh:V,SvgCircleQuestionMark:Y},data(){return{internalDebounce:!1,strings:{completeSeoChecklist:this.$t.__("Complete SEO Checklist",this.$td),refreshResults:this.$t.__("Refresh Results",this.$td),cardDescription:this.$t.__("These are the results our SEO Analzyer has generated after analyzing the homepage of your website.",this.$td)+" "+this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"seoAnalyzer",!0)}}},computed:{tabs(){const e=this.optionsStore.internalOptions.internal.siteAnalysis;return[{slug:"all-items",label:this.$t.__("All Items",this.$td),analyze:{classColor:"black",count:e.score?this.analyzerStore.allItemsCount():0}},{slug:"critical",label:this.$t.__("Important Issues",this.$td),analyze:{classColor:"red",count:e.score?this.analyzerStore.criticalCount():0}},{slug:"recommended-improvements",label:this.$t.__("Recommended Improvements",this.$td),analyze:{classColor:"blue",count:e.score?this.analyzerStore.recommendedCount():0}},{slug:"good-results",label:this.$t.__("Good Results",this.$td),analyze:{classColor:"green",count:e.score?this.analyzerStore.goodCount():0}}]}},methods:{processChangeTab(e){this.internalDebounce||(this.internalDebounce=!0,this.settingsStore.changeTab({slug:"seoAuditChecklist",value:e}),setTimeout(()=>{this.internalDebounce=!1},50))},refresh(){this.analyzerStore.analyzing=!0,this.analyzerStore.runSiteAnalyzer({refresh:!0})}}},ue={class:"aioseo-seo-audit-checklist"},de=["innerHTML"],he={class:"label"};function _e(e,p,m,t,r,c){const h=s("core-seo-site-score-analyze"),_=s("core-card"),z=s("svg-circle-question-mark"),$=s("core-tooltip"),b=s("svg-refresh"),v=s("base-button"),A=s("core-main-tabs"),T=s("core-seo-site-analysis-results");return a(),u("div",ue,[n(_,{slug:"connectOrScore","hide-header":"","no-slide":"",toggles:!1},{default:i(()=>[n(h)]),_:1}),(e.$isPro&&t.licenseStore.licenseKey||t.optionsStore.internalOptions.internal.siteAnalysis.connectToken)&&t.optionsStore.internalOptions.internal.siteAnalysis.score?(a(),y(_,{key:0,slug:"completeSeoChecklist","no-slide":"",toggles:!1},{header:i(()=>[o("span",null,l(r.strings.completeSeoChecklist),1),n($,null,{tooltip:i(()=>[o("span",{innerHTML:r.strings.cardDescription},null,8,de)]),default:i(()=>[n(z)]),_:1})]),"header-extra":i(()=>[n(v,{class:"refresh-results",type:"gray",size:"small",onClick:c.refresh,loading:t.analyzerStore.analyzing},{default:i(()=>[n(b),k(" "+l(r.strings.refreshResults),1)]),_:1},8,["onClick","loading"])]),tabs:i(()=>[n(A,{tabs:c.tabs,showSaveButton:!1,active:t.settingsStore.settings.internalTabs.seoAuditChecklist,internal:"",onChanged:c.processChangeTab,"skinny-tabs":""},{"var-tab":i(({tab:S})=>[o("span",{class:x(["round",S.analyze.classColor])},l(S.analyze.count||0),3),o("span",he,l(S.label),1)]),_:1},8,["tabs","active","onChanged"])]),default:i(()=>[n(T,{section:t.settingsStore.settings.internalTabs.seoAuditChecklist,"all-results":t.analyzerStore.getSiteAnalysisResults,"show-instructions":""},null,8,["section","all-results"])]),_:1})):d("",!0)])}const Qe=f(ce,[["render",_e]]);export{Qe as default};
