"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[65756],{15680:(e,n,a)=>{a.d(n,{xA:()=>u,yg:()=>h});var t=a(96540);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),g=o,h=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return a?t.createElement(h,r(r({ref:n},u),{},{components:a})):t.createElement(h,r({ref:n},u))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},10913:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=a(58168),o=(a(96540),a(15680));const i={},r="FAQs",l={unversionedId:"faq",id:"version-2.3.4/faq",title:"FAQs",description:"Why should I install a computing engine like Spark or Flink?",source:"@site/versioned_docs/version-2.3.4/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/2.3.4/faq",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.4/faq.md",tags:[],version:"2.3.4",frontMatter:{},sidebar:"docs",previous:{title:"Contribute Transform Guide",permalink:"/docs/2.3.4/contribution/contribute-transform-v2-guide"}},s={},p=[{value:"Why should I install a computing engine like Spark or Flink?",id:"why-should-i-install-a-computing-engine-like-spark-or-flink",level:2},{value:"I have a question, and I cannot solve it by myself",id:"i-have-a-question-and-i-cannot-solve-it-by-myself",level:2},{value:"How do I declare a variable?",id:"how-do-i-declare-a-variable",level:2},{value:"How do I write a configuration item in multi-line text in the configuration file?",id:"how-do-i-write-a-configuration-item-in-multi-line-text-in-the-configuration-file",level:2},{value:"How do I implement variable substitution for multi-line text?",id:"how-do-i-implement-variable-substitution-for-multi-line-text",level:2},{value:"Is SeaTunnel supportted in Azkaban, Oozie, DolphinScheduler?",id:"is-seatunnel-supportted-in-azkaban-oozie-dolphinscheduler",level:2},{value:"Does SeaTunnel have a case for configuring multiple sources, such as configuring elasticsearch and hdfs in source at the same time?",id:"does-seatunnel-have-a-case-for-configuring-multiple-sources-such-as-configuring-elasticsearch-and-hdfs-in-source-at-the-same-time",level:2},{value:"Are there any HBase plugins?",id:"are-there-any-hbase-plugins",level:2},{value:"How can I use SeaTunnel to write data to Hive?",id:"how-can-i-use-seatunnel-to-write-data-to-hive",level:2},{value:"How does SeaTunnel write multiple instances of ClickHouse to achieve load balancing?",id:"how-does-seatunnel-write-multiple-instances-of-clickhouse-to-achieve-load-balancing",level:2},{value:"How can I solve OOM when SeaTunnel consumes Kafka?",id:"how-can-i-solve-oom-when-seatunnel-consumes-kafka",level:2},{value:"How can I solve the Error <code>Exception in thread &quot;main&quot; java.lang.NoSuchFieldError: INSTANCE</code>?",id:"how-can-i-solve-the-error-exception-in-thread-main-javalangnosuchfielderror-instance",level:2},{value:"The default JDK of my Spark cluster is JDK7. After I install JDK8, how can I specify that SeaTunnel starts with JDK8?",id:"the-default-jdk-of-my-spark-cluster-is-jdk7-after-i-install-jdk8-how-can-i-specify-that-seatunnel-starts-with-jdk8",level:2},{value:"How do I specify a different JDK version for SeaTunnel on Yarn?",id:"how-do-i-specify-a-different-jdk-version-for-seatunnel-on-yarn",level:2},{value:"What should I do if OOM always appears when running SeaTunnel in Spark local* mode?",id:"what-should-i-do-if-oom-always-appears-when-running-seatunnel-in-spark-local-mode",level:2},{value:"Where can I place self-written plugins or third-party jdbc.jars to be loaded by SeaTunnel?",id:"where-can-i-place-self-written-plugins-or-third-party-jdbcjars-to-be-loaded-by-seatunnel",level:2},{value:"How do I configure logging-related parameters in SeaTunnel-v1(Spark)?",id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v1spark",level:2},{value:"How do I configure logging related parameters in SeaTunnel-v2(Spark, Flink)?",id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v2spark-flink",level:2},{value:"How do I configure logging related parameters of SeaTunnel-E2E Test?",id:"how-do-i-configure-logging-related-parameters-of-seatunnel-e2e-test",level:2},{value:"Error when writing to ClickHouse: ClassCastException",id:"error-when-writing-to-clickhouse-classcastexception",level:2},{value:"How does SeaTunnel access kerberos-authenticated HDFS, YARN, Hive and other resources?",id:"how-does-seatunnel-access-kerberos-authenticated-hdfs-yarn-hive-and-other-resources",level:2},{value:"How do I troubleshoot NoClassDefFoundError, ClassNotFoundException and other issues?",id:"how-do-i-troubleshoot-noclassdeffounderror-classnotfoundexception-and-other-issues",level:2},{value:"How do I use SeaTunnel to synchronize data across HDFS clusters?",id:"how-do-i-use-seatunnel-to-synchronize-data-across-hdfs-clusters",level:2},{value:"I want to learn the source code of SeaTunnel. Where should I start?",id:"i-want-to-learn-the-source-code-of-seatunnel-where-should-i-start",level:2},{value:"When SeaTunnel developers develop their own plugins, do they need to understand the SeaTunnel code? Should these plugins be integrated into the SeaTunnel project?",id:"when-seatunnel-developers-develop-their-own-plugins-do-they-need-to-understand-the-seatunnel-code-should-these-plugins-be-integrated-into-the-seatunnel-project",level:2},{value:"When I import a project, the compiler has the exception &quot;class not found <code>org.apache.seatunnel.shade.com.typesafe.config.Config</code>&quot;",id:"when-i-import-a-project-the-compiler-has-the-exception-class-not-found-orgapacheseatunnelshadecomtypesafeconfigconfig",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...i}=e;return(0,o.yg)(c,(0,t.A)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"faqs"},"FAQs"),(0,o.yg)("h2",{id:"why-should-i-install-a-computing-engine-like-spark-or-flink"},"Why should I install a computing engine like Spark or Flink?"),(0,o.yg)("p",null,"SeaTunnel now uses computing engines such as Spark and Flink to complete resource scheduling and node communication, so we can focus on the ease of use of data synchronization and the development of high-performance components. But this is only temporary."),(0,o.yg)("h2",{id:"i-have-a-question-and-i-cannot-solve-it-by-myself"},"I have a question, and I cannot solve it by myself"),(0,o.yg)("p",null,"I have encountered a problem when using SeaTunnel and I cannot solve it by myself. What should I do? First, search in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues"},"Issue list")," or ",(0,o.yg)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@seatunnel.apache.org"},"mailing list")," to see if someone has already asked the same question and got an answer. If you cannot find an answer to your question, you can contact community members for help in ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel#contact-us"},"these ways"),"."),(0,o.yg)("h2",{id:"how-do-i-declare-a-variable"},"How do I declare a variable?"),(0,o.yg)("p",null,"Do you want to know how to declare a variable in SeaTunnel's configuration, and then dynamically replace the value of the variable at runtime?"),(0,o.yg)("p",null,"Since ",(0,o.yg)("inlineCode",{parentName:"p"},"v1.2.4"),", SeaTunnel supports variable substitution in the configuration. This feature is often used for timing or non-timing offline processing to replace variables such as time and date. The usage is as follows:"),(0,o.yg)("p",null,"Configure the variable name in the configuration. Here is an example of sql transform (actually, anywhere in the configuration file the value in ",(0,o.yg)("inlineCode",{parentName:"p"},"'key = value'")," can use the variable substitution):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'...\ntransform {\n  sql {\n    query = "select * from user_view where city =\'"${city}"\' and dt = \'"${date}"\'"\n  }\n}\n...\n')),(0,o.yg)("p",null,"Taking Spark Local mode as an example, the startup command is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/start-seatunnel-spark.sh \\\n-c ./config/your_app.conf \\\n-e client \\\n-m local[2] \\\n-i city=shanghai \\\n-i date=20190319\n")),(0,o.yg)("p",null,"You can use the parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"-i")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"--variable")," followed by ",(0,o.yg)("inlineCode",{parentName:"p"},"key=value")," to specify the value of the variable, where the key needs to be same as the variable name in the configuration."),(0,o.yg)("h2",{id:"how-do-i-write-a-configuration-item-in-multi-line-text-in-the-configuration-file"},"How do I write a configuration item in multi-line text in the configuration file?"),(0,o.yg)("p",null,"When a configured text is very long and you want to wrap it, you can use three double quotes to indicate its start and end:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'var = """\n whatever you want\n"""\n')),(0,o.yg)("h2",{id:"how-do-i-implement-variable-substitution-for-multi-line-text"},"How do I implement variable substitution for multi-line text?"),(0,o.yg)("p",null,"It is a little troublesome to do variable substitution in multi-line text, because the variable cannot be included in three double quotation marks:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'var = """\nyour string 1\n"""${you_var}""" your string 2"""\n')),(0,o.yg)("p",null,"Refer to: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/lightbend/config/issues/456"},"lightbend/config#456"),"."),(0,o.yg)("h2",{id:"is-seatunnel-supportted-in-azkaban-oozie-dolphinscheduler"},"Is SeaTunnel supportted in Azkaban, Oozie, DolphinScheduler?"),(0,o.yg)("p",null,"Of course! See the screenshot below:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"workflow.png",src:a(93407).A,width:"2262",height:"1082"})),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"azkaban.png",src:a(5054).A,width:"3210",height:"1760"})),(0,o.yg)("h2",{id:"does-seatunnel-have-a-case-for-configuring-multiple-sources-such-as-configuring-elasticsearch-and-hdfs-in-source-at-the-same-time"},"Does SeaTunnel have a case for configuring multiple sources, such as configuring elasticsearch and hdfs in source at the same time?"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"env {\n    ...\n}\n\nsource {\n  hdfs { ... }  \n  elasticsearch { ... }\n  jdbc {...}\n}\n\ntransform {\n    ...\n}\n\nsink {\n    elasticsearch { ... }\n}\n")),(0,o.yg)("h2",{id:"are-there-any-hbase-plugins"},"Are there any HBase plugins?"),(0,o.yg)("p",null,"There is an hbase input plugin. You can download it from here: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/garyelephant/waterdrop-input-hbase"},"https://github.com/garyelephant/waterdrop-input-hbase")," ."),(0,o.yg)("h2",{id:"how-can-i-use-seatunnel-to-write-data-to-hive"},"How can I use SeaTunnel to write data to Hive?"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'env {\n  spark.sql.catalogImplementation = "hive"\n  spark.hadoop.hive.exec.dynamic.partition = "true"\n  spark.hadoop.hive.exec.dynamic.partition.mode = "nonstrict"\n}\n\nsource {\n  sql = "insert into ..."\n}\n\nsink {\n    // The data has been written to hive through the sql source. This is just a placeholder, it does not actually work.\n    stdout {\n        limit = 1\n    }\n}\n')),(0,o.yg)("p",null,"In addition, SeaTunnel has implemented a ",(0,o.yg)("inlineCode",{parentName:"p"},"Hive")," output plugin after version ",(0,o.yg)("inlineCode",{parentName:"p"},"1.5.7")," in ",(0,o.yg)("inlineCode",{parentName:"p"},"1.x")," branch; in ",(0,o.yg)("inlineCode",{parentName:"p"},"2.x")," branch. The Hive plugin for the Spark engine has been supported from version ",(0,o.yg)("inlineCode",{parentName:"p"},"2.0.5"),": ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/910"},"https://github.com/apache/seatunnel/issues/910"),"."),(0,o.yg)("h2",{id:"how-does-seatunnel-write-multiple-instances-of-clickhouse-to-achieve-load-balancing"},"How does SeaTunnel write multiple instances of ClickHouse to achieve load balancing?"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Write distributed tables directly (not recommended)")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add a proxy or domain name (DNS) in front of multiple instances of ClickHouse:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'{\n    output {\n        clickhouse {\n            host = "ck-proxy.xx.xx:8123"\n            # Local table\n            table = "table_name"\n        }\n    }\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Configure multiple instances in the configuration:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'{\n    output {\n        clickhouse {\n            host = "ck1:8123,ck2:8123,ck3:8123"\n            # Local table\n            table = "table_name"\n        }\n    }\n}\n'))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Use cluster mode:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'{\n    output {\n        clickhouse {\n            # Configure only one host\n            host = "ck1:8123"\n            cluster = "clickhouse_cluster_name"\n            # Local table\n            table = "table_name"\n        }\n    }\n}\n')))),(0,o.yg)("h2",{id:"how-can-i-solve-oom-when-seatunnel-consumes-kafka"},"How can I solve OOM when SeaTunnel consumes Kafka?"),(0,o.yg)("p",null,"In most cases, OOM is caused by not having a rate limit for consumption. The solution is as follows:"),(0,o.yg)("p",null,"For the current limit of Spark consumption of Kafka:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Suppose the number of partitions of Kafka ",(0,o.yg)("inlineCode",{parentName:"p"},"Topic 1")," you consume with KafkaStream = N.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Assuming that the production speed of the message producer (Producer) of ",(0,o.yg)("inlineCode",{parentName:"p"},"Topic 1")," is K messages/second, the speed of write messages to the partition must be uniform.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Suppose that, after testing, it is found that the processing capacity of Spark Executor per core per second is M."))),(0,o.yg)("p",null,"The following conclusions can be drawn:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If you want to make Spark's consumption of ",(0,o.yg)("inlineCode",{parentName:"p"},"Topic 1")," keep up with its production speed, then you need ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.executor.cores")," * ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.executor.instances")," >= K / M")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"When a data delay occurs, if you want the consumption speed not to be too fast, resulting in spark executor OOM, then you need to configure ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.streaming.kafka.maxRatePerPartition")," <= (",(0,o.yg)("inlineCode",{parentName:"p"},"spark.executor.cores")," ",(0,o.yg)("em",{parentName:"p"}," ",(0,o.yg)("inlineCode",{parentName:"em"},"spark.executor.instances"),") ")," M / N")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"In general, both M and N are determined, and the conclusion can be drawn from 2: The size of ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.streaming.kafka.maxRatePerPartition")," is positively correlated with the size of ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.executor.cores")," * ",(0,o.yg)("inlineCode",{parentName:"p"},"spark.executor.instances"),", and it can be increased while increasing the resource ",(0,o.yg)("inlineCode",{parentName:"p"},"maxRatePerPartition")," to speed up consumption."))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"kafka",src:a(116).A,width:"874",height:"438"})),(0,o.yg)("h2",{id:"how-can-i-solve-the-error-exception-in-thread-main-javalangnosuchfielderror-instance"},"How can I solve the Error ",(0,o.yg)("inlineCode",{parentName:"h2"},'Exception in thread "main" java.lang.NoSuchFieldError: INSTANCE'),"?"),(0,o.yg)("p",null,"The reason is that the version of httpclient.jar that comes with the CDH version of Spark is lower, and The httpclient version that ClickHouse JDBC is based on is 4.5.2, and the package versions conflict. The solution is to replace the jar package that comes with CDH with the httpclient-4.5.2 version."),(0,o.yg)("h2",{id:"the-default-jdk-of-my-spark-cluster-is-jdk7-after-i-install-jdk8-how-can-i-specify-that-seatunnel-starts-with-jdk8"},"The default JDK of my Spark cluster is JDK7. After I install JDK8, how can I specify that SeaTunnel starts with JDK8?"),(0,o.yg)("p",null,"In SeaTunnel's config file, specify the following configuration:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},'spark {\n ...\n spark.executorEnv.JAVA_HOME="/your/java_8_home/directory"\n spark.yarn.appMasterEnv.JAVA_HOME="/your/java_8_home/directory"\n ...\n}\n')),(0,o.yg)("h2",{id:"how-do-i-specify-a-different-jdk-version-for-seatunnel-on-yarn"},"How do I specify a different JDK version for SeaTunnel on Yarn?"),(0,o.yg)("p",null,"For example, if you want to set the JDK version to JDK8, there are two cases:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The Yarn cluster has deployed JDK8, but the default JDK is not JDK8. Add two configurations to the SeaTunnel config file:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'  env {\n ...\n spark.executorEnv.JAVA_HOME="/your/java_8_home/directory"\n spark.yarn.appMasterEnv.JAVA_HOME="/your/java_8_home/directory"\n ...\n}\n'))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Yarn cluster does not deploy JDK8. At this time, start SeaTunnel attached with JDK8. For detailed operations, see:\n",(0,o.yg)("a",{parentName:"p",href:"https://www.cnblogs.com/jasondan/p/spark-specific-jdk-version.html"},"https://www.cnblogs.com/jasondan/p/spark-specific-jdk-version.html")))),(0,o.yg)("h2",{id:"what-should-i-do-if-oom-always-appears-when-running-seatunnel-in-spark-local-mode"},"What should I do if OOM always appears when running SeaTunnel in Spark local","[*]"," mode?"),(0,o.yg)("p",null,"If you run in local mode, you need to modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"start-seatunnel.sh")," startup script. After ",(0,o.yg)("inlineCode",{parentName:"p"},"spark-submit"),", add a parameter ",(0,o.yg)("inlineCode",{parentName:"p"},"--driver-memory 4g")," . Under normal circumstances, local mode is not used in the production environment. Therefore, this parameter generally does not need to be set during On Yarn. See: ",(0,o.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#application-properties"},"Application Properties")," for details."),(0,o.yg)("h2",{id:"where-can-i-place-self-written-plugins-or-third-party-jdbcjars-to-be-loaded-by-seatunnel"},"Where can I place self-written plugins or third-party jdbc.jars to be loaded by SeaTunnel?"),(0,o.yg)("p",null,"Place the Jar package under the specified structure of the plugins directory:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"cd SeaTunnel\nmkdir -p plugins/my_plugins/lib\ncp third-part.jar plugins/my_plugins/lib\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"my_plugins")," can be any string."),(0,o.yg)("h2",{id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v1spark"},"How do I configure logging-related parameters in SeaTunnel-v1(Spark)?"),(0,o.yg)("p",null,"There are three ways to configure logging-related parameters (such as Log Level):"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"[Not recommended]"," Change the default ",(0,o.yg)("inlineCode",{parentName:"p"},"$SPARK_HOME/conf/log4j.properties"),"."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"This will affect all programs submitted via ",(0,o.yg)("inlineCode",{parentName:"li"},"$SPARK_HOME/bin/spark-submit"),"."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"[Not recommended]"," Modify logging related parameters directly in the Spark code of SeaTunnel."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"This is equivalent to writing dead, and each change needs to be recompiled."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"[Recommended]"," Use the following methods to change the logging configuration in the SeaTunnel configuration file (The change only takes effect if SeaTunnel >= 1.5.5 ):"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},'env {\n    spark.driver.extraJavaOptions = "-Dlog4j.configuration=file:<file path>/log4j.properties"\n    spark.executor.extraJavaOptions = "-Dlog4j.configuration=file:<file path>/log4j.properties"\n}\nsource {\n  ...\n}\ntransform {\n ...\n}\nsink {\n  ...\n}\n')))),(0,o.yg)("p",null,"The contents of the log4j configuration file for reference are as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"$ cat log4j.properties\nlog4j.rootLogger=ERROR, console\n\n# set the log level for these components\nlog4j.logger.org=ERROR\nlog4j.logger.org.apache.spark=ERROR\nlog4j.logger.org.spark-project=ERROR\nlog4j.logger.org.apache.hadoop=ERROR\nlog4j.logger.io.netty=ERROR\nlog4j.logger.org.apache.zookeeper=ERROR\n\n# add a ConsoleAppender to the logger stdout to write to the console\nlog4j.appender.console=org.apache.log4j.ConsoleAppender\nlog4j.appender.console.layout=org.apache.log4j.PatternLayout\n# use a simple message format\nlog4j.appender.console.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n\n")),(0,o.yg)("h2",{id:"how-do-i-configure-logging-related-parameters-in-seatunnel-v2spark-flink"},"How do I configure logging related parameters in SeaTunnel-v2(Spark, Flink)?"),(0,o.yg)("p",null,"Currently, they cannot be set directly. you need to modify the SeaTunnel startup script. The relevant parameters are specified in the task submission command. For specific parameters, please refer to the official documents:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Spark official documentation: ",(0,o.yg)("a",{parentName:"li",href:"http://spark.apache.org/docs/latest/configuration.html#configuring-logging"},"http://spark.apache.org/docs/latest/configuration.html#configuring-logging")),(0,o.yg)("li",{parentName:"ul"},"Flink official documentation: ",(0,o.yg)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-stable/monitoring/logging.html"},"https://ci.apache.org/projects/flink/flink-docs-stable/monitoring/logging.html"))),(0,o.yg)("p",null,"Reference:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console"},"https://stackoverflow.com/questions/27781187/how-to-stop-info-messages-displaying-on-spark-console")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"http://spark.apache.org/docs/latest/configuration.html#configuring-logging"},"http://spark.apache.org/docs/latest/configuration.html#configuring-logging")),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://medium.com/@iacomini.riccardo/spark-logging-configuration-in-yarn-faf5ba5fdb01"},"https://medium.com/@iacomini.riccardo/spark-logging-configuration-in-yarn-faf5ba5fdb01")),(0,o.yg)("h2",{id:"how-do-i-configure-logging-related-parameters-of-seatunnel-e2e-test"},"How do I configure logging related parameters of SeaTunnel-E2E Test?"),(0,o.yg)("p",null,"The log4j configuration file of ",(0,o.yg)("inlineCode",{parentName:"p"},"seatunnel-e2e")," existed in ",(0,o.yg)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-e2e-common/src/test/resources/log4j2.properties"),". You can modify logging related parameters directly in the configuration file."),(0,o.yg)("p",null,"For example, if you want to output more detailed logs of E2E Test, just downgrade ",(0,o.yg)("inlineCode",{parentName:"p"},"rootLogger.level")," in the configuration file."),(0,o.yg)("h2",{id:"error-when-writing-to-clickhouse-classcastexception"},"Error when writing to ClickHouse: ClassCastException"),(0,o.yg)("p",null,"In SeaTunnel, the data type will not be actively converted. After the Input reads the data, the corresponding\nSchema. When writing ClickHouse, the field type needs to be strictly matched, and the mismatch needs to be resolved."),(0,o.yg)("p",null,"Data conversion can be achieved through the following two plug-ins:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Filter Convert plugin"),(0,o.yg)("li",{parentName:"ol"},"Filter Sql plugin")),(0,o.yg)("p",null,"Detailed data type conversion reference: ",(0,o.yg)("a",{parentName:"p",href:"https://interestinglab.github.io/seatunnel-docs/#/en/configuration/output-plugins/Clickhouse?id=clickhouse-data-type-check-list"},"ClickHouse Data Type Check List")),(0,o.yg)("p",null,"Refer to issue:",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/488"},"#488")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/382"},"#382"),"."),(0,o.yg)("h2",{id:"how-does-seatunnel-access-kerberos-authenticated-hdfs-yarn-hive-and-other-resources"},"How does SeaTunnel access kerberos-authenticated HDFS, YARN, Hive and other resources?"),(0,o.yg)("p",null,"Please refer to: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/issues/590"},"#590"),"."),(0,o.yg)("h2",{id:"how-do-i-troubleshoot-noclassdeffounderror-classnotfoundexception-and-other-issues"},"How do I troubleshoot NoClassDefFoundError, ClassNotFoundException and other issues?"),(0,o.yg)("p",null,"There is a high probability that there are multiple different versions of the corresponding Jar package class loaded in the Java classpath, because of the conflict of the load order, not because the Jar is really missing. Modify this SeaTunnel startup command, adding the following parameters to the spark-submit submission section, and debug in detail through the output log."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"spark-submit --verbose\n    ...\n   --conf 'spark.driver.extraJavaOptions=-verbose:class'\n   --conf 'spark.executor.extraJavaOptions=-verbose:class'\n    ...\n")),(0,o.yg)("h2",{id:"how-do-i-use-seatunnel-to-synchronize-data-across-hdfs-clusters"},"How do I use SeaTunnel to synchronize data across HDFS clusters?"),(0,o.yg)("p",null,"Just configure hdfs-site.xml properly. Refer to: ",(0,o.yg)("a",{parentName:"p",href:"https://www.cnblogs.com/suanec/p/7828139.html"},"https://www.cnblogs.com/suanec/p/7828139.html"),"."),(0,o.yg)("h2",{id:"i-want-to-learn-the-source-code-of-seatunnel-where-should-i-start"},"I want to learn the source code of SeaTunnel. Where should I start?"),(0,o.yg)("p",null,"SeaTunnel has a completely abstract and structured code implementation, and many people have chosen SeaTunnel As a way to learn Spark. You can learn the source code from the main program entry: SeaTunnel.java"),(0,o.yg)("h2",{id:"when-seatunnel-developers-develop-their-own-plugins-do-they-need-to-understand-the-seatunnel-code-should-these-plugins-be-integrated-into-the-seatunnel-project"},"When SeaTunnel developers develop their own plugins, do they need to understand the SeaTunnel code? Should these plugins be integrated into the SeaTunnel project?"),(0,o.yg)("p",null,"The plugin developed by the developer has nothing to do with the SeaTunnel project and does not need to include your plugin code."),(0,o.yg)("p",null,"The plugin can be completely independent from SeaTunnel project, so you can write it using Java, Scala, Maven, sbt, Gradle, or whatever you want. This is also the way we recommend developers to develop plugins."),(0,o.yg)("h2",{id:"when-i-import-a-project-the-compiler-has-the-exception-class-not-found-orgapacheseatunnelshadecomtypesafeconfigconfig"},'When I import a project, the compiler has the exception "class not found ',(0,o.yg)("inlineCode",{parentName:"h2"},"org.apache.seatunnel.shade.com.typesafe.config.Config"),'"'),(0,o.yg)("p",null,"Run ",(0,o.yg)("inlineCode",{parentName:"p"},"mvn install")," first. In the ",(0,o.yg)("inlineCode",{parentName:"p"},"seatunnel-config/seatunnel-config-base")," subproject, the package ",(0,o.yg)("inlineCode",{parentName:"p"},"com.typesafe.config")," has been relocated to ",(0,o.yg)("inlineCode",{parentName:"p"},"org.apache.seatunnel.shade.com.typesafe.config")," and installed to the maven local repository in the subproject ",(0,o.yg)("inlineCode",{parentName:"p"},"seatunnel-config/seatunnel-config-shade"),"."))}d.isMDXComponent=!0},5054:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/azkaban-cbb73e8d8ee3956c38ccfd314b6cef6b.png"},116:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/kafka-301f0a97a236a8f8d50d0594d05e4a3e.png"},93407:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/workflow-cf5938a1e24c73ec50c1fa636900eb10.png"}}]);