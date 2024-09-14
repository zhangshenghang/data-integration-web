"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[42636],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),i=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return o.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(y,c(c({ref:n},u),{},{components:t})):o.createElement(y,c({ref:n},u))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=t[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var o=t(58168),r=(t(96540),t(15680));const a={},c="Schema evolution",l={unversionedId:"concept/schema-evolution",id:"concept/schema-evolution",title:"Schema evolution",description:"Schema Evolution means that the schema of a data table can be changed and the data synchronization task can automatically adapt to the changes of the new table structure without any other operations.",source:"@site/docs/concept/schema-evolution.md",sourceDirName:"concept",slug:"/concept/schema-evolution",permalink:"/docs/concept/schema-evolution",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/schema-evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Event Listener",permalink:"/docs/concept/event-listener"},next:{title:"Source",permalink:"/docs/connector-v2/source"}},s={},i=[{value:"Supported connectors",id:"supported-connectors",level:2},{value:"Source",id:"source",level:3},{value:"Sink",id:"sink",level:3},{value:"Enable schema evolution",id:"enable-schema-evolution",level:2},{value:"Examples",id:"examples",level:2},{value:"Mysql-CDC -&gt; Jdbc-Mysql",id:"mysql-cdc---jdbc-mysql",level:3}],u={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"schema-evolution"},"Schema evolution"),(0,r.yg)("p",null,"Schema Evolution means that the schema of a data table can be changed and the data synchronization task can automatically adapt to the changes of the new table structure without any other operations.\nNow we only support the operation about ",(0,r.yg)("inlineCode",{parentName:"p"},"add column"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"drop column"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"},"rename column")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"modify column")," of the table in CDC source. This feature is only support zeta engine at now."),(0,r.yg)("h2",{id:"supported-connectors"},"Supported connectors"),(0,r.yg)("h3",{id:"source"},"Source"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/source/MySQL-CDC.md"},"Mysql-CDC")),(0,r.yg)("h3",{id:"sink"},"Sink"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/blob/dev/docs/en/connector-v2/sink/Jdbc.md"},"Jdbc-Mysql")),(0,r.yg)("p",null,"Note: The schema evolution is not support the transform at now. "),(0,r.yg)("h2",{id:"enable-schema-evolution"},"Enable schema evolution"),(0,r.yg)("p",null,"Schema evolution is disabled by default in CDC source. You need configure ",(0,r.yg)("inlineCode",{parentName:"p"},"debezium.include.schema.changes = true")," which is only supported in MySQL-CDC to enable it."),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("h3",{id:"mysql-cdc---jdbc-mysql"},"Mysql-CDC -> Jdbc-Mysql"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  # You can set engine configuration here\n  parallelism = 5\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  MySQL-CDC {\n    server-id = 5652-5657\n    username = "st_user_source"\n    password = "mysqlpw"\n    table-names = ["shop.products"]\n    base-url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    debezium = {\n      include.schema.changes = true\n    }\n  }\n}\n\nsink {\n  jdbc {\n    url = "jdbc:mysql://mysql_cdc_e2e:3306/shop"\n    driver = "com.mysql.cj.jdbc.Driver"\n    user = "st_user_sink"\n    password = "mysqlpw"\n    generate_sink_sql = true\n    database = shop\n    table = mysql_cdc_e2e_sink_table_with_schema_change_exactly_once\n    primary_keys = ["id"]\n    is_exactly_once = true\n    xa_data_source_class_name = "com.mysql.cj.jdbc.MysqlXADataSource"\n  }\n}\n')))}d.isMDXComponent=!0}}]);