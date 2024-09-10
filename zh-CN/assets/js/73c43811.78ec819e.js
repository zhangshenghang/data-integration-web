"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[49935],{15680:(A,g,C)=>{C.d(g,{xA:()=>t,yg:()=>p});var B=C(96540);function e(A,g,C){return g in A?Object.defineProperty(A,g,{value:C,enumerable:!0,configurable:!0,writable:!0}):A[g]=C,A}function E(A,g){var C=Object.keys(A);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(A);g&&(B=B.filter((function(g){return Object.getOwnPropertyDescriptor(A,g).enumerable}))),C.push.apply(C,B)}return C}function I(A){for(var g=1;g<arguments.length;g++){var C=null!=arguments[g]?arguments[g]:{};g%2?E(Object(C),!0).forEach((function(g){e(A,g,C[g])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(C)):E(Object(C)).forEach((function(g){Object.defineProperty(A,g,Object.getOwnPropertyDescriptor(C,g))}))}return A}function Q(A,g){if(null==A)return{};var C,B,e=function(A,g){if(null==A)return{};var C,B,e={},E=Object.keys(A);for(B=0;B<E.length;B++)C=E[B],g.indexOf(C)>=0||(e[C]=A[C]);return e}(A,g);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(A);for(B=0;B<E.length;B++)C=E[B],g.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(A,C)&&(e[C]=A[C])}return e}var n=B.createContext({}),a=function(A){var g=B.useContext(n),C=g;return A&&(C="function"==typeof A?A(g):I(I({},g),A)),C},t=function(A){var g=a(A.components);return B.createElement(n.Provider,{value:g},A.children)},l="mdxType",r={inlineCode:"code",wrapper:function(A){var g=A.children;return B.createElement(B.Fragment,{},g)}},i=B.forwardRef((function(A,g){var C=A.components,e=A.mdxType,E=A.originalType,n=A.parentName,t=Q(A,["components","mdxType","originalType","parentName"]),l=a(C),i=e,p=l["".concat(n,".").concat(i)]||l[i]||r[i]||E;return C?B.createElement(p,I(I({ref:g},t),{},{components:C})):B.createElement(p,I({ref:g},t))}));function p(A,g){var C=arguments,e=g&&g.mdxType;if("string"==typeof A||e){var E=C.length,I=new Array(E);I[0]=i;var Q={};for(var n in g)hasOwnProperty.call(g,n)&&(Q[n]=g[n]);Q.originalType=A,Q[l]="string"==typeof A?A:e,I[1]=Q;for(var a=2;a<E;a++)I[a]=C[a];return B.createElement.apply(null,I)}return B.createElement.apply(null,C)}i.displayName="MDXCreateElement"},14236:(A,g,C)=>{C.r(g),C.d(g,{assets:()=>n,contentTitle:()=>I,default:()=>r,frontMatter:()=>E,metadata:()=>Q,toc:()=>a});var B=C(58168),e=(C(96540),C(15680));const E={},I="SeaTunnel \u5728\u5b69\u5b50\u738b\u7684\u9009\u578b\u8fc7\u7a0b\u53ca\u5e94\u7528\u6539\u9020\u5b9e\u8df5",Q={permalink:"/zh-CN/blog/2022/05/01/_Kidswant",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-05-01_Kidswant.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-05-01_Kidswant.md",title:"SeaTunnel \u5728\u5b69\u5b50\u738b\u7684\u9009\u578b\u8fc7\u7a0b\u53ca\u5e94\u7528\u6539\u9020\u5b9e\u8df5",description:"\u5728Apache SeaTunnel(Incubating) 4 \u6708Meetup\u4e0a\uff0c\u5b69\u5b50\u738b\u5927\u6570\u636e\u4e13\u5bb6\u3001OLAP\u5e73\u53f0\u67b6\u6784\u5e08 \u8881\u6d2a\u519b \u4e3a\u6211\u4eec\u5e26\u6765\u4e86\u300aApache SeaTunnel (Incubating)\u5728\u5b69\u5b50\u738b\u7684\u5e94\u7528\u5b9e\u8df5\u300b\u3002",date:"2022-05-01T00:00:00.000Z",formattedDate:"2022\u5e745\u67081\u65e5",tags:[],readingTime:13.685,hasTruncateMarker:!1,authors:[],frontMatter:{},prevItem:{title:"\u767e\u4ebf\u7ea7\u6570\u636e\u540c\u6b65\uff0c\u5982\u4f55\u57fa\u4e8e SeaTunnel \u7684 ClickHouse \u5b9e\u73b0\uff1f",permalink:"/zh-CN/blog/2022/05/10/ClickHouse"},nextItem:{title:"\u667a\u80fd\u5316\u65f6\u4ee3\u7684\u6570\u636e\u96c6\u6210\u6280\u672f\u9769\u65b0",permalink:"/zh-CN/blog/\u667a\u80fd\u5316\u65f6\u4ee3\u7684\u6570\u636e\u96c6\u6210\u6280\u672f\u9769\u65b0"}},n={authorsImageUrls:[]},a=[{value:"01 \u80cc\u666f\u4ecb\u7ecd",id:"01-\u80cc\u666f\u4ecb\u7ecd",level:2},{value:"02 \u5927\u6570\u636e\u5904\u7406\u4e3b\u6d41\u5de5\u5177\u5bf9\u6bd4\u5206\u6790",id:"02-\u5927\u6570\u636e\u5904\u7406\u4e3b\u6d41\u5de5\u5177\u5bf9\u6bd4\u5206\u6790",level:2},{value:"03 Apache SeaTunnel (Incubating)\u7684\u843d\u5730\u5b9e\u8df5",id:"03-apache-seatunnel-incubating\u7684\u843d\u5730\u5b9e\u8df5",level:2},{value:"04 Apache SeaTunnel (Incubating)\u6539\u9020\u4e2d\u7684\u5e38\u89c1\u95ee\u9898",id:"04-apache-seatunnel-incubating\u6539\u9020\u4e2d\u7684\u5e38\u89c1\u95ee\u9898",level:2}],t={toc:a},l="wrapper";function r(A){let{components:g,...E}=A;return(0,e.yg)(l,(0,B.A)({},t,E,{components:g,mdxType:"MDXLayout"}),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(54024).A,width:"1920",height:"1080"})),(0,e.yg)("p",null,"\u5728Apache SeaTunnel(Incubating) 4 \u6708Meetup\u4e0a\uff0c\u5b69\u5b50\u738b\u5927\u6570\u636e\u4e13\u5bb6\u3001OLAP\u5e73\u53f0\u67b6\u6784\u5e08 \u8881\u6d2a\u519b \u4e3a\u6211\u4eec\u5e26\u6765\u4e86\u300aApache SeaTunnel (Incubating)\u5728\u5b69\u5b50\u738b\u7684\u5e94\u7528\u5b9e\u8df5\u300b\u3002"),(0,e.yg)("p",null,"\u672c\u6b21\u6f14\u8bb2\u4e3b\u8981\u5305\u542b\u4e94\u4e2a\u90e8\u5206\uff1a"),(0,e.yg)("ul",null,(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u5b69\u5b50\u738b\u5f15\u5165Apache SeaTunnel (Incubating)\u7684\u80cc\u666f\u4ecb\u7ecd")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u5927\u6570\u636e\u5904\u7406\u4e3b\u6d41\u5de5\u5177\u5bf9\u6bd4\u5206\u6790")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"Apache SeaTunnel (Incubating)\u7684\u843d\u5730\u5b9e\u8df5")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"Apache SeaTunnel (Incubating)\u6539\u9020\u4e2d\u7684\u5e38\u89c1\u95ee\u9898")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u5bf9\u5b69\u5b50\u738b\u672a\u6765\u53d1\u5c55\u65b9\u5411\u7684\u9884\u6d4b\u5c55\u671b"))),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(39222).A,width:"2578",height:"2567"})),(0,e.yg)("p",null,"\u8881\u6d2a\u519b"),(0,e.yg)("p",null,"\u5b69\u5b50\u738b \u5927\u6570\u636e\u4e13\u5bb6\u3001OLAP \u5e73\u53f0\u67b6\u6784\u5e08\u3002\u591a\u5e74\u5927\u6570\u636e\u5e73\u53f0\u7814\u53d1\u7ba1\u7406\u7ecf\u9a8c\uff0c\u5728\u6570\u636e\u8d44\u4ea7\u3001\u8840\u7f18\u56fe\u8c31\u3001\u6570\u636e\u6cbb\u7406\u3001OLAP \u7b49\u9886\u57df\u6709\u7740\u4e30\u5bcc\u7684\u7814\u7a76\u7ecf\u9a8c\u3002"),(0,e.yg)("h2",{id:"01-\u80cc\u666f\u4ecb\u7ecd"},"01 \u80cc\u666f\u4ecb\u7ecd"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(64241).A,width:"1583",height:"979"})),(0,e.yg)("p",null,"\u76ee\u524d\u5b69\u5b50\u738b\u7684OLAP\u5e73\u53f0\u4e3b\u8981\u5305\u542b\u5143\u6570\u636e\u5c42\u3001\u4efb\u52a1\u5c42\u3001\u5b58\u50a8\u5c42\u3001SQL\u5c42\u3001\u8c03\u5ea6\u5c42\u3001\u670d\u52a1\u5c42\u4ee5\u53ca\u76d1\u63a7\u5c42\u4e03\u90e8\u5206\uff0c\u672c\u6b21\u5206\u4eab\u4e3b\u8981\u5173\u6ce8\u4efb\u52a1\u5c42\u4e2d\u7684\u79bb\u7ebf\u4efb\u52a1\u3002"),(0,e.yg)("p",null,"\u5176\u5b9e\u5b69\u5b50\u738b\u5185\u90e8\u6709\u4e00\u5957\u5b8c\u6574\u7684\u91c7\u96c6\u63a8\u9001\u7cfb\u7edf\uff0c\u4f46\u7531\u4e8e\u4e00\u4e9b\u5386\u53f2\u9057\u7559\u95ee\u9898\uff0c\u516c\u53f8\u73b0\u6709\u7684\u5e73\u53f0\u65e0\u6cd5\u5feb\u901f\u652f\u6301OLAP\u5e73\u53f0\u4e0a\u7ebf\uff0c\u56e0\u6b64\u5f53\u65f6\u516c\u53f8\u53ea\u80fd\u9009\u62e9\u653e\u5f03\u81ea\u8eab\u7684\u5e73\u53f0\uff0c\u8f6c\u800c\u7740\u624b\u7814\u53d1\u65b0\u7684\u7cfb\u7edf\u3002"),(0,e.yg)("p",null,"\u5f53\u65f6\u6446\u5728OLAP\u9762\u524d\u7684\u6709\u4e09\u4e2a\u9009\u62e9\uff1a"),(0,e.yg)("p",null,"1\u3001\u7ed9\u4e88\u91c7\u96c6\u63a8\u9001\u7cfb\u7edf\u505a\u4e8c\u6b21\u7814\u53d1\uff1b"),(0,e.yg)("p",null,"2\u3001\u5b8c\u5168\u81ea\u7814\uff1b"),(0,e.yg)("p",null,"3\u3001\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee\u3002"),(0,e.yg)("h2",{id:"02-\u5927\u6570\u636e\u5904\u7406\u4e3b\u6d41\u5de5\u5177\u5bf9\u6bd4\u5206\u6790"},"02 \u5927\u6570\u636e\u5904\u7406\u4e3b\u6d41\u5de5\u5177\u5bf9\u6bd4\u5206\u6790"),(0,e.yg)("p",null,"\u800c\u8fd9\u4e09\u9879\u9009\u62e9\u5374\u5404\u6709\u4f18\u52a3\u3002\u82e5\u91c7\u57fa\u4e8e\u91c7\u96c6\u63a8\u9001\u505a\u4e8c\u6b21\u7814\u53d1\uff0c\u5176\u4f18\u70b9\u662f\u6709\u524d\u4eba\u7684\u7ecf\u9a8c\uff0c\u80fd\u591f\u907f\u514d\u91cd\u590d\u8e29\u5751\u3002\u4f46\u7f3a\u70b9\u662f\u4ee3\u7801\u91cf\u5927\uff0c\u7814\u8bfb\u65f6\u95f4\u3001\u7814\u8bfb\u5468\u671f\u8f83\u957f\uff0c\u800c\u4e14\u62bd\u8c61\u4ee3\u7801\u8f83\u5c11\uff0c\u4e0e\u4e1a\u52a1\u7ed1\u5b9a\u7684\u5b9a\u5236\u5316\u529f\u80fd\u8f83\u591a\uff0c\u8fd9\u4e5f\u5bfc\u81f4\u4e86\u5176\u4e8c\u5f00\u7684\u96be\u5ea6\u8f83\u5927\u3002"),(0,e.yg)("p",null,"\u82e5\u5b8c\u5168\u81ea\u7814\uff0c\u5176\u4f18\u70b9\u7b2c\u4e00\u662f\u5f00\u53d1\u8fc7\u7a0b\u81ea\u4e3b\u53ef\u63a7\uff0c\u7b2c\u4e8c\u662f\u53ef\u4ee5\u901a\u8fc7Spark\u7b49\u4e00\u4e9b\u5f15\u64ce\u505a\u8d34\u5408\u6211\u4eec\u81ea\u8eab\u7684\u67b6\u6784\uff0c\u4f46\u7f3a\u70b9\u662f\u53ef\u80fd\u4f1a\u906d\u9047\u4e00\u4e9b\u672a\u77e5\u7684\u95ee\u9898\u3002"),(0,e.yg)("p",null,"\u6700\u540e\u5982\u679c\u4f7f\u7528\u5f00\u6e90\u6846\u67b6\uff0c\u5176\u4f18\u70b9\u4e00\u662f\u62bd\u8c61\u4ee3\u7801\u8f83\u591a\uff0c\u4e8c\u662f\u7ecf\u8fc7\u5176\u4ed6\u5927\u5382\u6216\u516c\u53f8\u7684\u9a8c\u8bc1\uff0c\u6846\u67b6\u5728\u6027\u80fd\u548c\u7a33\u5b9a\u65b9\u9762\u80fd\u591f\u5f97\u5230\u4fdd\u969c\u3002\u56e0\u6b64\u5b69\u5b50\u738b\u5728OLAP\u6570\u636e\u540c\u6b65\u521d\u671f\uff0c\u6211\u4eec\u4e3b\u8981\u7814\u7a76\u4e86DATAX\u3001Sqoop\u548cSeaTunnel\u8fd9\u4e09\u4e2a\u5f00\u6e90\u6570\u636e\u540c\u6b65\u5de5\u5177\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(43130).A,width:"876",height:"915"})),(0,e.yg)("p",null,"\u4ece\u8111\u56fe\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0cSqoop\u7684\u4e3b\u8981\u529f\u80fd\u662f\u9488\u5bf9RDB\u7684\u6570\u636e\u540c\u6b65\uff0c\u5176\u5b9e\u73b0\u65b9\u5f0f\u662f\u57fa\u4e8eMAP/REDUCE\u3002Sqoop\u62e5\u6709\u4e30\u5bcc\u7684\u53c2\u6570\u548c\u547d\u4ee4\u884c\u53ef\u4ee5\u53bb\u6267\u884c\u5404\u79cd\u64cd\u4f5c\u3002Sqoop\u7684\u4f18\u70b9\u5728\u4e8e\u5b83\u9996\u5148\u8d34\u5408Hadoop\u751f\u6001\uff0c\u5e76\u5df2\u7ecf\u652f\u6301\u5927\u90e8\u5206RDB\u5230HIVE\u4efb\u610f\u6e90\u7684\u8f6c\u6362\uff0c\u62e5\u6709\u5b8c\u6574\u7684\u547d\u4ee4\u96c6\u548cAPI\u7684\u5206\u5e03\u5f0f\u6570\u636e\u540c\u6b65\u5de5\u5177\u3002"),(0,e.yg)("p",null,"\u4f46\u5176\u7f3a\u70b9\u662fSqoop\u53ea\u652f\u6301RDB\u7684\u6570\u636e\u540c\u6b65\uff0c\u5e76\u4e14\u5bf9\u4e8e\u6570\u636e\u6587\u4ef6\u6709\u4e00\u5b9a\u7684\u9650\u5236\uff0c\u4ee5\u53ca\u8fd8\u6ca1\u6709\u6570\u636e\u6e05\u6d17\u7684\u6982\u5ff5\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(7235).A,width:"2452",height:"1485"})),(0,e.yg)("p",null,"DataX\u7684\u4e3b\u8981\u529f\u80fd\u662f\u4efb\u610f\u6e90\u7684\u6570\u636e\u540c\u6b65\uff0c\u901a\u8fc7\u914d\u7f6e\u5316\u6587\u4ef6+\u591a\u7ebf\u7a0b\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u4e3b\u8981\u5206\u4e3a\u4e09\u4e2a\u6d41\u7a0b\uff1aReader\u3001Framework\u548cWriter\uff0c\u5176\u4e2dFramework\u4e3b\u8981\u8d77\u5230\u901a\u4fe1\u548c\u7559\u7a7a\u7684\u4f5c\u7528\u3002"),(0,e.yg)("p",null,"DataX\u7684\u4f18\u70b9\u662f\u5b83\u91c7\u7528\u4e86\u63d2\u4ef6\u5f0f\u7684\u5f00\u53d1\uff0c\u62e5\u6709\u81ea\u5df1\u7684\u6d41\u63a7\u548c\u6570\u636e\u7ba1\u63a7\uff0c\u5728\u793e\u533a\u6d3b\u8dc3\u5ea6\u4e0a\uff0cDataX\u7684\u5b98\u7f51\u4e0a\u63d0\u4f9b\u4e86\u8bb8\u591a\u4e0d\u540c\u6e90\u7684\u6570\u636e\u63a8\u9001\u3002\u4f46DataX\u7684\u7f3a\u70b9\u5728\u4e8e\u5b83\u57fa\u4e8e\u5185\u5b58\uff0c\u5bf9\u6570\u636e\u91cf\u53ef\u80fd\u5b58\u5728\u9650\u5236\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(30988).A,width:"2199",height:"1860"})),(0,e.yg)("p",null,"Apache SeaTunnel (Incubating)\u505a\u7684\u4e5f\u662f\u4efb\u610f\u6e90\u7684\u6570\u636e\u540c\u6b65\uff0c\u5b9e\u73b0\u6d41\u7a0b\u5206\u4e3asource\u3001transform\u548csink\u4e09\u6b65\uff0c\u57fa\u4e8e\u914d\u7f6e\u6587\u4ef6\u3001Spark\u6216Flink\u5b9e\u73b0\u3002\u5176\u4f18\u70b9\u662f\u76ee\u524d\u5b98\u7f512.1.0\u6709\u975e\u5e38\u591a\u7684\u63d2\u4ef6\u548c\u6e90\u7684\u63a8\u9001\uff0c\u57fa\u4e8e\u63d2\u4ef6\u5f0f\u7684\u601d\u60f3\u4e5f\u4f7f\u5176\u975e\u5e38\u5bb9\u6613\u6269\u5c55\uff0c\u62e5\u62b1Spark\u548cFlink\u7684\u540c\u65f6\u4e5f\u505a\u5230\u4e86\u5206\u5e03\u5f0f\u7684\u67b6\u6784\u3002\u8981\u8bf4Apache SeaTunnel (Incubating)\u552f\u4e00\u7684\u7f3a\u70b9\u53ef\u80fd\u662f\u76ee\u524d\u7f3a\u5c11IP\u7684\u8c03\u7528\uff0cUI\u754c\u9762\u9700\u8981\u81ea\u5df1\u505a\u7ba1\u63a7\u3002"),(0,e.yg)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0cSqoop\u867d\u7136\u662f\u5206\u5e03\u5f0f\uff0c\u4f46\u662f\u4ec5\u652f\u6301RDB\u548cHIVE\u3001Hbase\u4e4b\u95f4\u7684\u6570\u636e\u540c\u6b65\u4e14\u6269\u5c55\u80fd\u529b\u5dee\uff0c\u4e0d\u5229\u4e8e\u4e8c\u5f00\u3002DataX\u6269\u5c55\u6027\u597d\uff0c\u6574\u4f53\u6027\u7a33\u5b9a\uff0c\u4f46\u7531\u4e8e\u662f\u5355\u673a\u7248\uff0c\u65e0\u6cd5\u5206\u5e03\u5f0f\u96c6\u7fa4\u90e8\u7f72\uff0c\u4e14\u6570\u636e\u62bd\u53d6\u80fd\u529b\u548c\u673a\u5668\u6027\u80fd\u6709\u5f3a\u4f9d\u8d56\u5173\u7cfb\u3002\u800cSeaTunnel\u548cDataX\u7c7b\u4f3c\u5e76\u5f25\u8865\u4e86DataX\u975e\u5206\u5e03\u5f0f\u7684\u95ee\u9898\uff0c\u5bf9\u4e8e\u5b9e\u65f6\u6d41\u4e5f\u505a\u4e86\u5f88\u597d\u7684\u652f\u6301\uff0c\u867d\u7136\u662f\u65b0\u4ea7\u54c1\uff0c\u4f46\u793e\u533a\u6d3b\u8dc3\u5ea6\u9ad8\u3002\u57fa\u4e8e\u662f\u5426\u652f\u6301\u5206\u5e03\u5f0f\u3001\u662f\u5426\u9700\u8981\u5355\u72ec\u673a\u5668\u90e8\u7f72\u7b49\u8bf8\u591a\u56e0\u7d20\u7684\u8003\u91cf\uff0c\u6700\u540e\u6211\u4eec\u9009\u62e9\u4e86SeaTunnel\u3002"),(0,e.yg)("h2",{id:"03-apache-seatunnel-incubating\u7684\u843d\u5730\u5b9e\u8df5"},"03 Apache SeaTunnel (Incubating)\u7684\u843d\u5730\u5b9e\u8df5"),(0,e.yg)("p",null,"\u5728Apache SeaTunnel (Incubating)\u7684\u5b98\u7f51\u6211\u4eec\u53ef\u4ee5\u770b\u5230Apache SeaTunnel (Incubating)\u7684\u57fa\u7840\u6d41\u7a0b\u5305\u62ecsource\u3001transform\u548csink\u4e09\u90e8\u5206\u3002\u6839\u636e\u5b98\u7f51\u7684\u6307\u5357\uff0cApache SeaTunnel (Incubating)\u7684\u542f\u52a8\u9700\u8981\u914d\u7f6e\u811a\u672c\uff0c\u4f46\u7ecf\u8fc7\u6211\u4eec\u7684\u7814\u7a76\u53d1\u73b0\uff0cApache SeaTunnel (Incubating)\u7684\u6700\u7ec8\u6267\u884c\u662f\u4f9d\u8d56config\u6587\u4ef6\u7684spark-submit\u63d0\u4ea4\u7684\u4e00\u4e2aApplication\u5e94\u7528\u3002"),(0,e.yg)("p",null,"\u8fd9\u79cd\u521d\u59cb\u5316\u65b9\u5f0f\u867d\u7136\u7b80\u5355\uff0c\u4f46\u5b58\u5728\u5fc5\u987b\u4f9d\u8d56Config\u6587\u4ef6\u7684\u95ee\u9898\uff0c\u6bcf\u6b21\u8fd0\u884c\u4efb\u52a1\u540e\u90fd\u4f1a\u751f\u6210\u518d\u8fdb\u884c\u6e05\u9664\uff0c\u867d\u7136\u53ef\u4ee5\u5728\u8c03\u5ea6\u811a\u672c\u4e2d\u52a8\u6001\u751f\u6210\uff0c\u4f46\u4e5f\u4ea7\u751f\u4e86\u4e24\u4e2a\u95ee\u9898\u30021\u3001\u9891\u7e41\u7684\u78c1\u76d8\u64cd\u4f5c\u662f\u5426\u6709\u610f\u4e49\uff1b2\u3001\u662f\u5426\u5b58\u5728\u66f4\u4e3a\u9ad8\u6548\u7684\u65b9\u5f0f\u652f\u6301Apache SeaTunnel (Incubating)\u7684\u8fd0\u884c\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(83253).A,width:"1597",height:"973"})),(0,e.yg)("p",null,"\u57fa\u4e8e\u4ee5\u4e0a\u8003\u91cf\uff0c\u5728\u6700\u7ec8\u7684\u8bbe\u8ba1\u65b9\u6848\u4e2d\uff0c\u6211\u4eec\u589e\u52a0\u4e86\u4e00\u4e2a\u7edf\u4e00\u914d\u7f6e\u6a21\u677f\u5e73\u53f0\u6a21\u5757\u3002\u8c03\u5ea6\u65f6\u53ea\u9700\u8981\u53d1\u8d77\u4e00\u4e2a\u63d0\u4ea4\u547d\u4ee4\uff0c\u7531Apache SeaTunnel (Incubating)\u81ea\u8eab\u53bb\u7edf\u4e00\u914d\u7f6e\u6a21\u677f\u5e73\u53f0\u4e2d\u62c9\u53d6\u914d\u7f6e\u4fe1\u606f\uff0c\u518d\u53bb\u88c5\u8f7d\u548c\u521d\u59cb\u5316\u53c2\u6570\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(43031).A,width:"1496",height:"1022"})),(0,e.yg)("p",null,"\u4e0a\u56fe\u5c55\u793a\u7684\u4fbf\u662f\u5b69\u5b50\u738bOLAP\u7684\u4e1a\u52a1\u6d41\u7a0b\uff0c\u4e3b\u8981\u5206\u4e3a\u4e09\u5757\u3002\u6570\u636e\u4eceParquet\uff0c\u5373Hive\uff0c\u901a\u8fc7Parquet\u8868\u7684\u65b9\u5f0f\u5230KYLIN\u548cCK source\u7684\u6574\u4f53\u6d41\u7a0b\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(33639).A,width:"1205",height:"766"})),(0,e.yg)("p",null,"\u8fd9\u662f\u6211\u4eec\u5efa\u6a21\u7684\u9875\u9762\uff0c\u4e3b\u8981\u901a\u8fc7\u62d6\u62c9\u62fd\u7684\u65b9\u5f0f\u751f\u6210\u6700\u7ec8\u6a21\u578b\uff0c\u6bcf\u4e2a\u8868\u4e4b\u95f4\u901a\u8fc7\u4e00\u4e9b\u4ea4\u6613\u64cd\u4f5c\uff0c\u53f3\u4fa7\u662f\u9488\u5bf9Apache SeaTunnel (Incubating)\u7684\u5fae\u5904\u7406\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(81860).A,width:"1306",height:"609"})),(0,e.yg)("p",null,"\u56e0\u6b64\u6211\u4eec\u6700\u7ec8\u63d0\u4ea4\u7684\u547d\u4ee4\u5982\u4e0a\uff0c\u5176\u4e2d\u6807\u7ea2\u7684\u9996\u5148\u662f\u3010-conf customconfig/jars\u3011\uff0c\u6307\u7528\u6237\u53ef\u4ee5\u518d\u7edf\u4e00\u914d\u7f6e\u6a21\u677f\u5e73\u53f0\u8fdb\u884c\u5904\u7406\uff0c\u6216\u8005\u5efa\u6a21\u65f6\u5355\u72ec\u6307\u5b9a\u3002\u6700\u540e\u6807\u7ea2\u7684\u3010421 $start_time $end_time $taskType\u3011Unicode\uff0c\u5c5e\u4e8e\u552f\u4e00\u7f16\u7801\u3002"),(0,e.yg)("p",null,"\u4e0b\u65b9\u56fe\u5de6\u5c31\u662f\u6211\u4eec\u6700\u7ec8\u8c03\u5ea6\u811a\u672c\u63d0\u4ea4\u768438\u4e2a\u547d\u4ee4\uff0c\u4e0b\u65b9\u56fe\u53f3\u662f\u9488\u5bf9Apache SeaTunnel (Incubating)\u505a\u7684\u6539\u9020\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u4e2a\u8f83\u4e3a\u7279\u6b8a\u7684\u540d\u4e3aWaterdropContext\u7684\u5de5\u5177\u7c7b\u3002\u53ef\u4ee5\u9996\u5148\u5224\u65adUnicode\u662f\u5426\u5b58\u5728\uff0c\u518d\u901a\u8fc7Unicode_code\u6765\u83b7\u53d6\u4e0d\u540c\u6a21\u677f\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u907f\u514d\u4e86config\u6587\u4ef6\u7684\u64cd\u4f5c\u3002"),(0,e.yg)("p",null,"\u5728\u6700\u540e\u7684reportMeta\u5219\u662f\u7528\u4e8e\u5728\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\u4e0a\u62a5\u4e00\u4e9b\u4fe1\u606f\uff0c\u8fd9\u4e5f\u4f1a\u5728Apache SeaTunnel (Incubating)\u4e2d\u5b8c\u6210\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(27017).A,width:"1136",height:"940"})),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(36101).A,width:"944",height:"388"})),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(83836).A,width:"916",height:"348"})),(0,e.yg)("p",null,"\u5728\u6700\u7ec8\u5b8c\u6210\u7684config\u6587\u4ef6\u5982\u4e0a\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\u5728transform\u65b9\u9762\uff0c\u5b69\u5b50\u738b\u505a\u4e86\u4e00\u4e9b\u6539\u9020\u3002\u9996\u5148\u662f\u9488\u5bf9\u624b\u673a\u6216\u8005\u8eab\u4efd\u8bc1\u53f7\u7b49\u505a\u8131\u654f\u5904\u7406\uff0c\u5982\u679c\u7528\u6237\u6307\u5b9a\u5b57\u6bb5\uff0c\u5c31\u6309\u7167\u5b57\u6bb5\u505a\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u5b57\u6bb5\u5c31\u626b\u63cf\u6240\u6709\u5b57\u6bb5\uff0c\u7136\u540e\u6839\u636e\u6a21\u5f0f\u5339\u914d\uff0c\u8fdb\u884c\u8131\u654f\u52a0\u5bc6\u3002"),(0,e.yg)("p",null,"\u7b2c\u4e8ctransform\u8fd8\u652f\u6301\u81ea\u5b9a\u4e49\u5904\u7406\uff0c\u5982\u4e0a\u6587\u8bf4\u9053OLAP\u5efa\u6a21\u7684\u65f6\u5019\u8bf4\u5230\u3002\u52a0\u5165\u4e86HideStr\uff0c\u53ef\u4ee5\u4fdd\u7559\u4e00\u4e32\u5b57\u7b26\u7684\u524d\u5341\u4e2a\u5b57\u6bb5\uff0c\u52a0\u5bc6\u540e\u65b9\u7684\u6240\u6709\u5b57\u7b26\uff0c\u5728\u6570\u636e\u5b89\u5168\u4e0a\u6709\u6240\u4fdd\u969c\u3002"),(0,e.yg)("p",null,"\u7136\u540e\uff0c\u5728sink\u7aef\uff0c\u6211\u4eec\u4e3a\u4e86\u652f\u6301\u4efb\u52a1\u7684\u5e42\u7b49\u6027\uff0c\u6211\u4eec\u52a0\u5165\u4e86pre_sql\uff0c\u8fd9\u4e3b\u8981\u5b8c\u6210\u7684\u4efb\u52a1\u662f\u6570\u636e\u7684\u5220\u9664\uff0c\u6216\u5206\u533a\u7684\u5220\u9664\uff0c\u56e0\u4e3a\u4efb\u52a1\u5728\u751f\u4ea7\u8fc7\u7a0b\u4e2d\u4e0d\u53ef\u80fd\u53ea\u8fd0\u884c\u4e00\u6b21\uff0c\u4e00\u65e6\u51fa\u73b0\u91cd\u8dd1\u6216\u8865\u6570\u7b49\u64cd\u4f5c\uff0c\u5c31\u9700\u8981\u8fd9\u4e00\u90e8\u5206\u4e3a\u6570\u636e\u7684\u4e0d\u540c\u548c\u6b63\u786e\u6027\u505a\u8003\u91cf\u3002"),(0,e.yg)("p",null,"\u5728\u56fe\u53f3\u65b9\u7684\u4e00\u4e2aClickhouse\u7684Sink\u7aef\uff0c\u8fd9\u91cc\u6211\u4eec\u52a0\u5165\u4e86\u4e00\u4e2ais_senseless_mode\uff0c\u5b83\u7ec4\u6210\u4e86\u4e00\u4e2a\u8bfb\u5199\u5206\u79bb\u7684\u65e0\u611f\u6a21\u5f0f\uff0c\u7528\u6237\u5728\u67e5\u8be2\u548c\u8865\u6570\u7684\u65f6\u5019\u4e0d\u611f\u77e5\u6574\u4f53\u533a\u57df\uff0c\u800c\u662f\u7528\u5230CK\u7684\u5206\u533a\u8f6c\u6362\uff0c\u5373\u540d\u4e3aMOVE PARTITION TO TABLE\u7684\u547d\u4ee4\u8fdb\u884c\u64cd\u4f5c\u7684\u3002"),(0,e.yg)("p",null,"\u6b64\u5904\u7279\u522b\u8bf4\u660eKYLIN\u7684Sink\u7aef\uff0cKYLIN\u662f\u4e00\u4e2a\u975e\u5e38\u7279\u6b8a\u7684\u6e90\uff0c\u62e5\u6709\u81ea\u5df1\u4e00\u6574\u5957\u6570\u636e\u5f55\u5165\u7684\u903b\u8f91\uff0c\u800c\u4e14\uff0c\u4ed6\u6709\u81ea\u5df1\u7684\u76d1\u63a7\u9875\u9762\uff0c\u56e0\u6b64\u6211\u4eec\u7ed9\u4e88KYLIN\u7684\u6539\u9020\u53ea\u662f\u7b80\u5355\u5730\u8c03\u7528\u5176API\u64cd\u4f5c\uff0c\u5728\u4f7f\u7528KYLIN\u65f6\u4e5f\u53ea\u662f\u7b80\u5355\u7684API\u8c03\u7528\u548c\u4e0d\u65ad\u8f6e\u8be2\u7684\u72b6\u6001\uff0c\u6240\u4ee5KYLIN\u8fd9\u5757\u7684\u8d44\u6e90\u5728\u7edf\u4e00\u6a21\u677f\u914d\u7f6e\u5e73\u53f0\u5c31\u88ab\u9650\u5236\u5730\u5f88\u5c0f\u3002"),(0,e.yg)("p",null,(0,e.yg)("img",{src:C(86663).A,width:"1307",height:"593"})),(0,e.yg)("h2",{id:"04-apache-seatunnel-incubating\u6539\u9020\u4e2d\u7684\u5e38\u89c1\u95ee\u9898"},"04 Apache SeaTunnel (Incubating)\u6539\u9020\u4e2d\u7684\u5e38\u89c1\u95ee\u9898"),(0,e.yg)("p",null,"1\u3001OOM&Too many Parts"),(0,e.yg)("p",null,"\u95ee\u9898\u901a\u5e38\u4f1a\u51fa\u73b0\u5728Hive\u5230Hive\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5373\u4f7f\u6211\u4eec\u901a\u8fc7\u4e86\u81ea\u52a8\u8d44\u6e90\u7684\u5206\u914d\uff0c\u4f46\u4e5f\u5b58\u5728\u6570\u636e\u7a81\u7136\u95f4\u53d8\u5927\u7684\u60c5\u51b5\uff0c\u6bd4\u5982\u5728\u4e3e\u529e\u4e86\u591a\u6b21\u6d3b\u52a8\u4e4b\u540e\u3002\u8fd9\u6837\u7684\u95ee\u9898\u5176\u5b9e\u53ea\u80fd\u901a\u8fc7\u624b\u52a8\u52a8\u6001\u5730\u8c03\u53c2\uff0c\u8c03\u6574\u6570\u636e\u540c\u6b65\u6279\u91cf\u65f6\u95f4\u6765\u907f\u514d\u3002\u672a\u6765\u6211\u4eec\u53ef\u80fd\u5c3d\u529b\u53bb\u5b8c\u6210\u5bf9\u4e8e\u6570\u636e\u91cf\u7684\u638c\u63e1\uff0c\u505a\u5230\u7cbe\u7ec6\u7684\u63a7\u5236\u3002"),(0,e.yg)("p",null,"2\u3001\u5b57\u6bb5\u3001\u7c7b\u578b\u4e0d\u4e00\u81f4\u95ee\u9898"),(0,e.yg)("p",null,"\u6a21\u578b\u4e0a\u7ebf\u540e\uff0c\u4efb\u52a1\u4f9d\u8d56\u7684\u4e0a\u6e38\u8868\u6216\u8005\u5b57\u6bb5\uff0c\u7528\u6237\u90fd\u4f1a\u505a\u4e00\u4e9b\u4fee\u6539\uff0c\u8fd9\u4e9b\u4fee\u6539\u82e5\u65e0\u6cd5\u611f\u77e5\uff0c\u53ef\u80fd\u5bfc\u81f4\u4efb\u52a1\u7684\u5931\u8d25\u3002\u76ee\u524d\u89e3\u51b3\u65b9\u6cd5\u662f\u4f9d\u6258\u8840\u7f18+\u5feb\u7167\u7684\u65b9\u5f0f\u8fdb\u884c\u63d0\u524d\u611f\u77e5\u6765\u907f\u514d\u9519\u8bef\u3002"),(0,e.yg)("p",null,"3\u3001\u81ea\u5b9a\u4e49\u6570\u636e\u6e90&\u81ea\u5b9a\u4e49\u5206\u9694\u7b26"),(0,e.yg)("p",null,"\u5982\u8d22\u52a1\u90e8\u95e8\u9700\u8981\u5355\u72ec\u4f7f\u7528\u7684\u5206\u5272\u7b26\uff0c\u6216\u662fjar\u4fe1\u606f\uff0c\u73b0\u5728\u7528\u6237\u53ef\u4ee5\u81ea\u5df1\u5728\u7edf\u4e00\u914d\u7f6e\u6a21\u677f\u5e73\u53f0\u6307\u5b9a\u52a0\u8f7d\u989d\u5916jar\u4fe1\u606f\u4ee5\u53ca\u5206\u5272\u7b26\u4fe1\u606f\u3002"),(0,e.yg)("p",null,"4\u3001\u6570\u636e\u503e\u659c\u95ee\u9898"),(0,e.yg)("p",null,"\u8fd9\u53ef\u80fd\u56e0\u4e3a\u7528\u6237\u81ea\u5df1\u8bbe\u7f6e\u4e86\u5e76\u884c\u5ea6\uff0c\u4f46\u65e0\u6cd5\u505a\u5230\u5c3d\u5584\u5c3d\u7f8e\u3002\u8fd9\u4e00\u5757\u6211\u4eec\u6682\u65f6\u8fd8\u6ca1\u6709\u5b8c\u6210\u5904\u7406\uff0c\u540e\u7eed\u7684\u601d\u8def\u53ef\u80fd\u5728Source\u6a21\u5757\u4e2d\u6dfb\u52a0post\u5904\u7406\uff0c\u5bf9\u6570\u636e\u8fdb\u884c\u6253\u6563\uff0c\u5b8c\u6210\u503e\u659c\u3002"),(0,e.yg)("p",null,"5\u3001KYLIN\u5168\u5c40\u5b57\u5178\u9501\u95ee\u9898"),(0,e.yg)("p",null,"\u968f\u7740\u4e1a\u52a1\u53d1\u5c55\uff0c\u4e00\u4e2acube\u65e0\u6cd5\u6ee1\u8db3\u7528\u6237\u4f7f\u7528\uff0c\u5c31\u80fd\u9700\u8981\u5efa\u7acb\u591a\u4e2acube\uff0c\u5982\u679c\u591a\u4e2acube\u4e4b\u95f4\u7528\u4e86\u76f8\u540c\u7684\u5b57\u6bb5\uff0c\u5c31\u4f1a\u9047\u5230KYLIN\u5168\u5c40\u5b57\u5178\u9501\u7684\u95ee\u9898\u3002\u76ee\u524d\u89e3\u51b3\u7684\u601d\u8def\u662f\u628a\u4e24\u4e2a\u6216\u591a\u4e2a\u4efb\u52a1\u4e4b\u95f4\u7684\u8c03\u5ea6\u65f6\u95f4\u8fdb\u884c\u9694\u5f00\uff0c\u5982\u679c\u65e0\u6cd5\u9694\u5f00\uff0c\u53ef\u4ee5\u505a\u4e00\u4e2a\u5206\u5e03\u5f0f\u9501\u7684\u63a7\u5236\u3002KYLIN\u7684sink\u7aef\u5fc5\u987b\u8981\u62ff\u5230\u9501\u624d\u80fd\u8fd0\u884c\u3002"),(0,e.yg)("p",null,"05 \u5bf9\u5b69\u5b50\u738b\u672a\u6765\u53d1\u5c55\u65b9\u5411\u7684\u9884\u6d4b\u5c55\u671b"),(0,e.yg)("ul",null,(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u591a\u6e90\u6570\u636e\u540c\u6b65\uff0c\u672a\u6765\u53ef\u80fd\u9488\u5bf9RDB\u6e90\u8fdb\u884c\u5904\u7406")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u57fa\u4e8e\u5b9e\u65f6Flink\u7684\u5b9e\u73b0")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u63a5\u7ba1\u5df2\u6709\u91c7\u96c6\u8c03\u5ea6\u5e73\u53f0\uff08\u4e3b\u8981\u89e3\u51b3\u5206\u5e93\u5206\u8868\u7684\u95ee\u9898\uff09")),(0,e.yg)("li",{parentName:"ul"},(0,e.yg)("p",{parentName:"li"},"\u6570\u636e\u8d28\u91cf\u6821\u9a8c\uff0c\u50cf\u4e00\u4e9b\u7a7a\u503c\u3001\u6574\u4e2a\u6570\u636e\u7684\u7a7a\u7f6e\u7387\u3001\u4e3b\u65f6\u95f4\u7684\u5224\u65ad\u7b49"))),(0,e.yg)("p",null,"\u6211\u7684\u5206\u4eab\u5c31\u5230\u8fd9\u91cc\uff0c\u5e0c\u671b\u4ee5\u540e\u53ef\u4ee5\u548c\u793e\u533a\u591a\u591a\u4ea4\u6d41\uff0c\u5171\u540c\u8fdb\u6b65\uff0c\u8c22\u8c22\uff01"))}r.isMDXComponent=!0},39222:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/0-1-4c853aa726b29acc5954ba53240dc2b8.png"},54024:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/0-38f7968af0b7239e9d427a85adee4452.png"},64241:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/1-b67aae24cc6274ca2d6a4541848b847d.png"},36101:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/10-f0199109244a92f734e89024bef0b51b.png"},83836:(A,g,C)=>{C.d(g,{A:()=>B});const B="data:image/png;base64,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s7IJECBAgAABAs8QKAuvz5izWRAgQIAAAQIECDQqUBBeu21XR1QbXWZlEyBAgAABAgSeIRANr+cl1y4QO43wjJvJLAgQIECAAAECZwtEw2tXR36s1bFZ87xYfLad/gkQIECAAAECBC4WiIbXbn80fbr6HB64eJEMR4AAAQIECBAgkASi4TW1Tnuux+68WgkCBAgQIECAAAECQYGy8Nrffw0OoBkBAgQIECBAgACBowTKwutRo+Z+bOIeTqpDAgQIECBAgMCDBSqH13yO9sHEpkaAAAECBAgQIHCUQOXwetQ09EOAAAECBAgQIPAGAeH1DatsjgQIECBAgACBhwgIrw9ZSNMgQIAAAQIECLxBQHh9wyqbIwECBAgQIEDgIQLC60MW0jQIECBAgAABAm8QEF7fsMrmSIAAAQIECBB4iIDw+pCFNA0CBAgQIECAwBsETgmv3asHvH3gDXePORIgQIAAAQIELhY4Jbx2rx64eBqGI0CAAAECBAgQeINANLymzdT8eQONORIgQIAAAQIECNxNIBpeu7rTq1y90PVuS6geAgQIECBAgMB7BArC63tQzJQAAQIECBAgQOCeAgXh1ZmBey6hqggQIECAAAEC7xEoCK/5zEDkSQJd40iz90CbKQECBAgQIECAwH6BaHgtfYBAl1xLL9k/GT0QIECAAAECBAg8WyAaXm2jPvs+MDsCBAgQIECAQBMC0fCajgGkjy3VJpZWkQQIECBAgACB5wlEw2s3c8/Jet7ymxEBAgQIECBAoC2BgvAan5gzBnErLQkQIECAAAECBOICp4RXLzKIL4CWBAgQIECAAAECcYFTwmt8eC0JECBAgAABAgQIxAWE17iVlgQIECBAgAABApUFhNfKC2B4AgQIECBAgACBuIDwGrfSkgABAgQIECBAoLKA8Fp5AQxPgAABAgQIECAQFxBe41ZaEiBAgAABAgQIVBYQXisvgOEJECBAgAABAgTiAsJr3EpLAgQIECBAgACBygLCa+UFMDwBAgQIECBAgEBcoCy8du999erXOK6WBAgQIECAAAECxwoUhNcutqb3vsqvx66B3ggQIECAAAECBIIC0fCakmvqNP8QHEMzAgQIECBAgAABAocIRMNrGsyxgUPQdUKAAAECBAgQILBNoCC8OjawjdhVBAgQIECAAAECRwkUhFenBY5C1w8BAgQIECBA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"},86663:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/12-61af6fe2e1a38126ec03a0291e15c1bf.jpg"},43130:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/2-a6b8a591b0c27aed589b35565edf7c02.png"},7235:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/3-3ff7bcde6e57af360cccd3d50e713b8e.png"},30988:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/4-96dfdedcf3c28bf69a805f20cc51e960.png"},43031:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/5-1-05477f37c0f5e72755d1335853ea650e.png"},83253:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/5-94809b2d6f1fbbac48a249728119e5af.png"},33639:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/7-1317712145fdcaee3b0219f09f68a739.png"},81860:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/8-d476fef7e065db158f63dd1b3291543b.jpg"},27017:(A,g,C)=>{C.d(g,{A:()=>B});const B=C.p+"assets/images/9-018ad4a2a0de58d2d3c9c69fffbcd06c.png"}}]);