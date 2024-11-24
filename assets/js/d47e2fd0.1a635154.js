"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[50059],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),g=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=g(e.components);return r.createElement(p.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),y=g(n),m=a,s=y["".concat(p,".").concat(m)]||y[m]||u[m]||l;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var g=2;g<l;g++)i[g]=n[g];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const l={},i="Filter",o={unversionedId:"transform-v2/filter",id:"transform-v2/filter",title:"Filter",description:"Filter transform plugin",source:"@site/docs/transform-v2/filter.md",sourceDirName:"transform-v2",slug:"/transform-v2/filter",permalink:"/docs/transform-v2/filter",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform-v2/filter.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"FilterRowKind",permalink:"/docs/transform-v2/filter-rowkind"},next:{title:"JsonPath",permalink:"/docs/transform-v2/jsonpath"}},p={},g=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"include_fields array",id:"include_fields-array",level:3},{value:"exclude_fields array",id:"exclude_fields-array",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"new version",id:"new-version",level:3}],d={toc:g},y="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(y,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"filter"},"Filter"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Filter transform plugin")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Filter the field."),(0,a.yg)("h2",{id:"options"},"Options"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"type"),(0,a.yg)("th",{parentName:"tr",align:null},"required"),(0,a.yg)("th",{parentName:"tr",align:null},"default value"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"include_fields"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"exclude_fields"),(0,a.yg)("td",{parentName:"tr",align:null},"array"),(0,a.yg)("td",{parentName:"tr",align:null},"no"),(0,a.yg)("td",{parentName:"tr",align:null})))),(0,a.yg)("p",null,"Notice, you must set one and only one of ",(0,a.yg)("inlineCode",{parentName:"p"},"include_fields")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"exclude_fields")," properties"),(0,a.yg)("h3",{id:"include_fields-array"},"include_fields ","[array]"),(0,a.yg)("p",null,"The list of fields that need to be kept. Fields not in the list will be deleted."),(0,a.yg)("h3",{id:"exclude_fields-array"},"exclude_fields ","[array]"),(0,a.yg)("p",null,"The list of fields that need to be deleted. Fields not in the list will be kept."),(0,a.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/transform-v2/common-options"},"Transform Plugin")," for details"),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("p",null,"The data read from source is a table like this:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"age"),(0,a.yg)("th",{parentName:"tr",align:null},"card"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"20"),(0,a.yg)("td",{parentName:"tr",align:null},"123")))),(0,a.yg)("p",null,"we want to keep the field named ",(0,a.yg)("inlineCode",{parentName:"p"},"name"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"card"),", we can add a ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," Transform like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'transform {\n  Filter {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    include_fields = [name, card]\n  }\n}\n')),(0,a.yg)("p",null,"Or we can delete the field named ",(0,a.yg)("inlineCode",{parentName:"p"},"age")," by adding a ",(0,a.yg)("inlineCode",{parentName:"p"},"Filter")," Transform with ",(0,a.yg)("inlineCode",{parentName:"p"},"exclude_fields")," field set like below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'transform {\n  Filter {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    exclude_fields = [age]\n  }\n}\n')),(0,a.yg)("p",null,"It is useful when you want to delete a small number of fields from a large table with tons of fields."),(0,a.yg)("p",null,"Then the data in result table ",(0,a.yg)("inlineCode",{parentName:"p"},"fake1")," will like this"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"name"),(0,a.yg)("th",{parentName:"tr",align:null},"card"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"123")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,a.yg)("td",{parentName:"tr",align:null},"123")))),(0,a.yg)("h2",{id:"changelog"},"Changelog"),(0,a.yg)("h3",{id:"new-version"},"new version"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add Filter Transform Connector")))}u.isMDXComponent=!0}}]);