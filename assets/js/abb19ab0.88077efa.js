"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[28861],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),g=a,d=u["".concat(i,".").concat(g)]||u[g]||c[g]||l;return t?r.createElement(d,o(o({ref:n},m),{},{components:t})):r.createElement(d,o({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=g;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},56937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},o="TableRename",s={unversionedId:"transform-v2/table-merge",id:"transform-v2/table-merge",title:"TableRename",description:"TableMerge transform plugin",source:"@site/docs/transform-v2/table-merge.md",sourceDirName:"transform-v2",slug:"/transform-v2/table-merge",permalink:"/docs/transform-v2/table-merge",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform-v2/table-merge.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"SQL",permalink:"/docs/transform-v2/sql"},next:{title:"TableRename",permalink:"/docs/transform-v2/table-rename"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Merge sharding-tables",id:"merge-sharding-tables",level:3}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tablerename"},"TableRename"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"TableMerge transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"TableMerge transform plugin for merge sharding-tables."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"database"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Specify new database name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"schema"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Specify new schema name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"table"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Specify new table name")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"merge-sharding-tables"},"Merge sharding-tables"),(0,a.yg)("p",null,"`"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n    MySQL-CDC {\n        plugin_output = "customers_mysql_cdc"\n        \n        username = "root"\n        password = "123456"\n        table-names = ["source.user_1", "source.user_2", "source.shop"]\n        base-url = "jdbc:mysql://localhost:3306/source"\n    }\n}\n\ntransform {\n  TableMerge {\n    plugin_input = "customers_mysql_cdc"\n    plugin_output = "trans_result"\n    \n    table_match_regex = "source.user_.*"\n    database = "user_db"\n    table = "user_all"\n  }\n}\n\nsink {\n  Jdbc {\n    plugin_input = "trans_result"\n    \n    driver="com.mysql.cj.jdbc.Driver"\n    url="jdbc:mysql://localhost:3306/sink"\n    user="myuser"\n    password="mypwd"\n    \n    generate_sink_sql = true\n    database = "${database_name}"\n    table = "${table_name}"\n    primary_keys = ["${primary_key}"]\n    \n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode = "APPEND_DATA"\n  }\n}\n')))}c.isMDXComponent=!0}}]);