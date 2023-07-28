"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[80857],{77053:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={id:"upper",title:"Upper",pagination_label:"Upper",sidebar_label:"Upper",sidebar_class_name:"upper",keywords:["transforms","operations","upper"],description:"Convert an input string into all uppercase letters.",slug:"/docs/transforms/operations/upper",tags:["Transforms","Transform Operations"]},p=void 0,i={unversionedId:"docs/identity-now/transforms/operations/upper",id:"docs/identity-now/transforms/operations/upper",title:"Upper",description:"Convert an input string into all uppercase letters.",source:"@site/products/idn/docs/identity-now/transforms/operations/upper.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/upper",permalink:"/idn/docs/transforms/operations/upper",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/upper.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"upper",title:"Upper",pagination_label:"Upper",sidebar_label:"Upper",sidebar_class_name:"upper",keywords:["transforms","operations","upper"],description:"Convert an input string into all uppercase letters.",slug:"/docs/transforms/operations/upper",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Trim",permalink:"/idn/docs/transforms/operations/trim"},next:{title:"Username Generator",permalink:"/idn/docs/transforms/operations/username-generator"}},o={},l=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the upper transform to convert an input string into all uppercase letters."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The upper transform only requires the transform's ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "upper",\n  "name": "Upper Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Required Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"upper"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'This transform takes the input "inactive" and produces the output "INACTIVE".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "inactive"\nOutput: "INACTIVE"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "inactive"\n      },\n      "type": "static"\n    }\n  },\n  "type": "upper",\n  "name": "Upper Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform takes the input "Everyone" and produces the output "EVERYONE".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "Everyone"\nOutput: "EVERYONE"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "Everyone"\n      },\n      "type": "static"\n    }\n  },\n  "type": "upper",\n  "name": "Upper Transform"\n}\n')))}m.isMDXComponent=!0}}]);