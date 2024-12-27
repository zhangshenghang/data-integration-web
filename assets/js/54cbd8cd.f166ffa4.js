"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[80154],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return t?r.createElement(g,o(o({ref:n},m),{},{components:t})):r.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},o="TableRename",s={unversionedId:"transform-v2/table-rename",id:"transform-v2/table-rename",title:"TableRename",description:"TableRename transform plugin",source:"@site/docs/transform-v2/table-rename.md",sourceDirName:"transform-v2",slug:"/transform-v2/table-rename",permalink:"/docs/transform-v2/table-rename",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform-v2/table-rename.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"TableRename",permalink:"/docs/transform-v2/table-merge"},next:{title:"Command Usage",permalink:"/docs/command/usage"}},i={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Convert table name to uppercase",id:"convert-table-name-to-uppercase",level:3},{value:"Convert table name to lowercase",id:"convert-table-name-to-lowercase",level:3}],m={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tablerename"},"TableRename"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"TableRename transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"TableRename transform plugin for rename table name."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"center"},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"convert_case"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The case conversion type. The options can be ",(0,a.yg)("inlineCode",{parentName:"td"},"UPPER"),", ",(0,a.yg)("inlineCode",{parentName:"td"},"LOWER"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"prefix"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The prefix to be added to the table name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"suffix"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The suffix to be added to the table name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"center"},"replacements_with_regex"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"The array of replacement rules with regex. The replacement rule is a map with ",(0,a.yg)("inlineCode",{parentName:"td"},"replace_from")," and ",(0,a.yg)("inlineCode",{parentName:"td"},"replace_to")," fields.")))),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("h3",{id:"convert-table-name-to-uppercase"},"Convert table name to uppercase"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n    MySQL-CDC {\n        plugin_output = "customers_mysql_cdc"\n        \n        username = "root"\n        password = "123456"\n        table-names = ["source.user_shop", "source.user_order"]\n        base-url = "jdbc:mysql://localhost:3306/source"\n    }\n}\n\ntransform {\n  TableRename {\n    plugin_input = "customers_mysql_cdc"\n    plugin_output = "trans_result"\n    \n    convert_case = "UPPER"\n    prefix = "CDC_"\n    suffix = "_TABLE"\n    replacements_with_regex = [\n      {\n        replace_from = "user"\n        replace_to = "U"\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    plugin_input = "trans_result"\n    \n    driver="oracle.jdbc.OracleDriver"\n    url="jdbc:oracle:thin:@oracle-host:1521/ORCLCDB"\n    user="myuser"\n    password="mypwd"\n    \n    generate_sink_sql = true\n    database = "ORCLCDB"\n    table = "${database_name}.${table_name}"\n    primary_keys = ["${primary_key}"]\n    \n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode = "APPEND_DATA"\n  }\n}\n')),(0,a.yg)("h3",{id:"convert-table-name-to-lowercase"},"Convert table name to lowercase"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'env {\n    parallelism = 1\n    job.mode = "BATCH"\n}\n\nsource {\n  Oracle-CDC {\n    plugin_output = "customers_oracle_cdc"\n    \n    base-url = "jdbc:oracle:thin:@localhost:1521/ORCLCDB"\n    username = "dbzuser"\n    password = "dbz"\n    database-names = ["ORCLCDB"]\n    schema-names = ["DEBEZIUM"]\n    table-names = ["SOURCE.USER_SHOP", "SOURCE.USER_ORDER"]\n  }\n}\n\ntransform {\n  TableRename {\n    plugin_input = "customers_oracle_cdc"\n    plugin_output = "trans_result"\n    \n    convert_case = "LOWER"\n    prefix = "cdc_"\n    suffix = "_table"\n    replacements_with_regex = [\n      {\n        replace_from = "USER"\n        replace_to = "u"\n      }\n    ]\n  }\n}\n\nsink {\n  Jdbc {\n    plugin_input = "trans_result"\n    \n    url = "jdbc:mysql://localhost:3306/test"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    \n    generate_sink_sql = true\n    database = "${schema_name}"\n    table = "${table_name}"\n    primary_keys = ["${primary_key}"]\n    \n    schema_save_mode = "CREATE_SCHEMA_WHEN_NOT_EXIST"\n    data_save_mode = "APPEND_DATA"\n  }\n}\n')))}u.isMDXComponent=!0}}]);