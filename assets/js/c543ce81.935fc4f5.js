"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[40605],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>d});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=g(e,["components","mdxType","originalType","parentName"]),y=p(t),u=r,d=y["".concat(o,".").concat(u)]||y[u]||s[u]||l;return t?a.createElement(d,i(i({ref:n},m),{},{components:t})):a.createElement(d,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var g={};for(var o in n)hasOwnProperty.call(n,o)&&(g[o]=n[o]);g.originalType=e,g[y]="string"==typeof e?e:r,i[1]=g;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40675:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>g,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={},i="Replace",g={unversionedId:"transform-v2/replace",id:"version-2.3.2/transform-v2/replace",title:"Replace",description:"Replace transform plugin",source:"@site/versioned_docs/version-2.3.2/transform-v2/replace.md",sourceDirName:"transform-v2",slug:"/transform-v2/replace",permalink:"/docs/2.3.2/transform-v2/replace",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.2/transform-v2/replace.md",tags:[],version:"2.3.2",frontMatter:{},sidebar:"docs",previous:{title:"Filter",permalink:"/docs/2.3.2/transform-v2/filter"},next:{title:"Split",permalink:"/docs/2.3.2/transform-v2/split"}},o={},p=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"replace_field string",id:"replace_field-string",level:3},{value:"pattern string",id:"pattern-string",level:3},{value:"replacement string",id:"replacement-string",level:3},{value:"is_regex boolean",id:"is_regex-boolean",level:3},{value:"replace_first boolean",id:"replace_first-boolean",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Job Config Example",id:"job-config-example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],m={toc:p},y="wrapper";function s(e){let{components:n,...t}=e;return(0,r.yg)(y,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"replace"},"Replace"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Replace transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Examines string value in a given field and replaces substring of the string value that matches the given string literal or regexes with the given replacement."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replace_field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"pattern"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replacement"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_regex"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"replace_first"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"false")))),(0,r.yg)("h3",{id:"replace_field-string"},"replace_field ","[string]"),(0,r.yg)("p",null,"The field you want to replace"),(0,r.yg)("h3",{id:"pattern-string"},"pattern ","[string]"),(0,r.yg)("p",null,"The old string that will be replaced"),(0,r.yg)("h3",{id:"replacement-string"},"replacement ","[string]"),(0,r.yg)("p",null,"The new string for replace"),(0,r.yg)("h3",{id:"is_regex-boolean"},"is_regex ","[boolean]"),(0,r.yg)("p",null,"Use regex for string match"),(0,r.yg)("h3",{id:"replace_first-boolean"},"replace_first ","[boolean]"),(0,r.yg)("p",null,"Whether replace the first match string. Only used when ",(0,r.yg)("inlineCode",{parentName:"p"},"is_regex = true"),"."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.3.2/transform-v2/common-options"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")))),(0,r.yg)("p",null,"We want to replace the char ",(0,r.yg)("inlineCode",{parentName:"p"}," ")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"_")," at the ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field. Then we can add a ",(0,r.yg)("inlineCode",{parentName:"p"},"Replace")," Transform like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'transform {\n  Replace {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    replace_field = "name"\n    pattern = " "\n    replacement = "_"\n    is_regex = true\n  }\n}\n')),(0,r.yg)("p",null,"Then the data in result table ",(0,r.yg)("inlineCode",{parentName:"p"},"fake1")," will update to"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"card"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy_Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"May_Ding"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Kin_Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Joy_Dom"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"123")))),(0,r.yg)("h2",{id:"job-config-example"},"Job Config Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    result_table_name = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n  }\n}\n\ntransform {\n  Replace {\n    source_table_name = "fake"\n    result_table_name = "fake1"\n    replace_field = "name"\n    pattern = ".+"\n    replacement = "b"\n    is_regex = true\n  }\n}\n\nsink {\n  Console {\n    source_table_name = "fake1"\n  }\n}\n')),(0,r.yg)("h2",{id:"changelog"},"Changelog"),(0,r.yg)("h3",{id:"new-version"},"new version"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add Replace Transform Connector")))}s.isMDXComponent=!0}}]);