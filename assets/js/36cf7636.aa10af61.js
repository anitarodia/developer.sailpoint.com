"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32140],{14834:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>h,toc:()=>b});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),n=r(94891),o=r(75190),d=r(47507),l=r(24310),p=r(63303),m=(r(75035),r(85162));const c={id:"get-user-roles",sidebar_label:"Get user role pairings",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUserRoles",description:"This endpoint can retrieve user role pairings from Lifecycle or you can search for user role pairings using parameters",tags:["User Roles"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"user_id",in:"query",description:"The ID of a user for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"role_id",in:"query",description:"The ID of a role for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{user_roles:{type:"array",items:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"the user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"the role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/user_roles",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get user role pairings",description:{content:"This endpoint can retrieve user role pairings from Lifecycle or you can search for user role pairings using parameters",type:"text/plain"},url:{path:["user_roles"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The ID of a user for filtering",type:"text/plain"},key:"user_id",value:""},{disabled:!1,description:{content:"The ID of a role for filtering",type:"text/plain"},key:"role_id",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get user role pairings' (get-user-roles)"},u=void 0,h={unversionedId:"api/get-user-roles",id:"api/get-user-roles",title:"get-user-roles",description:"Get user role pairings",source:"@site/products/nerm/api/get-user-roles.api.mdx",sourceDirName:"api",slug:"/api/get-user-roles",permalink:"/nerm/api/get-user-roles",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get user role pairings' (get-user-roles)",tags:[],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"get-user-roles",sidebar_label:"Get user role pairings",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUserRoles",description:"This endpoint can retrieve user role pairings from Lifecycle or you can search for user role pairings using parameters",tags:["User Roles"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"user_id",in:"query",description:"The ID of a user for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"role_id",in:"query",description:"The ID of a role for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{user_roles:{type:"array",items:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},user_id:{description:"the user id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},role_id:{description:"the role id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/user_roles",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get user role pairings",description:{content:"This endpoint can retrieve user role pairings from Lifecycle or you can search for user role pairings using parameters",type:"text/plain"},url:{path:["user_roles"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"The ID of a user for filtering",type:"text/plain"},key:"user_id",value:""},{disabled:!1,description:{content:"The ID of a role for filtering",type:"text/plain"},key:"role_id",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get user role pairings' (get-user-roles)"},sidebar:"nermOpenApiSidebar",previous:{title:"Assign a new role to a user",permalink:"/nerm/api/post-user-role"},next:{title:"Create multiple new user role pairings",permalink:"/nerm/api/post-user-roles"}},f={},b=[{value:"Get user role pairings",id:"get-user-role-pairings",level:2}],y={toc:b};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-user-role-pairings"},"Get user role pairings"),(0,i.kt)("p",null,"This endpoint can retrieve user role pairings from Lifecycle or you can search for user role pairings using parameters"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"user_id",in:"query",description:"The ID of a user for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"role_id",in:"query",description:"The ID of a role for filtering",required:!1,schema:{type:"string",format:"uuid"},example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Expected response to a valid request")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"user_roles"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"user_id",required:!1,deprecated:void 0,schemaDescription:"the user id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"role_id",required:!1,deprecated:void 0,schemaDescription:"the role id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"_metadata"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:"The limit",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:"The offset",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:"The total",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"next",required:!1,deprecated:void 0,schemaDescription:"The link to the next page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"previous",required:!1,deprecated:void 0,schemaDescription:"The link to the previous page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "user_roles": [\n    {\n      "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "user_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "role_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"\n    }\n  ],\n  "_metadata": {\n    "limit": 50,\n    "offset": 100,\n    "total": 10000,\n    "next": "/endpoint?limit=10&offset=60",\n    "previous": "/endpoint?limit=10&offset=40"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request - unable to complete.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,i.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);