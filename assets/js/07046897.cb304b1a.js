"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[35598],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>u});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),g=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=g(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=g(n),y=l,u=d["".concat(p,".").concat(y)]||d[y]||m[y]||i;return n?a.createElement(u,r(r({ref:t},s),{},{components:n})):a.createElement(u,r({ref:t},s))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var g=2;g<i;g++)r[g]=n[g];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},95678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var a=n(58168),l=(n(96540),n(15680));const i={},r="SftpFile",o={unversionedId:"connector-v2/sink/SftpFile",id:"connector-v2/sink/SftpFile",title:"SftpFile",description:"Sftp file sink connector",source:"@site/docs/connector-v2/sink/SftpFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/SftpFile",permalink:"/docs/connector-v2/sink/SftpFile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/SftpFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Sentry",permalink:"/docs/connector-v2/sink/Sentry"},next:{title:"Slack",permalink:"/docs/connector-v2/sink/Slack"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"host string",id:"host-string",level:3},{value:"port int",id:"port-int",level:3},{value:"user string",id:"user-string",level:3},{value:"password string",id:"password-string",level:3},{value:"path string",id:"path-string",level:3},{value:"custom_filename boolean",id:"custom_filename-boolean",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"have_partition boolean",id:"have_partition-boolean",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"common options",id:"common-options",level:3},{value:"max_rows_in_memory",id:"max_rows_in_memory",level:3},{value:"sheet_name",id:"sheet_name",level:3},{value:"xml_root_tag string",id:"xml_root_tag-string",level:3},{value:"xml_row_tag string",id:"xml_row_tag-string",level:3},{value:"xml_use_attr_format boolean",id:"xml_use_attr_format-boolean",level:3},{value:"parquet_avro_write_timestamp_as_int96 boolean",id:"parquet_avro_write_timestamp_as_int96-boolean",level:3},{value:"parquet_avro_write_fixed_as_int96 array",id:"parquet_avro_write_fixed_as_int96-array",level:3},{value:"enable_header_write boolean",id:"enable_header_write-boolean",level:3},{value:"encoding string",id:"encoding-string",level:3},{value:"schema_save_mode string",id:"schema_save_mode-string",level:3},{value:"data_save_mode string",id:"data_save_mode-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3},{value:"Next version",id:"next-version",level:3}],s={toc:g},d="wrapper";function m(e){let{components:t,...n}=e;return(0,l.yg)(d,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"sftpfile"},"SftpFile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Sftp file sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Output data to Sftp ."),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,l.yg)("p",{parentName:"admonition"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this.")),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.yg)("p",null,"By default, we use 2PC commit to ensure ",(0,l.yg)("inlineCode",{parentName:"p"},"exactly-once")),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,l.yg)("ul",{parentName:"li",className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml"),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","binary")))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"),(0,l.yg)("th",{parentName:"tr",align:null},"remarks"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"host"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"port"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"user"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"password"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tmp_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"/tmp/seatunnel"),(0,l.yg)("td",{parentName:"tr",align:null},"The result file will write to a tmp path first and then use ",(0,l.yg)("inlineCode",{parentName:"td"},"mv")," to submit tmp dir to target dir. Need a FTP dir.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"custom_filename"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you need custom the filename")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"${transactionId}"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when custom_filename is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"file_format_type"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"csv"'),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"'\\001'"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is text")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"\\n"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is text")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"have_partition"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether you need processing partitions.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_by"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used then have_partition is true")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"true"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000000"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compress_codec"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"none"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"object"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_rows_in_memory"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is excel.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"sheet_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"Sheet${Random number}"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is excel.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_root_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORDS"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"RECORD"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_timestamp_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is parquet.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"enable_header_write"),(0,l.yg)("td",{parentName:"tr",align:null},"boolean"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"false"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is text,csv.",(0,l.yg)("br",null)," false:don't write header,true:write header.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"parquet_avro_write_fixed_as_int96"),(0,l.yg)("td",{parentName:"tr",align:null},"array"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format is parquet.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"encoding"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},'"UTF-8"'),(0,l.yg)("td",{parentName:"tr",align:null},"Only used when file_format_type is json,text,csv,xml.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"CREATE_SCHEMA_WHEN_NOT_EXIST"),(0,l.yg)("td",{parentName:"tr",align:null},"Existing dir processing method")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"data_save_mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"APPEND_DATA"),(0,l.yg)("td",{parentName:"tr",align:null},"Existing data processing method")))),(0,l.yg)("h3",{id:"host-string"},"host ","[string]"),(0,l.yg)("p",null,"The target sftp host is required"),(0,l.yg)("h3",{id:"port-int"},"port ","[int]"),(0,l.yg)("p",null,"The target sftp port is required"),(0,l.yg)("h3",{id:"user-string"},"user ","[string]"),(0,l.yg)("p",null,"The target sftp user is required"),(0,l.yg)("h3",{id:"password-string"},"password ","[string]"),(0,l.yg)("p",null,"The target sftp password is required"),(0,l.yg)("h3",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"The target dir path is required."),(0,l.yg)("h3",{id:"custom_filename-boolean"},"custom_filename ","[boolean]"),(0,l.yg)("p",null,"Whether custom the filename"),(0,l.yg)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,l.yg)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,l.yg)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,l.yg)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,l.yg)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.yg)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,l.yg)("p",null,"Please note that, If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.yg)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_filename")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true")),(0,l.yg)("p",null,"When the format in the ",(0,l.yg)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.yg)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,l.yg)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Symbol"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"y"),(0,l.yg)("td",{parentName:"tr",align:null},"Year")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"M"),(0,l.yg)("td",{parentName:"tr",align:null},"Month")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"d"),(0,l.yg)("td",{parentName:"tr",align:null},"Day of month")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"H"),(0,l.yg)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"m"),(0,l.yg)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"s"),(0,l.yg)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.yg)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,l.yg)("p",null,"We supported as the following file types:"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"text")," ",(0,l.yg)("inlineCode",{parentName:"p"},"csv")," ",(0,l.yg)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.yg)("inlineCode",{parentName:"p"},"orc")," ",(0,l.yg)("inlineCode",{parentName:"p"},"json")," ",(0,l.yg)("inlineCode",{parentName:"p"},"excel")," ",(0,l.yg)("inlineCode",{parentName:"p"},"xml")," ",(0,l.yg)("inlineCode",{parentName:"p"},"binary")),(0,l.yg)("p",null,"Please note that, The final file name will end with the file_format_type's suffix, the suffix of the text file is ",(0,l.yg)("inlineCode",{parentName:"p"},"txt"),"."),(0,l.yg)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,l.yg)("p",null,"The separator between columns in a row of data. Only needed by ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," file format."),(0,l.yg)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,l.yg)("p",null,"The separator between rows in a file. Only needed by ",(0,l.yg)("inlineCode",{parentName:"p"},"text")," file format."),(0,l.yg)("h3",{id:"have_partition-boolean"},"have_partition ","[boolean]"),(0,l.yg)("p",null,"Whether you need processing partitions."),(0,l.yg)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"Partition data based on selected fields."),(0,l.yg)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"If the ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,l.yg)("p",null,"Default ",(0,l.yg)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,l.yg)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,l.yg)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,l.yg)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,l.yg)("p",null,"Only used when ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,l.yg)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,l.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,l.yg)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,l.yg)("p",null,"Which columns need be wrote to file, default value is all the columns get from ",(0,l.yg)("inlineCode",{parentName:"p"},"Transform")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,l.yg)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,l.yg)("p",null,"If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,l.yg)("p",null,"Please note that, If ",(0,l.yg)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.yg)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.yg)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.yg)("p",null,"Only support ",(0,l.yg)("inlineCode",{parentName:"p"},"true")," now."),(0,l.yg)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.yg)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,l.yg)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,l.yg)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,l.yg)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,l.yg)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"txt: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"json: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"csv: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"orc: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"li"},"zlib")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none")),(0,l.yg)("li",{parentName:"ul"},"parquet: ",(0,l.yg)("inlineCode",{parentName:"li"},"lzo")," ",(0,l.yg)("inlineCode",{parentName:"li"},"snappy")," ",(0,l.yg)("inlineCode",{parentName:"li"},"lz4")," ",(0,l.yg)("inlineCode",{parentName:"li"},"gzip")," ",(0,l.yg)("inlineCode",{parentName:"li"},"brotli")," ",(0,l.yg)("inlineCode",{parentName:"li"},"zstd")," ",(0,l.yg)("inlineCode",{parentName:"li"},"none"))),(0,l.yg)("p",null,"Tips: excel type does not support any compression format"),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details."),(0,l.yg)("h3",{id:"max_rows_in_memory"},"max_rows_in_memory"),(0,l.yg)("p",null,"When File Format is Excel,The maximum number of data items that can be cached in the memory."),(0,l.yg)("h3",{id:"sheet_name"},"sheet_name"),(0,l.yg)("p",null,"Writer the sheet of the workbook"),(0,l.yg)("h3",{id:"xml_root_tag-string"},"xml_root_tag ","[string]"),(0,l.yg)("p",null,"Specifies the tag name of the root element within the XML file."),(0,l.yg)("h3",{id:"xml_row_tag-string"},"xml_row_tag ","[string]"),(0,l.yg)("p",null,"Specifies the tag name of the data rows within the XML file."),(0,l.yg)("h3",{id:"xml_use_attr_format-boolean"},"xml_use_attr_format ","[boolean]"),(0,l.yg)("p",null,"Specifies Whether to process data using the tag attribute format."),(0,l.yg)("h3",{id:"parquet_avro_write_timestamp_as_int96-boolean"},"parquet_avro_write_timestamp_as_int96 ","[boolean]"),(0,l.yg)("p",null,"Support writing Parquet INT96 from a timestamp, only valid for parquet files."),(0,l.yg)("h3",{id:"parquet_avro_write_fixed_as_int96-array"},"parquet_avro_write_fixed_as_int96 ","[array]"),(0,l.yg)("p",null,"Support writing Parquet INT96 from a 12-byte field, only valid for parquet files."),(0,l.yg)("h3",{id:"enable_header_write-boolean"},"enable_header_write ","[boolean]"),(0,l.yg)("p",null,"Only used when file_format_type is text,csv.false:don't write header,true:write header."),(0,l.yg)("h3",{id:"encoding-string"},"encoding ","[string]"),(0,l.yg)("p",null,"Only used when file_format_type is json,text,csv,xml.\nThe encoding of the file to write. This param will be parsed by ",(0,l.yg)("inlineCode",{parentName:"p"},"Charset.forName(encoding)"),"."),(0,l.yg)("h3",{id:"schema_save_mode-string"},"schema_save_mode ","[string]"),(0,l.yg)("p",null,"Existing dir processing method."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"RECREATE_SCHEMA: will create when the dir does not exist, delete and recreate when the dir is exist"),(0,l.yg)("li",{parentName:"ul"},"CREATE_SCHEMA_WHEN_NOT_EXIST: will create when the dir does not exist, skipped when the dir is exist"),(0,l.yg)("li",{parentName:"ul"},"ERROR_WHEN_SCHEMA_NOT_EXIST: error will be reported when the dir does not exist"),(0,l.yg)("li",{parentName:"ul"},"IGNORE \uff1aIgnore the treatment of the table")),(0,l.yg)("h3",{id:"data_save_mode-string"},"data_save_mode ","[string]"),(0,l.yg)("p",null,"Existing data processing method."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"DROP_DATA: preserve dir and delete data files"),(0,l.yg)("li",{parentName:"ul"},"APPEND_DATA: preserve dir, preserve data files"),(0,l.yg)("li",{parentName:"ul"},"ERROR_WHEN_DATA_EXISTS: when there is data files, an error is reported")),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"For text file format with ",(0,l.yg)("inlineCode",{parentName:"p"},"have_partition")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"custom_filename")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"sink_columns")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'\nSftpFile {\n    host = "xxx.xxx.xxx.xxx"\n    port = 22\n    user = "username"\n    password = "password"\n    path = "/data/sftp/seatunnel/job1"\n    tmp_path = "/data/sftp/seatunnel/tmp"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n}\n\n')),(0,l.yg)("p",null,"When our source end is multiple tables, and wants different expressions to different directory, we can configure this way"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'SftpFile {\n    host = "xxx.xxx.xxx.xxx"\n    port = 22\n    user = "username"\n    password = "password"\n    path = "/data/sftp/seatunnel/job1/${table_name}"\n    tmp_path = "/data/sftp/seatunnel/tmp"\n    file_format_type = "text"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    have_partition = true\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    custom_filename = true\n    file_name_expression = "${transactionId}_${now}"\n    filename_time_format = "yyyy.MM.dd"\n    sink_columns = ["name","age"]\n    is_enable_transaction = true\n    schema_save_mode=RECREATE_SCHEMA\n    data_save_mode=DROP_DATA\n}\n\n\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add SftpFile Sink Connector"),(0,l.yg)("li",{parentName:"ul"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3258"},"3258"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,l.yg)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,l.yg)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed"))),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support setting batch size for every file (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3625"},"3625"),")")),(0,l.yg)("h3",{id:"next-version"},"Next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support file compress (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3899"},"3899"),")")))}m.isMDXComponent=!0}}]);