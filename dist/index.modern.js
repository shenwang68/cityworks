import e from"reversible-map";class t{constructor(e,t,s){this.name=void 0,this.code=void 0,this.message=void 0,this.info=void 0,this.name="Cityworks Exception",this.code=e,this.message=t,void 0!==s&&(this.info=JSON.stringify(s))}}const s=require("lodash");class i{constructor(e){this.cw=void 0,this.cw=e}notifications(){return new Promise((e,t)=>{this.cw.runRequest("General/ActivityNotification/User",{}).then(t=>{e(t.Value)})})}amIWatching(e,s){return new Promise((i,n)=>{let r={null:0,case:1,task:2};void 0===r[e]?n(new t(1,"Activity type provided does not exist.",{provided:e,potential_activities:r})):this.cw.runRequest("General/ActivityNotification/UserWatching",{ActivityType:r[e],ActivityId:s}).then(e=>{i(e.Value)}).catch(e=>{n(new t(2,"Unknown error."))})})}quickSearch(e){return new Promise((t,s)=>{this.cw.runRequest("General/QuickSearch/QuickSearch",{QuickSearchText:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getActivityMetadataByIds(e,i){return new Promise((n,r)=>{let o=["INSPECTION","REQUEST","WORKORDER"];-1==s.indexOf(o,i)&&r(new t(2,"TableName provided does not exist or is mispelled.",{provided:i,available:o})),this.cw.runRequest("General/CwMetaData/ByTableNameSids",{Ids:e,TableName:i}).then(e=>{console.log(e),n(e.Value)}).catch(e=>{r(e)})})}getWOEntityCostSummary(e){return new Promise((t,s)=>{this.cw.runRequest("General/CostSummary/WorkOrderEntity",{ObjectIds:e}).then(e=>{console.log(e),t(e.Value)}).catch(e=>{s(e)})})}searchWOEntityCostSummary(e){return new Promise((t,s)=>{this.cw.runRequest("General/CostSummary/WorkOrderEntitySearch",{SearchId:e}).then(e=>{console.log(e),t(e.Value)}).catch(e=>{s(e)})})}}const n=require("lodash");class r{constructor(t){this.activityTypes=void 0,this.linkTypes=void 0,this.cw=void 0,this.cw=t,this.activityTypes=new e,this.activityTypes.set("null",0),this.activityTypes.set("case",1),this.activityTypes.set("inspection",2),this.activityTypes.set("request",3),this.activityTypes.set("workorder",4),this.activityTypes.set("wipcase",5),this.linkTypes=new e,this.linkTypes.set("null",0),this.linkTypes.set("parent",1),this.linkTypes.set("related",2)}add(e,s,i,n,r="related"){return new Promise((o,a)=>{this.activityTypes.has(e)||a(new t(1,"Source type not found.",{provided:e,options:this.activityTypes})),this.activityTypes.has(i)||a(new t(2,"Destination type not found.",{provided:i,options:this.activityTypes})),this.linkTypes.has(r)||a(new t(3,"Link type not found.",{provided:r,options:this.linkTypes}));let u={SourceType:this.activityTypes.get(e),SourceSid:s,DestType:this.activityTypes.get(i),DestSid:n,LinkType:this.linkTypes.get(r)};this.cw.runRequest("General/ActivityLink/Add",u).then(e=>{o(e.Value)})})}get(e,s){return new Promise((i,r)=>{this.activityTypes.has(e)||r(new t(4,"Activity type not found.",{provided:e,options:this.activityTypes}));let o={ActivityType:this.activityTypes.get(e),ActivitySids:s},a=this;this.cw.runRequest("General/ActivityLink/ByActivitySids",o).then(e=>{let t=new Array;n.forEach(e.Value,(e,s)=>{e.DestType=a.activityTypes.get(e.DestType),e.SourceType=a.activityTypes.get(e.SourceType),e.LinkType=a.linkTypes.get(e.LinkType),t.push(e)}),i(t)})})}clone(e,s,i,n){return new Promise((r,o)=>{this.activityTypes.has(e)||o(new t(1,"Source type not found.",{provided:e,options:this.activityTypes})),this.activityTypes.has(i)||o(new t(1,"Destination type not found.",{provided:i,options:this.activityTypes}));let a={SourceActivityType:this.activityTypes.get(e),SourceActivitySid:s,DestinationActivityType:this.activityTypes.get(i),DestinationActivitySid:n};this.cw.runRequest("General/ActivityLink/CloneByActivitySid",a).then(e=>{r(e.Value)})})}delete(e){return new Promise((t,s)=>{this.cw.runRequest("General/ActivityLink/Delete",{ActivityLinkId:e}).then(e=>{t(e.Value)})})}remove(e,s,i,n,r="related"){return new Promise((o,a)=>{this.activityTypes.has(e)||a(new t(1,"Source type not found.",{provided:e,options:this.activityTypes})),this.activityTypes.has(i)||a(new t(1,"Destination type not found.",{provided:i,options:this.activityTypes})),this.linkTypes.has(r)||a(new t(1,"Link type not found.",{provided:r,options:this.linkTypes}));let u={SourceType:this.activityTypes.get(e),SourceSid:s,DestType:this.activityTypes.get(i),DestSid:n,LinkType:this.linkTypes.get(r)};this.cw.runRequest("General/ActivityLink/Remove",u).then(e=>{o(e.Value)})})}}require("lodash");class o{constructor(e){this.cw=void 0,this.cw=e}getConfig(e,t,s=!0,i=[]){return new Promise((t,s)=>{e=e.toLowerCase(),this.cw.runRequest("Gis/MapService/Domain",{}).then(e=>{t(e.Value)})})}domain(e,t=!0){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/Domain",{}).then(t=>{e(t.Value)})})}downloadMobile(e,t=!0){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/DownloadMobileMapCache",{}).then(t=>{e(t.Value)})})}initialExtent(){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/InitialExtent",{}).then(t=>{e(t.Value)})})}request(e,t=!0){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/ServiceRequestConfiguration",{}).then(t=>{e(t.Value)})})}inspection(e,t=!0){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/InspectionConfiguration",{}).then(t=>{e(t.Value)})})}workOrder(e,t=!0){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/WorkOrderConfiguration",{}).then(t=>{e(t.Value)})})}user(e=[],t=!0,s=!0,i=!0){return new Promise((e,t)=>{this.cw.runRequest("Gis/MapService/User",{}).then(t=>{e(t.Value)})})}selectedEntities(){return new Promise((e,t)=>{this.cw.runRequest("General/AppData/SelectedEntities",{}).then(t=>{e(t.Value)})})}}const a=require("lodash");class u{constructor(e){this.cw=void 0,this.status=void 0,this.hook_types=void 0,this.cw=e,this.status={Pending:0,Processing:1,Complete:2,Failed:3},this.hook_types={Unknown:0,ActivityUpdate:1,Email:2,WebHook:3}}processMessages(e,t=!1){return new Promise((s,i)=>{this.cw.runRequest("General/WebHookEvent/ProcessMessages",{Ids:e,Delete:t}).then(e=>{})})}get(e,s,i=15){return new Promise((n,r)=>{void 0===this.status[s]&&r(new t(1,"Status provided does not exist or is mispelled.",{provided:s,available:this.status})),this.cw.runRequest("General/MessageQueue/ByIds",{Ids:e,MaxCount:void 0!==i?i:15,Status:this.status[s]}).then(e=>{})})}delete(e,s,i){return new Promise((n,r)=>{void 0===this.status[s]&&r(new t(2,"Status provided does not exist or is mispelled.",{provided:s,available:this.status})),this.cw.runRequest("General/MessageQueue/Delete",{Ids:e,Status:this.status[s],HoursToKeep:i}).then(e=>{})})}preferences(){return new Promise((e,t)=>{this.cw.runRequest("General/MessageQueue/Preferences",{}).then(e=>{})})}search(e,s){let i;return new Promise((n,r)=>{void 0!==e.status&&void 0===this.status[e.status]?r(new t(3,"Status provided does not exist or is mispelled.",{provided:e.status,available:this.status})):void 0!==e.status&&void 0!==this.status[e.status]&&(i.Status=this.status[e.status]),void 0!==s&&(i.MaxResults=s);let o=["Id","HookId","HookType","Result","DateCreatedBegin","DateCreatedEnd","DateUpdatedBegin","DateUpdatedEnd"],u=["Status","MaxResults"];a.forEach(e,(e,s)=>{-1!=a.indexOf(o,s)&&-1==a.indexOf(u,s)?i[s]=e:-1==a.indexOf(u,s)&&r(new t(4,"Provided parameter does not exist or is mispelled.",{provided:s,value:e,available:a.concat(o,u)}))}),this.cw.runRequest("General/MessageQueue/Search",i).then(e=>{void 0===e.Value&&(e.Value=[]),n(e.Value)})})}update(e){let s;return new Promise((i,n)=>{void 0!==e.status&&void 0===this.status[e.status]?n(new t(3,"Status provided does not exist or is mispelled.",{provided:e.status,available:this.status})):void 0!==e.status&&void 0!==this.status[e.status]&&(s.Status=this.status[e.status]),void 0!==e.hook_types&&void 0===this.hook_types[e.hook_types]?n(new t(3,"Status provided does not exist or is mispelled.",{provided:e.hook_types,available:this.hook_types})):void 0!==e.hook_types&&void 0!==this.hook_types[e.hook_types]&&(s.HookType=this.hook_types[e.hook_types]);let r=["Id","HookId","Packet","Result"],o=["Status","HookType"];a.forEach(e,(e,i)=>{-1!=a.indexOf(r,i)&&-1==a.indexOf(o,i)?s[i]=e:-1==a.indexOf(o,i)&&n(new t(5,"Provided parameter does not exist or is mispelled.",{provided:i,value:e,available:a.concat(r,o)}))}),this.cw.runRequest("General/MessageQueue/Update",s).then(e=>{void 0===e.Value&&(e.Value=[]),i(e.Value)})})}updateMessageStatus(e,s,i){return new Promise((n,r)=>{void 0===this.status[s]&&r(new t(2,"Status provided does not exist or is mispelled.",{provided:s,available:this.status})),this.cw.runRequest("General/MessageQueue/UpdateMessageStatus",{Ids:e,Status:this.status[s],HoursToKeep:i}).then(e=>{})})}getWebooks(e){return new Promise((t,s)=>{this.cw.runRequest("General/MessageQueue/WebHooks",{HookIds:e}).then(e=>{})})}}require("lodash");class c{constructor(e){this.cw=void 0,this.cw=e}}const h=require("lodash");class d{constructor(e){this.cw=void 0,this.cw=e}create(e){return new Promise((s,i)=>{h.has(e,"ProblemSid")?this.cw.runRequest("Ams/ServiceRequest/Create",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(2,"ProblemSid must be provided.",{provided:e}))})}update(e){return new Promise((s,i)=>{h.has(e,"RequestId")?this.cw.runRequest("Ams/ServiceRequest/Update",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(3,"RequestId must be provided.",{provided:e}))})}changeProblem(e,t){return new Promise((s,i)=>{this.cw.runRequest("Ams/ServiceRequest/ChangeProblem",{RequestId:e,ProblemSid:t}).then(e=>{s(e.Value)}).catch(e=>{i(e)})})}getById(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/ById",{RequestId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getByIds(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/ByIds",{RequestIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getAuditLog(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/AuditLog",{RequestId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getCustomFields(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/CustomFields",{RequestIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}changeCustomFieldCategory(e,t){return new Promise((s,i)=>{this.cw.runRequest("Ams/ServiceRequest/ChangeCustomFieldCategory",{RequestIds:e,CategoryId:t}).then(e=>{s(e.Value)}).catch(e=>{i(e)})})}comment(e,t){return new Promise((s,i)=>{this.cw.runRequest("Ams/ServiceRequest/AddComments",{RequestId:e,Comments:t}).then(e=>{s(e.Value)}).catch(e=>{i(e)})})}cancel(e,t,s){return new Promise((i,n)=>{var r={RequestIds:e};void 0!==t&&(r.CancelReason=t),void 0!==s&&(r.DateCancelled=s),this.cw.runRequest("Ams/ServiceRequest/Cancel",r).then(e=>{i(e.Value)}).catch(e=>{n(e)})})}uncancel(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/Uncancel",{RequestIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}close(e){return new Promise((s,i)=>{this.cw.runRequest("Ams/ServiceRequest/Close",{RequestIds:e}).then(e=>{e.Status>0?i(new t(5,e.Message,{response:e})):s(e.Value)}).catch(e=>{i(e)})})}reopen(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/Reopen",{RequestIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}delete(e){return new Promise((s,i)=>{this.cw.runRequest("Ams/ServiceRequest/Delete",{RequestIds:e}).then(e=>{e.Status>0?i(new t(4,e.Message,{response:e})):s(e.Value)}).catch(e=>{i(e)})})}search(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/Search",e).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}searchObject(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/SearchObject",{RequestId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}createSearchDefinition(e,t,s,i=!0,n=!0){return new Promise((s,r)=>{var o=e;h.isString(t)&&(h.set(o,"SearchName",t),h.set(o,"SaveDefinition",i),h.set(o,"EnableEurl",n)),this.cw.runRequest("Ams/ServiceRequest/CreateSearchDefinition",o).then(e=>{s(e.Value)}).catch(e=>{r(e)})})}getProblemNodes(e,t=!1,s,i=!1){return new Promise((n,r)=>{var o={DomainId:e,IncludeCancelled:i,ViewOnly:t};null!=s&&h.has(s,"DisplayTextMode")&&(h.set(o,"DisplayTextMode",h.get(s,"DisplayTextMode")),"CD"==h.get(s,"DisplayTextMode")&&h.has(s,"DisplayTextDelimeter")&&h.set(o,"DisplayTextDelimeter",h.get(s,"DisplayTextDelimeter"))),this.cw.runRequest("Ams/ServiceRequest/ProblemNodes",o).then(e=>{n(e.Value)}).catch(e=>{r(e)})})}getProblems(e=!1,t=!0,s){return new Promise((i,n)=>{var r={ForPublicOnly:e,OnlyActiveTemplates:t};void 0!==s&&h.set(r,"DomainIds",s),this.cw.runRequest("Ams/ServiceRequest/Problems",r).then(e=>{i(e.Value)}).catch(e=>{n(e)})})}getProblemsByKeywords(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/ProblemsByKeywords",{Keywords:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getPriorities(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/Priorities",{ProblemSids:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getCustomFieldTemplate(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/TemplateCustomFields",{ProblemSids:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getQASettings(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/QA",{ProblemSids:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getProblemLeaf(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/ProblemLeafBySid",{ProblemSid:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getStatuses(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/DefaultStatus",{DomainIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getDispatchTo(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/DispatchTo",{DomainId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getSubmitTo(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/SubmitTo",{DmainId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}streetCodes(){return new Promise((e,t)=>{this.cw.runRequest("Ams/ServiceRequest/AllStreetCode",{}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}getTemplatesById(e,t,s){return new Promise((e,i)=>{var n={ProblemSids:null};void 0!==t&&h.set(n,"MinimumDateModified",t),void 0!==s&&h.set(n,"MaximumDateModified",s),this.cw.runRequest("Ams/ServiceRequestTemplate/ByIds",n).then(t=>{e(t.Value)}).catch(e=>{i(e)})})}createTemplateSearchDefinition(e,t,s,i=!0){return new Promise((s,n)=>{var r=e;h.isString(t)&&(h.set(r,"SearchName",t),h.set(r,"SaveDefinition",i)),this.cw.runRequest("Ams/ServiceRequestTemplate/CreateSearchDefinition",r).then(e=>{s(e.Value)}).catch(e=>{n(e)})})}getTemplateQAs(e,t,s){return new Promise((e,t)=>{this.cw.runRequest("Ams/ServiceRequestTemplate/QA",{ProblemSids:null}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}searchTemplates(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequestTemplate/Search",e).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getTemplates(e,t=!1,s=!1,i,n){return new Promise((r,o)=>{var a={CanCreate:t,IncludeInactiveIf:s};void 0!==e&&h.set(a,"TemplateIds",e),void 0!==i&&h.set(a,"MinimumDateModified",i),void 0!==n&&h.set(a,"MaximumDateModified",n),this.cw.runRequest("Ams/ServiceRequestTemplate/Templates",a).then(e=>{r(e.Value)}).catch(e=>{o(e)})})}getWOTemplates(e,t=!1){return new Promise((s,i)=>{this.cw.runRequest("Ams/ServiceRequestTemplate/WorkOrderTemplates",{ProblemSids:e,IncludeInactive:t}).then(e=>{s(e.Value)}).catch(e=>{i(e)})})}}const l=require("lodash");class p{constructor(e){this.cw=void 0,this.cw=e}create(e){return new Promise((s,i)=>{l.has(e,"EntityType")&&l.has(e,"InspTemplateId")?this.cw.runRequest("Ams/Inspection/Create",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(1,"EntityType and InspTemplateId properties must be provided.",{provided:e}))})}createFromEntities(e){return new Promise((s,i)=>{l.has(e,"EntityType")&&l.has(e,"InspTemplateId")?this.cw.runRequest("Ams/Inspection/CreateFromEntities",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(1,"EntityType and InspTemplateId properties must be provided.",{provided:e}))})}createFromParent(e){return new Promise((s,i)=>{l.has(e,"EntityType")&&l.has(e,"InspTemplateId")&&l.has(e,"InspectionId")?this.cw.runRequest("Ams/Inspection/CreateFromParent",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(1,"EntityType and InspTemplateId properties must be provided.",{provided:e}))})}createFromServiceRequest(e){return new Promise((s,i)=>{l.has(e,"EntityType")&&l.has(e,"InspTemplateId")&&l.has(e,"RequestId")?this.cw.runRequest("Ams/Inspection/CreateFromServiceRequest",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(1,"EntityType and InspTemplateId properties must be provided.",{provided:e}))})}createFromWorkOrder(e){return new Promise((s,i)=>{l.has(e,"EntityType")&&l.has(e,"InspTemplateId")&&l.has(e,"WorkOrderSid")?this.cw.runRequest("Ams/Inspection/CreateFromWorkOrder",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(1,"EntityType and InspTemplateId properties must be provided.",{provided:e}))})}update(e){return new Promise((s,i)=>new Promise((s,i)=>{l.has(e,"InspectionId")?this.cw.runRequest("Ams/Inspection/Update",e).then(e=>{s(e.Value)}).catch(e=>{i(e)}):i(new t(1,"InspectionId must be provided.",{provided:e}))}))}getById(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/ById",{InspectionId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getByIds(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/ByIds",{InspectionIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}cancel(e,t,s){return new Promise((i,n)=>{var r={InspectionIds:e};void 0!==t&&(r.CancelReason=t),void 0!==s&&(r.DateCancelled=s),this.cw.runRequest("Ams/Inspection/Cancel",r).then(e=>{i(e.Value)}).catch(e=>{n(e)})})}uncancel(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/Uncancel",{InspectionIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}close(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/Close",{InspectionIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}reopen(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/Reopen",{InspectionIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}delete(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/Delete",{InspectionIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}search(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/Search",e).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}searchObject(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/ServiceRequest/SearchObject",{InspectionId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}statuses(){return new Promise((e,t)=>{this.cw.runRequest("Ams/Inspection/Statuses",{}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}submitTos(e=!1,t){return new Promise((s,i)=>{var n={};e&&(n.IncludeInactiveEmployees=!0),void 0!==t&&(n.DomainIds=t),this.cw.runRequest("Ams/Inspection/SubmitTos",n).then(e=>{s(e.Value)}).catch(e=>{i(e)})})}connectAsset(e,t,s=!0,i={}){return new Promise((s,n)=>{var r={InspectionId:t};l.has(e,"EntityType")&&l.has(e,"EntityUid")?(r.EntityType=e.EntityType,r.EntityUid=e.EntityUid):l.has(e,"Entity")&&(r.Entity=e.Entity),l.has(i,"Facility_Id")&&(r.Facility_Id=i.Facility_Id),l.has(i,"Level_Id")&&(r.Level_Id=i.Level_Id),this.cw.runRequest("Ams/Inspection/AddEntity",r).then(e=>{s(e.Value)}).catch(e=>{n(e)})})}getAnswers(e){return new Promise((t,s)=>{var i={};0==e.length?i.InspectionId=e[0]:i.InspectionIds=e,this.cw.runRequest("Ams/Inspection/Answers",i).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getAuditLog(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Inspection/AuditLog",{InspectionId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}createSearchDefinition(e,t,s,i=!0,n=!0){return new Promise((s,r)=>{var o=e;l.isString(t)&&(l.set(o,"SearchName",t),l.set(o,"SaveDefinition",i),l.set(o,"EnableEurl",n)),this.cw.runRequest("Ams/Inspection/CreateSearchDefinition",o).then(e=>{s(e.Value)}).catch(e=>{r(e)})})}getCycleFrom(){return new Promise((e,t)=>{this.cw.runRequest("Ams/Inspection/CycleFrom",{}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}getCycleIntervals(){return new Promise((e,t)=>{this.cw.runRequest("Ams/Inspection/CycleIntervals",{}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}getCycleTypes(){return new Promise((e,t)=>{this.cw.runRequest("Ams/Inspection/CycleTypes",{}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}getDistricts(){return new Promise((e,t)=>{this.cw.runRequest("Ams/Inspection/Districts",{}).then(t=>{e(t.Value)}).catch(e=>{t(e)})})}move(e,t,s,i,n){return new Promise((r,o)=>{var a={InspectionId:e,x:t,y:s};void 0!==n&&l.set(a,"z",n),void 0!==i&&(l.has(i,"WKID")?l.set(a,"WKID",l.get(i,"WKID")):l.has(i,"WKT")&&l.set(a,"WKT",l.get(i,"WKT")),l.has(i,"VcsWKID")&&l.set(a,"VcsWKID",l.get(i,"VcsWKID"))),this.cw.runRequest("Ams/Inspection/Move",{}).then(e=>{r(e.Value)}).catch(e=>{o(e)})})}getTemplates(e,t,s){return new Promise((i,n)=>{var r={};void 0!==e&&(r.EntityTypes=e),r.CanCreate=void 0===t||t,"object"==typeof s&&l.forIn(s,(e,t)=>{r[t]=e}),this.cw.runRequest("Ams/InspectionTemplate/Templates",r).then(e=>{i(e.Value)}).catch(e=>{n(e)})})}getTemplatesByIds(e,t){return new Promise((s,i)=>{var n={InspTemplateIds:e};"object"==typeof t&&l.forIn(t,(e,t)=>{n[t]=e}),this.cw.runRequest("Ams/InspectionTemplate/ByIds",n).then(e=>{s(e.Value)}).catch(e=>{i(e)})})}getTemplateEntityTypes(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/InspectionTemplate/EntityTypes",{InspTemplateIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getQA(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/InspectionTemplate/QA",{InspTemplateIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getQConditions(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/InspectionTemplate/QuestionConditions",{InspTemplateIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}deleteAttachments(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Attachments/DeleteInspectionAttachments",{AttachmentIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}downloadAttachment(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Attachments/DownloadInspectionAttachment",{AttachmentId:e}).then(e=>{}).catch(e=>{s(e)})})}getAttachmentById(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Attachments/InspectionAttachmentById",{AttachmentId:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}getAttachments(e){return new Promise((t,s)=>{this.cw.runRequest("Ams/Attachments/InspectionAttachments",{InspectionIds:e}).then(e=>{t(e.Value)}).catch(e=>{s(e)})})}}const m=require("https"),w=require("querystring"),v=require("lodash");module.exports=class{constructor(e,t,s){this.base_url=void 0,this.Token=void 0,this.login=void 0,this.password=void 0,this.gisToken=void 0,this.gisTokenUrl=void 0,this.settings=void 0,this.error=void 0,this.general=void 0,this.activity_link=void 0,this.message_queue=void 0,this.gis=void 0,this.search=void 0,this.request=void 0,this.inspection=void 0,this.extensions=void 0,this.features=void 0,this.potential_loads=void 0,this.base_url="cityworksonline",this.extensions={UnknownExtension:0,CwAnalytics:1,WebHooks:2,PLLPublicApp:3,ActivityUpdate:4,SingleSignOn:5},this.features={UnknownFeature:0,ViewInspections:1,EditInspections:2,ViewServiceRequest:3,EditServiceRequest:4,ViewWorkOrder:5,EditWorkOrder:6,EquipmentCheckOut:7,OfficeField:8,Respond:9,Eurl:10,PaverInterface:11,Contracts:12,Storeroom:13,PLL:14,Cw4XL:15,TableEditor:16,CCTVInterface:17,MobileAndroid:18,MobileiOS:19,PerformanceBudgeting:20,Insights:21,RespondCase:22,RespondInspection:23,RespondServiceRequest:24,RespondTaskManager:25,RespondWorkOrder:26,Workload:27,OpX:28,TrimbleUnityMobile:29,TrimbleVegetationManager:30},this.settings={path:"cityworks",secure:!0,expires:null,default_domain:null},this.potential_loads=["general","activity_link","message_queue","gis","search","request"],void 0!==e&&this.configure(e,t,s)}configure(e,t,s){if(this.base_url=void 0!==e?e:"cityworksonline",this.settings={path:"cityworks",secure:!0,expires:null,default_domain:null},void 0!==t&&v.forEach(t,(e,t)=>{void 0!==this.settings[t]&&(this.settings[t]=e)}),void 0===s)this.general=new i(this),this.activity_link=new r(this),this.message_queue=new u(this),this.request=new d(this),this.inspection=new p(this);else{let e=this;v.forEach(this.potential_loads,function(t){switch(t){case"general":e.general=new i(e);break;case"activity_link":e.activity_link=new r(e);break;case"message_queue":e.message_queue=new u(e);break;case"gis":e.gis=new o(e);break;case"search":e.search=new c(e);break;case"request":e.request=new d(e);break;case"inspection":e.inspection=new p(e)}})}}runRequest(e,s){return new Promise((i,n)=>{let r={};r.data=JSON.stringify(s),void 0!==this.Token&&""!=this.Token&&"General/Authentication/CityworksOnlineAuthenticate"!=e&&"General/Authentication/Authenticate"!=e&&(r.token=this.Token);let o={hostname:this.base_url,port:443,path:"/"+this.settings.path+"/services/"+e,method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","Content-Length":Buffer.byteLength(w.stringify(r))},timeout:1e7},a=m.request(o,e=>{let s="";e.on("error",function(e){console.log(e,"Caught on error"),n(new t(13,"Unknown error.",e))}),e.on("data",function(e){s+=e}),e.on("end",function(){try{if(null==(JSON.stringify(s)+"[test string]").match(/\<h2\>Object\ moved\ to/)){var e=JSON.parse(s);void 0===e?n(new t(10,"No response received from Cityworks API.")):void 0!==e&&void 0!==e.Value?i(e):n(new t(3,"Unknown error.",{options:o,postedData:r,api_returned_string:e}))}else n(new t(1,"Error parsing JSON. Cityworks returned HTML.",{response:s}))}catch(e){e instanceof SyntaxError?(console.log("try/catch error on JSON"),n(new t(1,"Error parsing JSON.",{error:e}))):(console.log("try/catch error on JSON"),n(new t(1,"Error parsing JSON.")))}})});a.write(w.stringify(r)),a.end()})}authenticate(e,s){return new Promise((i,n)=>{let r="General/Authentication/Authenticate";"cityworksonline"==this.base_url&&(r="General/Authentication/CityworksOnlineAuthenticate"),this.runRequest(r,{LoginName:e,Password:s}).then(r=>{r.Status>0?n(new t(10,r.Message)):void 0!==r.Value&&void 0!==r.Value.Token?(this.login=e,this.password=s,this.Token=r.Value.Token,i(!0)):n(new t(11,"Unknown Error"))}).catch(e=>{n(e)})})}authenticateWithGISToken(e,t,s,i){return this.login=e,this.gisToken=t,this.gisTokenUrl=s,void 0!==i&&(i=12096e5),new Promise((e,t)=>{this.runRequest("General/Authentication/AuthenticateGisToken",{LoginName:this.login,GisToken:this.gisToken,GisTokenUrl:this.gisTokenUrl,Expires:i}).then(t=>{void 0!==t.Status&&t.Status>0||(void 0!==t.Value&&void 0!==t.Value.Token?(this.Token=t.Value.Token,e(!0)):e(!1))}).catch(e=>{throw e})})}validateToken(e,t){return new Promise((s,i)=>{this.runRequest("General/Authentication/Validate",{Token:e}).then(i=>{i.Status>0?s(!1):(t&&(this.Token=e),s(i.Value))}).catch(e=>{throw e})})}setToken(e){return""!=e&&null!=e&&(this.Token=e,!0)}getToken(){return""!=this.Token&&null!=this.Token&&this.Token}revokeToken(e){return new Promise((t,s)=>{this.runRequest("General/Token/RevokeUser",{RevokeDate:e}).then(e=>{t(!(void 0!==e.Status&&e.Status>0))}).catch(e=>{throw e})})}getLocalizationSettings(){return new Promise((e,t)=>{this.runRequest("General/Localization/LocalizationSettings",{}).then(t=>{e(t.Value)})})}getTimezoneOptions(){return new Promise((e,t)=>{this.runRequest("General/Localization/TimeZones",{}).then(t=>{e(t.Value)})})}getCurrentLocation(){return new Promise((e,t)=>{this.runRequest("General/AppData/CurrentLocation",{}).then(t=>{e(t.Value)})})}licensedApiCheck(e,t){return new Promise((s,i)=>{this.runRequest("General/AppData/SelectedEntities",{Area:e,Service:t}).then(e=>{s(e.Value)})})}licensedExtensionCheck(e){return new Promise((s,i)=>{void 0===this.extensions[e]&&i(new t(4,"Extension provided does not exist or is mispelled.",{provided:e,available:this.extensions})),this.runRequest("General/Authorization/LicensedExtensionCheck",{Extension:this.extensions[e]}).then(e=>{s(e.Value)})})}licensedExtensionsCheck(e){return new Promise((s,i)=>{var n={Extensions:[]};v.forEach(e,e=>{void 0===this.extensions[e]?i(new t(5,"Extension provided does not exist or is mispelled.",{provided:e,available:this.extensions})):n.Extensions.push(this.extensions[e])}),this.runRequest("General/Authorization/LicensedExtensionsCheck",n).then(e=>{let n={},r=v.invert(this.extensions);v.forEach(e,(e,s)=>{void 0===r[e]?i(new t(6,"Extension index provided does not exist or isn't configured properly.",{provided_num_returned:e,available:this.extensions})):n[r[e]]=s}),s(n)})})}licensedFeatureCheck(e){return new Promise((s,i)=>{void 0===this.features[e]&&i(new t(7,"Feature provided does not exist or is mispelled.",{provided:e,available:this.features})),this.runRequest("General/Authorization/LicensedFeatureCheck",{Feature:this.features[e]}).then(e=>{s(e.Value)})})}licensedFeaturesCheck(e){return new Promise((s,i)=>{var n={Features:[]};v.forEach(e,e=>{void 0===this.features[e]?i(new t(8,"Feature provided does not exist or is mispelled.",{provided:e,available:this.features})):n.Features.push(this.features[e])}),this.runRequest("General/Authorization/LicensedFeaturesCheck",n).then(e=>{let n={},r=v.invert(this.features);v.forEach(e.Value,(e,s)=>{void 0===r[e]?i(new t(9,"Feature index provided does not exist or isn't configured properly.",{provided:e,available:r})):n[r[e]]=s}),s(n)})})}licensedServicesCheck(e){return new Promise((t,s)=>{this.runRequest("General/Authorization/LicensedServicesCheck",{Services:e}).then(e=>{t(e.Value)})})}cityworksOnlineSites(e,t){return new Promise((s,i)=>{this.runRequest("General/Authentication/CityworksOnlineSites",{LoginName:void 0!==e?e:this.login,Password:void 0!==t?t:this.password}).then(e=>{s(e.Value)})})}domains(){return new Promise((e,t)=>{this.runRequest("General/Authentication/Domains",{}).then(t=>{e(t.Value)})})}user(e){return new Promise((t,s)=>{this.runRequest("General/Authentication/User",{LoginName:void 0!==e?e:this.login}).then(e=>{t(e.Value)})})}version(){return new Promise((e,t)=>{this.runRequest("General/Authentication/Version",{}).then(t=>{e(t.Value)})})}};
//# sourceMappingURL=index.modern.js.map
