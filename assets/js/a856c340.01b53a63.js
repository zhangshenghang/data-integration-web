"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[86067],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),y=l,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||r;return t?a.createElement(g,i(i({ref:n},c),{},{components:t})):a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},5816:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(58168),l=(t(96540),t(15680));const r={},i="Sink Options Placeholders",o={unversionedId:"concept/sink-options-placeholders",id:"concept/sink-options-placeholders",title:"Sink Options Placeholders",description:"Introduction",source:"@site/docs/concept/sink-options-placeholders.md",sourceDirName:"concept",slug:"/concept/sink-options-placeholders",permalink:"/docs/concept/sink-options-placeholders",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/sink-options-placeholders.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Job Env Config",permalink:"/docs/concept/JobEnvConfig"},next:{title:"SQL Configuration File",permalink:"/docs/concept/sql-config"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Placeholder",id:"placeholder",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sink-options-placeholders"},"Sink Options Placeholders"),(0,l.yg)("h2",{id:"introduction"},"Introduction"),(0,l.yg)("p",null,"The SeaTunnel provides a sink options placeholders feature that allows you to get upstream table metadata through placeholders."),(0,l.yg)("p",null,"This functionality is essential when you need to dynamically get upstream table metadata (such as multi-table writes)."),(0,l.yg)("p",null,"This document will guide you through the usage of these placeholders and how to leverage them effectively."),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSpark",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"placeholder"},"Placeholder"),(0,l.yg)("p",null,"The placeholders are mainly controlled by the following expressions:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${database_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the database in the upstream catalog table"),(0,l.yg)("li",{parentName:"ul"},"Default values can also be specified via expressions\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${database_name:default_my_db}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the schema in the upstream catalog table"),(0,l.yg)("li",{parentName:"ul"},"Default values can also be specified via expressions\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name:default_my_schema}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${table_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table in the upstream catalog table"),(0,l.yg)("li",{parentName:"ul"},"Default values can also be specified via expressions\uff1a",(0,l.yg)("inlineCode",{parentName:"li"},"${table_name:default_my_table}")))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${schema_full_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the schema full path(database & schema) in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${table_full_name}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table full path(database & schema & table) in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${primary_key}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table primary-key fields in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${unique_key}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table unique-key fields in the upstream catalog table"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"${field_names}"),(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Used to get the table field keys in the upstream catalog table")))),(0,l.yg)("h2",{id:"configuration"},"Configuration"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"Requires"),":"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Make sure the sink connector you are using has implemented ",(0,l.yg)("inlineCode",{parentName:"li"},"TableSinkFactory")," API")),(0,l.yg)("h3",{id:"example-1"},"Example 1"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  // ignore...\n}\nsource {\n  MySQL-CDC {\n    // ignore...\n  }\n}\n\ntransform {\n  // ignore...\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://localhost:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    database = "${database_name}_test"\n    table = "${table_name}_test"\n    primary_keys = ["${primary_key}"]\n  }\n}\n')),(0,l.yg)("h3",{id:"example-2"},"Example 2"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  // ignore...\n}\nsource {\n  Oracle-CDC {\n    // ignore...\n  }\n}\n\ntransform {\n  // ignore...\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://localhost:3306"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "root"\n    password = "123456"\n\n    database = "${schema_name}_test"\n    table = "${table_name}_test"\n    primary_keys = ["${primary_key}"]\n  }\n}\n')),(0,l.yg)("p",null,"We will complete the placeholder replacement before the connector is started, ensuring that the sink options is ready before use.\nIf the variable is not replaced, it may be that the upstream table metadata is missing this option, for example:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"mysql")," source not contain ",(0,l.yg)("inlineCode",{parentName:"li"},"${schema_name}")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"oracle")," source not contain ",(0,l.yg)("inlineCode",{parentName:"li"},"${databse_name}")),(0,l.yg)("li",{parentName:"ul"},"...")))}m.isMDXComponent=!0}}]);