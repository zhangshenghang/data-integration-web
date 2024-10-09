"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[18380],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=l.createContext({}),c=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,y=p["".concat(o,".").concat(d)]||p[d]||g[d]||r;return t?l.createElement(y,s(s({ref:n},u),{},{components:t})):l.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return l.createElement.apply(null,s)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var l=t(58168),a=(t(96540),t(15680));const r={sidebar_position:13},s="\u547d\u4ee4\u884c\u5de5\u5177",i={unversionedId:"seatunnel-engine/user-command",id:"seatunnel-engine/user-command",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"SeaTunnel Engine \u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u7ba1\u7406 SeaTunnel Engine \u7684\u4f5c\u4e1a\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4ea4\u3001\u505c\u6b62\u3001\u6682\u505c\u3001\u6062\u590d\u3001\u5220\u9664\u4f5c\u4e1a\uff0c\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u548c\u76d1\u63a7\u6307\u6807\u7b49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/user-command.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/user-command",permalink:"/zh-CN/docs/seatunnel-engine/user-command",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/seatunnel-engine/user-command.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"docs",previous:{title:"RESTful API",permalink:"/zh-CN/docs/seatunnel-engine/rest-api-v2"},next:{title:"\u65e5\u5fd7",permalink:"/zh-CN/docs/seatunnel-engine/logging"}},o={},c=[{value:"\u63d0\u4ea4\u4f5c\u4e1a",id:"\u63d0\u4ea4\u4f5c\u4e1a",level:2},{value:"\u67e5\u770b\u4f5c\u4e1a\u5217\u8868",id:"\u67e5\u770b\u4f5c\u4e1a\u5217\u8868",level:2},{value:"\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001",id:"\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001",level:2},{value:"\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f",id:"\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f",level:2},{value:"\u83b7\u53d6\u6307\u5b9a\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f",id:"\u83b7\u53d6\u6307\u5b9a\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f",level:2},{value:"\u6682\u505c\u4f5c\u4e1a",id:"\u6682\u505c\u4f5c\u4e1a",level:2},{value:"\u6062\u590d\u4f5c\u4e1a",id:"\u6062\u590d\u4f5c\u4e1a",level:2},{value:"\u53d6\u6d88\u4f5c\u4e1a",id:"\u53d6\u6d88\u4f5c\u4e1a",level:2}],u={toc:c},p="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,l.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u547d\u4ee4\u884c\u5de5\u5177"},"\u547d\u4ee4\u884c\u5de5\u5177"),(0,a.yg)("p",null,"SeaTunnel Engine \u63d0\u4f9b\u4e86\u4e00\u4e2a\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u7528\u4e8e\u7ba1\u7406 SeaTunnel Engine \u7684\u4f5c\u4e1a\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\u63d0\u4ea4\u3001\u505c\u6b62\u3001\u6682\u505c\u3001\u6062\u590d\u3001\u5220\u9664\u4f5c\u4e1a\uff0c\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001\u548c\u76d1\u63a7\u6307\u6807\u7b49\u3002"),(0,a.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u83b7\u53d6\u547d\u4ee4\u884c\u5de5\u5177\u7684\u5e2e\u52a9\u4fe1\u606f\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"bin/seatunnel.sh -h\n")),(0,a.yg)("p",null,"\u8f93\u51fa\u5982\u4e0b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"\nUsage: seatunnel.sh [options]\n  Options:\n    --async                         Run the job asynchronously, when the job \n                                    is submitted, the client will exit \n                                    (default: false)\n    -can, --cancel-job              Cancel job by JobId\n    --check                         Whether check config (default: false)\n    -cj, --close-job                Close client the task will also be closed \n                                    (default: true)\n    -cn, --cluster                  The name of cluster\n    -c, --config                    Config file\n    --decrypt                       Decrypt config file, When both --decrypt \n                                    and --encrypt are specified, only \n                                    --encrypt will take effect (default: \n                                    false) \n    -m, --master, -e, --deploy-mode SeaTunnel job submit master, support \n                                    [local, cluster] (default: cluster)\n    --encrypt                       Encrypt config file, when both --decrypt \n                                    and --encrypt are specified, only \n                                    --encrypt will take effect (default: \n                                    false) \n    --get_running_job_metrics       Gets metrics for running jobs (default: \n                                    false) \n    -h, --help                      Show the usage message\n    -j, --job-id                    Get job status by JobId\n    -l, --list                      list job status (default: false)\n    --metrics                       Get job metrics by JobId\n    -n, --name                      SeaTunnel job name (default: SeaTunnel)\n    -r, --restore                   restore with savepoint by jobId\n    -s, --savepoint                 savepoint job by jobId\n    -i, --variable                  Variable substitution, such as -i \n                                    city=beijing, or -i date=20190318.We use \n                                    ',' as separator, when inside \"\", ',' are \n                                    treated as normal characters instead of \n                                    delimiters. (default: [])\n\n")),(0,a.yg)("h2",{id:"\u63d0\u4ea4\u4f5c\u4e1a"},"\u63d0\u4ea4\u4f5c\u4e1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"--async")," \u53c2\u6570\u53ef\u4ee5\u8ba9\u4f5c\u4e1a\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u5f53\u4f5c\u4e1a\u63d0\u4ea4\u540e\uff0c\u5ba2\u6237\u7aef\u4f1a\u9000\u51fa\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template --async\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"-n")," \u6216 ",(0,a.yg)("strong",{parentName:"p"},"--name")," \u53c2\u6570\u53ef\u4ee5\u6307\u5b9a\u4f5c\u4e1a\u7684\u540d\u79f0"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template --async -n myjob\n")),(0,a.yg)("h2",{id:"\u67e5\u770b\u4f5c\u4e1a\u5217\u8868"},"\u67e5\u770b\u4f5c\u4e1a\u5217\u8868"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh -l\n")),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u8f93\u51fa\u6240\u6709\u5f53\u524d\u96c6\u7fa4\u4e2d\u7684\u4f5c\u4e1a\u5217\u8868\uff08\u5305\u542b\u8fd0\u884c\u5b8c\u6210\u7684\u5386\u53f2\u4f5c\u4e1a\u548c\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\uff09"),(0,a.yg)("h2",{id:"\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001"},"\u67e5\u770b\u4f5c\u4e1a\u72b6\u6001"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh -j <jobId>\n")),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u8f93\u51fa\u6307\u5b9a\u4f5c\u4e1a\u7684\u72b6\u6001\u4fe1\u606f"),(0,a.yg)("h2",{id:"\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f"},"\u83b7\u53d6\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh --get_running_job_metrics\n")),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u8f93\u51fa\u6b63\u5728\u8fd0\u884c\u7684\u4f5c\u4e1a\u7684\u76d1\u63a7\u4fe1\u606f"),(0,a.yg)("h2",{id:"\u83b7\u53d6\u6307\u5b9a\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f"},"\u83b7\u53d6\u6307\u5b9a\u4f5c\u4e1a\u76d1\u63a7\u4fe1\u606f"),(0,a.yg)("p",null,"--metrics \u53c2\u6570\u53ef\u4ee5\u83b7\u53d6\u6307\u5b9a\u4f5c\u4e1a\u7684\u76d1\u63a7\u4fe1\u606f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh --metrics <jobId>\n")),(0,a.yg)("h2",{id:"\u6682\u505c\u4f5c\u4e1a"},"\u6682\u505c\u4f5c\u4e1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh -s <jobId>\n")),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u6682\u505c\u6307\u5b9a\u4f5c\u4e1a\uff0c\u6ce8\u610f\uff0c\u53ea\u6709\u5f00\u542f\u4e86checkpoint\u7684\u4f5c\u4e1a\u624d\u652f\u6301\u6682\u505c\u4f5c\u4e1a(\u5b9e\u65f6\u540c\u6b65\u4f5c\u4e1a\u9ed8\u8ba4\u5f00\u542fcheckpoint\uff0c\u6279\u5904\u7406\u4f5c\u4e1a\u9ed8\u8ba4\u4e0d\u5f00\u542fcheckpoint\u9700\u8981\u901a\u8fc7\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"env")," \u4e2d\u914d\u7f6echeckpoint.interval\u6765\u5f00\u542fcheckpoint)\u3002"),(0,a.yg)("p",null,"\u6682\u505c\u4f5c\u4e1a\u662f\u4ee5split\u4e3a\u6700\u5c0f\u5355\u4f4d\u7684\uff0c\u5373\u6682\u505c\u4f5c\u4e1a\u540e\uff0c\u4f1a\u7b49\u5f85\u5f53\u524d\u6b63\u5728\u8fd0\u884c\u7684split\u8fd0\u884c\u5b8c\u6210\u540e\u518d\u6682\u505c\u3002\u4efb\u52a1\u6062\u590d\u540e\uff0c\u4f1a\u4ece\u6682\u505c\u7684split\u7ee7\u7eed\u8fd0\u884c\u3002"),(0,a.yg)("h2",{id:"\u6062\u590d\u4f5c\u4e1a"},"\u6062\u590d\u4f5c\u4e1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh -r <jobId> -c $SEATUNNEL_HOME/config/v2.batch.config.template\n")),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u6062\u590d\u6307\u5b9a\u4f5c\u4e1a\uff0c\u6ce8\u610f\uff0c\u53ea\u6709\u5f00\u542f\u4e86checkpoint\u7684\u4f5c\u4e1a\u624d\u652f\u6301\u6062\u590d\u4f5c\u4e1a(\u5b9e\u65f6\u540c\u6b65\u4f5c\u4e1a\u9ed8\u8ba4\u5f00\u542fcheckpoint\uff0c\u6279\u5904\u7406\u4f5c\u4e1a\u9ed8\u8ba4\u4e0d\u5f00\u542fcheckpoint\u9700\u8981\u901a\u8fc7\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"env")," \u4e2d\u914d\u7f6echeckpoint.interval\u6765\u5f00\u542fcheckpoint)\u3002"),(0,a.yg)("p",null,"\u6062\u590d\u4f5c\u4e1a\u9700\u8981\u6307\u5b9ajobId\u548c\u4f5c\u4e1a\u7684\u914d\u7f6e\u6587\u4ef6\u3002"),(0,a.yg)("p",null,"\u8fd0\u884c\u5931\u8d25\u7684\u4f5c\u4e1a\u548c\u901a\u8fc7seatunnel.sh -s ","<","jobId",">","\u6682\u505c\u7684\u4f5c\u4e1a\u90fd\u53ef\u4ee5\u901a\u8fc7\u8be5\u547d\u4ee4\u6062\u590d\u3002"),(0,a.yg)("h2",{id:"\u53d6\u6d88\u4f5c\u4e1a"},"\u53d6\u6d88\u4f5c\u4e1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh -can <jobId1> [<jobId2> <jobId3> ...]\n")),(0,a.yg)("p",null,"\u8be5\u547d\u4ee4\u4f1a\u53d6\u6d88\u6307\u5b9a\u4f5c\u4e1a\uff0c\u53d6\u6d88\u4f5c\u4e1a\u540e\uff0c\u4f5c\u4e1a\u4f1a\u88ab\u505c\u6b62\uff0c\u4f5c\u4e1a\u7684\u72b6\u6001\u4f1a\u53d8\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"CANCELED"),"\u3002"),(0,a.yg)("p",null,"\u652f\u6301\u6279\u91cf\u53d6\u6d88\u4f5c\u4e1a\uff0c\u53ef\u4ee5\u4e00\u6b21\u53d6\u6d88\u591a\u4e2a\u4f5c\u4e1a\u3002"),(0,a.yg)("p",null,"\u88abcancel\u7684\u4f5c\u4e1a\u7684\u6240\u6709\u65ad\u70b9\u4fe1\u606f\u90fd\u5c06\u88ab\u5220\u9664\uff0c\u65e0\u6cd5\u901a\u8fc7seatunnel.sh -r ","<","jobId",">","\u6062\u590d\u3002"))}g.isMDXComponent=!0}}]);