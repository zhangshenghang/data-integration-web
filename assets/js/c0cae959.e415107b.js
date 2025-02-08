"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[95954],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>d});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=r,d=u["".concat(c,".").concat(y)]||u[y]||g[y]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const l={},o="Maxcompute",i={unversionedId:"connector-v2/source/Maxcompute",id:"connector-v2/source/Maxcompute",title:"Maxcompute",description:"Maxcompute source connector",source:"@site/docs/connector-v2/source/Maxcompute.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Maxcompute",permalink:"/docs/connector-v2/source/Maxcompute",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Maxcompute.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"LocalFile",permalink:"/docs/connector-v2/source/LocalFile"},next:{title:"Milvus",permalink:"/docs/connector-v2/source/Milvus"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"accessId string",id:"accessid-string",level:3},{value:"accesskey string",id:"accesskey-string",level:3},{value:"endpoint string",id:"endpoint-string",level:3},{value:"project string",id:"project-string",level:3},{value:"table_name string",id:"table_name-string",level:3},{value:"partition_spec string",id:"partition_spec-string",level:3},{value:"split_row int",id:"split_row-int",level:3},{value:"read_columns Array",id:"read_columns-array",level:3},{value:"table_list Array",id:"table_list-array",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Read with table",id:"read-with-table",level:3},{value:"Read with table list",id:"read-with-table-list",level:3}],s={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"maxcompute"},"Maxcompute"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Maxcompute source connector")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Used to read data from Maxcompute."),(0,r.yg)("h2",{id:"key-features"},"Key features"),(0,r.yg)("ul",{className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"accessId"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"accesskey"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"endpoint"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"project"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_name"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"partition_spec"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"split_row"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"10000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"table_list"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"config"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"accessid-string"},"accessId ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"accessId")," Your Maxcompute accessId which cloud be access from Alibaba Cloud."),(0,r.yg)("h3",{id:"accesskey-string"},"accesskey ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"accesskey")," Your Maxcompute accessKey which cloud be access from Alibaba Cloud."),(0,r.yg)("h3",{id:"endpoint-string"},"endpoint ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"endpoint")," Your Maxcompute endpoint start with http."),(0,r.yg)("h3",{id:"project-string"},"project ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"project")," Your Maxcompute project which is created in Alibaba Cloud."),(0,r.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"table_name")," Target Maxcompute table name eg: fake."),(0,r.yg)("h3",{id:"partition_spec-string"},"partition_spec ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"partition_spec")," This spec of Maxcompute partition table eg:ds='20220101'."),(0,r.yg)("h3",{id:"split_row-int"},"split_row ","[int]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"split_row")," Number of rows per split, default: 10000."),(0,r.yg)("h3",{id:"read_columns-array"},"read_columns ","[Array]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"read_columns")," The columns to be read, if not set, all columns will be read. e.g. ",'["col1", "col2"]'),(0,r.yg)("h3",{id:"table_list-array"},"table_list ","[Array]"),(0,r.yg)("p",null,"The list of tables to be read, you can use this configuration instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"table_name"),"."),(0,r.yg)("h3",{id:"common-options"},"common options"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"read-with-table"},"Read with table"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Maxcompute {\n    accessId="<your access id>"\n    accesskey="<your access Key>"\n    endpoint="<http://service.odps.aliyun.com/api>"\n    project="<your project>"\n    table_name="<your table name>"\n    #partition_spec="<your partition spec>"\n    #split_row = 10000\n    #read_columns = ["col1", "col2"]\n  }\n}\n')),(0,r.yg)("h3",{id:"read-with-table-list"},"Read with table list"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Maxcompute {\n    accessId="<your access id>"\n    accesskey="<your access Key>"\n    endpoint="<http://service.odps.aliyun.com/api>"\n    project="<your project>" # default project\n    table_list = [\n      {\n        table_name = "test_table"\n        #partition_spec="<your partition spec>"\n        #split_row = 10000\n        #read_columns = ["col1", "col2"]\n      },\n      {\n        project = "test_project"\n        table_name = "test_table2"\n        #partition_spec="<your partition spec>"\n        #split_row = 10000\n        #read_columns = ["col1", "col2"]\n      }\n    ]\n  }\n}\n')))}g.isMDXComponent=!0}}]);