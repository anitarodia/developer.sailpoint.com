"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[90702],{9505:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>v,frontMatter:()=>u,metadata:()=>b,toc:()=>y});var a=i(87462),o=(i(67294),i(3905)),n=i(26389),p=i(94891),d=(i(75190),i(47507)),s=i(24310),r=i(63303),l=(i(75035),i(85162));const u={id:"post-attribute-option",sidebar_label:"Add a value to an option based attribute",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"postAttributeOption",description:"Add a value to an option based attribute",tags:["Attribute Options"],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{ne_attribute_option:{type:"object",properties:{ne_attribute_id:{description:"The ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},option:{description:"The option",type:"string",example:"option1"}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{ne_attribute_option:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},ne_attribute_id:{description:"the ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},option:{description:"the option",type:"string",example:"myoption"}}}}}}}},405:{description:"Invalid input"}},method:"post",path:"/ne_attribute_option",jsonRequestBodyExample:{ne_attribute_option:{ne_attribute_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",option:"option1"}},info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Add a value to an option based attribute",description:{content:"Add a value to an option based attribute",type:"text/plain"},url:{path:["ne_attribute_option"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Add a value to an option based attribute' (post-attribute-option)"},c=void 0,b={unversionedId:"api/post-attribute-option",id:"api/post-attribute-option",title:"post-attribute-option",description:"Add a value to an option based attribute",source:"@site/products/nerm/api/post-attribute-option.api.mdx",sourceDirName:"api",slug:"/api/post-attribute-option",permalink:"/nerm/api/post-attribute-option",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Add a value to an option based attribute' (post-attribute-option)",tags:[],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"post-attribute-option",sidebar_label:"Add a value to an option based attribute",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"postAttributeOption",description:"Add a value to an option based attribute",tags:["Attribute Options"],requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{ne_attribute_option:{type:"object",properties:{ne_attribute_id:{description:"The ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},option:{description:"The option",type:"string",example:"option1"}}}}}}}},responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",properties:{ne_attribute_option:{type:"object",properties:{id:{description:"the id",type:"string",format:"uuid",readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},uid:{description:"the uid",type:"string",minLength:32,maxLength:32,readOnly:!0,example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},ne_attribute_id:{description:"the ne_attribute_id",type:"string",format:"uuid",example:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e"},option:{description:"the option",type:"string",example:"myoption"}}}}}}}},405:{description:"Invalid input"}},method:"post",path:"/ne_attribute_option",jsonRequestBodyExample:{ne_attribute_option:{ne_attribute_id:"db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",option:"option1"}},info:{version:"1.0.0",title:"NERM Lifecycle API",description:"The Lifecycle API can be used to access and modify various resources in your environment.",license:{name:"MIT"}},postman:{name:"Add a value to an option based attribute",description:{content:"Add a value to an option based attribute",type:"text/plain"},url:{path:["ne_attribute_option"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-lifecycle-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Add a value to an option based attribute' (post-attribute-option)"},sidebar:"nermOpenApiSidebar",previous:{title:"Find attribute data by id",permalink:"/nerm/api/get-attribute"},next:{title:"Get option based attribute values",permalink:"/nerm/api/get-attribute-options"}},m={},y=[{value:"Add a value to an option based attribute",id:"add-a-value-to-an-option-based-attribute",level:2}],h={toc:y};function v(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-a-value-to-an-option-based-attribute"},"Add a value to an option based attribute"),(0,o.kt)("p",null,"Add a value to an option based attribute"),(0,o.kt)(p.Z,{mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Request Body"),(0,o.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"ne_attribute_option"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(s.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,deprecated:void 0,schemaDescription:"The ne_attribute_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"option",required:!1,deprecated:void 0,schemaDescription:"The option",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))),(0,o.kt)("div",null,(0,o.kt)(n.Z,{mdxType:"ApiTabs"},(0,o.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Expected response to a valid request")),(0,o.kt)("div",null,(0,o.kt)(p.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,o.kt)(r.Z,{mdxType:"SchemaTabs"},(0,o.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(s.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"ne_attribute_option"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)(s.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:"the id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"uid",required:!1,deprecated:void 0,schemaDescription:"the uid",schemaName:"string",qualifierMessage:"**Possible values:** `>= 32 characters` and `<= 32 characters`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"ne_attribute_id",required:!1,deprecated:void 0,schemaDescription:"the ne_attribute_id",schemaName:"uuid",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,o.kt)(s.Z,{collapsible:!1,name:"option",required:!1,deprecated:void 0,schemaDescription:"the option",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,o.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(d.Z,{responseExample:'{\n  "ne_attribute_option": {\n    "id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "uid": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "ne_attribute_id": "db6f8e8b-65c2-47d5-a0db-90bcc4e9df9e",\n    "option": "myoption"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(l.Z,{label:"405",value:"405",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"Invalid input")),(0,o.kt)("div",null)))))}v.isMDXComponent=!0}}]);