"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[91450],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,y=s["".concat(l,".").concat(m)]||s[m]||g[m]||o;return n?r.createElement(y,u(u({ref:t},c),{},{components:n})):r.createElement(y,u({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=n[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={},u="Output plugin",i={unversionedId:"configuration/output-plugin",id:"version-1.x/configuration/output-plugin",title:"Output plugin",description:"Output plugin common parameters",source:"@site/versioned_docs/version-1.x/configuration/output-plugin.md",sourceDirName:"configuration",slug:"/configuration/output-plugin",permalink:"/zh-CN/docs/1.x/configuration/output-plugin",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/output-plugin.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Output-Plugin",permalink:"/zh-CN/docs/1.x/category/output"},next:{title:"Alluxio",permalink:"/zh-CN/docs/1.x/configuration/output-plugins/Alluxio"}},l={},p=[{value:"Output plugin common parameters",id:"output-plugin-common-parameters",level:3},{value:"source_table_name string",id:"source_table_name-string",level:5},{value:"Usage example",id:"usage-example",level:3}],c={toc:p},s="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"output-plugin"},"Output plugin"),(0,a.yg)("h3",{id:"output-plugin-common-parameters"},"Output plugin common parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"#source_table_name-string"},"source_table_name")),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h5",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin processes the dataset output by the previous plugin in the configuration file;"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin processes the dataset corresponding to this parameter."),(0,a.yg)("h3",{id:"usage-example"},"Usage example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'stdout {\n     source_table_name = "view_table_2"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Output a temporary table named ",(0,a.yg)("inlineCode",{parentName:"p"},"view_table_2"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"stdout {}\n")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not configured, output the processing result of the last ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," plugin in the configuration file")))}g.isMDXComponent=!0}}]);