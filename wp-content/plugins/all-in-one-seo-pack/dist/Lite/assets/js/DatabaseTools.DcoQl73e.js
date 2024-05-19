import{u as v,v as R,a as V,f as M}from"./links.rndHrQjc.js";import{l as D}from"./license.CFrwgEU2.js";import{N as $}from"./Network.CvFzG_zp.js";import{C as x}from"./Card.DD8bdJAp.js";import{T as O}from"./ToolsSettings.C3R1ZWot.js";import{B as I}from"./Checkbox.D2dfpbIi.js";import{C as H,S as E}from"./Caret.iRBf3wcH.js";import{C as q}from"./Index.B2NJt47b.js";import{C as z}from"./SettingsRow.DQldd-1Z.js";import{G as F,a as P}from"./Row.CzuhYwfs.js";import{x as n,o as a,c as m,C as i,m as o,l as p,D as d,t as l,d as g,a as u,F as j,K as G,G as Y,H as C}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as y}from"./_plugin-vue_export-helper.BN1snXvA.js";import{S as K}from"./Checkmark.pCOnqh_g.js";import{C as J}from"./Blur.DNVDismY.js";import{C as Q}from"./Index.XNbBlAFo.js";import{R as W}from"./RequiredPlans.aEVPoUrs.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.BYd0a-KO.js";import"./upperFirst.cYf2npu2.js";import"./_stringToArray.DnK4tKcY.js";import"./toString.CPCYjjV1.js";import"./Tooltip.Jp05nfCy.js";import"./index.BQgiQQKQ.js";import"./Slide.CRIn0kdn.js";import"./addons.CFb2IwD4.js";import"./allowed.BiR9eKPM.js";import"./constants.DpuIWwJ9.js";const X={setup(){return{rootStore:v(),toolsStore:R()}},components:{BaseCheckbox:I,CoreAlert:H,CoreModal:q,CoreSettingsRow:z,GridColumn:F,GridRow:P,SvgClose:E},mixins:[O],props:{site:Object},data(){return{showSuccess:!1,showModal:!1,loading:!1,options:{},strings:{selectSettings:this.$t.__("Select Settings",this.$td),selectSettingsToReset:this.$t.__("Select settings that you would like to reset:",this.$td),resetSelectedSettings:this.$t.__("Reset Selected Settings to Default",this.$td),resetSuccess:this.$t.__("Your settings have been reset successfully!",this.$td),areYouSureReset:this.$t.__("Are you sure you want to reset the selected settings to default?",this.$td),actionCannotBeUndone:this.$t.sprintf(this.$t.__("This action cannot be undone. Before taking this action, we recommend that you make a %1$sfull website backup first%2$s.",this.$td),"<strong>","</strong>"),yesIHaveBackup:this.$t.__("Yes, I have a backup and want to reset the settings",this.$td),noBackup:this.$t.__("No, I need to make a backup",this.$td),allSettings:this.$t.sprintf(this.$t.__("All %1$s Settings",this.$td),"AIOSEO")}}},computed:{canReset(){if(this.rootStore.aioseo.data.isNetworkAdmin&&!this.site)return!1;const s=[];return Object.keys(this.options).forEach(t=>{s.push(this.options[t])}),!s.some(t=>t)}},methods:{noMakeBackup(){this.rootStore.navigate.scroll="aioseo-backup-settings",this.rootStore.navigate.highlight="aioseo-backup-settings",this.$router.push({name:"import-export"})},processResetSettings(){const s=[];this.options.all?this.toolsSettings.filter(t=>t.value!=="all").forEach(t=>{s.push(t.value)}):Object.keys(this.options).forEach(t=>{this.options[t]&&s.push(t)}),this.loading=!0,this.toolsStore.resetSettings({payload:s,siteId:this.site?this.site.blog_id:null}).then(()=>{this.showModal=!1,this.loading=!1,this.showSuccess=!0,this.options={},setTimeout(()=>{this.showSuccess=!1},5e3)})}}},Z={class:"aioseo-core-reset-settings"},ee={class:"reset-settings"},te=u("br",null,null,-1),se=u("br",null,null,-1),oe={class:"aioseo-modal-body"},ie=["innerHTML"];function re(s,t,w,c,e,r){const k=n("core-alert"),_=n("base-checkbox"),L=n("grid-column"),B=n("grid-row"),b=n("base-button"),f=n("core-settings-row"),S=n("svg-close"),U=n("core-modal");return a(),m("div",Z,[i(f,{name:e.strings.selectSettings,class:"no-border"},{content:o(()=>[e.showSuccess?(a(),p(k,{key:0,class:"reset-success",type:"green"},{default:o(()=>[d(l(e.strings.resetSuccess),1)]),_:1})):g("",!0),u("div",ee,[d(l(e.strings.selectSettingsToReset)+" ",1),te,se,i(B,{class:"settings"},{default:o(()=>[i(L,null,{default:o(()=>[i(_,{size:"medium",modelValue:e.options.all,"onUpdate:modelValue":t[0]||(t[0]=h=>e.options.all=h),disabled:c.rootStore.aioseo.data.isNetworkAdmin&&!w.site},{default:o(()=>[d(l(e.strings.allSettings),1)]),_:1},8,["modelValue","disabled"])]),_:1}),(a(!0),m(j,null,G(s.toolsSettings,(h,A)=>(a(),p(L,{key:A,xl:"3",md:"4",sm:"6"},{default:o(()=>[e.options.all?g("",!0):(a(),p(_,{key:0,size:"medium",modelValue:e.options[h.value],"onUpdate:modelValue":N=>e.options[h.value]=N,disabled:c.rootStore.aioseo.data.isNetworkAdmin&&!w.site},{default:o(()=>[d(l(h.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])),h.value!=="all"&&e.options.all?(a(),p(_,{key:1,size:"medium",modelValue:!0,disabled:""},{default:o(()=>[d(l(h.label),1)]),_:2},1024)):g("",!0)]),_:2},1024))),128))]),_:1}),i(b,{type:"gray",size:"medium",onClick:t[1]||(t[1]=h=>e.showModal=!0),disabled:r.canReset},{default:o(()=>[d(l(e.strings.resetSelectedSettings),1)]),_:1},8,["disabled"])])]),_:1},8,["name"]),i(U,{show:e.showModal,"no-header":"",onClose:t[4]||(t[4]=h=>e.showModal=!1),classes:["aioseo-core-reset-settings-modal"]},{body:o(()=>[u("div",oe,[u("button",{class:"close",onClick:t[3]||(t[3]=Y(h=>e.showModal=!1,["stop"]))},[i(S,{onClick:t[2]||(t[2]=h=>e.showModal=!1)})]),u("h3",null,l(e.strings.areYouSureReset),1),u("div",{class:"reset-description",innerHTML:e.strings.actionCannotBeUndone},null,8,ie),i(b,{type:"blue",size:"medium",onClick:r.processResetSettings,loading:e.loading},{default:o(()=>[d(l(e.strings.yesIHaveBackup),1)]),_:1},8,["onClick","loading"]),i(b,{type:"gray",size:"medium",onClick:r.noMakeBackup},{default:o(()=>[d(l(e.strings.noBackup),1)]),_:1},8,["onClick"])])]),_:1},8,["show"])])}const T=y(X,[["render",re]]),ne={setup(){return{optionsStore:V(),rootStore:v(),toolsStore:R()}},mixins:[$],components:{CoreCard:x,CoreResetSettings:T,CoreSettingsRow:z,SvgCheckmark:K},data(){return{site:null,selectedSite:null,clearedLogs:{badBotBlockerLogs:!1,redirectLogs:!1,logs404:!1},loadingLog:null,strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td)}}},watch:{site(s){this.selectedSite=this.rootStore.aioseo.data.network.sites.sites.find(t=>this.getUniqueSiteId(t)===s.value)}},computed:{canReset(){const s=[];return Object.keys(this.options).forEach(t=>{s.push(this.options[t])}),!s.some(t=>t)},showLogs(){return!this.rootStore.aioseo.data.isNetworkAdmin&&(this.showBadBotBlockerLogs||this.rootStore.aioseo.data.logSizes.redirectLogs||this.rootStore.aioseo.data.logSizes.logs404)},showBadBotBlockerLogs(){return this.optionsStore.internalOptions.internal.deprecatedOptions.includes("badBotBlocker")},sites(){return this.getSites.filter(s=>!s.parentDomain).map(s=>({value:this.getUniqueSiteId(s),label:`${s.domain}${s.path}`}))}},methods:{getSizeClass(s){let t="green";return 262144e3<s?t="orange":1073741274<s&&(t="red"),t},processClearLog(s){this.loadingLog=s,this.toolsStore.clearLog(s).then(()=>{this.loadingLog=null,this.clearedLogs[s]=!0})},disabledLog(s){return!this.rootStore.aioseo.data.logSizes[s].original||this.clearedLogs[s]}}},ae={class:"aioseo-tools-database-tools"},le={key:0},ce={key:1},de={class:"log-size"},ge={key:0},ue={key:1},_e={class:"log-size"},he={key:0},me={key:1},pe={class:"log-size"};function be(s,t,w,c,e,r){const k=n("base-select"),_=n("core-settings-row"),L=n("core-reset-settings"),B=n("core-card"),b=n("svg-checkmark"),f=n("base-button");return a(),m("div",ae,[i(B,{slug:"databaseTools","header-text":e.strings.resetRestoreSettings},{default:o(()=>[c.rootStore.aioseo.data.isNetworkAdmin?(a(),p(_,{key:0,name:e.strings.selectSite},{content:o(()=>[i(k,{size:"medium",modelValue:e.site,"onUpdate:modelValue":t[0]||(t[0]=S=>e.site=S),options:r.sites},null,8,["modelValue","options"])]),_:1},8,["name"])):g("",!0),i(L,{site:e.selectedSite},null,8,["site"])]),_:1},8,["header-text"]),r.showLogs?(a(),p(B,{key:0,slug:"databaseToolsLogs","header-text":e.strings.logs},{tooltip:o(()=>[d(l(e.strings.logsTooltip),1)]),default:o(()=>[c.rootStore.aioseo.data.logSizes.logs404?(a(),p(_,{key:0,name:e.strings.logs404,align:""},{content:o(()=>[i(f,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="logs404",disabled:r.disabledLog("logs404"),onClick:t[1]||(t[1]=S=>r.processClearLog("logs404"))},{default:o(()=>[r.disabledLog("logs404")?(a(),m("span",le,[i(b),d(" "+l(e.strings.cleared),1)])):g("",!0),r.disabledLog("logs404")?g("",!0):(a(),m("span",ce,l(e.strings.clear404Logs),1))]),_:1},8,["loading","disabled"]),u("div",de,[u("span",{class:C(["size-dot",r.getSizeClass(c.rootStore.aioseo.data.logSizes.logs404.original)])},null,2),d(" "+l(c.rootStore.aioseo.data.logSizes.logs404.readable),1)])]),_:1},8,["name"])):g("",!0),c.rootStore.aioseo.data.logSizes.redirectLogs?(a(),p(_,{key:1,name:e.strings.redirectLogs,align:""},{content:o(()=>[i(f,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="redirectLogs",disabled:r.disabledLog("redirectLogs"),onClick:t[2]||(t[2]=S=>r.processClearLog("redirectLogs"))},{default:o(()=>[r.disabledLog("redirectLogs")?(a(),m("span",ge,[i(b),d(" "+l(e.strings.cleared),1)])):g("",!0),r.disabledLog("redirectLogs")?g("",!0):(a(),m("span",ue,l(e.strings.clearRedirectLogs),1))]),_:1},8,["loading","disabled"]),u("div",_e,[u("span",{class:C(["size-dot",r.getSizeClass(c.rootStore.aioseo.data.logSizes.redirectLogs.original)])},null,2),d(" "+l(c.rootStore.aioseo.data.logSizes.redirectLogs.readable),1)])]),_:1},8,["name"])):g("",!0),r.showBadBotBlockerLogs?(a(),p(_,{key:2,name:e.strings.badBotBlockerLogs,align:""},{content:o(()=>[i(f,{class:"clear-log",type:"gray",size:"medium",loading:e.loadingLog==="badBotBlockerLog",disabled:r.disabledLog("badBotBlockerLog"),onClick:t[3]||(t[3]=S=>r.processClearLog("badBotBlockerLog"))},{default:o(()=>[r.disabledLog("badBotBlockerLog")?(a(),m("span",he,[i(b),d(" "+l(e.strings.cleared),1)])):g("",!0),r.disabledLog("badBotBlockerLog")?g("",!0):(a(),m("span",me,l(e.strings.clearBadBotBlockerLogs),1))]),_:1},8,["loading","disabled"]),u("div",pe,[u("span",{class:C(["size-dot",r.getSizeClass(c.rootStore.aioseo.data.logSizes.badBotBlockerLog.original)])},null,2),d(" "+l(c.rootStore.aioseo.data.logSizes.badBotBlockerLog.readable),1)])]),_:1},8,["name"])):g("",!0)]),_:1},8,["header-text"])):g("",!0)])}const Se=y(ne,[["render",be]]),ke={mixins:[$],components:{RequiredPlans:W,CoreBlur:J,CoreCard:x,CoreResetSettings:T,CoreSettingsRow:z,Cta:Q},data(){return{strings:{selectSite:this.$t.__("Select Site",this.$td),resetRestoreSettings:this.$t.__("Reset / Restore Settings",this.$td),logs:this.$t.__("Logs",this.$td),badBotBlockerLogs:this.$t.__("Bad Bot Blocker Logs",this.$td),cleared:this.$t.__("Cleared",this.$td),clearBadBotBlockerLogs:this.$t.__("Clear Bad Bot Blocker Logs",this.$td),logs404:this.$t.__("404 Logs",this.$td),clear404Logs:this.$t.__("Clear 404 Logs",this.$td),redirectLogs:this.$t.__("Redirect Logs",this.$td),clearRedirectLogs:this.$t.__("Clear Redirect Logs",this.$td),logsTooltip:this.$t.__(`Log sizes may fluctuate and not always be 100% accurate since the results can be cached. Also after clearing a log, it may not show as "0" since database tables also include additional information such as indexes that we don't clear.`,this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Network Tools is a %1$s Feature",this.$td),"PRO"),ctaButtonText:this.$t.__("Unlock Network Tools",this.$td),networkDatabaseToolsDescription:this.$t.__("Unlock network-level tools to manage all your sites from one easy-to-use location. Migrate data or create backups without the need to visit each dashboard.",this.$td)}}}},fe={class:"aioseo-tools-database-tools-lite"};function Le(s,t,w,c,e,r){const k=n("base-select"),_=n("core-settings-row"),L=n("core-reset-settings"),B=n("core-blur"),b=n("required-plans"),f=n("cta"),S=n("core-card");return a(),m("div",fe,[i(S,{slug:"databaseTools","header-text":e.strings.resetRestoreSettings},{default:o(()=>[i(B,null,{default:o(()=>[i(_,{name:e.strings.selectSite},{content:o(()=>[i(k,{size:"medium",modelValue:{value:"",label:""},options:[]})]),_:1},8,["name"]),i(L)]),_:1}),i(f,{"cta-link":s.$links.getPricingUrl("network-tools","database-tools"),"button-text":e.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("network-tools","database-tools",s.$isPro?"pricing":"liteUpgrade")},{"header-text":o(()=>[d(l(e.strings.ctaHeader),1)]),description:o(()=>[i(b,{"core-feature":["tools","network-tools-database"]}),d(" "+l(e.strings.networkDatabaseToolsDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link"])]),_:1},8,["header-text"])])}const Be=y(ke,[["render",Le]]),we={setup(){return{licenseStore:M(),rootStore:v()}},components:{DatabaseTools:Se,LiteDatabaseTools:Be},data(){return{license:D}}};function ye(s,t,w,c,e,r){const k=n("database-tools",!0),_=n("lite-database-tools");return a(),m("div",null,[!c.rootStore.aioseo.data.isNetworkAdmin||!c.licenseStore.isUnlicensed&&e.license.hasCoreFeature("tools","network-tools-database")?(a(),p(k,{key:0})):g("",!0),c.rootStore.aioseo.data.isNetworkAdmin&&(c.licenseStore.isUnlicensed||!e.license.hasCoreFeature("tools","network-tools-database"))?(a(),p(_,{key:1})):g("",!0)])}const Xe=y(we,[["render",ye]]);export{Xe as default};
