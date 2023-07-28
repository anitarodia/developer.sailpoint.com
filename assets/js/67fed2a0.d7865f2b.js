"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99862],{38504:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),o=a(75190),l=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const c={id:"get-users",sidebar_label:"Get users",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUsers",description:"This endpoint can retrieve users from Lifecycle or you can search for users using parameters",tags:["Users"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"name",in:"query",description:"object name for filtering",required:!1,schema:{type:"string"},example:"objectname"},{name:"login",in:"query",description:"The user login to search by",required:!1,schema:{type:"string"},example:"myuser"},{name:"title",in:"query",description:"The user title to search by",required:!1,schema:{type:"string"},example:"usertitle"},{name:"status",in:"query",description:"status value for filtering",required:!1,schema:{type:"string",enum:["Active","Inactive","On Leave","Terminated"]},example:"Active"},{name:"email",in:"query",description:"The user email to search by",required:!1,schema:{type:"string",format:"email"},example:"test@sailpoint.com"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{users:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},name:{description:"The name",type:"string",example:"bob"},email:{description:"The email",type:"string",format:"email",example:"example@sailpoint.com"},type:{description:"The type",type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",example:"NeprofileUser"},title:{description:"The title",type:"string",example:"mytitle"},status:{description:"The status",type:"string",enum:["Active","Disabled"],example:"Active"},login:{description:"The login",type:"string",example:"bob"},last_login:{description:"The last login time",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},cookies_accepted_at:{description:"The time the cookies were accepted at",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},preferred_language:{description:"The preferred language",type:"string",example:"en-US"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/users",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get users",description:{content:"This endpoint can retrieve users from Lifecycle or you can search for users using parameters",type:"text/plain"},url:{path:["users"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"object name for filtering",type:"text/plain"},key:"name",value:""},{disabled:!1,description:{content:"The user login to search by",type:"text/plain"},key:"login",value:""},{disabled:!1,description:{content:"The user title to search by",type:"text/plain"},key:"title",value:""},{disabled:!1,description:{content:"status value for filtering",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"The user email to search by",type:"text/plain"},key:"email",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get users' (get-users)"},u=void 0,h={unversionedId:"api/get-users",id:"api/get-users",title:"get-users",description:"Get users",source:"@site/products/nerm/api/get-users.api.mdx",sourceDirName:"api",slug:"/api/get-users",permalink:"/nerm/api/get-users",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get users' (get-users)",tags:[],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"get-users",sidebar_label:"Get users",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"getUsers",description:"This endpoint can retrieve users from Lifecycle or you can search for users using parameters",tags:["Users"],parameters:[{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},{name:"name",in:"query",description:"object name for filtering",required:!1,schema:{type:"string"},example:"objectname"},{name:"login",in:"query",description:"The user login to search by",required:!1,schema:{type:"string"},example:"myuser"},{name:"title",in:"query",description:"The user title to search by",required:!1,schema:{type:"string"},example:"usertitle"},{name:"status",in:"query",description:"status value for filtering",required:!1,schema:{type:"string",enum:["Active","Inactive","On Leave","Terminated"]},example:"Active"},{name:"email",in:"query",description:"The user email to search by",required:!1,schema:{type:"string",format:"email"},example:"test@sailpoint.com"},{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{users:{type:"array",items:{type:"object",properties:{id:{description:"The id",type:"string",format:"uuid",readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"The uid",type:"string",minLength:32,maxLength:32,readonly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},name:{description:"The name",type:"string",example:"bob"},email:{description:"The email",type:"string",format:"email",example:"example@sailpoint.com"},type:{description:"The type",type:"string",enum:["NeprofileUser","NeaccessUser"],default:"NeprofileUser",example:"NeprofileUser"},title:{description:"The title",type:"string",example:"mytitle"},status:{description:"The status",type:"string",enum:["Active","Disabled"],example:"Active"},login:{description:"The login",type:"string",example:"bob"},last_login:{description:"The last login time",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},cookies_accepted_at:{description:"The time the cookies were accepted at",type:"string",format:"date-time",readOnly:!0,example:"2023-05-01T09:12:28Z"},preferred_language:{description:"The preferred language",type:"string",example:"en-US"}}}},_metadata:{type:"object",properties:{limit:{description:"The limit",type:"integer",format:"int32",example:50},offset:{description:"The offset",type:"integer",format:"int32",example:100},total:{description:"The total",type:"integer",format:"int32",example:1e4},next:{description:"The link to the next page of data",type:"string",example:"/endpoint?limit=10&offset=60"},previous:{description:"The link to the previous page of data",type:"string",example:"/endpoint?limit=10&offset=40"}}}}}}}},400:{description:"Bad Request - unable to complete.",content:{"application/json":{schema:{oneOf:[{type:"object",properties:{error:{example:"Invalid JSON syntax. Please check your syntax and try again."}}},{type:"object",properties:{error:{example:"The <object> failed to create/update"},errors:{example:{attribute:"can't be blank"}}}}]}}}},500:{description:"Internal Server Error - returned on unhandled exceptions.",content:{"application/json":{schema:{type:"object",properties:{error:{description:"A message describing the error",example:"Sorry something went wrong"}}}}}}},method:"get",path:"/users",info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Get users",description:{content:"This endpoint can retrieve users from Lifecycle or you can search for users using parameters",type:"text/plain"},url:{path:["users"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"object name for filtering",type:"text/plain"},key:"name",value:""},{disabled:!1,description:{content:"The user login to search by",type:"text/plain"},key:"login",value:""},{disabled:!1,description:{content:"The user title to search by",type:"text/plain"},key:"title",value:""},{disabled:!1,description:{content:"status value for filtering",type:"text/plain"},key:"status",value:""},{disabled:!1,description:{content:"The user email to search by",type:"text/plain"},key:"email",value:""},{disabled:!1,description:{content:"Returns batching metadata in the response",type:"text/plain"},key:"metadata",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Get users' (get-users)"},sidebar:"nermOpenApiSidebar",previous:{title:"Create a new user",permalink:"/nerm/api/post-user"},next:{title:"Create multiple new users",permalink:"/nerm/api/post-users"}},y={},f=[{value:"Get users",id:"get-users",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"get-users"},"Get users"),(0,r.kt)("p",null,"This endpoint can retrieve users from Lifecycle or you can search for users using parameters"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"query",in:"query",description:"Allows for pagination and sorting using the deepObject notation.\n\n</br>\n\n`resource?query[limit]=50&query[offset]=0&query[order]=label`\n\n</br>\n\n<table><thead>\n<tr>\n<th>Parameter</th>\n<th>Description</th>\n<th>Default</th>\n</tr>\n</thead><tbody>\n<tr>\n<td>limit</td>\n<td>Limits the number of results returned</td>\n<td>100</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>Returns the results starting at the value provided</td>\n<td>0</td>\n</tr>\n<tr>\n<td>order</td>\n<td>Allows you to determine the order in which the data is returned (not available on profile attributes)</td>\n<td>id</td>\n</tr>\n</tbody></table>\n",required:!1,schema:{type:"object",properties:{limit:{type:"integer",description:"The limit of results to return",example:100},offset:{type:"integer",description:"The number of records to offset",example:50},order:{type:"string",description:"The attribute to order by",example:"created_at"}}},style:"deepObject",explode:!0,example:"query[limit]=100&query[offset]=50&query[order]=created_at"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"name",in:"query",description:"object name for filtering",required:!1,schema:{type:"string"},example:"objectname"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"login",in:"query",description:"The user login to search by",required:!1,schema:{type:"string"},example:"myuser"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"title",in:"query",description:"The user title to search by",required:!1,schema:{type:"string"},example:"usertitle"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"status",in:"query",description:"status value for filtering",required:!1,schema:{type:"string",enum:["Active","Inactive","On Leave","Terminated"]},example:"Active"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"email",in:"query",description:"The user email to search by",required:!1,schema:{type:"string",format:"email"},example:"test@sailpoint.com"},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"metadata",in:"query",description:"Returns batching metadata in the response",required:!1,example:!0,schema:{type:"boolean",default:!1}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Expected response to a valid request")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"users"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"The id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"The uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:"The name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"email",required:!1,deprecated:void 0,schemaDescription:"The email",schemaName:"email",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:"The type",schemaName:"string",qualifierMessage:"**Possible values:** [`NeprofileUser`, `NeaccessUser`]",defaultValue:"NeprofileUser",mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:"The title",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:"The status",schemaName:"string",qualifierMessage:"**Possible values:** [`Active`, `Disabled`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"login",required:!1,deprecated:void 0,schemaDescription:"The login",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"last_login",required:!1,deprecated:void 0,schemaDescription:"The last login time",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"cookies_accepted_at",required:!1,deprecated:void 0,schemaDescription:"The time the cookies were accepted at",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"preferred_language",required:!1,deprecated:void 0,schemaDescription:"The preferred language",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"_metadata"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"limit",required:!1,deprecated:void 0,schemaDescription:"The limit",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"offset",required:!1,deprecated:void 0,schemaDescription:"The offset",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"total",required:!1,deprecated:void 0,schemaDescription:"The total",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"next",required:!1,deprecated:void 0,schemaDescription:"The link to the next page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"previous",required:!1,deprecated:void 0,schemaDescription:"The link to the previous page of data",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "users": [\n    {\n      "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n      "name": "bob",\n      "email": "example@sailpoint.com",\n      "type": "NeprofileUser",\n      "title": "mytitle",\n      "status": "Active",\n      "login": "bob",\n      "last_login": "2023-05-01T09:12:28Z",\n      "cookies_accepted_at": "2023-05-01T09:12:28Z",\n      "preferred_language": "en-US"\n    }\n  ],\n  "_metadata": {\n    "limit": 50,\n    "offset": 100,\n    "total": 10000,\n    "next": "/endpoint?limit=10&offset=60",\n    "previous": "/endpoint?limit=10&offset=40"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Bad Request - unable to complete.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("div",null,(0,r.kt)("span",{className:"badge badge--info"},"oneOf"),(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"MOD1",value:"0-item-properties",mdxType:"TabItem"},(0,r.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})),(0,r.kt)(m.Z,{label:"MOD2",value:"1-item-properties",mdxType:"TabItem"},(0,r.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"errors",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "error": "Invalid JSON syntax. Please check your syntax and try again."\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:"A message describing the error",schemaName:"",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);