"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[21911],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var r=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,y=c["".concat(u,".").concat(d)]||c[d]||g[d]||a;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(58168),l=(n(96540),n(15680));const a={},o=void 0,i={unversionedId:"configuration/input-plugins/Alluxio",id:"version-1.x/configuration/input-plugins/Alluxio",title:"Alluxio",description:"Input plugin : Alluxio",source:"@site/versioned_docs/version-1.x/configuration/input-plugins/Alluxio.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Alluxio",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/Alluxio",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugins/Alluxio.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"Input plugin",permalink:"/zh-CN/docs/1.x/configuration/input-plugin"},next:{title:"Fake",permalink:"/zh-CN/docs/1.x/configuration/input-plugins/Fake"}},u={},p=[{value:"Input plugin : Alluxio",id:"input-plugin--alluxio",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"path string",id:"path-string",level:5},{value:"Note",id:"note",level:3},{value:"Example",id:"example",level:3}],s={toc:p},c="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"input-plugin--alluxio"},"Input plugin : Alluxio"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Author: InterestingLab"),(0,l.yg)("li",{parentName:"ul"},"Homepage: ",(0,l.yg)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,l.yg)("li",{parentName:"ul"},"Version: 1.5.0")),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("p",null,"Read raw data from Alluxio."),(0,l.yg)("h3",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("a",{parentName:"td",href:"#path-string"},"path")),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h5",{id:"path-string"},"path ","[string]"),(0,l.yg)("p",null,"File path on Alluxio cluster."),(0,l.yg)("h3",{id:"note"},"Note"),(0,l.yg)("p",null,"if use alluxio with zookeeper, please add below in start-seatunnel.sh "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'driverJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\nexecutorJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\n')),(0,l.yg)("p",null,"or you can also add below in spark{} in seatunnel configuration after 1.5.0 "),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'spark.driverJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\nspark.executorJavaOpts="-Dalluxio.user.file.writetype.default=CACHE_THROUGH -Dalluxio.zookeeper.address=your.zookeeper.address:zookeeper.port -Dalluxio.zookeeper.enabled=true"\n')),(0,l.yg)("h3",{id:"example"},"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'alluxio {\n    path = "alluxio:///access.log"\n}\n')),(0,l.yg)("p",null,"or you can specify alluxio name service:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'alluxio {\n    path = "alluxio://m2:8022/access.log"\n}\n')))}g.isMDXComponent=!0}}]);