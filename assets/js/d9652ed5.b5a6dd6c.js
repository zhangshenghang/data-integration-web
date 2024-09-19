"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[63251],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var g=l.createContext({}),o=function(e){var n=l.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=o(e.components);return l.createElement(g.Provider,{value:n},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,g=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(t),s=a,d=m["".concat(g,".").concat(s)]||m[s]||y[s]||r;return t?l.createElement(d,i(i({ref:n},p),{},{components:t})):l.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=s;var u={};for(var g in n)hasOwnProperty.call(n,g)&&(u[g]=n[g]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var o=2;o<r;o++)i[o]=t[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"},44863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>r,metadata:()=>u,toc:()=>o});var l=t(58168),a=(t(96540),t(15680));const r={},i="Assert",u={unversionedId:"connector-v2/sink/Assert",id:"connector-v2/sink/Assert",title:"Assert",description:"Assert sink connector",source:"@site/docs/connector-v2/sink/Assert.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Assert",permalink:"/docs/connector-v2/sink/Assert",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Assert.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"AmazonSqs",permalink:"/docs/connector-v2/sink/AmazonSqs"},next:{title:"Cassandra",permalink:"/docs/connector-v2/sink/Cassandra"}},g={},o=[{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"rules ConfigMap",id:"rules-configmap",level:3},{value:"field_rules ConfigList",id:"field_rules-configlist",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"field_type string | ConfigMap",id:"field_type-string--configmap",level:3},{value:"field_value ConfigList",id:"field_value-configlist",level:3},{value:"rule_type string",id:"rule_type-string",level:3},{value:"rule_value numeric",id:"rule_value-numeric",level:3},{value:"equals_to boolean | numeric | string | ConfigList | ConfigMap",id:"equals_to-boolean--numeric--string--configlist--configmap",level:3},{value:"catalog_table_rule ConfigMap",id:"catalog_table_rule-configmap",level:3},{value:"table-names ConfigList",id:"table-names-configlist",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3}],p={toc:o},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"assert"},"Assert"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Assert sink connector")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"A sink plugin which can assert illegal data by user defined rules"),(0,a.yg)("h2",{id:"key-features"},"Key Features"),(0,a.yg)("ul",{className:"contains-task-list"},(0,a.yg)("li",{parentName:"ul",className:"task-list-item"},(0,a.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,a.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once"))),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string","|","ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.rule_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.rule_value"),(0,a.yg)("td",{parentName:"tr",align:null},"numeric"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.field_rules.field_value.equals_to"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean","|","numeric","|","string","|","ConfigList","|","ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.row_rules"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"yes"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.row_rules.rule_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.row_rules.rule_value"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.primary_key_rule"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.primary_key_rule.primary_key_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.primary_key_rule.primary_key_columns"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.constraint_key_rule"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.constraint_key_rule.constraint_key_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.constraint_key_rule.constraint_key_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.constraint_key_rule.constraint_key_columns"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.constraint_key_rule.constraint_key_columns.constraint_key_column_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.constraint_key_rule.constraint_key_columns.constraint_key_sort_type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule.name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule.type"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule.column_length"),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule.nullable"),(0,a.yg)("td",{parentName:"tr",align:null},"boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule.default_value"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.catalog_table_rule.column_rule.comment"),(0,a.yg)("td",{parentName:"tr",align:null},"comment"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"rules.table-names"),(0,a.yg)("td",{parentName:"tr",align:null},"ConfigList"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"common-options"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"rules-configmap"},"rules ","[ConfigMap]"),(0,a.yg)("p",null,"Rule definition of user's available data.  Each rule represents one field validation or row num validation."),(0,a.yg)("h3",{id:"field_rules-configlist"},"field_rules ","[ConfigList]"),(0,a.yg)("p",null,"field rules for field validation"),(0,a.yg)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,a.yg)("p",null,"field name\uff08string\uff09"),(0,a.yg)("h3",{id:"field_type-string--configmap"},"field_type ","[string | ConfigMap]"),(0,a.yg)("p",null,"Field type declarations should adhere to this ",(0,a.yg)("a",{parentName:"p",href:"/docs/concept/schema-feature#how-to-declare-type-supported"},"guide"),"."),(0,a.yg)("h3",{id:"field_value-configlist"},"field_value ","[ConfigList]"),(0,a.yg)("p",null,"A list value rule define the data value validation"),(0,a.yg)("h3",{id:"rule_type-string"},"rule_type ","[string]"),(0,a.yg)("p",null,"The following rules are supported for now"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"NOT_NULL ",(0,a.yg)("inlineCode",{parentName:"li"},"value can't be null")),(0,a.yg)("li",{parentName:"ul"},"NULL ",(0,a.yg)("inlineCode",{parentName:"li"},"value can be null")),(0,a.yg)("li",{parentName:"ul"},"MIN ",(0,a.yg)("inlineCode",{parentName:"li"},"define the minimum value of data")),(0,a.yg)("li",{parentName:"ul"},"MAX ",(0,a.yg)("inlineCode",{parentName:"li"},"define the maximum value of data")),(0,a.yg)("li",{parentName:"ul"},"MIN_LENGTH ",(0,a.yg)("inlineCode",{parentName:"li"},"define the minimum string length of a string data")),(0,a.yg)("li",{parentName:"ul"},"MAX_LENGTH ",(0,a.yg)("inlineCode",{parentName:"li"},"define the maximum string length of a string data")),(0,a.yg)("li",{parentName:"ul"},"MIN_ROW ",(0,a.yg)("inlineCode",{parentName:"li"},"define the minimun number of rows")),(0,a.yg)("li",{parentName:"ul"},"MAX_ROW ",(0,a.yg)("inlineCode",{parentName:"li"},"define the maximum number of rows"))),(0,a.yg)("h3",{id:"rule_value-numeric"},"rule_value ","[numeric]"),(0,a.yg)("p",null,"The value related to rule type. When the ",(0,a.yg)("inlineCode",{parentName:"p"},"rule_type")," is ",(0,a.yg)("inlineCode",{parentName:"p"},"MIN"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MAX"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MIN_LENGTH"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MAX_LENGTH"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"MIN_ROW")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"MAX_ROW"),", users need to assign a value to the ",(0,a.yg)("inlineCode",{parentName:"p"},"rule_value"),"."),(0,a.yg)("h3",{id:"equals_to-boolean--numeric--string--configlist--configmap"},"equals_to ","[boolean | numeric | string | ConfigList | ConfigMap]"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"equals_to")," is used to compare whether the field value is equal to the configured expected value. You can assign values of all types to ",(0,a.yg)("inlineCode",{parentName:"p"},"equals_to"),". These types are detailed ",(0,a.yg)("a",{parentName:"p",href:"/docs/concept/schema-feature#what-type-supported-at-now"},"here"),". For instance, if one field is a row with three fields, and the declaration of row type is ",(0,a.yg)("inlineCode",{parentName:"p"},"{a = array<string>, b = map<string, decimal(30, 2)>, c={c_0 = int, b = string}}"),", users can assign the value ",(0,a.yg)("inlineCode",{parentName:"p"},'[["a", "b"], { k0 = 9999.99, k1 = 111.11 }, [123, "abcd"]]')," to ",(0,a.yg)("inlineCode",{parentName:"p"},"equals_to"),"."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The way of defining field values is consistent with ",(0,a.yg)("a",{parentName:"p",href:"/docs/connector-v2/source/FakeSource#customize-the-data-content-simple"},"FakeSource"),"."),(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("inlineCode",{parentName:"p"},"equals_to")," cannot be applied to ",(0,a.yg)("inlineCode",{parentName:"p"},"null")," type fields. However, users can use the rule type ",(0,a.yg)("inlineCode",{parentName:"p"},"NULL")," for verification, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"{rule_type = NULL}"),".")),(0,a.yg)("h3",{id:"catalog_table_rule-configmap"},"catalog_table_rule ","[ConfigMap]"),(0,a.yg)("p",null,"Used to assert the catalog table is same with the user defined table."),(0,a.yg)("h3",{id:"table-names-configlist"},"table-names ","[ConfigList]"),(0,a.yg)("p",null,"Used to assert the table should be in the data."),(0,a.yg)("h3",{id:"common-options"},"common options"),(0,a.yg)("p",null,"Sink plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink-common-options"},"Sink Common Options")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"the whole config obey with ",(0,a.yg)("inlineCode",{parentName:"p"},"hocon")," style"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'Assert {\n    rules =\n      {\n        row_rules = [\n          {\n            rule_type = MAX_ROW\n            rule_value = 10\n          },\n          {\n            rule_type = MIN_ROW\n            rule_value = 5\n          }\n        ],\n        field_rules = [{\n          field_name = name\n          field_type = string\n          field_value = [\n            {\n              rule_type = NOT_NULL\n            },\n            {\n              rule_type = MIN_LENGTH\n              rule_value = 5\n            },\n            {\n              rule_type = MAX_LENGTH\n              rule_value = 10\n            }\n          ]\n        }, {\n          field_name = age\n          field_type = int\n          field_value = [\n            {\n              rule_type = NOT_NULL\n              equals_to = 23\n            },\n            {\n              rule_type = MIN\n              rule_value = 32767\n            },\n            {\n              rule_type = MAX\n              rule_value = 2147483647\n            }\n          ]\n        }\n        ]\n        catalog_table_rule {\n            primary_key_rule = {\n                primary_key_name = "primary key"\n                primary_key_columns = ["id"]\n            }\n            constraint_key_rule = [\n                        {\n                        constraint_key_name = "unique_name"\n                        constraint_key_type = UNIQUE_KEY\n                        constraint_key_columns = [\n                            {\n                                constraint_key_column_name = "id"\n                                constraint_key_sort_type = ASC\n                            }\n                        ]\n                        }\n            ]\n            column_rule = [\n               {\n                name = "id"\n                type = bigint\n               },\n              {\n                name = "name"\n                type = string\n              },\n              {\n                name = "age"\n                type = int\n              }\n            ]\n        }\n      }\n\n  }\n')),(0,a.yg)("p",null,"Here is a more complex example about ",(0,a.yg)("inlineCode",{parentName:"p"},"equals_to"),". The example involves FakeSource. You may want to learn it, please read this ",(0,a.yg)("a",{parentName:"p",href:"/docs/connector-v2/source/FakeSource"},"document"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  FakeSource {\n    row.num = 1\n    schema = {\n      fields {\n        c_null = "null"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_date = date\n        c_timestamp = timestamp\n        c_time = time\n        c_bytes = bytes\n        c_array = "array<int>"\n        c_map = "map<time, string>"\n        c_map_nest = "map<string, {c_int = int, c_string = string}>"\n        c_row = {\n          c_null = "null"\n          c_string = string\n          c_boolean = boolean\n          c_tinyint = tinyint\n          c_smallint = smallint\n          c_int = int\n          c_bigint = bigint\n          c_float = float\n          c_double = double\n          c_decimal = "decimal(30, 8)"\n          c_date = date\n          c_timestamp = timestamp\n          c_time = time\n          c_bytes = bytes\n          c_array = "array<int>"\n          c_map = "map<string, string>"\n        }\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [\n          null, "AAA", false, 1, 1, 333, 323232, 3.1, 9.33333, 99999.99999999, "2012-12-21", "2012-12-21T12:34:56", "12:34:56",\n          "bWlJWmo=",\n          [0, 1, 2],\n          "{ 12:01:26 = v0 }",\n          { k1 = [123, "BBB-BB"]},\n          [\n            null, "AAA", false, 1, 1, 333, 323232, 3.1, 9.33333, 99999.99999999, "2012-12-21", "2012-12-21T12:34:56", "12:34:56",\n            "bWlJWmo=",\n            [0, 1, 2],\n            { k0 = v0 }\n          ]\n        ]\n      }\n    ]\n    result_table_name = "fake"\n  }\n}\n\nsink{\n  Assert {\n    source_table_name = "fake"\n    rules =\n      {\n        row_rules = [\n          {\n            rule_type = MAX_ROW\n            rule_value = 1\n          },\n          {\n            rule_type = MIN_ROW\n            rule_value = 1\n          }\n        ],\n        field_rules = [\n            {\n                field_name = c_null\n                field_type = "null"\n                field_value = [\n                    {\n                        rule_type = NULL\n                    }\n                ]\n            },\n            {\n                field_name = c_string\n                field_type = string\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = "AAA"\n                    }\n                ]\n            },\n            {\n                field_name = c_boolean\n                field_type = boolean\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = false\n                    }\n                ]\n            },\n            {\n                field_name = c_tinyint\n                field_type = tinyint\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 1\n                    }\n                ]\n            },\n            {\n                field_name = c_smallint\n                field_type = smallint\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 1\n                    }\n                ]\n            },\n            {\n                field_name = c_int\n                field_type = int\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 333\n                    }\n                ]\n            },\n            {\n                field_name = c_bigint\n                field_type = bigint\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 323232\n                    }\n                ]\n            },\n            {\n                field_name = c_float\n                field_type = float\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 3.1\n                    }\n                ]\n            },\n            {\n                field_name = c_double\n                field_type = double\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 9.33333\n                    }\n                ]\n            },\n            {\n                field_name = c_decimal\n                field_type = "decimal(30, 8)"\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = 99999.99999999\n                    }\n                ]\n            },\n            {\n                field_name = c_date\n                field_type = date\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = "2012-12-21"\n                    }\n                ]\n            },\n            {\n                field_name = c_timestamp\n                field_type = timestamp\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = "2012-12-21T12:34:56"\n                    }\n                ]\n            },\n            {\n                field_name = c_time\n                field_type = time\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = "12:34:56"\n                    }\n                ]\n            },\n            {\n                field_name = c_bytes\n                field_type = bytes\n                field_value = [\n                      {\n                          rule_type = NOT_NULL\n                          equals_to = "bWlJWmo="\n                      }\n                ]\n            },\n            {\n                field_name = c_array\n                field_type = "array<int>"\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = [0, 1, 2]\n                    }\n                ]\n            },\n            {\n                field_name = c_map\n                field_type = "map<time, string>"\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = "{ 12:01:26 = v0 }"\n                    }\n                ]\n            },\n            {\n                field_name = c_map_nest\n                field_type = "map<string, {c_int = int, c_string = string}>"\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = { k1 = [123, "BBB-BB"] }\n                    }\n                ]\n            },\n            {\n                field_name = c_row\n                field_type = {\n                    c_null = "null"\n                    c_string = string\n                    c_boolean = boolean\n                    c_tinyint = tinyint\n                    c_smallint = smallint\n                    c_int = int\n                    c_bigint = bigint\n                    c_float = float\n                    c_double = double\n                    c_decimal = "decimal(30, 8)"\n                    c_date = date\n                    c_timestamp = timestamp\n                    c_time = time\n                    c_bytes = bytes\n                    c_array = "array<int>"\n                    c_map = "map<string, string>"\n                }\n                field_value = [\n                    {\n                        rule_type = NOT_NULL\n                        equals_to = [\n                           null, "AAA", false, 1, 1, 333, 323232, 3.1, 9.33333, 99999.99999999, "2012-12-21", "2012-12-21T12:34:56", "12:34:56",\n                           "bWlJWmo=",\n                           [0, 1, 2],\n                           { k0 = v0 }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\n  }\n}\n')),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Assert Sink Connector")),(0,a.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[Improve]"," 1.Support check the number of rows (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2844"},"2844"),") (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3031"},"3031"),"):",(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"check rows not empty"),(0,a.yg)("li",{parentName:"ul"},"check minimum number of rows"),(0,a.yg)("li",{parentName:"ul"},"check maximum number of rows"))),(0,a.yg)("li",{parentName:"ul"},"[Improve]"," 2.Support direct define of data values(row) (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2844"},"2844"),") (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3031"},"3031"),")"),(0,a.yg)("li",{parentName:"ul"},"[Improve]"," 3.Support setting parallelism as 1 (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2844"},"2844"),") (",(0,a.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3031"},"3031"),")")))}y.isMDXComponent=!0}}]);