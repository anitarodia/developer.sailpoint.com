"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[55133],{47753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={id:"getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"gettingStarted",keywords:["getting started"],description:"This is this place to get started with IdentityNow APIs.",slug:"/api/getting-started",tags:["Getting Started"]},r=void 0,s={unversionedId:"api/getting-started",id:"api/getting-started",title:"Getting Started",description:"This is this place to get started with IdentityNow APIs.",source:"@site/products/idn/api/getting-started.md",sourceDirName:"api",slug:"/api/getting-started",permalink:"/idn/api/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/api/getting-started.md",tags:[{label:"Getting Started",permalink:"/idn/tags/getting-started"}],version:"current",lastUpdatedBy:"Animesh Tarodia",lastUpdatedAt:1690548982,formattedLastUpdatedAt:"Jul 28, 2023",sidebarPosition:1,frontMatter:{id:"getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:1,sidebar_class_name:"gettingStarted",keywords:["getting started"],description:"This is this place to get started with IdentityNow APIs.",slug:"/api/getting-started",tags:["Getting Started"]},sidebar:"openApiSidebar",next:{title:"Authentication",permalink:"/idn/api/authentication"}},l={},d=[{value:"Find Your Tenant Name",id:"find-your-tenant-name",level:2},{value:"Make Your First API Call",id:"make-your-first-api-call",level:2},{value:"Rate Limits",id:"rate-limits",level:2},{value:"API Tools",id:"api-tools",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find-your-tenant-name"},"Find Your Tenant Name"),(0,i.kt)("p",null,"To form the proper URL for an API request, you must know your tenant name. To find your tenant name, log into IdentityNow, navigate to Admin, select the Dashboard dropdown, and select Overview. The org name is displayed within the Org Details section of the dashboard. If you do not have admin access, you can still find your tenant name and the API base URL you will use for API calls. To do so, view your session details when you are logged into your IdentityNow instance. Change your URL to the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://{your-IdentityNow-hostname}.com/ui/session"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"{your-IdentityNow-hostname}")," is your company's domain name for accessing IdentityNow. The session detail you want is the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl"),", which has the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"https://{tenant}.api.identitynow.com"),"."),(0,i.kt)("h2",{id:"make-your-first-api-call"},"Make Your First API Call"),(0,i.kt)("p",null,"To get started, create a ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/authentication#personal-access-tokens"},"personal access token"),", which can then be used to generate access tokens to authenticate your API calls. To generate a personal access token from IdentityNow, after logging into your IdentityNow instance, do the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Preferences")," from the drop-down menu under your username. Then select ",(0,i.kt)("strong",{parentName:"p"},"Personal Access Tokens")," on the left. You can also go straight to the page using this URL, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"{tenant}")," with your IdentityNow tenant: ",(0,i.kt)("inlineCode",{parentName:"p"},"https://{tenant}.identitynow.com/ui/d/user-preferences/personal-access-tokens"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"New Token")," and enter a meaningful description to differentiate the token from others."))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("strong",{parentName:"p"},"New Token")," button will be disabled when you reach the limit of 10 personal access tokens per user. To avoid reaching this limit, delete any tokens that are no longer needed.")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Create Token")," to generate and view two components the token comprises: the ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID"),"."),(0,i.kt)("admonition",{parentName:"li",title:"Important",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"After you create the token, the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," will be visible in the Personal Access Tokens list, but the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," will not be visible after you close the window. Store the ",(0,i.kt)("inlineCode",{parentName:"p"},"Secret")," somewhere secure."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy both values somewhere that will be secure and accessible to you when you need to use the the token.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To create an ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," that can be used to authenticate API requests, use the following cURL command, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"{tenant}")," with your IdentityNow tenant. The response body will contain an ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),", which will look like a long string of random characters."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://{tenant}.api.identitynow.com/oauth/token?grant_type=client_credentials&client_id={client_id}&client_secret={secret}'\n")),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"To test your ",(0,i.kt)("inlineCode",{parentName:"li"},"access_token"),", execute the following cURL command, replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"{tenant}")," with your IdentityNow tenant and ",(0,i.kt)("inlineCode",{parentName:"li"},"access_token")," with the token you generated in the previous step. If this is successful, you should get a JSON representation of an identity in your tenant.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request GET --url 'https://{tenant}.api.identitynow.com/v3/public-identities?limit=1' --header 'authorization: Bearer {access_token}'\n")),(0,i.kt)("p",null,"For more information about SailPoint Platform authentication, see ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/authentication"},"API Authentication")),(0,i.kt)("h2",{id:"rate-limits"},"Rate Limits"),(0,i.kt)("p",null,"There is a rate limit of 100 requests per ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," per 10 seconds for V3 API calls through the API gateway. If you exceed the rate limit, expect the following response from the API:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HTTP Status Code"),": 429 Too Many Requests"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Headers"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Retry-After"),": {seconds to wait before rate limit resets}")),(0,i.kt)("h2",{id:"api-tools"},"API Tools"),(0,i.kt)("p",null,"There are several API tools that make exploring and testing APIs easier than using the command line or a programming language. One tool is ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Postman"),". SailPoint provides an official Postman workspace where our collections are always up to date with the latest API changes. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.sailpoint.com/discuss/t/official-identitynow-postman-workspace/6153"},"Click here")," to get started with our Postman workspace."))}c.isMDXComponent=!0}}]);