"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[41591],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),g=p(t),d=a,m=g["".concat(i,".").concat(d)]||g[d]||c[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[g]="string"==typeof e?e:a,o[1]=u;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=t(58168),a=(t(96540),t(15680));const l={},o="\u8d21\u732e Transform \u6307\u5357",u={unversionedId:"contribution/contribute-transform-v2-guide",id:"contribution/contribute-transform-v2-guide",title:"\u8d21\u732e Transform \u6307\u5357",description:"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u7406\u89e3\u3001\u5f00\u53d1\u548c\u8d21\u732e\u4e00\u4e2a transform\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/contribution/contribute-transform-v2-guide.md",sourceDirName:"contribution",slug:"/contribution/contribute-transform-v2-guide",permalink:"/zh-CN/docs/contribution/contribute-transform-v2-guide",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/contribution/contribute-transform-v2-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u7f16\u7801\u6307\u5357",permalink:"/zh-CN/docs/contribution/coding-guide"},next:{title:"\u5f00\u53d1\u81ea\u5df1\u7684Connector",permalink:"/zh-CN/docs/contribution/how-to-create-your-connector"}},i={},p=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:3},{value:"\u6570\u636e\u8f6c\u6362",id:"\u6570\u636e\u8f6c\u6362",level:3},{value:"\u7ffb\u8bd1",id:"\u7ffb\u8bd1",level:3},{value:"\u6838\u5fc3 APIs",id:"\u6838\u5fc3-apis",level:2},{value:"SeaTunnelTransform",id:"seatunneltransform",level:3},{value:"SingleFieldOutputTransform",id:"singlefieldoutputtransform",level:3},{value:"MultipleFieldOutputTransform",id:"multiplefieldoutputtransform",level:3},{value:"AbstractSeaTunnelTransform",id:"abstractseatunneltransform",level:3},{value:"\u5f00\u53d1\u4e00\u4e2a Transform",id:"\u5f00\u53d1\u4e00\u4e2a-transform",level:2},{value:"\u6848\u4f8b: \u62f7\u8d1d\u5b57\u6bb5\u5230\u4e00\u4e2a\u65b0\u7684\u5b57\u6bb5",id:"\u6848\u4f8b-\u62f7\u8d1d\u5b57\u6bb5\u5230\u4e00\u4e2a\u65b0\u7684\u5b57\u6bb5",level:3},{value:"Transform \u6d4b\u8bd5\u5de5\u5177",id:"transform-\u6d4b\u8bd5\u5de5\u5177",level:2}],s={toc:p},g="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(g,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u8d21\u732e-transform-\u6307\u5357"},"\u8d21\u732e Transform \u6307\u5357"),(0,a.yg)("p",null,"\u672c\u6587\u63cf\u8ff0\u4e86\u5982\u4f55\u7406\u89e3\u3001\u5f00\u53d1\u548c\u8d21\u732e\u4e00\u4e2a transform\u3002"),(0,a.yg)("p",null,"\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86 ",(0,a.yg)("a",{parentName:"p",href:"../../../seatunnel-e2e/seatunnel-transforms-v2-e2e"},"Transform E2E Test"),"\n\u6765\u9a8c\u8bc1 transform \u7684\u6570\u636e\u8f93\u5165\u548c\u8f93\u51fa\u3002"),(0,a.yg)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,a.yg)("p",null,"\u5728 SeaTunnel \u4e2d\u4f60\u53ef\u4ee5\u901a\u8fc7 connector \u8bfb\u5199\u6570\u636e\uff0c \u4f46\u5982\u679c\u4f60\u9700\u8981\u5728\u8bfb\u53d6\u6570\u636e\u540e\u6216\u8005\u5199\u5165\u6570\u636e\u524d\u5904\u7406\u6570\u636e\uff0c \u4f60\u9700\u8981\u4f7f\u7528 transform\u3002"),(0,a.yg)("p",null,"\u4f7f\u7528 transform \u53ef\u4ee5\u7b80\u5355\u4fee\u6539\u6570\u636e\u884c\u548c\u5b57\u6bb5\uff0c \u4f8b\u5982\u62c6\u5206\u5b57\u6bb5\u3001\u4fee\u6539\u5b57\u6bb5\u7684\u503c\u6216\u8005\u5220\u9664\u5b57\u6bb5\u3002"),(0,a.yg)("h3",{id:"\u7c7b\u578b\u8f6c\u6362"},"\u7c7b\u578b\u8f6c\u6362"),(0,a.yg)("p",null,"Transform \u4ece\u4e0a\u6e38\uff08source \u6216\u8005 transform\uff09\u83b7\u53d6\u7c7b\u578b\u8f93\u5165\uff0c\u7136\u540e\u7ed9\u4e0b\u6e38\uff08sink \u6216\u8005 transform\uff09\u8f93\u51fa\u65b0\u7684\u7c7b\u578b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u5c31\u662f\u7c7b\u578b\u8f6c\u6362\u3002"),(0,a.yg)("p",null,"\u6848\u4f8b 1\uff1a\u5220\u9664\u5b57\u6bb5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n| A         | B         |\n|-----------|-----------|\n| STRING    | INT       |\n")),(0,a.yg)("p",null,"\u6848\u4f8b 2\uff1a\u5b57\u6bb5\u6392\u5e8f"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"| B         | C         | A         |\n|-----------|-----------|-----------|\n| INT       | BOOLEAN   | STRING    |\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n")),(0,a.yg)("p",null,"\u6848\u4f8b 3\uff1a\u4fee\u6539\u5b57\u6bb5\u7c7b\u578b"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | STRING    | STRING    |\n")),(0,a.yg)("p",null,"\u6848\u4f8b 4\uff1a\u6dfb\u52a0\u65b0\u7684\u5b57\u6bb5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\n| A         | B         | C         | D         |\n|-----------|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   | DOUBLE    |\n")),(0,a.yg)("h3",{id:"\u6570\u636e\u8f6c\u6362"},"\u6570\u636e\u8f6c\u6362"),(0,a.yg)("p",null,"\u8f6c\u6362\u7c7b\u578b\u540e\uff0cTransform \u4f1a\u4ece\u4e0a\u6e38\uff08source \u6216\u8005 transform\uff09\u83b7\u53d6\u6570\u636e\u884c\uff0c \u4f7f\u7528",(0,a.yg)("a",{parentName:"p",href:"#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2"},"\u65b0\u7684\u6570\u636e\u7c7b\u578b"),"\u7f16\u8f91\u6570\u636e\u540e\u8f93\u51fa\u5230\u4e0b\u6e38\uff08sink \u6216\u8005 transform\uff09\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u53eb\u6570\u636e\u8f6c\u6362\u3002"),(0,a.yg)("h3",{id:"\u7ffb\u8bd1"},"\u7ffb\u8bd1"),(0,a.yg)("p",null,"Transform \u5df2\u7ecf\u4ece execution engine \u4e2d\u89e3\u8026\uff0c \u4efb\u4f55 transform \u5b9e\u73b0\u53ef\u4ee5\u4e0d\u9700\u8981\u4fee\u6539\u548c\u914d\u7f6e\u7684\u9002\u7528\u6240\u6709\u5f15\u64ce\uff0c \u8fd9\u5c31\u9700\u8981\u7ffb\u8bd1\u5c42\u6765\u505a transform \u548c execution engine \u7684\u9002\u914d\u3002"),(0,a.yg)("p",null,"\u6848\u4f8b\uff1a\u7ffb\u8bd1\u6570\u636e\u7c7b\u578b\u548c\u6570\u636e"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},'\u539f\u59cb\u6570\u636e:\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\u7c7b\u578b\u8f6c\u6362:\n\n| A                 | B                 | C                 |\n|-------------------|-------------------|-------------------|\n| ENGINE<STRING>    | ENGINE<INT>       | ENGINE<BOOLEAN>   |\n\n\u6570\u636e\u8f6c\u6362:\n\n| A                 | B                 | C                 |\n|-------------------|-------------------|-------------------|\n| ENGINE<"test">    | ENGINE<1>         |  ENGINE<false>    |\n')),(0,a.yg)("h2",{id:"\u6838\u5fc3-apis"},"\u6838\u5fc3 APIs"),(0,a.yg)("h3",{id:"seatunneltransform"},"SeaTunnelTransform"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SeaTunnelTransform")," \u63d0\u4f9b\u4e86\u6240\u6709\u4e3b\u8981\u7684 API, \u4f60\u53ef\u4ee5\u7ee7\u627f\u5b83\u5b9e\u73b0\u4efb\u4f55\u8f6c\u6362\u3002"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4ece\u4e0a\u6e38\u83b7\u53d6\u6570\u636e\u7c7b\u578b\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Set the data type info of input data.\n *\n * @param inputDataType The data type info of upstream input.\n */\n void setTypeInfo(SeaTunnelDataType<T> inputDataType);\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u8f93\u51fa\u65b0\u7684\u6570\u636e\u7c7b\u578b\u7ed9\u4e0b\u6e38\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Get the data type of the records produced by this transform.\n *\n * @return Produced data type.\n */\nSeaTunnelDataType<T> getProducedType();\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u8f93\u5165\u6570\u636e\u5e76\u4e14\u8f93\u51fa\u65b0\u7684\u6570\u636e\u5230\u4e0b\u6e38\u3002")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Transform input data to {@link this#getProducedType()} types data.\n *\n * @param row the data need be transform.\n * @return transformed data.\n */\nT map(T row);\n")),(0,a.yg)("h3",{id:"singlefieldoutputtransform"},"SingleFieldOutputTransform"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"SingleFieldOutputTransform")," \u62bd\u8c61\u4e86\u4e00\u4e2a\u5355\u5b57\u6bb5\u4fee\u6539\u64cd\u4f5c"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u8f93\u51fa\u5b57\u6bb5")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new field\n *\n * @return\n */\nprotected abstract String getOutputFieldName();\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u8f93\u51fa\u5b57\u6bb5\u7c7b\u578b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new field datatype\n *\n * @return\n */\nprotected abstract SeaTunnelDataType getOutputFieldDataType();\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u8f93\u51fa\u5b57\u6bb5\u503c")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new field value\n * \n * @param inputRow The inputRow of upstream input.\n * @return\n */\nprotected abstract Object getOutputFieldValue(SeaTunnelRowAccessor inputRow);\n")),(0,a.yg)("h3",{id:"multiplefieldoutputtransform"},"MultipleFieldOutputTransform"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"MultipleFieldOutputTransform")," \u62bd\u8c61\u4e86\u591a\u5b57\u6bb5\u4fee\u6539\u64cd\u4f5c"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u591a\u4e2a\u8f93\u51fa\u7684\u5b57\u6bb5")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new fields\n *\n * @return\n */\nprotected abstract String[] getOutputFieldNames();\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u8f93\u51fa\u5b57\u6bb5\u7684\u7c7b\u578b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new fields datatype\n *\n * @return\n */\nprotected abstract SeaTunnelDataType[] getOutputFieldDataTypes();\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"\u5b9a\u4e49\u8f93\u51fa\u5b57\u6bb5\u7684\u503c")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs new fields value\n *\n * @param inputRow The inputRow of upstream input.\n * @return\n */\nprotected abstract Object[] getOutputFieldValues(SeaTunnelRowAccessor inputRow);\n")),(0,a.yg)("h3",{id:"abstractseatunneltransform"},"AbstractSeaTunnelTransform"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"AbstractSeaTunnelTransform")," \u62bd\u8c61\u4e86\u6570\u636e\u7c7b\u578b\u548c\u5b57\u6bb5\u7684\u4fee\u6539\u64cd\u4f5c"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u8f6c\u6362\u8f93\u5165\u7684\u884c\u7c7b\u578b\u5230\u65b0\u7684\u884c\u7c7b\u578b")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs transformed row type.\n *\n * @param inputRowType upstream input row type\n * @return\n */\nprotected abstract SeaTunnelRowType transformRowType(SeaTunnelRowType inputRowType);\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u8f6c\u6362\u8f93\u5165\u7684\u884c\u6570\u636e\u5230\u65b0\u7684\u884c\u6570\u636e")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * Outputs transformed row data.\n * \n * @param inputRow upstream input row data\n * @return\n */\nprotected abstract SeaTunnelRow transformRow(SeaTunnelRow inputRow);\n")),(0,a.yg)("h2",{id:"\u5f00\u53d1\u4e00\u4e2a-transform"},"\u5f00\u53d1\u4e00\u4e2a Transform"),(0,a.yg)("p",null,"Transform \u5fc5\u987b\u5b9e\u73b0\u4e0b\u9762\u5176\u4e2d\u4e00\u4e2a API:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"SeaTunnelTransform"),(0,a.yg)("li",{parentName:"ul"},"AbstractSeaTunnelTransform"),(0,a.yg)("li",{parentName:"ul"},"SingleFieldOutputTransform"),(0,a.yg)("li",{parentName:"ul"},"MultipleFieldOutputTransform")),(0,a.yg)("p",null,"\u5c06\u5b9e\u73b0\u7c7b\u653e\u5165\u6a21\u5757 ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-transforms-v2"),"\u3002"),(0,a.yg)("h3",{id:"\u6848\u4f8b-\u62f7\u8d1d\u5b57\u6bb5\u5230\u4e00\u4e2a\u65b0\u7684\u5b57\u6bb5"},"\u6848\u4f8b: \u62f7\u8d1d\u5b57\u6bb5\u5230\u4e00\u4e2a\u65b0\u7684\u5b57\u6bb5"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'@AutoService(SeaTunnelTransform.class)\npublic class CopyFieldTransform extends SingleFieldOutputTransform {\n\n    private String srcField;\n    private int srcFieldIndex;\n    private SeaTunnelDataType srcFieldDataType;\n    private String destField;\n\n    @Override\n    public String getPluginName() {\n        return "Copy";\n    }\n\n    @Override\n    protected void setConfig(Config pluginConfig) {\n        this.srcField = pluginConfig.getString("src_field");\n        this.destField = pluginConfig.getString("dest_fields");\n    }\n\n    @Override\n    protected void setInputRowType(SeaTunnelRowType inputRowType) {\n        srcFieldIndex = inputRowType.indexOf(srcField);\n        srcFieldDataType = inputRowType.getFieldType(srcFieldIndex);\n    }\n\n    @Override\n    protected String getOutputFieldName() {\n        return destField;\n    }\n\n    @Override\n    protected SeaTunnelDataType getOutputFieldDataType() {\n        return srcFieldDataType;\n    }\n\n    @Override\n    protected Object getOutputFieldValue(SeaTunnelRowAccessor inputRow) {\n        return inputRow.getField(srcFieldIndex);\n    }\n}\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"getPluginName")," \u65b9\u6cd5\u7528\u6765\u5b9a\u4e49 transform \u7684\u540d\u5b57\u3002"),(0,a.yg)("li",{parentName:"ol"},"@AutoService \u6ce8\u89e3\u7528\u6765\u81ea\u52a8\u751f\u6210 ",(0,a.yg)("inlineCode",{parentName:"li"},"META-INF/services/org.apache.seatunnel.api.transform.SeaTunnelTransform")," \u6587\u4ef6"),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("inlineCode",{parentName:"li"},"setConfig")," \u65b9\u6cd5\u7528\u6765\u6ce8\u5165\u7528\u6237\u914d\u7f6e\u3002")),(0,a.yg)("h2",{id:"transform-\u6d4b\u8bd5\u5de5\u5177"},"Transform \u6d4b\u8bd5\u5de5\u5177"),(0,a.yg)("p",null,"\u5f53\u4f60\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\uff0c \u63a8\u8350\u6dfb\u52a0\u4e00\u4e2a e2e \u6d4b\u8bd5\u7528\u4f8b\u6765\u6d4b\u8bd5\u3002\n\u6211\u4eec\u6709 ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-transforms-v2-e2e")," \u6765\u5e2e\u52a9\u4f60\u5b9e\u73b0\u3002"),(0,a.yg)("p",null,"\u4f8b\u5982\uff0c \u5982\u679c\u4f60\u60f3\u8981\u6dfb\u52a0\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},"CopyFieldTransform")," \u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c \u4f60\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-transforms-v2-e2e"),"\n\u6a21\u5757\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u6d4b\u8bd5\u7528\u4f8b\uff0c \u5e76\u4e14\u5728\u7528\u4f8b\u4e2d\u7ee7\u627f ",(0,a.yg)("inlineCode",{parentName:"p"},"TestSuiteBase")," \u7c7b\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'public class TestCopyFieldTransformIT extends TestSuiteBase {\n\n    @TestTemplate\n    public void testCopyFieldTransform(TestContainer container) {\n        Container.ExecResult execResult = container.executeJob("/copy_transform.conf");\n        Assertions.assertEquals(0, execResult.getExitCode());\n    }\n}\n')),(0,a.yg)("p",null,"\u4e00\u65e6\u4f60\u7684\u6d4b\u8bd5\u7528\u4f8b\u5b9e\u73b0\u4e86 ",(0,a.yg)("inlineCode",{parentName:"p"},"TestSuiteBase")," \u63a5\u53e3\uff0c \u5e76\u4e14\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"p"},"@TestTemplate")," \u6ce8\u89e3\uff0c\u5b83\u4f1a\u5728\u6240\u6709\u5f15\u64ce\u8fd0\u884c\u4f5c\u4e1a\uff0c\u4f60\u53ea\u9700\u8981\u7528\u4f60\u81ea\u5df1\u7684 SeaTunnel \u914d\u7f6e\u6587\u4ef6\u6267\u884c executeJob \u65b9\u6cd5\uff0c\n\u5b83\u4f1a\u63d0\u4ea4 SeaTunnel \u4f5c\u4e1a\u3002"))}c.isMDXComponent=!0}}]);