"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72130],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=g(n),s=r,y=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},29384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const l={},i=void 0,o={unversionedId:"configuration/input-plugins/Fake",id:"version-1.x/configuration/input-plugins/Fake",title:"Fake",description:"Input plugin : Fake",source:"@site/versioned_docs/version-1.x/configuration/input-plugins/Fake.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Fake",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/Fake",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugins/Fake.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Alluxio",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/Alluxio"},next:{title:"File",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/File"}},p={},g=[{value:"Input plugin : Fake",id:"input-plugin--fake",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"data_format string",id:"data_format-string",level:5},{value:"json_keys array",id:"json_keys-array",level:5},{value:"num_of_fields number",id:"num_of_fields-number",level:5},{value:"rate number",id:"rate-number",level:5},{value:"text_delimiter string",id:"text_delimiter-string",level:5},{value:"Examples",id:"examples",level:3}],u={toc:g},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"input-plugin--fake"},"Input plugin : Fake"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,r.yg)("li",{parentName:"ul"},"Homepage: ",(0,r.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,r.yg)("li",{parentName:"ul"},"Version: 1.1.0")),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"Input plugin for producing test data."),(0,r.yg)("h3",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#data_format-string"},"data_format")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"text")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#json_keys-array"},"json_keys")),(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#num_of_fields-number"},"num_of_fields")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#rate-number"},"rate")),(0,r.yg)("td",{parentName:"tr",align:null},"number"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"#text_delimeter-string"},"text_delimeter")),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},",")))),(0,r.yg)("h5",{id:"data_format-string"},"data_format ","[string]"),(0,r.yg)("p",null,"The format of test data, supports ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"json")),(0,r.yg)("h5",{id:"json_keys-array"},"json_keys ","[array]"),(0,r.yg)("p",null,"The list of JSON data's key, used when ",(0,r.yg)("inlineCode",{parentName:"p"},"data_format")," is json"),(0,r.yg)("h5",{id:"num_of_fields-number"},"num_of_fields ","[number]"),(0,r.yg)("p",null,"The number of fields, used when ",(0,r.yg)("inlineCode",{parentName:"p"},"data_format")," is text"),(0,r.yg)("h5",{id:"rate-number"},"rate ","[number]"),(0,r.yg)("p",null,"The number of test data produced per second"),(0,r.yg)("h5",{id:"text_delimiter-string"},"text_delimiter ","[string]"),(0,r.yg)("p",null,"Text data separator, used when ",(0,r.yg)("inlineCode",{parentName:"p"},"data_format")," is text"),(0,r.yg)("h3",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"With ",(0,r.yg)("inlineCode",{parentName:"p"},"data_format")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'fake {\n    data_format = "text"\n    text_delimeter = ","\n    num_of_fields = 5\n    rate = 5\n}\n')))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-------------------------------------------------------------------------------------------+\n|raw_message                                                                                |\n+-------------------------------------------------------------------------------------------+\n|Random1-1462437280,Random215896330,Random3-2009195549,Random41027365838,Random51525395111  |\n|Random1-2135047059,Random2-1030689538,Random3-854912064,Random4126768642,Random5-1483841750|\n+-------------------------------------------------------------------------------------------+\n")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Without ",(0,r.yg)("inlineCode",{parentName:"p"},"data_format")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"fake {\n    content = ['name=ricky&age=23', 'name=gary&age=28']\n    rate = 5\n}\n")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Input")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"+-----------------+\n|raw_message      |\n+-----------------+\n|name=gary&age=28 |\n|name=ricky&age=23|\n+-----------------+\n")),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Randomly extract the string from the ",(0,r.yg)("inlineCode",{parentName:"p"},"content ")," list")))))}d.isMDXComponent=!0}}]);