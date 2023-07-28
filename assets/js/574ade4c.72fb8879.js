"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32534],{75121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var i=r(87462),n=(r(67294),r(3905));const a={id:"source-deleted",title:"Source Deleted",pagination_label:"Source Deleted",sidebar_label:"Source Deleted",sidebar_class_name:"sourceDeleted",keywords:["event","trigger","source","deleted","available"],description:"Fires after a source is deleted.",slug:"/docs/event-triggers/triggers/source-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},s=void 0,d={unversionedId:"docs/identity-now/event-triggers/available/source-deleted",id:"docs/identity-now/event-triggers/available/source-deleted",title:"Source Deleted",description:"Fires after a source is deleted.",source:"@site/products/idn/docs/identity-now/event-triggers/available/source-deleted.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/source-deleted",permalink:"/idn/docs/event-triggers/triggers/source-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/source-deleted.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"source-deleted",title:"Source Deleted",pagination_label:"Source Deleted",sidebar_label:"Source Deleted",sidebar_class_name:"sourceDeleted",keywords:["event","trigger","source","deleted","available"],description:"Fires after a source is deleted.",slug:"/docs/event-triggers/triggers/source-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Source Created",permalink:"/idn/docs/event-triggers/triggers/source-created"},next:{title:"Source Updated",permalink:"/idn/docs/event-triggers/triggers/source-updated"}},l={},o=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:o};function g(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"event-context"},"Event Context"),(0,n.kt)("p",null,"Source Deleted events occur when a source is successfully deleted via the API or the Admin UI. Some uses cases for this trigger include the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Provide evidence to show auditors that connector logic and sources are not manipulated outside of proper change control processes."),(0,n.kt)("li",{parentName:"ul"},"Alert admins when a source was deleted incorrectly.")),(0,n.kt)("p",null,"This is an example input from this trigger:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "2c9180866166b5b0016167c32ef31a66",\n  "name": "Test source",\n  "type": "DIRECT_CONNECT",\n  "deleted": "2021-03-29T22:01:50.474Z",\n  "connector": "active-directory",\n  "actor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  }\n}\n')),(0,n.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,n.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}g.isMDXComponent=!0}}]);