"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[12579],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(g,r(r({ref:n},p),{},{components:t})):a.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},91583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=t(58168),o=(t(96540),t(15680));const i={},r="Intro To Config File",l={unversionedId:"concept/config",id:"concept/config",title:"Intro To Config File",description:"In SeaTunnel, the most important thing is the config file, through which users can customize their own data",source:"@site/docs/concept/config.md",sourceDirName:"concept",slug:"/concept/config",permalink:"/docs/concept/config",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/concept/config.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Set Up with Kubernetes",permalink:"/docs/start-v2/kubernetes/"},next:{title:"Intro To Connector V2 Features",permalink:"/docs/concept/connector-v2-features"}},s={},u=[{value:"Example",id:"example",level:2},{value:"Config File Structure",id:"config-file-structure",level:2},{value:"hocon",id:"hocon",level:3},{value:"env",id:"env",level:3},{value:"source",id:"source",level:3},{value:"transform",id:"transform",level:3},{value:"sink",id:"sink",level:3},{value:"Other Information",id:"other-information",level:3},{value:"Multi-line Support",id:"multi-line-support",level:2},{value:"Json Format Support",id:"json-format-support",level:2},{value:"Config Variable Substitution",id:"config-variable-substitution",level:2},{value:"Usage of Variables:",id:"usage-of-variables",level:3},{value:"Example:",id:"example-1",level:3},{value:"Important Notes:",id:"important-notes",level:3},{value:"What&#39;s More",id:"whats-more",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"intro-to-config-file"},"Intro To Config File"),(0,o.yg)("p",null,"In SeaTunnel, the most important thing is the config file, through which users can customize their own data\nsynchronization requirements to maximize the potential of SeaTunnel. So next, I will introduce you how to\nconfigure the config file."),(0,o.yg)("p",null,"The main format of the config file is ",(0,o.yg)("inlineCode",{parentName:"p"},"hocon"),", for more details you can refer to ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON-GUIDE"),",\nBTW, we also support the ",(0,o.yg)("inlineCode",{parentName:"p"},"json")," format, but you should keep in mind that the name of the config file should end with ",(0,o.yg)("inlineCode",{parentName:"p"},".json"),"."),(0,o.yg)("p",null,"We also support the ",(0,o.yg)("inlineCode",{parentName:"p"},"SQL")," format, please refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/concept/sql-config"},"SQL configuration")," for more details."),(0,o.yg)("h2",{id:"example"},"Example"),(0,o.yg)("p",null,"Before you read on, you can find config file\nexamples ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/tree/dev/seatunnel-e2e/seatunnel-connector-v2-e2e/connector-jdbc-e2e/connector-jdbc-e2e-part-1/src/test/resources"},"Here")," from the binary package's\nconfig directory."),(0,o.yg)("h2",{id:"config-file-structure"},"Config File Structure"),(0,o.yg)("p",null,"The config file is similar to the below one:"),(0,o.yg)("p",null,":::warn"),(0,o.yg)("p",null,"The old configuration name ",(0,o.yg)("inlineCode",{parentName:"p"},"source_table_name"),"/",(0,o.yg)("inlineCode",{parentName:"p"},"result_table_name")," is deprecated, please migrate to the new name ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input"),"/",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," as soon as possible."),(0,o.yg)("p",null,":::"),(0,o.yg)("h3",{id:"hocon"},"hocon"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n        card = "int"\n      }\n    }\n  }\n}\n\ntransform {\n  Filter {\n    plugin_input = "fake"\n    plugin_output = "fake1"\n    fields = [name, card]\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name", "card"]\n    username = "default"\n    password = ""\n    plugin_input = "fake1"\n  }\n}\n')),(0,o.yg)("p",null,"As you can see, the config file contains several sections: env, source, transform, sink. Different modules\nhave different functions. After you understand these modules, you will see how SeaTunnel works."),(0,o.yg)("h3",{id:"env"},"env"),(0,o.yg)("p",null,"Used to add some engine optional parameters, no matter which engine (Zeta, Spark or Flink), the corresponding\noptional parameters should be filled in here."),(0,o.yg)("p",null,"Note that we have separated the parameters by engine, and for the common parameters, we can configure them as before.\nFor flink and spark engine, the specific configuration rules of their parameters can be referred to ",(0,o.yg)("a",{parentName:"p",href:"/docs/concept/JobEnvConfig"},"JobEnvConfig"),"."),(0,o.yg)("h3",{id:"source"},"source"),(0,o.yg)("p",null,"Source is used to define where SeaTunnel needs to fetch data, and use the fetched data for the next step.\nMultiple sources can be defined at the same time. The supported source can be found\nin ",(0,o.yg)("a",{parentName:"p",href:"../connector-v2/source"},"Source of SeaTunnel"),". Each source has its own specific parameters to define how to\nfetch data, and SeaTunnel also extracts the parameters that each source will use, such as\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," parameter, which is used to specify the name of the data generated by the current\nsource, which is convenient for follow-up used by other modules."),(0,o.yg)("h3",{id:"transform"},"transform"),(0,o.yg)("p",null,"When we have the data source, we may need to further process the data, so we have the transform module. Of\ncourse, this uses the word 'may', which means that we can also directly treat the transform as non-existent,\ndirectly from source to sink. Like below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake"\n    row.num = 100\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n        card = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Clickhouse {\n    host = "clickhouse:8123"\n    database = "default"\n    table = "seatunnel_console"\n    fields = ["name", "age", "card"]\n    username = "default"\n    password = ""\n    plugin_input = "fake"\n  }\n}\n')),(0,o.yg)("p",null,"Like source, transform has specific parameters that belong to each module. The supported transform can be found\nin ",(0,o.yg)("a",{parentName:"p",href:"../transform-v2"},"Transform V2 of SeaTunnel")),(0,o.yg)("h3",{id:"sink"},"sink"),(0,o.yg)("p",null,"Our purpose with SeaTunnel is to synchronize data from one place to another, so it is critical to define how\nand where data is written. With the sink module provided by SeaTunnel, you can complete this operation quickly\nand efficiently. Sink and source are very similar, but the difference is reading and writing. So please check out\n",(0,o.yg)("a",{parentName:"p",href:"../connector-v2/sink"},"Supported Sinks"),"."),(0,o.yg)("h3",{id:"other-information"},"Other Information"),(0,o.yg)("p",null,"You will find that when multiple sources and multiple sinks are defined, which data is read by each sink, and\nwhich is the data read by each transform? We introduce two key configurations called ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input"),". Each source module will be configured with a ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," to indicate the name of the\ndata source generated by the data source, and other transform and sink modules can use ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input")," to\nrefer to the corresponding data source name, indicating that I want to read the data for processing. Then\ntransform, as an intermediate processing module, can use both ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_output")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"plugin_input"),"\nconfigurations at the same time. But you will find that in the above example config, not every module is\nconfigured with these two parameters, because in SeaTunnel, there is a default convention, if these two\nparameters are not configured, then the generated data from the last module of the previous node will be used.\nThis is much more convenient when there is only one source."),(0,o.yg)("h2",{id:"multi-line-support"},"Multi-line Support"),(0,o.yg)("p",null,"In ",(0,o.yg)("inlineCode",{parentName:"p"},"hocon"),", multiline strings are supported, which allows you to include extended passages of text without worrying about newline characters or special formatting. This is achieved by enclosing the text within triple quotes ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("inlineCode",{parentName:"strong"},'"""'))," . For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'var = """\nApache SeaTunnel is a\nnext-generation high-performance,\ndistributed, massive data integration tool.\n"""\nsql = """ select * from "table" """\n')),(0,o.yg)("h2",{id:"json-format-support"},"Json Format Support"),(0,o.yg)("p",null,"Before writing the config file, please make sure that the name of the config file should end with ",(0,o.yg)("inlineCode",{parentName:"p"},".json"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n  "env": {\n    "job.mode": "batch"\n  },\n  "source": [\n    {\n      "plugin_name": "FakeSource",\n      "plugin_output": "fake",\n      "row.num": 100,\n      "schema": {\n        "fields": {\n          "name": "string",\n          "age": "int",\n          "card": "int"\n        }\n      }\n    }\n  ],\n  "transform": [\n    {\n      "plugin_name": "Filter",\n      "plugin_input": "fake",\n      "plugin_output": "fake1",\n      "fields": ["name", "card"]\n    }\n  ],\n  "sink": [\n    {\n      "plugin_name": "Clickhouse",\n      "host": "clickhouse:8123",\n      "database": "default",\n      "table": "seatunnel_console",\n      "fields": ["name", "card"],\n      "username": "default",\n      "password": "",\n      "plugin_input": "fake1"\n    }\n  ]\n}\n\n')),(0,o.yg)("h2",{id:"config-variable-substitution"},"Config Variable Substitution"),(0,o.yg)("p",null,"In a config file, we can define variables and replace them at runtime. However, note that only HOCON format files are supported."),(0,o.yg)("h3",{id:"usage-of-variables"},"Usage of Variables:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"${varName}"),": If the variable is not provided, an exception will be thrown."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"${varName:default}"),": If the variable is not provided, the default value will be used. If you set a default value, it should be enclosed in double quotes."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"${varName:}"),": If the variable is not provided, an empty string will be used.")),(0,o.yg)("p",null,"If you do not set the variable value through ",(0,o.yg)("inlineCode",{parentName:"p"},"-i"),", you can also pass the value by setting the system environment variables. Variable substitution supports obtaining variable values through environment variables.\nFor example, you can set the environment variable in the shell script as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'export varName="value with space"\n')),(0,o.yg)("p",null,"Then you can use the variable in the config file."),(0,o.yg)("p",null,"If you set a variable without a default value in the configuration file but do not pass it during execution, the value of the variable will be retained and the system will not throw an exception. But please ensure that other processes can correctly parse the variable value. For example, ElasticSearch's index needs to support a format like '${xxx}' to dynamically specify the index. If other processes are not supported, the program may not run properly."),(0,o.yg)("h3",{id:"example-1"},"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n  job.name = ${jobName}\n  parallelism = 2\n}\n\nsource {\n  FakeSource {\n    plugin_output = "${resName:fake_test}_table"\n    row.num = "${rowNum:50}"\n    string.template = ${strTemplate}\n    int.template = [20, 21]\n    schema = {\n      fields {\n        name = "${nameType:string}"\n        age = ${ageType}\n      }\n    }\n  }\n}\n\ntransform {\n    sql {\n      plugin_input = "${resName:fake_test}_table"\n      plugin_output = "sql"\n      query = "select * from ${resName:fake_test}_table where name = \'${nameVal}\' "\n    }\n\n}\n\nsink {\n  Console {\n     plugin_input = "sql"\n     username = ${username}\n     password = ${password}\n  }\n}\n')),(0,o.yg)("p",null,"In the configuration above, we have defined several variables like ",(0,o.yg)("inlineCode",{parentName:"p"},"${rowNum}"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"${resName}"),". We can replace these parameters using the following shell command:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"./bin/seatunnel.sh -c <this_config_file> \n-i jobName='this_is_a_job_name' \n-i strTemplate=['abc','d~f','hi'] \n-i ageType=int\n-i nameVal=abc \n-i username=seatunnel=2.3.1 \n-i password='$a^b%c.d~e0*9(' \n-m local\n")),(0,o.yg)("p",null,"In this case, ",(0,o.yg)("inlineCode",{parentName:"p"},"resName"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"rowNum"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"nameType")," are not set, so they will take their default values."),(0,o.yg)("p",null,"The final submitted configuration would be:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-hocon"},'env {\n  job.mode = "BATCH"\n  job.name = "this_is_a_job_name"\n  parallelism = 2\n}\n\nsource {\n  FakeSource {\n    plugin_output = "fake_test_table"\n    row.num = 50\n    string.template = [\'abc\',\'d~f\',\'hi\']\n    int.template = [20, 21]\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\ntransform {\n    sql {\n      plugin_input = "fake_test_table"\n      plugin_output = "sql"\n      query = "select * from fake_test_table where name = \'abc\' "\n    }\n\n}\n\nsink {\n  Console {\n     plugin_input = "sql"\n     username = "seatunnel=2.3.1"\n     password = "$a^b%c.d~e0*9("\n    }\n}\n')),(0,o.yg)("h3",{id:"important-notes"},"Important Notes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If a value contains special characters like ",(0,o.yg)("inlineCode",{parentName:"li"},"("),", enclose it in single quotes (",(0,o.yg)("inlineCode",{parentName:"li"},"'"),")."),(0,o.yg)("li",{parentName:"ul"},"If the substitution variable contains double or single quotes (e.g., ",(0,o.yg)("inlineCode",{parentName:"li"},'"resName"')," or ",(0,o.yg)("inlineCode",{parentName:"li"},'"nameVal"'),"), you need to include them with the value."),(0,o.yg)("li",{parentName:"ul"},"The value cannot contain spaces (",(0,o.yg)("inlineCode",{parentName:"li"},"' '"),"). For example, ",(0,o.yg)("inlineCode",{parentName:"li"},"-i jobName='this is a job name'")," will be replaced with ",(0,o.yg)("inlineCode",{parentName:"li"},'job.name = "this"'),". You can use environment variables to pass values with spaces."),(0,o.yg)("li",{parentName:"ul"},"For dynamic parameters, you can use the following format: ",(0,o.yg)("inlineCode",{parentName:"li"},'-i date=$(date +"%Y%m%d")'),"."),(0,o.yg)("li",{parentName:"ul"},"Cannot use specified system reserved characters; they will not be replaced by ",(0,o.yg)("inlineCode",{parentName:"li"},"-i"),", such as: ",(0,o.yg)("inlineCode",{parentName:"li"},"${database_name}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${schema_name}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${table_name}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${schema_full_name}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${table_full_name}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${primary_key}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${unique_key}"),", ",(0,o.yg)("inlineCode",{parentName:"li"},"${field_names}"),". For details, please refer to ",(0,o.yg)("a",{parentName:"li",href:"/docs/concept/sink-options-placeholders"},"Sink Parameter Placeholders"),".")),(0,o.yg)("h2",{id:"whats-more"},"What's More"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Start write your own config file now, choose the ",(0,o.yg)("a",{parentName:"li",href:"../connector-v2/source"},"connector")," you want to use, and configure the parameters according to the connector's documentation."),(0,o.yg)("li",{parentName:"ul"},"If you want to know the details of the format configuration, please see ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/lightbend/config/blob/main/HOCON.md"},"HOCON"),".")))}m.isMDXComponent=!0}}]);