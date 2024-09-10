"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[43648],{15680:(t,e,n)=>{n.d(e,{xA:()=>p,yg:()=>d});var r=n(96540);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),o=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=o(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,p=g(t,["components","mdxType","originalType","parentName"]),m=o(n),y=a,d=m["".concat(s,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=y;var g={};for(var s in e)hasOwnProperty.call(e,s)&&(g[s]=e[s]);g.originalType=t,g[m]="string"==typeof t?t:a,i[1]=g;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},92847:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>g,toc:()=>o});var r=n(58168),a=(n(96540),n(15680));const l={},i="Email",g={unversionedId:"spark/configuration/sink-plugins/Email",id:"version-2.1.0/spark/configuration/sink-plugins/Email",title:"Email",description:"Sink plugin : Email [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Email.md",sourceDirName:"spark/configuration/sink-plugins",slug:"/spark/configuration/sink-plugins/Email",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Email",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/sink-plugins/Email.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/Elasticsearch"},next:{title:"File",permalink:"/zh-CN/docs/2.1.0/spark/configuration/sink-plugins/File"}},s={},o=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"subject string",id:"subject-string",level:3},{value:"from string",id:"from-string",level:3},{value:"to string",id:"to-string",level:3},{value:"bodyText string",id:"bodytext-string",level:3},{value:"bodyHtml string",id:"bodyhtml-string",level:3},{value:"cc string",id:"cc-string",level:3},{value:"bcc string",id:"bcc-string",level:3},{value:"host string",id:"host-string",level:3},{value:"port string",id:"port-string",level:3},{value:"password string",id:"password-string",level:3},{value:"limit string",id:"limit-string",level:3},{value:"Examples",id:"examples",level:2}],p={toc:o},m="wrapper";function u(t){let{components:e,...n}=t;return(0,a.yg)(m,(0,r.A)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"email"},"Email"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Sink plugin : Email ","[Spark]")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Supports data output through ",(0,a.yg)("inlineCode",{parentName:"p"},"email attachments"),". The attachments are in the ",(0,a.yg)("inlineCode",{parentName:"p"},"xlsx")," format that supports ",(0,a.yg)("inlineCode",{parentName:"p"},"excel")," to open, which can be used to notify the task statistics results through email attachments."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"subject"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"from"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"to"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bodyText"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bodyHtml"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"cc"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"bcc"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"host"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"port"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"password"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"limit"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"100000")))),(0,a.yg)("h3",{id:"subject-string"},"subject ","[string]"),(0,a.yg)("p",null,"Email Subject"),(0,a.yg)("h3",{id:"from-string"},"from ","[string]"),(0,a.yg)("p",null,"Email sender"),(0,a.yg)("h3",{id:"to-string"},"to ","[string]"),(0,a.yg)("p",null,"Email recipients, multiple recipients separated by ",(0,a.yg)("inlineCode",{parentName:"p"},",")),(0,a.yg)("h3",{id:"bodytext-string"},"bodyText ","[string]"),(0,a.yg)("p",null,"Email content, text format"),(0,a.yg)("h3",{id:"bodyhtml-string"},"bodyHtml ","[string]"),(0,a.yg)("p",null,"Email content, hypertext content"),(0,a.yg)("h3",{id:"cc-string"},"cc ","[string]"),(0,a.yg)("p",null,"Email CC, multiple CCs separated by ",(0,a.yg)("inlineCode",{parentName:"p"},",")),(0,a.yg)("h3",{id:"bcc-string"},"bcc ","[string]"),(0,a.yg)("p",null,"Email Bcc, multiple Bccs separated by ",(0,a.yg)("inlineCode",{parentName:"p"},",")),(0,a.yg)("h3",{id:"host-string"},"host ","[string]"),(0,a.yg)("p",null,"Email server address, for example: ",(0,a.yg)("inlineCode",{parentName:"p"},"stmp.exmail.qq.com")),(0,a.yg)("h3",{id:"port-string"},"port ","[string]"),(0,a.yg)("p",null,"Email server port For example: ",(0,a.yg)("inlineCode",{parentName:"p"},"25")),(0,a.yg)("h3",{id:"password-string"},"password ","[string]"),(0,a.yg)("p",null,"The password of the email sender, the user name is the sender specified by ",(0,a.yg)("inlineCode",{parentName:"p"},"from")),(0,a.yg)("h3",{id:"limit-string"},"limit ","[string]"),(0,a.yg)("p",null,"The number of data is limited, the default is ",(0,a.yg)("inlineCode",{parentName:"p"},"100000")),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'Email {\n    subject = "Report statistics",\n    from = "xxxx@qq.com",\n    to = "xxxxx1@qq.com,xxxxx2@qq.com",\n    cc = "xxxxx3@qq.com,xxxxx4@qq.com",\n    bcc = "xxxxx5@qq.com,xxxxx6@qq.com",\n    host= "stmp.exmail.qq.com",\n    port= "25",\n    password = "***********",\n    limit = "1000"\n}\n')))}u.isMDXComponent=!0}}]);