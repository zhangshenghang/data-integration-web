"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[58810],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,d=m["".concat(s,".").concat(c)]||m[c]||g[c]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),l=a(20053),i=a(23104),o=a(56347),s=a(57485),u=a(31682),p=a(89466);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function g(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=g(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=d({queryString:a,groupId:n}),[m,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??m;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var f=a(92303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.a_)(),g=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(m(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:g},i,{className:(0,l.A)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function b(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",N.tabList)},r.createElement(h,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(v,(0,n.A)({key:String(t)},e))}},93986:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var n=a(58168),r=(a(96540),a(15680)),l=a(11470),i=a(19365);const o={},s="Kafka",u={unversionedId:"connector/source/Kafka",id:"version-2.1.1/connector/source/Kafka",title:"Kafka",description:"Description",source:"@site/versioned_docs/version-2.1.1/connector/source/Kafka.mdx",sourceDirName:"connector/source",slug:"/connector/source/Kafka",permalink:"/docs/2.1.1/connector/source/Kafka",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.1/connector/source/Kafka.mdx",tags:[],version:"2.1.1",frontMatter:{},sidebar:"docs",previous:{title:"Jdbc",permalink:"/docs/2.1.1/connector/source/Jdbc"},next:{title:"Kudu",permalink:"/docs/2.1.1/connector/source/Kudu"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"topics string",id:"topics-string",level:3},{value:"consumer.group.id string",id:"consumergroupid-string",level:3},{value:"consumer.bootstrap.servers string",id:"consumerbootstrapservers-string",level:3},{value:"format.type string",id:"formattype-string",level:3},{value:"format.* string",id:"format-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"rowtime.field string",id:"rowtimefield-string",level:3},{value:"watermark long",id:"watermark-long",level:3},{value:"offset.reset string",id:"offsetreset-string",level:3},{value:"consumer.* string",id:"consumer-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],g={toc:m},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"kafka"},"Kafka"),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"To consume data from ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka")," , supported ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka version >= 0.10.0")," ."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Engine Supported and plugin name"),(0,r.yg)("ul",{parentName:"admonition",className:"contains-task-list"},(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: KafkaStream"),(0,r.yg)("li",{parentName:"ul",className:"task-list-item"},(0,r.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Flink: Kafka"))),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group.id"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-"))))),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"topics"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.group.id"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.bootstrap.servers"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"schema"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format.type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"format.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"consumer.*"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"rowtime.field"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"watermark"),(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"offset.reset"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"common-options"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"-")))))),(0,r.yg)("h3",{id:"topics-string"},"topics ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka topic")," name. If there are multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"topics"),", use ",(0,r.yg)("inlineCode",{parentName:"p"},",")," to split, for example: ",(0,r.yg)("inlineCode",{parentName:"p"},'"tpc1,tpc2"')),(0,r.yg)("h3",{id:"consumergroupid-string"},"consumer.group.id ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka consumer group id"),", used to distinguish different consumer groups"),(0,r.yg)("h3",{id:"consumerbootstrapservers-string"},"consumer.bootstrap.servers ","[string]"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Kafka")," cluster address, separated by ",(0,r.yg)("inlineCode",{parentName:"p"},",")),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"}),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("h3",{id:"formattype-string"},"format.type ","[string]"),(0,r.yg)("p",null,"Currently supports three formats"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"json"),(0,r.yg)("li",{parentName:"ul"},"csv"),(0,r.yg)("li",{parentName:"ul"},"avro")),(0,r.yg)("h3",{id:"format-string"},"format.* ","[string]"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"csv")," format uses this parameter to set the separator and so on. For example, set the column delimiter to ",(0,r.yg)("inlineCode",{parentName:"p"},"\\t")," , ",(0,r.yg)("inlineCode",{parentName:"p"},"format.field-delimiter=\\\\t")),(0,r.yg)("h3",{id:"schema-string"},"schema ","[string]"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"csv"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," of ",(0,r.yg)("inlineCode",{parentName:"li"},"csv")," is a string of ",(0,r.yg)("inlineCode",{parentName:"li"},"jsonArray")," , such as ",(0,r.yg)("inlineCode",{parentName:"li"},'"[{\\"field\\":\\"name\\",\\"type\\":\\"string\\"},{\\"field\\":\\"age\\ ",\\"type\\":\\"int\\"}]"')," ."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"json"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,r.yg)("inlineCode",{parentName:"li"},"json")," is to provide a ",(0,r.yg)("inlineCode",{parentName:"li"},"json string")," of the original data, and the ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," can be automatically generated, but the original data with the most complete content needs to be provided, otherwise the fields will be lost."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"avro"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"schema")," parameter of ",(0,r.yg)("inlineCode",{parentName:"li"},"avro")," is to provide a standard ",(0,r.yg)("inlineCode",{parentName:"li"},"avro schema JSON string")," , such as ",(0,r.yg)("inlineCode",{parentName:"li"},'{\\"name\\":\\"test\\",\\"type\\":\\"record\\",\\"fields\\":[{ \\"name\\":\\"name\\",\\"type\\":\\"string\\"},{\\"name\\":\\"age\\",\\"type\\":\\"long\\"} ,{\\"name\\":\\"addrs\\",\\"type\\":{\\"name\\":\\"addrs\\",\\"type\\":\\"record\\",\\"fields\\" :[{\\"name\\":\\"province\\",\\"type\\":\\"string\\"},{\\"name\\":\\"city\\",\\"type\\":\\"string \\"}]}}]}')))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"To learn more about how the ",(0,r.yg)("inlineCode",{parentName:"p"},"Avro Schema JSON string")," should be defined, please refer to: ",(0,r.yg)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"https://avro.apache.org/docs/current/spec.html")))),(0,r.yg)("h3",{id:"rowtimefield-string"},"rowtime.field ","[string]"),(0,r.yg)("p",null,"Extract timestamp using current configuration field for flink event time watermark"),(0,r.yg)("h3",{id:"watermark-long"},"watermark ","[long]"),(0,r.yg)("p",null,"Sets a built-in watermark strategy for rowtime.field attributes which are out-of-order by a bounded time\ninterval. Emits watermarks which are the maximum observed timestamp minus the specified delay."),(0,r.yg)("h3",{id:"offsetreset-string"},"offset.reset ","[string]"),(0,r.yg)("p",null,"The consumer's initial ",(0,r.yg)("inlineCode",{parentName:"p"},"offset")," is only valid for new consumers. There are three modes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"latest",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Start consumption from the latest offset"))),(0,r.yg)("li",{parentName:"ul"},"earliest",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Start consumption from the earliest offset"))),(0,r.yg)("li",{parentName:"ul"},"specific",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Start consumption from the specified ",(0,r.yg)("inlineCode",{parentName:"li"},"offset")," , and specify the ",(0,r.yg)("inlineCode",{parentName:"li"},"start offset")," of each partition at this time. The setting method is through ",(0,r.yg)("inlineCode",{parentName:"li"},'offset.reset.specific="{0:111,1:123}"'))))))),(0,r.yg)("h3",{id:"consumer-string"},"consumer.* ","[string]"),(0,r.yg)("p",null,"In addition to the above necessary parameters that must be specified by the ",(0,r.yg)("inlineCode",{parentName:"p"},"Kafka consumer")," client, users can also specify multiple ",(0,r.yg)("inlineCode",{parentName:"p"},"consumer")," client non-mandatory parameters, covering ",(0,r.yg)("a",{parentName:"p",href:"https://kafka.apache.org/documentation.html#consumerconfigs"},"all consumer parameters specified in the official Kafka document"),"."),(0,r.yg)("p",null,"The way to specify parameters is to add the prefix ",(0,r.yg)("inlineCode",{parentName:"p"},"consumer.")," to the original parameter name. For example, the way to specify ",(0,r.yg)("inlineCode",{parentName:"p"},"auto.offset.reset")," is: ",(0,r.yg)("inlineCode",{parentName:"p"},"consumer.auto.offset.reset = latest")," . If these non-essential parameters are not specified, they will use the default values given in the official Kafka documentation."),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Source plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1.1/connector/source/common-options"},"Source Plugin")," for details"),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)(l.A,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"spark",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'kafkaStream {\n    topics = "seatunnel"\n    consumer.bootstrap.servers = "localhost:9092"\n    consumer.group.id = "seatunnel_group"\n}\n'))),(0,r.yg)(i.A,{value:"flink",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'KafkaTableStream {\n    consumer.bootstrap.servers = "127.0.0.1:9092"\n    consumer.group.id = "seatunnel5"\n    topics = test\n    result_table_name = test\n    format.type = csv\n    schema = "[{\\"field\\":\\"name\\",\\"type\\":\\"string\\"},{\\"field\\":\\"age\\",\\"type\\":\\"int\\"}]"\n    format.field-delimiter = ";"\n    format.allow-comments = "true"\n    format.ignore-parse-errors = "true"\n}\n')))))}d.isMDXComponent=!0}}]);