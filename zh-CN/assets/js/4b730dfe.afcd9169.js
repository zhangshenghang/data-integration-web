"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[14808],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),c=a,d=m["".concat(s,".").concat(c)]||m[c]||g[c]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},76444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},i="Common Options",o={unversionedId:"spark/configuration/transform-plugins/transform-plugin",id:"version-2.1.0/spark/configuration/transform-plugins/transform-plugin",title:"Common Options",description:"Transform Common Options [Spark]",source:"@site/versioned_docs/version-2.1.0/spark/configuration/transform-plugins/transform-plugin.md",sourceDirName:"spark/configuration/transform-plugins",slug:"/spark/configuration/transform-plugins/transform-plugin",permalink:"/zh-CN/docs/2.1.0/spark/configuration/transform-plugins/transform-plugin",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/spark/configuration/transform-plugins/transform-plugin.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sql",permalink:"/zh-CN/docs/2.1.0/spark/configuration/transform-plugins/Sql"},next:{title:"deployment",permalink:"/zh-CN/docs/2.1.0/spark/deployment"}},s={},p=[{value:"Transform Plugin common parameters",id:"transform-plugin-common-parameters",level:2},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"Examples",id:"examples",level:2}],u={toc:p},m="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(m,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"common-options"},"Common Options"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Transform Common Options ","[Spark]")),(0,a.yg)("h2",{id:"transform-plugin-common-parameters"},"Transform Plugin common parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"source_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"result_table_name"),(0,a.yg)("td",{parentName:"tr",align:null},"string"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null},"-")))),(0,a.yg)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plug-in processes the data set ",(0,a.yg)("inlineCode",{parentName:"p"},"(dataset)")," output by the previous plug-in in the configuration file;"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter."),(0,a.yg)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table ",(0,a.yg)("inlineCode",{parentName:"p"},"(table)"),";"),(0,a.yg)("p",null,"When ",(0,a.yg)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,a.yg)("inlineCode",{parentName:"p"},"(dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,a.yg)("inlineCode",{parentName:"p"},"(table)")," . The dataset registered here can be directly accessed by other plugins by specifying ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_table_name = "source_view_table"\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n    result_table_name = "result_view_table"\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"Split")," plugin will process the data in the temporary table ",(0,a.yg)("inlineCode",{parentName:"p"},"source_view_table")," and register the processing result as a temporary table named ",(0,a.yg)("inlineCode",{parentName:"p"},"result_view_table"),". This temporary table can be used by any subsequent ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"Output")," plugin by specifying ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," .")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},'split {\n    source_field = "message"\n    delimiter = "&"\n    fields = ["field1", "field2"]\n}\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"If ",(0,a.yg)("inlineCode",{parentName:"p"},"source_table_name")," is not configured, output the processing result of the last ",(0,a.yg)("inlineCode",{parentName:"p"},"Transform")," plugin in the configuration file")))}g.isMDXComponent=!0}}]);