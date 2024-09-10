"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[72312],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,m=c["".concat(s,".").concat(d)]||c[d]||f[d]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const l={},o="Deployment and run",i={unversionedId:"flink/deployment",id:"version-2.1.0/flink/deployment",title:"Deployment and run",description:"seatunnel For Flink relies on the Java runtime environment and Flink . For detailed seatunnel installation steps, refer to installing seatunnel",source:"@site/versioned_docs/version-2.1.0/flink/deployment.md",sourceDirName:"flink",slug:"/flink/deployment",permalink:"/docs/2.1.0/flink/deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/deployment.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Common Options",permalink:"/docs/2.1.0/flink/configuration/transform-plugins/transform-plugin"},next:{title:"Download and install",permalink:"/docs/2.1.0/flink/installation"}},s={},u=[{value:"Run seatunnel on Flink Standalone cluster",id:"run-seatunnel-on-flink-standalone-cluster",level:2},{value:"Run seatunnel on Yarn cluster",id:"run-seatunnel-on-yarn-cluster",level:2}],p={toc:u},c="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"deployment-and-run"},"Deployment and run"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel For Flink")," relies on the ",(0,a.yg)("inlineCode",{parentName:"p"},"Java")," runtime environment and ",(0,a.yg)("inlineCode",{parentName:"p"},"Flink")," . For detailed ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel")," installation steps, refer to ",(0,a.yg)("a",{parentName:"p",href:"/docs/2.1.0/flink/installation"},"installing seatunnel")),(0,a.yg)("p",null,"The following focuses on how different platforms run:"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"First edit the ",(0,a.yg)("inlineCode",{parentName:"p"},"config/seatunnel-env.sh")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel")," directory after decompression, and specify the required environment configuration ",(0,a.yg)("inlineCode",{parentName:"p"},"FLINK_HOME"))),(0,a.yg)("h2",{id:"run-seatunnel-on-flink-standalone-cluster"},"Run seatunnel on Flink Standalone cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n--config config-path\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n--config config-path\n")),(0,a.yg)("h2",{id:"run-seatunnel-on-yarn-cluster"},"Run seatunnel on Yarn cluster"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"bin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n--config config-path\n\n# -ynm seatunnel specifies the name displayed in the yarn webUI as seatunnel, you can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n-ynm seatunnel \\\n--config config-path\n")),(0,a.yg)("p",null,"Refer to: ",(0,a.yg)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/zh/docs/deployment/resource-providers/yarn"},"Flink Yarn Setup")))}f.isMDXComponent=!0}}]);