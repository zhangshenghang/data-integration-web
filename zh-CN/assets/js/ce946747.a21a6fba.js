"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[86918],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,y=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(58168),o=(n(96540),n(15680));const i={},a="Phoenix",c={unversionedId:"connector-v2/source/Phoenix",id:"version-2.3.4/connector-v2/source/Phoenix",title:"Phoenix",description:"Phoenix source connector",source:"@site/versioned_docs/version-2.3.4/connector-v2/source/Phoenix.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Phoenix",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Phoenix",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/connector-v2/source/Phoenix.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Persistiq",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Persistiq"},next:{title:"Postgre CDC",permalink:"/zh-CN/docs/2.3.4/connector-v2/source/Postgre-CDC"}},l={},s=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"driver string",id:"driver-string",level:3},{value:"url string",id:"url-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],p={toc:s},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"phoenix"},"Phoenix"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Phoenix source connector")),(0,o.yg)("h2",{id:"description"},"Description"),(0,o.yg)("p",null,"Read Phoenix data through ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/connector-v2/source/Jdbc"},"Jdbc connector"),".\nSupport Batch mode and Streaming mode. The tested Phoenix version is 4.xx and 5.xx\nOn the underlying implementation, through the jdbc driver of Phoenix, execute the upsert statement to write data to HBase.\nTwo ways of connecting Phoenix with Java JDBC. One is to connect to zookeeper through JDBC, and the other is to connect to queryserver through JDBC thin client."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tips: By default, the (thin) driver jar is used. If you want to use the (thick) driver  or other versions of Phoenix (thin) driver, you need to recompile the jdbc connector module")),(0,o.yg)("h2",{id:"key-features"},"Key features"),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"batch")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"stream")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"exactly-once")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"column projection"))),(0,o.yg)("p",null,"supports query SQL and can achieve projection effect."),(0,o.yg)("ul",{className:"contains-task-list"},(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"parallelism")),(0,o.yg)("li",{parentName:"ul",className:"task-list-item"},(0,o.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,o.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.3.4/concept/connector-v2-features"},"support user-defined split"))),(0,o.yg)("h2",{id:"options"},"Options"),(0,o.yg)("h3",{id:"driver-string"},"driver ","[string]"),(0,o.yg)("p",null,"if you use phoenix (thick) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.phoenix.jdbc.PhoenixDriver")," or you use (thin) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.phoenix.queryserver.client.Driver")),(0,o.yg)("h3",{id:"url-string"},"url ","[string]"),(0,o.yg)("p",null,"if you use phoenix (thick) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:phoenix:localhost:2182/hbase")," or you use (thin) driver the value is ",(0,o.yg)("inlineCode",{parentName:"p"},"jdbc:phoenix:thin:url=http://localhost:8765;serialization=PROTOBUF")),(0,o.yg)("h3",{id:"common-options"},"common options"),(0,o.yg)("p",null,"Source plugin common parameters, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.3.4/connector-v2/source/common-options"},"Source Common Options")," for details"),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"use thick client drive"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'    Jdbc {\n        driver = org.apache.phoenix.jdbc.PhoenixDriver\n        url = "jdbc:phoenix:localhost:2182/hbase"\n        query = "select age, name from test.source"\n    }\n\n')),(0,o.yg)("p",null,"use thin client drive"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'Jdbc {\n    driver = org.apache.phoenix.queryserver.client.Driver\n    url = "jdbc:phoenix:thin:url=http://spark_e2e_phoenix_sink:8765;serialization=PROTOBUF"\n    query = "select age, name from test.source"\n}\n')),(0,o.yg)("h2",{id:"changelog"},"Changelog"),(0,o.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Add Phoenix Source Connector")))}h.isMDXComponent=!0}}]);