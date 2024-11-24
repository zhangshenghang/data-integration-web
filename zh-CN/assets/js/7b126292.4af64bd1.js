"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[21476],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>b});var r=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=o,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(b,c(c({ref:n},u),{},{components:t})):r.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[m]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(58168),o=(t(96540),t(15680));const a={},c="CDC \u517c\u5bb9 Debezium-json",i={unversionedId:"connector-v2/formats/cdc-compatible-debezium-json",id:"connector-v2/formats/cdc-compatible-debezium-json",title:"CDC \u517c\u5bb9 Debezium-json",description:"SeaTunnel \u652f\u6301\u5c06 cdc \u8bb0\u5f55\u89e3\u6790\u4e3a Debezium-JSON \u6d88\u606f\uff0c\u5e76\u53d1\u5e03\u5230 MQ (kafka) \u7b49\u6d88\u606f\u7cfb\u7edf\u4e2d",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/formats/cdc-compatible-debezium-json.md",sourceDirName:"connector-v2/formats",slug:"/connector-v2/formats/cdc-compatible-debezium-json",permalink:"/zh-CN/docs/connector-v2/formats/cdc-compatible-debezium-json",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/connector-v2/formats/cdc-compatible-debezium-json.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Canal \u683c\u5f0f",permalink:"/zh-CN/docs/connector-v2/formats/canal-json"},next:{title:"Debezium \u683c\u5f0f",permalink:"/zh-CN/docs/connector-v2/formats/debezium-json"}},s={},l=[{value:"MySQL-CDC \u6d41\u5165 Kafka",id:"mysql-cdc-\u6d41\u5165-kafka",level:2}],u={toc:l},m="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"cdc-\u517c\u5bb9-debezium-json"},"CDC \u517c\u5bb9 Debezium-json"),(0,o.yg)("p",null,"SeaTunnel \u652f\u6301\u5c06 cdc \u8bb0\u5f55\u89e3\u6790\u4e3a Debezium-JSON \u6d88\u606f\uff0c\u5e76\u53d1\u5e03\u5230 MQ (kafka) \u7b49\u6d88\u606f\u7cfb\u7edf\u4e2d"),(0,o.yg)("p",null,"\u8fd9\u4e2a\u7279\u6027\u5728\u5f88\u591a\u573a\u666f\u4e0b\u90fd\u975e\u5e38\u5b9e\u7528\uff0c\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u5b9e\u73b0\u4e0e Debezium \u751f\u6001\u7cfb\u7edf\u7684\u517c\u5bb9\u6027"),(0,o.yg)("h1",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.yg)("h2",{id:"mysql-cdc-\u6d41\u5165-kafka"},"MySQL-CDC \u6d41\u5165 Kafka"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'env {\n  parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 15000\n}\n\nsource {\n  MySQL-CDC {\n    plugin_output = "table1"\n\n    base-url="jdbc:mysql://localhost:3306/test"\n    "startup.mode"=INITIAL\n    table-names=[\n        "database1.t1",\n        "database1.t2",\n        "database2.t1"\n    ]\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n    debezium = {\n        # include schema into kafka message\n        key.converter.schemas.enable = false\n        value.converter.schemas.enable = false\n        # include ddl\n        include.schema.changes = true\n        # topic prefix\n        database.server.name =  "mysql_cdc_1"\n    }\n  }\n}\n\nsink {\n  Kafka {\n    plugin_input = "table1"\n\n    bootstrap.servers = "localhost:9092"\n\n    # compatible_debezium_json options\n    format = compatible_debezium_json\n  }\n}\n')))}p.isMDXComponent=!0}}]);