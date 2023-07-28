"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[14179],{46183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>m,metadata:()=>b,toc:()=>h});var a=i(87462),r=(i(67294),i(3905)),o=i(26389),l=i(94891),d=i(75190),n=i(47507),p=i(24310),s=i(63303),c=(i(75035),i(85162));const m={id:"get-role-profile",sidebar_label:"Find role-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getRoleProfile",description:"Find role-profile contributor relationship by id",tags:["Role Profiles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{role_profile:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"The role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"The profile id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/role_profiles/{id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Find role-profile contributor relationship by id",description:{content:"Find role-profile contributor relationship by id",type:"text/plain"},url:{path:["role_profiles",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role-profile contributor relationship by id' (get-role-profile)"},u=void 0,b={unversionedId:"api/get-role-profile",id:"api/get-role-profile",title:"get-role-profile",description:"Find role-profile contributor relationship by id",source:"@site/products/nerm/api/get-role-profile.api.mdx",sourceDirName:"api",slug:"/api/get-role-profile",permalink:"/nerm/api/get-role-profile",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role-profile contributor relationship by id' (get-role-profile)",tags:[],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"get-role-profile",sidebar_label:"Find role-profile contributor relationship by id",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getRoleProfile",description:"Find role-profile contributor relationship by id",tags:["Role Profiles"],parameters:[{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{role_profile:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"The role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},profile_id:{description:"The profile id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/role_profiles/{id}",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Find role-profile contributor relationship by id",description:{content:"Find role-profile contributor relationship by id",type:"text/plain"},url:{path:["role_profiles",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ID of the object to retrieve or update",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Find role-profile contributor relationship by id' (get-role-profile)"},sidebar:"nermOpenApiSidebar",previous:{title:"Update multiple role-profile contributor relationships",permalink:"/nerm/api/patch-role-profiles"},next:{title:"Update a role-profile contributor relationship by id",permalink:"/nerm/api/patch-role-profile"}},f={},h=[{value:"Find role-profile contributor relationship by id",id:"find-role-profile-contributor-relationship-by-id",level:2}],y={toc:h};function g(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"find-role-profile-contributor-relationship-by-id"},"Find role-profile contributor relationship by id"),(0,r.kt)("p",null,"Find role-profile contributor relationship by id"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(d.Z,{className:"paramsItem",param:{name:"id",in:"path",description:"ID of the object to retrieve or update",required:!0,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(o.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"role_profile"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"role_id",required:!1,deprecated:void 0,schemaDescription:"The role id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"profile_id",required:!1,deprecated:void 0,schemaDescription:"The profile id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "role_profile": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "role_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "profile_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request - unable to complete.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(s.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(c.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(p.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,r.kt)("div",null,(0,r.kt)(l.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(s.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(p.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(n.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);