"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[72560],{67663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const a={id:"test-build-deploy",title:"Test, Build, and Deploy",pagination_label:"Test, Build, and Deploy",sidebar_label:"Test, Build, and Deploy",sidebar_position:2,sidebar_class_name:"testBuildDeploy",keywords:["connectivity","connectors","test","build","deploy"],description:"As you implement command handlers, you must test them. The connector SDK provides some utility methods to locally run your connector to test, build, and deploy.",slug:"/docs/saas-connectivity/test-build-deploy",tags:["Connectivity"]},l=void 0,c={unversionedId:"docs/identity-now/saas-connectivity/test-build-deploy",id:"docs/identity-now/saas-connectivity/test-build-deploy",title:"Test, Build, and Deploy",description:"As you implement command handlers, you must test them. The connector SDK provides some utility methods to locally run your connector to test, build, and deploy.",source:"@site/products/idn/docs/identity-now/saas-connectivity/test-build-deploy.md",sourceDirName:"docs/identity-now/saas-connectivity",slug:"/docs/saas-connectivity/test-build-deploy",permalink:"/idn/docs/saas-connectivity/test-build-deploy",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/test-build-deploy.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:2,frontMatter:{id:"test-build-deploy",title:"Test, Build, and Deploy",pagination_label:"Test, Build, and Deploy",sidebar_label:"Test, Build, and Deploy",sidebar_position:2,sidebar_class_name:"testBuildDeploy",keywords:["connectivity","connectors","test","build","deploy"],description:"As you implement command handlers, you must test them. The connector SDK provides some utility methods to locally run your connector to test, build, and deploy.",slug:"/docs/saas-connectivity/test-build-deploy",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Videos",permalink:"/idn/docs/saas-connectivity/videos"},next:{title:"Common CLI Commands",permalink:"/idn/docs/saas-connectivity/common-cli-commands"}},r={},s=[{value:"Testing Your Connector",id:"testing-your-connector",level:2},{value:"Create and Upload Connector Bundle",id:"create-and-upload-connector-bundle",level:2},{value:"Package Connector Files",id:"package-connector-files",level:3},{value:"Create Connector In Your Org",id:"create-connector-in-your-org",level:3},{value:"Upload Connector Zip File to IdentityNow",id:"upload-connector-zip-file-to-identitynow",level:3},{value:"Test Your Connector in IdentityNow",id:"test-your-connector-in-identitynow",level:2},{value:"Test Your Connector Bundle In IdentityNow",id:"test-your-connector-bundle-in-identitynow",level:3},{value:"Test Your Connector from IdentityNow UI",id:"test-your-connector-from-identitynow-ui",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"testing-your-connector"},"Testing Your Connector"),(0,i.kt)("p",null,"You can use the following Postman Collection file to locally run tests for each of the commands."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(76451).Z},"Postman Collection")),(0,i.kt)("p",null,"As you implement command handlers, you must test them. The connector SDK provides some utility methods to locally run your connector. To start, run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run dev")," within the connector project folder. This script locally starts an Express server on port 3000, which can be used to invoke a command against the connector. You do not need to restart this process after making changes to connector code. Once the Express server is started, you can send ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000")," and test your command handlers. For example, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"POST localhost:3000")," with the following payload to run the stdAccountRead handler method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "std:account:read",\n  "input": {\n    "identity": "john.doe"\n  },\n  "config": {\n    "token": ""\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"type:")," The command handler\u2019s name. It also refers to the operation being performed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"input:")," Input to provide to the command handler."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"config:")," The configuration values required to test locally. A ",(0,i.kt)("inlineCode",{parentName:"li"},"token")," value is not required, but the default project specifies ",(0,i.kt)("inlineCode",{parentName:"li"},"token"),", so you must include it in your request to begin.")),(0,i.kt)("h2",{id:"create-and-upload-connector-bundle"},"Create and Upload Connector Bundle"),(0,i.kt)("p",null,"Follow these steps to use the CLI to package a connector bundle, create it in your IdentityNow org, and upload it to IdentityNow."),(0,i.kt)("h3",{id:"package-connector-files"},"Package Connector Files"),(0,i.kt)("p",null,"You must compress the files in the connector project into a zip file before uploading them to IdentityNow."),(0,i.kt)("p",null,"Use the CLI to run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run pack-zip")," to build and package the connector bundle. Put the resulting zip file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dist")," folder."),(0,i.kt)("h3",{id:"create-connector-in-your-org"},"Create Connector In Your Org"),(0,i.kt)("p",null,"Before uploading the zip file, you must create an entry for the connector in your IdentityNow org. Run ",(0,i.kt)("inlineCode",{parentName:"p"},'sail conn create "my-project"')," to create a connector entry."),(0,i.kt)("p",null,"The response to this command contains a connector ID you can use to manage this connector."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ sail conn create "example-connector"\n+--------------------------------------+----------------------------+\n|                  ID                  |           ALIAS            |\n+--------------------------------------+----------------------------+\n| a9360354-2f9d-4111-bff6-7cd53184a61e | example-connector          |\n+--------------------------------------+----------------------------+\n')),(0,i.kt)("p",null,"Run the following command to retrieve the connector ID at any time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sail conn list\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sail conn list\n+--------------------------------------+----------------------------+\n|                  ID                  |           ALIAS            |\n+--------------------------------------+----------------------------+\n| 39fe3f4f-3559-4e1f-98bb-2f6d0bcb13dc | airtable-hr                |\n| a9360354-2f9d-4111-bff6-7cd53184a61e | example-connector          |\n+--------------------------------------+----------------------------+\n")),(0,i.kt)("h3",{id:"upload-connector-zip-file-to-identitynow"},"Upload Connector Zip File to IdentityNow"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"sail conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip")," to upload the zip file built from the previous step to IdentityNow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sail conn upload -c example-connector -f dist/example-connector-0.1.0.zip\n+--------------------------------------+---------+\n|             CONNECTOR ID             | VERSION |\n+--------------------------------------+---------+\n| a9360354-2f9d-4111-bff6-7cd53184a61e |       7 |\n+--------------------------------------+---------+\n")),(0,i.kt)("p",null,"The first version upload of connector zip file also creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," tag, pointing to the latest version of the connector file. After uploading the connector bundle zip file, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"sail conn tags list -c example-connector")," to see the connector tags."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sail conn tags list -c example-connector\n+--------------------------------------+----------+----------------+\n|                  ID                  | TAG NAME | ACTIVE VERSION |\n+--------------------------------------+----------+----------------+\n| 8cd99eea-cfe1-424f-abfd-6494292b13a8 | latest   |              3 |\n+--------------------------------------+----------+----------------+\n")),(0,i.kt)("admonition",{title:"Important",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that you implement a form of version control or regular backup process for your connectors.\nYou cannot recover the source code from IDN because it gets sent to IDN as a compiled and minified JavaScript (JS) bundle that cannot be easily expanded into its original source code structure. ")),(0,i.kt)("h2",{id:"test-your-connector-in-identitynow"},"Test Your Connector in IdentityNow"),(0,i.kt)("p",null,"Follow these steps to test a connector bundle in both IdentityNow and the IdentityNow user interface (UI)."),(0,i.kt)("h3",{id:"test-your-connector-bundle-in-identitynow"},"Test Your Connector Bundle In IdentityNow"),(0,i.kt)("p",null,"The connector CLI provides ways to test invoking commands with any connector upload version. Before running a command, create a file, ",(0,i.kt)("strong",{parentName:"p"},"config.json"),", in the root project folder. Include any configuration items required to interact with the target web service in this file, such as API token, username, password, organization, version, etc. The following snippet is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "token": "123acsa494fbasd#asd"\n}\n')),(0,i.kt)("p",null,"This file is required and requires at least one key value even if your connector does not require anything."),(0,i.kt)("p",null,"Next, invoke the command using the connector ID and config.json. For example, this command invokes std:account:list command on the connector:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sail connectors invoke account-list -c example-connector -p config.json\n")),(0,i.kt)("p",null,"You will receive a list of JSON objects for each account the connector contains."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ sail connectors invoke account-list -c example-connector -p config.json\n2022/06/29 11:06:07 Running "std:account:list" with "{}"\n{"key":{"simple":{"id":"john.doe"}},"disabled":false,"locked":false,"attributes":{"id":"john.doe","displayName":"John Doe","entitlements":["administrator","sailpoint"]}}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Sensitive information!"),(0,i.kt)("p",{parentName:"blockquote"},"Ensure that you add config.json to your .gitignore file so you do not accidentally store secrets in your code repository.")),(0,i.kt)("h2",{id:"test-your-connector-from-identitynow-ui"},"Test Your Connector from IdentityNow UI"),(0,i.kt)("p",null,"Go to your IdentityNow org\u2019s source section. Create a source from the connector you just uploaded. This connector will display in the dropdown list: ",(0,i.kt)("strong",{parentName:"p"},"example-connector (tag: latest)")),(0,i.kt)("p",null,"After creating a source, you can to test connection, aggregate account, etc. from the IdentityNow UI."))}u.isMDXComponent=!0},76451:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/SaaS_Connectivity-c9f05c25bfcf75582e91ff681b74fd6c.postman_collection"}}]);