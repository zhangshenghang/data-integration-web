"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4784],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=g(n),d=l,u=m["".concat(p,".").concat(d)]||m[d]||y[d]||r;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var g=2;g<r;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43278:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const r={},i="LocalFile",o={unversionedId:"connector-v2/source/LocalFile",id:"connector-v2/source/LocalFile",title:"LocalFile",description:"Local file source connector",source:"@site/docs/connector-v2/source/LocalFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/LocalFile",permalink:"/zh-CN/docs/connector-v2/source/LocalFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/LocalFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Lemlist",permalink:"/zh-CN/docs/connector-v2/source/Lemlist"},next:{title:"Maxcompute",permalink:"/zh-CN/docs/connector-v2/source/Maxcompute"}},p={},g=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"read_columns list",id:"read_columns-list",level:3},{value:"delimiter/field_delimiter string",id:"delimiterfield_delimiter-string",level:3},{value:"parse_partition_from_path boolean",id:"parse_partition_from_path-boolean",level:3},{value:"date_format string",id:"date_format-string",level:3},{value:"datetime_format string",id:"datetime_format-string",level:3},{value:"time_format string",id:"time_format-string",level:3},{value:"skip_header_row_number long",id:"skip_header_row_number-long",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"sheet_name string",id:"sheet_name-string",level:3},{value:"xml_row_tag string",id:"xml_row_tag-string",level:3},{value:"xml_use_attr_format boolean",id:"xml_use_attr_format-boolean",level:3},{value:"file_filter_pattern string",id:"file_filter_pattern-string",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"archive_compress_codec string",id:"archive_compress_codec-string",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"null_format string",id:"null_format-string",level:3},{value:"common options",id:"common-options",level:3},{value:"tables_configs",id:"tables_configs",level:3},{value:"Example",id:"example",level:2},{value:"One Table",id:"one-table",level:3},{value:"Multiple Table",id:"multiple-table",level:3},{value:"Transfer Binary File",id:"transfer-binary-file",level:3},{value:"Filter File",id:"filter-file",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"2.3.9-beta 2024-11-12",id:"239-beta-2024-11-12",level:3}],s={toc:g},m="wrapper";function y(e){let{components:t,...n}=e;return(0,l.yg)(m,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"localfile"},"LocalFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Local file source connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,l.yg)("p",null,"Read all the data in a split in a pollNext call. What splits are read will be saved in snapshot."),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","binary")))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Read data from local file system."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this.")),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"read_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"delimiter/field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"\\001")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"date_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"datetime_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"HH:mm:ss")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_filter_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"archive_compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"UTF-8")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tables_configs"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"used to define a multiple table task")))),(0,l.yg)("h3",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"The source file path."),(0,l.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,l.yg)("p",null,"File type, supported as the following file types:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")," ",(0,l.yg)("inlineCode",{parentName:"p"},"xml")," ",(0,l.yg)("inlineCode",{parentName:"p"},"binary")),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want."),(0,l.yg)("p",null,"For example:"),(0,l.yg)("p",null,"upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'\n{"code":  200, "data":  "get success", "success":  true}\n\n')),(0,l.yg)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'\n{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n\n')),(0,l.yg)("p",null,"you should assign schema as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},"\nschema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n\n")),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"code"),(0,l.yg)("th",{parentName:"tr",align:null},"data"),(0,l.yg)("th",{parentName:"tr",align:null},"success"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"get success"),(0,l.yg)("td",{parentName:"tr",align:null},"true")))),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically."),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not."),(0,l.yg)("p",null,"For example, upstream data is the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},"\ntyrantlucifer#26#male\n\n")),(0,l.yg)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"content"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer#26#male")))),(0,l.yg)("p",null,"If you assign data schema, you should also assign the option ",(0,l.yg)("inlineCode",{parentName:"p"},"field_delimiter")," too except CSV file type"),(0,l.yg)("p",null,"you should assign schema and delimiter as the following:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nfield_delimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n\n')),(0,l.yg)("p",null,"connector will generate data as the following:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"gender"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26"),(0,l.yg)("td",{parentName:"tr",align:null},"male")))),(0,l.yg)("p",null,"If you assign file type to ",(0,l.yg)("inlineCode",{parentName:"p"},"binary"),", SeaTunnel can synchronize files in any format,\nsuch as compressed packages, pictures, etc. In short, any files can be synchronized to the target place.\nUnder this requirement, you need to ensure that the source and sink use ",(0,l.yg)("inlineCode",{parentName:"p"},"binary")," format for file synchronization\nat the same time. You can find the specific usage in the example below."),(0,l.yg)("h3",{id:"read_columns-list"},"read_columns ","[list]"),(0,l.yg)("p",null,"The read column list of the data source, user can use it to implement field projection."),(0,l.yg)("h3",{id:"delimiterfield_delimiter-string"},"delimiter/field_delimiter ","[string]"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"delimiter")," parameter will deprecate after version 2.3.5, please use ",(0,l.yg)("strong",{parentName:"p"},"field_delimiter")," instead."),(0,l.yg)("p",null,"Only need to be configured when file_format is text."),(0,l.yg)("p",null,"Field delimiter, used to tell connector how to slice and dice fields."),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"\\001"),", the same as hive's default delimiter"),(0,l.yg)("h3",{id:"parse_partition_from_path-boolean"},"parse_partition_from_path ","[boolean]"),(0,l.yg)("p",null,"Control whether parse the partition keys and values from file path"),(0,l.yg)("p",null,"For example if you read a file from path ",(0,l.yg)("inlineCode",{parentName:"p"},"file://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")),(0,l.yg)("p",null,"Every record data from file will be added these two fields:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tyrantlucifer"),(0,l.yg)("td",{parentName:"tr",align:null},"26")))),(0,l.yg)("p",null,"Tips: ",(0,l.yg)("strong",{parentName:"p"},"Do not define partition fields in schema option")),(0,l.yg)("h3",{id:"date_format-string"},"date_format ","[string]"),(0,l.yg)("p",null,"Date type format, used to tell connector how to convert string to date, supported as the following formats:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd")),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd")),(0,l.yg)("h3",{id:"datetime_format-string"},"datetime_format ","[string]"),(0,l.yg)("p",null,"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy/MM/dd HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyyMMddHHmmss")),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy-MM-dd HH:mm:ss")),(0,l.yg)("h3",{id:"time_format-string"},"time_format ","[string]"),(0,l.yg)("p",null,"Time type format, used to tell connector how to convert string to time, supported as the following formats:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss")," ",(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss.SSS")),(0,l.yg)("p",null,"default ",(0,l.yg)("inlineCode",{parentName:"p"},"HH:mm:ss")),(0,l.yg)("h3",{id:"skip_header_row_number-long"},"skip_header_row_number ","[long]"),(0,l.yg)("p",null,"Skip the first few lines, but only for the txt and csv."),(0,l.yg)("p",null,"For example, set like following:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"skip_header_row_number = 2")),(0,l.yg)("p",null,"then SeaTunnel will skip the first 2 lines from source files"),(0,l.yg)("h3",{id:"schema-config"},"schema ","[config]"),(0,l.yg)("p",null,"Only need to be configured when the file_format_type are text, json, excel, xml or csv ( Or other format we can't read the schema from metadata)."),(0,l.yg)("h4",{id:"fields-config"},"fields ","[Config]"),(0,l.yg)("p",null,"The schema information of upstream data."),(0,l.yg)("h3",{id:"sheet_name-string"},"sheet_name ","[string]"),(0,l.yg)("p",null,"Only need to be configured when file_format is excel."),(0,l.yg)("p",null,"Reader the sheet of the workbook."),(0,l.yg)("h3",{id:"xml_row_tag-string"},"xml_row_tag ","[string]"),(0,l.yg)("p",null,"Only need to be configured when file_format is xml."),(0,l.yg)("p",null,"Specifies the tag name of the data rows within the XML file."),(0,l.yg)("h3",{id:"xml_use_attr_format-boolean"},"xml_use_attr_format ","[boolean]"),(0,l.yg)("p",null,"Only need to be configured when file_format is xml."),(0,l.yg)("p",null,"Specifies Whether to process data using the tag attribute format."),(0,l.yg)("h3",{id:"file_filter_pattern-string"},"file_filter_pattern ","[string]"),(0,l.yg)("p",null,"Filter pattern, which used for filtering files."),(0,l.yg)("p",null,"The pattern follows standard regular expressions. For details, please refer to ",(0,l.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Regular_expression"},"https://en.wikipedia.org/wiki/Regular_expression"),".\nThere are some examples."),(0,l.yg)("p",null,"File Structure Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241001/report.txt\n/data/seatunnel/20241007/abch202410.csv\n/data/seatunnel/20241002/abcg202410.csv\n/data/seatunnel/20241005/old_data.csv\n/data/seatunnel/20241012/logo.png\n")),(0,l.yg)("p",null,"Matching Rules Example:"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example 1"),": ",(0,l.yg)("em",{parentName:"p"},"Match all .txt files"),"\uff0cRegular Expression:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241001/.*\\.txt\n")),(0,l.yg)("p",null,"The result of this example matching is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241001/report.txt\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example 2"),": ",(0,l.yg)("em",{parentName:"p"},"Match all file starting with abc"),"\uff0cRegular Expression:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241002/abc.*\n")),(0,l.yg)("p",null,"The result of this example matching is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abch202410.csv\n/data/seatunnel/20241002/abcg202410.csv\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example 3"),": ",(0,l.yg)("em",{parentName:"p"},"Match all file starting with abc\uff0cAnd the fourth character is either h or g"),", the Regular Expression:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abc[h,g].*\n")),(0,l.yg)("p",null,"The result of this example matching is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abch202410.csv\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Example 4"),": ",(0,l.yg)("em",{parentName:"p"},"Match third level folders starting with 202410 and files ending with .csv"),", the Regular Expression:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/202410\\d*/.*\\.csv\n")),(0,l.yg)("p",null,"The result of this example matching is:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"/data/seatunnel/20241007/abch202410.csv\n/data/seatunnel/20241002/abcg202410.csv\n/data/seatunnel/20241005/old_data.csv\n")),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc/parquet:",(0,l.yg)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,l.yg)("h3",{id:"archive_compress_codec-string"},"archive_compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of archive files and the details that supported as the following shown:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"archive_compress_codec"),(0,l.yg)("th",{parentName:"tr",align:null},"file_format"),(0,l.yg)("th",{parentName:"tr",align:null},"archive_compress_suffix"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"ZIP"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,excel,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".zip")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TAR"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,excel,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".tar")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"TAR_GZ"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,excel,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".tar.gz")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"GZ"),(0,l.yg)("td",{parentName:"tr",align:null},"txt,json,xml"),(0,l.yg)("td",{parentName:"tr",align:null},".gz")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"NONE"),(0,l.yg)("td",{parentName:"tr",align:null},"all"),(0,l.yg)("td",{parentName:"tr",align:null},".*")))),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"Only used when file_format_type is json,text,csv,xml.\nThe encoding of the file to read. This param will be parsed by ",(0,l.yg)("inlineCode",{parentName:"p"},"Charset.forName(encoding)"),"."),(0,l.yg)("h3",{id:"null_format-string"},"null_format ","[string]"),(0,l.yg)("p",null,"Only used when file_format_type is text.\nnull_format to define which strings can be represented as null."),(0,l.yg)("p",null,"e.g: ",(0,l.yg)("inlineCode",{parentName:"p"},"\\N")),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"../source-common-options.md"},"Source Common Options")," for details"),(0,l.yg)("h3",{id:"tables_configs"},"tables_configs"),(0,l.yg)("p",null,"Used to define a multiple table task, when you have multiple tables to read, you can use this option to define multiple tables."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("h3",{id:"one-table"},"One Table"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  path = "/apps/hive/demo/student"\n  file_format_type = "parquet"\n}\n\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  schema {\n    fields {\n      name = string\n      age = int\n    }\n  }\n  path = "/apps/hive/demo/student"\n  file_format_type = "json"\n}\n\n')),(0,l.yg)("p",null,"For json, text or csv file format with ",(0,l.yg)("inlineCode",{parentName:"p"},"encoding")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n    path = "/tmp/hive/warehouse/test2"\n    file_format_type = "text"\n    encoding = "gbk"\n}\n\n')),(0,l.yg)("h3",{id:"multiple-table"},"Multiple Table"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  tables_configs = [\n    {\n      schema {\n        table = "student"\n      }\n      path = "/apps/hive/demo/student"\n      file_format_type = "parquet"\n    },\n    {\n      schema {\n        table = "teacher"\n      }\n      path = "/apps/hive/demo/teacher"\n      file_format_type = "parquet"\n    }\n  ]\n}\n\n')),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nLocalFile {\n  tables_configs = [\n    {\n      schema {\n        fields {\n          name = string\n          age = int\n        }\n      }\n      path = "/apps/hive/demo/student"\n      file_format_type = "json"\n    },\n    {\n      schema {\n        fields {\n          name = string\n          age = int\n        }\n      }\n      path = "/apps/hive/demo/teacher"\n      file_format_type = "json"\n    }\n}\n\n')),(0,l.yg)("h3",{id:"transfer-binary-file"},"Transfer Binary File"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  LocalFile {\n    path = "/seatunnel/read/binary/"\n    file_format_type = "binary"\n  }\n}\nsink {\n  // you can transfer local file to s3/hdfs/oss etc.\n  LocalFile {\n    path = "/seatunnel/read/binary2/"\n    file_format_type = "binary"\n  }\n}\n\n')),(0,l.yg)("h3",{id:"filter-file"},"Filter File"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  LocalFile {\n    path = "/data/seatunnel/"\n    file_format_type = "csv"\n    skip_header_row_number = 1\n    // file example abcD2024.csv\n    file_filter_pattern = "abc[DX]*.*"\n  }\n}\n\nsink {\n  Console {\n  }\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Local File Source Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2980"},"2980"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support extract partition from SeaTunnelRow fields (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3085"},"3085"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support parse field from file path (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2985"},"2985"),")")),(0,l.yg)("h3",{id:"239-beta-2024-11-12"},"2.3.9-beta 2024-11-12"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support parse field from file path (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/issues/8019"},"8019"),")")))}y.isMDXComponent=!0}}]);