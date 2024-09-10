"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13970],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},28708:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(96540),t(15680));const i={},a="Greenplum",l={unversionedId:"connector-v2/sink/Greenplum",id:"connector-v2/sink/Greenplum",title:"Greenplum",description:"Greenplum sink connector",source:"@site/docs/connector-v2/sink/Greenplum.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Greenplum",permalink:"/zh-CN/docs/connector-v2/sink/Greenplum",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Greenplum.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"GoogleFirestore",permalink:"/zh-CN/docs/connector-v2/sink/GoogleFirestore"},next:{title:"Hbase",permalink:"/zh-CN/docs/connector-v2/sink/Hbase"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"greenplum"},"Greenplum"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Greenplum sink connector")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Write data to Greenplum using ",(0,o.yg)("a",{parentName:"p",href:"Jdbc.md"},"Jdbc connector"),"."),(0,o.yg)("h2",{id:"key-features"},"Key Features"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Not support exactly-once semantics (XA transaction is not yet supported in Greenplum database).")),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,o.yg)("p",null,"Optional jdbc drivers:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"org.postgresql.Driver")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"com.pivotal.jdbc.GreenplumDriver"))),(0,o.yg)("p",null,"Warn: for license compliance, if you use ",(0,o.yg)("inlineCode",{parentName:"p"},"GreenplumDriver")," the have to provide Greenplum JDBC driver yourself, e.g. copy greenplum-xxx.jar to $SEATNUNNEL_HOME/lib for Standalone."),(0,o.yg)("h3",{id:"url-string"},"url ","[string]"),(0,o.yg)("p",null,"The URL of the JDBC connection. if you use postgresql driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:postgresql://${yous_host}:${yous_port}/${yous_database}"),", or you use greenplum driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:pivotal:greenplum://${yous_host}:${yous_port};DatabaseName=${yous_database}")),(0,o.yg)("h3",{id:"common-options"},"common options"),(0,o.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"../sink-common-options.md"},"Sink Common Options")," for details"),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Greenplum Sink Connector")))}m.isMDXComponent=!0}}]);