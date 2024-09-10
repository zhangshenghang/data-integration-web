"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[73438],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>m});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(t),d=l,m=p["".concat(s,".").concat(d)]||p[d]||g[d]||i;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=d;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[p]="string"==typeof e?e:l,o[1]=r;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var a=t(58168),l=(t(96540),t(15680));const i={sidebar_position:4},o=void 0,r={unversionedId:"seatunnel-engine/deployment",id:"version-2.3.5/seatunnel-engine/deployment",title:"deployment",description:"----------------",source:"@site/versioned_docs/version-2.3.5/seatunnel-engine/deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/deployment",permalink:"/docs/2.3.5/seatunnel-engine/deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.5/seatunnel-engine/deployment.md",tags:[],version:"2.3.5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"about",permalink:"/docs/2.3.5/seatunnel-engine/about"},next:{title:"local-mode",permalink:"/docs/2.3.5/seatunnel-engine/local-mode"}},s={},u=[{value:"1. Download",id:"1-download",level:2},{value:"2 Config SEATUNNEL_HOME",id:"2-config-seatunnel_home",level:2},{value:"3. Config SeaTunnel Engine JVM options",id:"3-config-seatunnel-engine-jvm-options",level:2},{value:"4. Config SeaTunnel Engine",id:"4-config-seatunnel-engine",level:2},{value:"4.1 Backup count",id:"41-backup-count",level:3},{value:"4.2 Slot service",id:"42-slot-service",level:3},{value:"4.3 Checkpoint Manager",id:"43-checkpoint-manager",level:3},{value:"4.4 Historical Job expiration Config",id:"44-historical-job-expiration-config",level:3},{value:"4.5 ClassLoader Cache Mode",id:"45-classloader-cache-mode",level:3},{value:"5. Config SeaTunnel Engine Server",id:"5-config-seatunnel-engine-server",level:2},{value:"5.1 cluster-name",id:"51-cluster-name",level:3},{value:"5.2 Network",id:"52-network",level:3},{value:"TCP",id:"tcp",level:4},{value:"5.3 Map",id:"53-map",level:3},{value:"6. Config SeaTunnel Engine Client",id:"6-config-seatunnel-engine-client",level:2},{value:"6.1 cluster-name",id:"61-cluster-name",level:3},{value:"6.2 Network",id:"62-network",level:3},{value:"7. Start SeaTunnel Engine Server Node",id:"7-start-seatunnel-engine-server-node",level:2},{value:"8. Install SeaTunnel Engine Client",id:"8-install-seatunnel-engine-client",level:2}],c={toc:u},p="wrapper";function g(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("hr",null),(0,l.yg)("h1",{id:"deployment-seatunnel-engine"},"Deployment SeaTunnel Engine"),(0,l.yg)("h2",{id:"1-download"},"1. Download"),(0,l.yg)("p",null,"SeaTunnel Engine is the default engine of SeaTunnel. The installation package of SeaTunnel already contains all the contents of SeaTunnel Engine."),(0,l.yg)("h2",{id:"2-config-seatunnel_home"},"2 Config SEATUNNEL_HOME"),(0,l.yg)("p",null,"You can config ",(0,l.yg)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME")," by add ",(0,l.yg)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," file. The content of ",(0,l.yg)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," are"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"export SEATUNNEL_HOME=${seatunnel install path}\nexport PATH=$PATH:$SEATUNNEL_HOME/bin\n")),(0,l.yg)("h2",{id:"3-config-seatunnel-engine-jvm-options"},"3. Config SeaTunnel Engine JVM options"),(0,l.yg)("p",null,"SeaTunnel Engine supported two ways to set jvm options."),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add JVM Options to ",(0,l.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/bin/seatunnel-cluster.sh"),"."),(0,l.yg)("p",{parentName:"li"},"Modify the ",(0,l.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/bin/seatunnel-cluster.sh")," file and add ",(0,l.yg)("inlineCode",{parentName:"p"},'JAVA_OPTS="-Xms2G -Xmx2G"')," in the first line.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Add JVM Options when start SeaTunnel Engine. For example ",(0,l.yg)("inlineCode",{parentName:"p"},'seatunnel-cluster.sh -DJvmOption="-Xms2G -Xmx2G"')))),(0,l.yg)("h2",{id:"4-config-seatunnel-engine"},"4. Config SeaTunnel Engine"),(0,l.yg)("p",null,"SeaTunnel Engine provides many functions, which need to be configured in seatunnel.yaml."),(0,l.yg)("h3",{id:"41-backup-count"},"4.1 Backup count"),(0,l.yg)("p",null,"SeaTunnel Engine implement cluster management based on ",(0,l.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/"},"Hazelcast IMDG"),". The state data of cluster(Job Running State, Resource State) are storage is ",(0,l.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/data-structures/map"},"Hazelcast IMap"),".\nThe data saved in Hazelcast IMap will be distributed and stored in all nodes of the cluster. Hazelcast will partition the data stored in Imap. Each partition can specify the number of backups.\nTherefore, SeaTunnel Engine can achieve cluster HA without using other services(for example zookeeper)."),(0,l.yg)("p",null,"The ",(0,l.yg)("inlineCode",{parentName:"p"},"backup count")," is to define the number of synchronous backups. For example, if it is set to 1, backup of a partition will be placed on one other member. If it is 2, it will be placed on two other members."),(0,l.yg)("p",null,"We suggest the value of ",(0,l.yg)("inlineCode",{parentName:"p"},"backup-count")," is the ",(0,l.yg)("inlineCode",{parentName:"p"},"min(1, max(5, N/2))"),". ",(0,l.yg)("inlineCode",{parentName:"p"},"N")," is the number of the cluster node."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"seatunnel:\n    engine:\n        backup-count: 1\n        # other config\n")),(0,l.yg)("h3",{id:"42-slot-service"},"4.2 Slot service"),(0,l.yg)("p",null,"The number of Slots determines the number of TaskGroups the cluster node can run in parallel. SeaTunnel Engine is a data synchronization engine and most jobs are IO intensive."),(0,l.yg)("p",null,"Dynamic Slot is suggest."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"seatunnel:\n    engine:\n        slot-service:\n            dynamic-slot: true\n        # other config\n")),(0,l.yg)("h3",{id:"43-checkpoint-manager"},"4.3 Checkpoint Manager"),(0,l.yg)("p",null,"Like Flink, SeaTunnel Engine support Chandy\u2013Lamport algorithm. Therefore, SeaTunnel Engine can realize data synchronization without data loss and duplication."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"interval")),(0,l.yg)("p",null,"The interval between two checkpoints, unit is milliseconds. If the ",(0,l.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," parameter is configured in the ",(0,l.yg)("inlineCode",{parentName:"p"},"env")," of the job config file, the value set here will be overwritten."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"timeout")),(0,l.yg)("p",null,"The timeout of a checkpoint. If a checkpoint cannot be completed within the timeout period, a checkpoint failure will be triggered. Therefore, Job will be restored."),(0,l.yg)("p",null,"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"seatunnel:\n    engine:\n        backup-count: 1\n        print-execution-info-interval: 10\n        slot-service:\n            dynamic-slot: true\n        checkpoint:\n            interval: 300000\n            timeout: 10000\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"checkpoint storage")),(0,l.yg)("p",null,"About the checkpoint storage, you can see ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.5/seatunnel-engine/checkpoint-storage"},"checkpoint storage")),(0,l.yg)("h3",{id:"44-historical-job-expiration-config"},"4.4 Historical Job expiration Config"),(0,l.yg)("p",null,"The information about each completed Job, such as status, counters, and error logs, is stored in the IMap object. As the number of running jobs increases, the memory increases and eventually the memory will overflow. Therefore, you can adjust the history-job-expire-minutes parameter to solve this problem. The time unit of this parameter is minute. The default value is 1440 minutes, that is one day."),(0,l.yg)("p",null,"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"seatunnel:\n  engine:\n    history-job-expire-minutes: 1440\n")),(0,l.yg)("h3",{id:"45-classloader-cache-mode"},"4.5 ClassLoader Cache Mode"),(0,l.yg)("p",null,"This configuration mainly solves the resource leakage caused by constantly creating and trying to destroy classloaders. If you encounter exceptions related to metaspace overflow, you can try to enable this configuration.\nIn order to reduce the frequency of creating classloaders, after enabling on this configuration, SeaTunnel will not try to release the corresponding classloader when the job is completed, so that it can be used by subsequent jobs,\nthat is to say, it is more effective when the Source/Sink connectors used in the running job are not too many types. Default value is false."),(0,l.yg)("p",null,"Example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"seatunnel:\n  engine:\n    classloader-cache-mode: true\n")),(0,l.yg)("h2",{id:"5-config-seatunnel-engine-server"},"5. Config SeaTunnel Engine Server"),(0,l.yg)("p",null,"All SeaTunnel Engine Server config in ",(0,l.yg)("inlineCode",{parentName:"p"},"hazelcast.yaml")," file."),(0,l.yg)("h3",{id:"51-cluster-name"},"5.1 cluster-name"),(0,l.yg)("p",null,"The SeaTunnel Engine nodes use the cluster name to determine whether the other is a cluster with themselves. If the cluster names between the two nodes are different, the SeaTunnel Engine will reject the service request."),(0,l.yg)("h3",{id:"52-network"},"5.2 Network"),(0,l.yg)("p",null,"Base on ",(0,l.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/discovery-mechanisms"},"Hazelcast"),", A SeaTunnel Engine cluster is a network of cluster members that run SeaTunnel Engine Server. Cluster members automatically join together to form a cluster. This automatic joining takes place with various discovery mechanisms that the cluster members use to find each other."),(0,l.yg)("p",null,"Please note that, after a cluster is formed, communication between cluster members is always via TCP/IP, regardless of the discovery mechanism used."),(0,l.yg)("p",null,"SeaTunnel Engine uses the following discovery mechanisms."),(0,l.yg)("h4",{id:"tcp"},"TCP"),(0,l.yg)("p",null,"You can configure SeaTunnel Engine to be a full TCP/IP cluster. See the ",(0,l.yg)("a",{parentName:"p",href:"/docs/2.3.5/seatunnel-engine/tcp"},"Discovering Members by TCP section")," for configuration details."),(0,l.yg)("p",null,"An example is like this ",(0,l.yg)("inlineCode",{parentName:"p"},"hazelcast.yaml")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  cluster-name: seatunnel\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - hostname1\n    port:\n      auto-increment: false\n      port: 5801\n  properties:\n    hazelcast.logging.type: log4j2\n")),(0,l.yg)("p",null,"TCP is our suggest way in a standalone SeaTunnel Engine cluster."),(0,l.yg)("p",null,"On the other hand, Hazelcast provides some other service discovery methods. For details, please refer to ",(0,l.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/setting-up-clusters"},"hazelcast network")),(0,l.yg)("h3",{id:"53-map"},"5.3 Map"),(0,l.yg)("p",null,"MapStores connect to an external data store only when they are configured on a map. This topic explains how to configure a map with a MapStore. For details, please refer to ",(0,l.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map"},"hazelcast map")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"type")),(0,l.yg)("p",null,"The type of imap persistence, currently only supports ",(0,l.yg)("inlineCode",{parentName:"p"},"hdfs"),"."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"namespace")),(0,l.yg)("p",null,"It is used to distinguish data storage locations of different business, like OSS bucket name."),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"clusterName")),(0,l.yg)("p",null,"This parameter is primarily used for cluster isolation, we can use this to distinguish different cluster, like cluster1,\ncluster2 and this is also used to distinguish different business"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"fs.defaultFS")),(0,l.yg)("p",null,"We used hdfs api read/write file, so used this storage need provide hdfs configuration"),(0,l.yg)("p",null,"if you used HDFS, you can config like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: hdfs://localhost:9000\n           // if you need hdfs-site config, you can config like this:\n           hdfs_site_path: /path/to/your/hdfs_site_path\n")),(0,l.yg)("p",null,"If there is no HDFS and your cluster only have one node, you can config to use local file like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: file:///\n")),(0,l.yg)("p",null,"if you used OSS, you can config like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: oss\n           block.size: block size(bytes)\n           oss.bucket: oss://bucket name/\n           fs.oss.accessKeyId: OSS access key id\n           fs.oss.accessKeySecret: OSS access key secret\n           fs.oss.endpoint: OSS endpoint\n           fs.oss.credentials.provider: org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider\n")),(0,l.yg)("h2",{id:"6-config-seatunnel-engine-client"},"6. Config SeaTunnel Engine Client"),(0,l.yg)("p",null,"All SeaTunnel Engine Client config in ",(0,l.yg)("inlineCode",{parentName:"p"},"hazelcast-client.yaml"),"."),(0,l.yg)("h3",{id:"61-cluster-name"},"6.1 cluster-name"),(0,l.yg)("p",null,"The Client must have the same ",(0,l.yg)("inlineCode",{parentName:"p"},"cluster-name")," with the SeaTunnel Engine. Otherwise, SeaTunnel Engine will reject the client request."),(0,l.yg)("h3",{id:"62-network"},"6.2 Network"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"cluster-members")),(0,l.yg)("p",null,"All SeaTunnel Engine Server Node address need add to here."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast-client:\n  cluster-name: seatunnel\n  properties:\n      hazelcast.logging.type: log4j2\n  network:\n    cluster-members:\n      - hostname1:5801\n")),(0,l.yg)("h2",{id:"7-start-seatunnel-engine-server-node"},"7. Start SeaTunnel Engine Server Node"),(0,l.yg)("p",null,"Can be started by a daemon with ",(0,l.yg)("inlineCode",{parentName:"p"},"-d"),"."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $SEATUNNEL_HOME/logs\n./bin/seatunnel-cluster.sh -d\n")),(0,l.yg)("p",null,"The logs will write in ",(0,l.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/logs/seatunnel-engine-server.log")),(0,l.yg)("h2",{id:"8-install-seatunnel-engine-client"},"8. Install SeaTunnel Engine Client"),(0,l.yg)("p",null,"You only need to copy the ",(0,l.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME")," directory on the SeaTunnel Engine node to the Client node and config the ",(0,l.yg)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME")," like SeaTunnel Engine Server Node."))}g.isMDXComponent=!0}}]);