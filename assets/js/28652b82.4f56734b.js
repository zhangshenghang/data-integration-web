"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[60888],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>y});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(t),g=r,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return t?a.createElement(y,o(o({ref:n},m),{},{components:t})):a.createElement(y,o({ref:n},m))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},90715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const l={},o="LLM",i={unversionedId:"transform-v2/llm",id:"transform-v2/llm",title:"LLM",description:"LLM transform plugin",source:"@site/docs/transform-v2/llm.md",sourceDirName:"transform-v2",slug:"/transform-v2/llm",permalink:"/docs/transform-v2/llm",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform-v2/llm.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"JsonPath",permalink:"/docs/transform-v2/jsonpath"},next:{title:"Replace",permalink:"/docs/transform-v2/replace"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"model_provider",id:"model_provider",level:3},{value:"output_data_type",id:"output_data_type",level:3},{value:"prompt",id:"prompt",level:3},{value:"inference_columns",id:"inference_columns",level:3},{value:"model",id:"model",level:3},{value:"api_key",id:"api_key",level:3},{value:"api_path",id:"api_path",level:3},{value:"custom_config",id:"custom_config",level:3},{value:"custom_response_parse",id:"custom_response_parse",level:3},{value:"custom_request_headers",id:"custom_request_headers",level:3},{value:"custom_request_body",id:"custom_request_body",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"tips",id:"tips",level:2},{value:"Example OPENAI",id:"example-openai",level:2},{value:"Example KIMIAI",id:"example-kimiai",level:2},{value:"Customize the LLM model",id:"customize-the-llm-model",level:3}],m={toc:s},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"llm"},"LLM"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"LLM transform plugin")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Leverage the power of a large language model (LLM) to process data by sending it to the LLM and receiving the\ngenerated results. Utilize the LLM's capabilities to label, clean, enrich data, perform data inference, and\nmore."),(0,r.yg)("h2",{id:"options"},"Options"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"type"),(0,r.yg)("th",{parentName:"tr",align:null},"required"),(0,r.yg)("th",{parentName:"tr",align:null},"default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model_provider"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"output_data_type"),(0,r.yg)("td",{parentName:"tr",align:null},"enum"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null},"String")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"prompt"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"inference_columns"),(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"model"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_key"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"yes"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"api_path"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_config"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_response_parse"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_request_headers"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"custom_request_body"),(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"no"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("h3",{id:"model_provider"},"model_provider"),(0,r.yg)("p",null,"The model provider to use. The available options are:\nOPENAI, DOUBAO, KIMIAI, CUSTOM"),(0,r.yg)("h3",{id:"output_data_type"},"output_data_type"),(0,r.yg)("p",null,"The data type of the output data. The available options are:\nSTRING,INT,BIGINT,DOUBLE,BOOLEAN.\nDefault value is STRING."),(0,r.yg)("h3",{id:"prompt"},"prompt"),(0,r.yg)("p",null,"The prompt to send to the LLM. This parameter defines how LLM will process and return data, eg:"),(0,r.yg)("p",null,"The data read from source is a table like this:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jia Fan"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hailin Wang"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Eric"),(0,r.yg)("td",{parentName:"tr",align:null},"20")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Guangdong Liu"),(0,r.yg)("td",{parentName:"tr",align:null},"20")))),(0,r.yg)("p",null,"The prompt can be:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Determine whether someone is Chinese or American by their name\n")),(0,r.yg)("p",null,"The result will be:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"name"),(0,r.yg)("th",{parentName:"tr",align:null},"age"),(0,r.yg)("th",{parentName:"tr",align:null},"llm_output"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Jia Fan"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Hailin Wang"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Eric"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"American")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Guangdong Liu"),(0,r.yg)("td",{parentName:"tr",align:null},"20"),(0,r.yg)("td",{parentName:"tr",align:null},"Chinese")))),(0,r.yg)("h3",{id:"inference_columns"},"inference_columns"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"inference_columns")," option allows you to specify which columns from the input data should be used as inputs for the LLM. By default, all columns will be used as inputs."),(0,r.yg)("p",null,"For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'transform {\n  LLM {\n    model_provider = OPENAI\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    inference_columns = ["name", "age"]\n    prompt = "Determine whether someone is Chinese or American by their name"\n  }\n}\n')),(0,r.yg)("h3",{id:"model"},"model"),(0,r.yg)("p",null,"The model to use. Different model providers have different models. For example, the OpenAI model can be ",(0,r.yg)("inlineCode",{parentName:"p"},"gpt-4o-mini"),".\nIf you use OpenAI model, please refer ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/model-endpoint-compatibility"},"https://platform.openai.com/docs/models/model-endpoint-compatibility"),"\nof ",(0,r.yg)("inlineCode",{parentName:"p"},"/v1/chat/completions")," endpoint."),(0,r.yg)("h3",{id:"api_key"},"api_key"),(0,r.yg)("p",null,"The API key to use for the model provider.\nIf you use OpenAI model, please refer ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/api-reference/api-keys"},"https://platform.openai.com/docs/api-reference/api-keys")," of how to get the API key."),(0,r.yg)("h3",{id:"api_path"},"api_path"),(0,r.yg)("p",null,"The API path to use for the model provider. In most cases, you do not need to change this configuration. If you\nare using an API agent's service, you may need to configure it to the agent's API address."),(0,r.yg)("h3",{id:"custom_config"},"custom_config"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_config")," option allows you to provide additional custom configurations for the model. This is a map where you\ncan define various settings that might be required by the specific model you're using."),(0,r.yg)("h3",{id:"custom_response_parse"},"custom_response_parse"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_response_parse")," option allows you to specify how to parse the model's response. You can use JsonPath to\nextract the specific data you need from the response. For example, by using ",(0,r.yg)("inlineCode",{parentName:"p"},"$.choices[*].message.content"),", you can\nextract the ",(0,r.yg)("inlineCode",{parentName:"p"},"content")," field values from the following JSON. For more details on using JsonPath, please refer to\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/json-path/JsonPath?tab=readme-ov-file#getting-started"},"JsonPath Getting Started guide"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "chatcmpl-9s4hoBNGV0d9Mudkhvgzg64DAWPnx",\n  "object": "chat.completion",\n  "created": 1722674828,\n  "model": "gpt-4o-mini",\n  "choices": [\n    {\n      "index": 0,\n      "message": {\n        "role": "assistant",\n        "content": "[\\"Chinese\\"]"\n      },\n      "logprobs": null,\n      "finish_reason": "stop"\n    }\n  ],\n  "usage": {\n    "prompt_tokens": 107,\n    "completion_tokens": 3,\n    "total_tokens": 110\n  },\n  "system_fingerprint": "fp_0f03d4f0ee",\n  "code": 0,\n  "msg": "ok"\n}\n')),(0,r.yg)("h3",{id:"custom_request_headers"},"custom_request_headers"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_request_headers")," option allows you to define custom headers that should be included in the request sent to\nthe model's API. This is useful if the API requires additional headers beyond the standard ones, such as authorization\ntokens, content types, etc."),(0,r.yg)("h3",{id:"custom_request_body"},"custom_request_body"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"custom_request_body")," option supports placeholders:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${model}"),": Placeholder for the model name."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${input}"),": Placeholder to determine input value and define request body request type based on the type of body\nvalue. Example: ",(0,r.yg)("inlineCode",{parentName:"li"},'"${input}"'),' -> "input"'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"${prompt}"),"\uff1aPlaceholder for LLM model prompts.")),(0,r.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,r.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/transform-v2/common-options"},"Transform Plugin")," for details"),(0,r.yg)("h2",{id:"tips"},"tips"),(0,r.yg)("p",null,"The API interface usually has a rate limit, which can be configured with Seatunnel's speed limit to ensure smooth operation of the task.\nFor details about Seatunnel speed limit Settings, please refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/concept/speed-limit"},"speed-limit")," for details."),(0,r.yg)("h2",{id:"example-openai"},"Example OPENAI"),(0,r.yg)("p",null,"Determine the user's country through a LLM."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  read_limit.rows_per_second = 10\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "Jia Fan"], kind = INSERT}\n      {fields = [2, "Hailin Wang"], kind = INSERT}\n      {fields = [3, "Tomas"], kind = INSERT}\n      {fields = [4, "Eric"], kind = INSERT}\n      {fields = [5, "Guangdong Liu"], kind = INSERT}\n    ]\n  }\n}\n\ntransform {\n  LLM {\n    model_provider = OPENAI\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    prompt = "Determine whether someone is Chinese or American by their name"\n  }\n}\n\nsink {\n  console {\n  }\n}\n')),(0,r.yg)("h2",{id:"example-kimiai"},"Example KIMIAI"),(0,r.yg)("p",null,"Determine whether a person is a historical emperor of China."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  parallelism = 1\n  job.mode = "BATCH"\n  read_limit.rows_per_second = 10\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "Zhuge Liang"], kind = INSERT}\n      {fields = [2, "Li Shimin"], kind = INSERT}\n      {fields = [3, "Sun Wukong"], kind = INSERT}\n      {fields = [4, "Zhu Yuanzhuang"], kind = INSERT}\n      {fields = [5, "George Washington"], kind = INSERT}\n    ]\n  }\n}\n\ntransform {\n  LLM {\n    model_provider = KIMIAI\n    model = moonshot-v1-8k\n    api_key = sk-xxx\n    prompt = "Determine whether a person is a historical emperor of China"\n    output_data_type = boolean\n  }\n}\n\nsink {\n  console {\n  }\n}\n')),(0,r.yg)("h3",{id:"customize-the-llm-model"},"Customize the LLM model"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    row.num = 5\n    schema = {\n      fields {\n        id = "int"\n        name = "string"\n      }\n    }\n    rows = [\n      {fields = [1, "Jia Fan"], kind = INSERT}\n      {fields = [2, "Hailin Wang"], kind = INSERT}\n      {fields = [3, "Tomas"], kind = INSERT}\n      {fields = [4, "Eric"], kind = INSERT}\n      {fields = [5, "Guangdong Liu"], kind = INSERT}\n    ]\n    result_table_name = "fake"\n  }\n}\n\ntransform {\n  LLM {\n    source_table_name = "fake"\n    model_provider = CUSTOM\n    model = gpt-4o-mini\n    api_key = sk-xxx\n    prompt = "Determine whether someone is Chinese or American by their name"\n    openai.api_path = "http://mockserver:1080/v1/chat/completions"\n    custom_config={\n            custom_response_parse = "$.choices[*].message.content"\n            custom_request_headers = {\n                Content-Type = "application/json"\n                Authorization = "Bearer xxxxxxxx"            \n            }\n            custom_request_body ={\n                model = "${model}"\n                messages = [\n                {\n                    role = "system"\n                    content = "${prompt}"\n                },\n                {\n                    role = "user"\n                    content = "${input}"\n                }]\n            }\n        }\n    result_table_name = "llm_output"\n  }\n}\n\nsink {\n  Assert {\n    source_table_name = "llm_output"\n    rules =\n      {\n        field_rules = [\n          {\n            field_name = llm_output\n            field_type = string\n            field_value = [\n              {\n                rule_type = NOT_NULL\n              }\n            ]\n          }\n        ]\n      }\n  }\n}\n')))}u.isMDXComponent=!0}}]);