"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[21468],{11438:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={id:"test-connection",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Ensure the connector can communicate with the source.",slug:"/docs/saas-connectivity/commands/test-connection",tags:["Connectivity","Connector Command"]},c=void 0,s={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/test-connection",id:"docs/identity-now/saas-connectivity/connector-commands/test-connection",title:"Test Connection",description:"Ensure the connector can communicate with the source.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/test-connection.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/test-connection",permalink:"/idn/docs/saas-connectivity/commands/test-connection",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/test-connection.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"test-connection",title:"Test Connection",pagination_label:"Test Connection",sidebar_label:"Test Connection",keywords:["connectivity","connectors","test connection"],description:"Ensure the connector can communicate with the source.",slug:"/docs/saas-connectivity/commands/test-connection",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Entitlement Read",permalink:"/idn/docs/saas-connectivity/commands/entitlement-read"},next:{title:"API Calls",permalink:"/idn/docs/saas-connectivity/in-depth/api-calls"}},r={},l=[{value:"Example StdTestConnectionOutput",id:"example-stdtestconnectionoutput",level:3},{value:"Summary",id:"summary",level:2},{value:"Implementation",id:"implementation",level:2}],d={toc:l};function m(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,a.kt)("td",{parentName:"tr",align:"center"},"undefined")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdTestConnectionOutput")))),(0,a.kt)("h3",{id:"example-stdtestconnectionoutput"},"Example StdTestConnectionOutput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n}\n")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"The test connection command ensures the connector can communicate with the target web service. It validates API credentials, host names, ports, and other configuration items. To implement this command, look for either a health endpoint or a simple GET endpoint. Some web services implement a health endpoint that returns status information about the service, which can be useful to test a connection. If no health endpoint exists, use a simple GET endpoint that takes few to no parameters to ensure the connector can make a successful call to the web service."),(0,a.kt)("p",null,"Use \u2018Test Connection\u2019 in the IDN UI after an admin has finished entering configuration information for a new instance of the connector."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Test Connection",src:n(41097).Z,width:"2559",height:"843"})),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts"),", add the test connection function handler to your connector. Within this function, send a simple request to your web service to ensure the connection works. The web service this connector targets has a JavaScript SDK, so define your own function like the following example to test the connection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdTestConnection(async (context: Context, input: undefined, res: Response<StdTestConnectionOutput>) => {\n            res.send(await airtable.testConnection())\n        })\n        ...\n        ...\n}\n")),(0,a.kt)("p",null,"To implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"testConnection()")," function, use the following function created in the web service client code, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," /**\n     * Test connection by listing users from the Airtable instance.\n     * This will make sure the apiKey has the correct access.\n     * @returns empty struct if response is 2XX\n     */\n    async testConnection(): Promise<any> {\n        return this.airTableBase('Users').select({\n            view: 'Grid view'\n        }).firstPage().then(records => {\n            return {}\n        }).catch(err => {\n            throw new ConnectorError('unable to connect')\n        })\n    }\n")),(0,a.kt)("p",null,"This function calls an endpoint on the target web service to list all users. If the call is successful, the web service returns an empty object, which is okay because you do not need to do anything with the data. Your only goal is to ensure that you can make API calls with the provided configuration."))}m.isMDXComponent=!0},41097:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/test_command_idn-5683243e47604fde001aaa1a74e70fde.png"}}]);