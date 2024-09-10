"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[58254],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>s});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var g=a.createContext({}),m=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(g.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,s=d["".concat(g,".").concat(c)]||d[c]||u[c]||r;return t?a.createElement(s,i(i({ref:n},p),{},{components:t})):a.createElement(s,i({ref:n},p))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},3235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=t(58168),l=(t(96540),t(15680));const r={},i="FakeSource",o={unversionedId:"connector-v2/source/FakeSource",id:"connector-v2/source/FakeSource",title:"FakeSource",description:"FakeSource connector",source:"@site/docs/connector-v2/source/FakeSource.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/FakeSource",permalink:"/docs/connector-v2/source/FakeSource",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/FakeSource.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/docs/connector-v2/source/Elasticsearch"},next:{title:"FtpFile",permalink:"/docs/connector-v2/source/FtpFile"}},g={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Random Generation",id:"random-generation",level:3},{value:"Customize the data content Simple:",id:"customize-the-data-content-simple",level:3},{value:"Specified Data number Simple:",id:"specified-data-number-simple",level:3},{value:"Template data Simple:",id:"template-data-simple",level:3},{value:"Range data Simple:",id:"range-data-simple",level:3},{value:"Generate Multiple tables",id:"generate-multiple-tables",level:3},{value:"Options <code>rows</code> Case",id:"options-rows-case",level:3},{value:"Options <code>table-names</code> Case",id:"options-table-names-case",level:3},{value:"Use Vector Example",id:"use-vector-example",level:3},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"next version",id:"next-version",level:3}],p={toc:m},d="wrapper";function u(e){let{components:n,...t}=e;return(0,l.yg)(d,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"fakesource"},"FakeSource"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"FakeSource connector")),(0,l.yg)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Spark",(0,l.yg)("br",null),"\nFlink",(0,l.yg)("br",null),"\nSeaTunnel Zeta",(0,l.yg)("br",null))),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"The FakeSource is a virtual data source, which randomly generates the number of rows according to the data structure of the user-defined schema,\njust for some test cases such as type conversion or connector new feature testing"),(0,l.yg)("h2",{id:"key-features"},"Key Features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"batch")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"stream")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"column projection")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"parallelism")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.yg)("h2",{id:"source-options"},"Source Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Name"),(0,l.yg)("th",{parentName:"tr",align:null},"Type"),(0,l.yg)("th",{parentName:"tr",align:null},"Required"),(0,l.yg)("th",{parentName:"tr",align:null},"Default"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tables_configs"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Define Multiple FakeSource, each item can contains the whole fake source config description below")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"schema"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Define Schema information")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"rows"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The row list of fake data output per degree of parallelism see title ",(0,l.yg)("inlineCode",{parentName:"td"},"Options rows Case"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"row.num"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"The total number of data generated per degree of parallelism")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.num"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"the number of splits generated by the enumerator for each degree of parallelism")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"split.read-interval"),(0,l.yg)("td",{parentName:"tr",align:null},"long"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"The interval(mills) between two split reads in a reader")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"map.size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"The size of ",(0,l.yg)("inlineCode",{parentName:"td"},"map")," type that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"array.size"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"The size of ",(0,l.yg)("inlineCode",{parentName:"td"},"array")," type that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bytes.length"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"The length of ",(0,l.yg)("inlineCode",{parentName:"td"},"bytes")," type that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"string.length"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"5"),(0,l.yg)("td",{parentName:"tr",align:null},"The length of ",(0,l.yg)("inlineCode",{parentName:"td"},"string")," type that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"string.fake.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating string data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"string.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"string.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of string type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tinyint.fake.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating tinyint data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"tinyint.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tinyint.min"),(0,l.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of tinyint data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tinyint.max"),(0,l.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"127"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of tinyint data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"tinyint.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of tinyint type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"smallint.fake.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating smallint data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"smallint.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"smallint.min"),(0,l.yg)("td",{parentName:"tr",align:null},"smallint"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of smallint data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"smallint.max"),(0,l.yg)("td",{parentName:"tr",align:null},"smallint"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"32767"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of smallint data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"smallint.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of smallint type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"int.fake.template"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating int data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"int.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"int.min"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of int data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"int.max"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0x7fffffff"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of int data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"int.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of int type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bigint.fake.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating bigint data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"bigint.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bigint.min"),(0,l.yg)("td",{parentName:"tr",align:null},"bigint"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of bigint data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bigint.max"),(0,l.yg)("td",{parentName:"tr",align:null},"bigint"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0x7fffffffffffffff"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of bigint data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"bigint.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of bigint type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"float.fake.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating float data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"float.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"float.min"),(0,l.yg)("td",{parentName:"tr",align:null},"float"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of float data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"float.max"),(0,l.yg)("td",{parentName:"tr",align:null},"float"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0x1.fffffeP+127"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of float data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"float.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of float type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"double.fake.mode"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"range"),(0,l.yg)("td",{parentName:"tr",align:null},"The fake mode of generating float data, support ",(0,l.yg)("inlineCode",{parentName:"td"},"range")," and ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", default ",(0,l.yg)("inlineCode",{parentName:"td"},"range"),"\uff0cif use configured it to ",(0,l.yg)("inlineCode",{parentName:"td"},"template"),", user should also configured ",(0,l.yg)("inlineCode",{parentName:"td"},"double.template")," option")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"double.min"),(0,l.yg)("td",{parentName:"tr",align:null},"double"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of double data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"double.max"),(0,l.yg)("td",{parentName:"tr",align:null},"double"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0x1.fffffffffffffP+1023"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of double data that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"double.template"),(0,l.yg)("td",{parentName:"tr",align:null},"list"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"The template list of double type that connector generated, if user configured it, connector will randomly select an item from the template list")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"vector.dimension"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"Dimension of the generated vector, excluding binary vectors")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"binary.vector.dimension"),(0,l.yg)("td",{parentName:"tr",align:null},"int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"8"),(0,l.yg)("td",{parentName:"tr",align:null},"Dimension of the generated binary vector")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"vector.float.min"),(0,l.yg)("td",{parentName:"tr",align:null},"float"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"The min value of float data in vector that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"vector.float.max"),(0,l.yg)("td",{parentName:"tr",align:null},"float"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"0x1.fffffeP+127"),(0,l.yg)("td",{parentName:"tr",align:null},"The max value of float data in vector that connector generated")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-"),(0,l.yg)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"td",href:"/docs/connector-v2/source-common-options"},"Source Common Options")," for details")))),(0,l.yg)("h2",{id:"task-example"},"Task Example"),(0,l.yg)("h3",{id:"simple"},"Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This example Randomly generates data of a specified type. If you want to learn how to declare field types, click ",(0,l.yg)("a",{parentName:"p",href:"/docs/concept/schema-feature#how-to-declare-type-supported"},"here"),".")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'schema = {\n  fields {\n    c_map = "map<string, array<int>>"\n    c_map_nest = "map<string, {c_int = int, c_string = string}>"\n    c_array = "array<int>"\n    c_string = string\n    c_boolean = boolean\n    c_tinyint = tinyint\n    c_smallint = smallint\n    c_int = int\n    c_bigint = bigint\n    c_float = float\n    c_double = double\n    c_decimal = "decimal(30, 8)"\n    c_null = "null"\n    c_bytes = bytes\n    c_date = date\n    c_timestamp = timestamp\n    c_row = {\n      c_map = "map<string, map<string, string>>"\n      c_array = "array<int>"\n      c_string = string\n      c_boolean = boolean\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n      c_decimal = "decimal(30, 8)"\n      c_null = "null"\n      c_bytes = bytes\n      c_date = date\n      c_timestamp = timestamp\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"random-generation"},"Random Generation"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"16 data matching the type are randomly generated")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  # This is a example input plugin **only for test and demonstrate the feature input plugin**\n  FakeSource {\n    row.num = 16\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    result_table_name = "fake"\n  }\n}\n')),(0,l.yg)("h3",{id:"customize-the-data-content-simple"},"Customize the data content Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This is a self-defining data source information, defining whether each piece of data is an add or delete modification operation, and defining what each field stores")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n  FakeSource {\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n    rows = [\n      {\n        kind = INSERT\n        fields = [{"a": "b"}, [101], "c_string", true, 117, 15987, 56387395, 7084913402530365000, 1.23, 1.23, "2924137191386439303744.39292216", null, "bWlJWmo=", "2023-04-22", "2023-04-22T23:20:58"]\n      }\n      {\n        kind = UPDATE_BEFORE\n        fields = [{"a": "c"}, [102], "c_string", true, 117, 15987, 56387395, 7084913402530365000, 1.23, 1.23, "2924137191386439303744.39292216", null, "bWlJWmo=", "2023-04-22", "2023-04-22T23:20:58"]\n      }\n      {\n        kind = UPDATE_AFTER\n        fields = [{"a": "e"}, [103], "c_string", true, 117, 15987, 56387395, 7084913402530365000, 1.23, 1.23, "2924137191386439303744.39292216", null, "bWlJWmo=", "2023-04-22", "2023-04-22T23:20:58"]\n      }\n      {\n        kind = DELETE\n        fields = [{"a": "f"}, [104], "c_string", true, 117, 15987, 56387395, 7084913402530365000, 1.23, 1.23, "2924137191386439303744.39292216", null, "bWlJWmo=", "2023-04-22", "2023-04-22T23:20:58"]\n      }\n    ]\n  }\n}\n')),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Due to the constraints of the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON")," specification, users cannot directly create byte sequence objects. FakeSource uses strings to assign ",(0,l.yg)("inlineCode",{parentName:"p"},"bytes")," type values. In the example above, the ",(0,l.yg)("inlineCode",{parentName:"p"},"bytes")," type field is assigned ",(0,l.yg)("inlineCode",{parentName:"p"},'"bWlJWmo="'),', which is encoded from "miIZj" with ',(0,l.yg)("strong",{parentName:"p"},"base64"),". Hence, when assigning values to ",(0,l.yg)("inlineCode",{parentName:"p"},"bytes")," type fields, please use strings encoded with ",(0,l.yg)("strong",{parentName:"p"},"base64"),".")),(0,l.yg)("h3",{id:"specified-data-number-simple"},"Specified Data number Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This case specifies the number of data generated and the length of the generated value")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  row.num = 10\n  map.size = 10\n  array.size = 10\n  bytes.length = 10\n  string.length = 10\n  schema = {\n    fields {\n      c_map = "map<string, array<int>>"\n      c_array = "array<int>"\n      c_string = string\n      c_boolean = boolean\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n      c_decimal = "decimal(30, 8)"\n      c_null = "null"\n      c_bytes = bytes\n      c_date = date\n      c_timestamp = timestamp\n      c_row = {\n        c_map = "map<string, map<string, string>>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_decimal = "decimal(30, 8)"\n        c_null = "null"\n        c_bytes = bytes\n        c_date = date\n        c_timestamp = timestamp\n      }\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"template-data-simple"},"Template data Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Randomly generated according to the specified template")),(0,l.yg)("p",null,"Using template"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  row.num = 5\n  string.fake.mode = "template"\n  string.template = ["tyrantlucifer", "hailin", "kris", "fanjia", "zongwen", "gaojun"]\n  tinyint.fake.mode = "template"\n  tinyint.template = [1, 2, 3, 4, 5, 6, 7, 8, 9]\n  smalling.fake.mode = "template"\n  smallint.template = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]\n  int.fake.mode = "template"\n  int.template = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]\n  bigint.fake.mode = "template"\n  bigint.template = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]\n  float.fake.mode = "template"\n  float.template = [40.0, 41.0, 42.0, 43.0]\n  double.fake.mode = "template"\n  double.template = [44.0, 45.0, 46.0, 47.0]\n  schema {\n    fields {\n      c_string = string\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"range-data-simple"},"Range data Simple:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"The specified data generation range is randomly generated")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  row.num = 5\n  string.template = ["tyrantlucifer", "hailin", "kris", "fanjia", "zongwen", "gaojun"]\n  tinyint.min = 1\n  tinyint.max = 9\n  smallint.min = 10\n  smallint.max = 19\n  int.min = 20\n  int.max = 29\n  bigint.min = 30\n  bigint.max = 39\n  float.min = 40.0\n  float.max = 43.0\n  double.min = 44.0\n  double.max = 47.0\n  schema {\n    fields {\n      c_string = string\n      c_tinyint = tinyint\n      c_smallint = smallint\n      c_int = int\n      c_bigint = bigint\n      c_float = float\n      c_double = double\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"generate-multiple-tables"},"Generate Multiple tables"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This is a case of generating a multi-data source test.table1 and test.table2")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'FakeSource {\n  tables_configs = [\n    {\n      row.num = 16\n      schema {\n        table = "test.table1"\n        fields {\n          c_string = string\n          c_tinyint = tinyint\n          c_smallint = smallint\n          c_int = int\n          c_bigint = bigint\n          c_float = float\n          c_double = double\n        }\n      }\n    },\n    {\n      row.num = 17\n      schema {\n        table = "test.table2"\n        fields {\n          c_string = string\n          c_tinyint = tinyint\n          c_smallint = smallint\n          c_int = int\n          c_bigint = bigint\n          c_float = float\n          c_double = double\n        }\n      }\n    }\n  ]\n}\n')),(0,l.yg)("h3",{id:"options-rows-case"},"Options ",(0,l.yg)("inlineCode",{parentName:"h3"},"rows")," Case"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'rows = [\n  {\n    kind = INSERT\n    fields = [1, "A", 100]\n  },\n  {\n    kind = UPDATE_BEFORE\n    fields = [1, "A", 100]\n  },\n  {\n    kind = UPDATE_AFTER\n    fields = [1, "A_1", 100]\n  },\n  {\n    kind = DELETE\n    fields = [1, "A_1", 100]\n  }\n]\n')),(0,l.yg)("h3",{id:"options-table-names-case"},"Options ",(0,l.yg)("inlineCode",{parentName:"h3"},"table-names")," Case"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    table-names = ["test.table1", "test.table2", "test.table3"]\n    parallelism = 1\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n')),(0,l.yg)("h3",{id:"use-vector-example"},"Use Vector Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'\nsource {\n  FakeSource {\n      row.num = 10\n      vector.dimension= 4\n      binary.vector.dimension = 8\n      schema = {\n           table = "simple_example"\n           columns = [\n           {\n              name = book_id\n              type = bigint\n              nullable = false\n              defaultValue = 0\n              comment = "primary key id"\n           },\n            {\n              name = book_intro_1\n              type = binary_vector\n              columnScale =8\n              comment = "vector"\n           },\n           {\n              name = book_intro_2\n              type = float16_vector\n              columnScale =4\n              comment = "vector"\n           },\n           {\n              name = book_intro_3\n              type = bfloat16_vector\n              columnScale =4\n              comment = "vector"\n           },\n           {\n              name = book_intro_4\n              type = sparse_float_vector\n              columnScale =4\n              comment = "vector"\n           }\n       ]\n     }\n  }\n}\n\n\n')),(0,l.yg)("p",null,"ps: columnScale needs to be improved in schema-feature , used to specify the dimension of vectors and precision of float. For details, see ",(0,l.yg)("a",{parentName:"p",href:"/docs/concept/schema-feature#Columns"},"here")),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add FakeSource Source Connector")),(0,l.yg)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Supports direct definition of data values(row) (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2839"},"2839"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Improve fake source connector: (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2944"},"2944"),")",(0,l.yg)("ul",{parentName:"li"},(0,l.yg)("li",{parentName:"ul"},"Support user-defined map size"),(0,l.yg)("li",{parentName:"ul"},"Support user-defined array size"),(0,l.yg)("li",{parentName:"ul"},"Support user-defined string length"),(0,l.yg)("li",{parentName:"ul"},"Support user-defined bytes length"))),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Support multiple splits for fake source connector (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/2974"},"2974"),")"),(0,l.yg)("li",{parentName:"ul"},"[Improve]"," Supports setting the number of splits per parallelism and the reading interval between two splits (",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3098"},"3098"),")")),(0,l.yg)("h3",{id:"next-version"},"next version"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"[Feature]"," Support config fake data rows ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3865"},"3865")),(0,l.yg)("li",{parentName:"ul"},"[Feature]"," Support config template or range for fake data ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/seatunnel/pull/3932"},"3932"))))}u.isMDXComponent=!0}}]);