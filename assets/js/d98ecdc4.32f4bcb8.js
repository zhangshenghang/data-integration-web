"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[22815],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(58168),r=(t(96540),t(15680));const o={sidebar_position:3},l="Set Up With Docker",s={unversionedId:"start-v2/docker/docker",id:"start-v2/docker/docker",title:"Set Up With Docker",description:"Set Up With Docker In Local Mode",source:"@site/docs/start-v2/docker/docker.md",sourceDirName:"start-v2/docker",slug:"/start-v2/docker/",permalink:"/docs/start-v2/docker/",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/start-v2/docker/docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Quick Start With Spark",permalink:"/docs/start-v2/locally/quick-start-spark"},next:{title:"Set Up with Kubernetes",permalink:"/docs/start-v2/kubernetes/"}},i={},c=[{value:"Set Up With Docker In Local Mode",id:"set-up-with-docker-in-local-mode",level:2},{value:"Zeta Engine",id:"zeta-engine",level:3},{value:"Download",id:"download",level:4},{value:"Build Image By Yourself",id:"build-image-by-yourself",level:4},{value:"Build With One Command",id:"build-with-one-command",level:5},{value:"Build Step By Step",id:"build-step-by-step",level:5},{value:"Spark or Flink Engine",id:"spark-or-flink-engine",level:3},{value:"Mount Spark/Flink library",id:"mount-sparkflink-library",level:4},{value:"Submit job",id:"submit-job",level:3},{value:"Set Up With Docker In Cluster Mode",id:"set-up-with-docker-in-cluster-mode",level:2},{value:"Use Docker Directly",id:"use-docker-directly",level:3},{value:"create a network",id:"create-a-network",level:4},{value:"start the nodes",id:"start-the-nodes",level:4},{value:"Scale your Cluster",id:"scale-your-cluster",level:4},{value:"Use Docker-compose",id:"use-docker-compose",level:3},{value:"Scale your Cluster",id:"scale-your-cluster-1",level:4},{value:"Job Operation on cluster",id:"job-operation-on-cluster",level:3},{value:"use docker as a client",id:"use-docker-as-a-client",level:4},{value:"use rest api",id:"use-rest-api",level:4}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"set-up-with-docker"},"Set Up With Docker"),(0,r.yg)("h2",{id:"set-up-with-docker-in-local-mode"},"Set Up With Docker In Local Mode"),(0,r.yg)("h3",{id:"zeta-engine"},"Zeta Engine"),(0,r.yg)("h4",{id:"download"},"Download"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker pull apache/seatunnel:<version_tag>\n")),(0,r.yg)("p",null,"How to submit job in local mode"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'# Run fake source to console sink\ndocker run --rm -it apache/seatunnel:<version_tag> ./bin/seatunnel.sh -m local -c config/v2.batch.config.template\n\n# Run job with custom config file\ndocker run --rm -it -v /<The-Config-Directory-To-Mount>/:/config apache/seatunnel:<version_tag> ./bin/seatunnel.sh -m local -c /config/fake_to_console.conf\n\n# Example\n# If you config file is in /tmp/job/fake_to_console.conf\ndocker run --rm -it -v /tmp/job/:/config apache/seatunnel:<version_tag> ./bin/seatunnel.sh -m local -c /config/fake_to_console.conf\n\n# Set JVM options when running\ndocker run --rm -it -v /tmp/job/:/config apache/seatunnel:<version_tag> ./bin/seatunnel.sh -DJvmOption="-Xms4G -Xmx4G" -m local -c /config/fake_to_console.conf\n')),(0,r.yg)("h4",{id:"build-image-by-yourself"},"Build Image By Yourself"),(0,r.yg)("p",null,"Build from source code. The way of downloading the source code is the same as the way of downloading the binary package.\nYou can download the source code from the ",(0,r.yg)("a",{parentName:"p",href:"https://seatunnel.apache.org/download/"},"download page")," or clone the source code from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/releases"},"GitHub repository")),(0,r.yg)("h5",{id:"build-with-one-command"},"Build With One Command"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd seatunnel\n# Use already sett maven profile\nsh ./mvnw -B clean install -Dmaven.test.skip=true -Dmaven.javadoc.skip=true -Dlicense.skipAddThirdParty=true -D"docker.build.skip"=false -D"docker.verify.skip"=false -D"docker.push.skip"=true -D"docker.tag"=2.3.8 -Dmaven.deploy.skip --no-snapshot-updates -Pdocker,seatunnel\n\n# Check the docker image\ndocker images | grep apache/seatunnel\n')),(0,r.yg)("h5",{id:"build-step-by-step"},"Build Step By Step"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Build binary package from source code\nsh ./mvnw clean package -DskipTests -Dskip.spotless=true\n\n# Build docker image\ncd seatunnel-dist\ndocker build -f src/main/docker/Dockerfile --build-arg VERSION=2.3.8 -t apache/seatunnel:2.3.8 .\n\n# If you build from dev branch, you should add SNAPSHOT suffix to the version\ndocker build -f src/main/docker/Dockerfile --build-arg VERSION=2.3.8-SNAPSHOT -t apache/seatunnel:2.3.8-SNAPSHOT .\n\n# Check the docker image\ndocker images | grep apache/seatunnel\n")),(0,r.yg)("p",null,"The Dockerfile is like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-dockerfile"},"FROM openjdk:8\n\nARG VERSION\n# Build from Source Code And Copy it into image\nCOPY ./target/apache-seatunnel-${VERSION}-bin.tar.gz /opt/\n\n# Download From Internet\n# Please Note this file only include fake/console connector, You'll need to download the other connectors manually\n# wget -P /opt https://dlcdn.apache.org/seatunnel/2.3.6/apache-seatunnel-${VERSION}-bin.tar.gz\n\nRUN cd /opt && \\\n    tar -zxvf apache-seatunnel-${VERSION}-bin.tar.gz && \\\n    mv apache-seatunnel-${VERSION} seatunnel && \\\n    rm apache-seatunnel-${VERSION}-bin.tar.gz && \\\n    cp seatunnel/config/log4j2_client.properties seatunnel/config/log4j2.properties && \\\n    cp seatunnel/config/hazelcast-master.yaml seatunnel/config/hazelcast-worker.yaml\n\nWORKDIR /opt/seatunnel\n")),(0,r.yg)("h3",{id:"spark-or-flink-engine"},"Spark or Flink Engine"),(0,r.yg)("h4",{id:"mount-sparkflink-library"},"Mount Spark/Flink library"),(0,r.yg)("p",null,"By default, Spark home is ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/spark"),", Flink home is ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/flink"),".\nIf you need run with spark/flink, you can mount the related library to ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/spark")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/flink"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run \\ \n -v <SPARK_BINARY_PATH>:/opt/spark \\\n -v <FLINK_BINARY_PATH>:/opt/flink \\\n  ...\n")),(0,r.yg)("p",null,"Or you can change the ",(0,r.yg)("inlineCode",{parentName:"p"},"SPARK_HOME"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"FLINK_HOME")," environment variable in Dockerfile and re-build your  and mount the spark/flink to related path."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-dockerfile"},"FROM apache/seatunnel\n\nENV SPARK_HOME=<YOUR_CUSTOMIZATION_PATH>\n\n...\n\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run \\ \n -v <SPARK_BINARY_PATH>:<YOUR_CUSTOMIZATION_PATH> \\\n  ...\n")),(0,r.yg)("h3",{id:"submit-job"},"Submit job"),(0,r.yg)("p",null,"The command is different for different engines and different versions of the same engine, please choose the correct command."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Spark")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# spark2\ndocker run --rm -it apache/seatunnel bash ./bin/start-seatunnel-spark-2-connector-v2.sh -c config/v2.batch.config.template\n\n# spark3\ndocker run --rm -it apache/seatunnel bash ./bin/start-seatunnel-spark-3-connector-v2.sh -c config/v2.batch.config.template\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Flink\nbefore you submit job, you need start flink cluster first.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# flink version between `1.12.x` and `1.14.x`\ndocker run --rm -it apache/seatunnel bash -c '<YOUR_FLINK_HOME>/bin/start-cluster.sh && ./bin/start-seatunnel-flink-13-connector-v2.sh -c config/v2.streaming.conf.template'\n# flink version between `1.15.x` and `1.16.x`\ndocker run --rm -it apache/seatunnel bash -c '<YOUR_FLINK_HOME>/bin/start-cluster.sh && ./bin/start-seatunnel-flink-15-connector-v2.sh -c config/v2.streaming.conf.template'\n")),(0,r.yg)("h2",{id:"set-up-with-docker-in-cluster-mode"},"Set Up With Docker In Cluster Mode"),(0,r.yg)("p",null,"there has 2 ways to create cluster within docker."),(0,r.yg)("h3",{id:"use-docker-directly"},"Use Docker Directly"),(0,r.yg)("h4",{id:"create-a-network"},"create a network"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker network create seatunnel-network\n")),(0,r.yg)("h4",{id:"start-the-nodes"},"start the nodes"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"start master node")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"## start master and export 5801 port \ndocker run -d --name seatunnel_master \\\n    --network seatunnel-network \\\n    --rm \\\n    -p 5801:5801 \\\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r master\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"get created container ip")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker inspect master-1\n")),(0,r.yg)("p",null,"run this command to get the pod ip."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"start worker node")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name seatunnel_worker_1 \\\n    --network seatunnel-network \\\n    --rm \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\ # set master container ip to here\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r worker\n\n## start worker2\ndocker run -d --name seatunnel_worker_2 \\ \n    --network seatunnel-network \\\n    --rm \\\n     -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\    # set master container ip to here\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r worker    \n\n")),(0,r.yg)("h4",{id:"scale-your-cluster"},"Scale your Cluster"),(0,r.yg)("p",null,"run this command to start master node."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name seatunnel_master \\\n    --network seatunnel-network \\\n    --rm \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\ # set exist master container ip to here\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r master\n")),(0,r.yg)("p",null,"run this command to start worker node."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name seatunnel_worker_1 \\\n    --network seatunnel-network \\\n    --rm \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\ # set master container ip to here\n    apache/seatunnel \\\n    ./bin/seatunnel-cluster.sh -r worker\n")),(0,r.yg)("h3",{id:"use-docker-compose"},"Use Docker-compose"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"docker cluster mode is only support zeta engine.")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file is :"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nservices:\n  master:\n    image: apache/seatunnel\n    container_name: seatunnel_master\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4    \n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r master\n      "    \n    ports:\n      - "5801:5801"  \n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.2\n\n  worker1:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_1\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.3\n\n  worker2:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_2\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.4\n\nnetworks:\n  seatunnel_network:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.16.0.0/24\n\n')),(0,r.yg)("p",null,"run ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up -d")," command to start the cluster."),(0,r.yg)("p",null,"You can use ",(0,r.yg)("inlineCode",{parentName:"p"},"docker logs -f seatunne_master"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"docker logs -f seatunnel_worker_1")," to check the node log.\nAnd when you call ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:5801/hazelcast/rest/maps/system-monitoring-information"),", you will see there are 2 nodes as we excepted."),(0,r.yg)("p",null,"After that, you can use client or restapi to submit job to this cluster."),(0,r.yg)("h4",{id:"scale-your-cluster-1"},"Scale your Cluster"),(0,r.yg)("p",null,"If you want to increase cluster node, like add a new work node."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.8\'\n\nservices:\n  master:\n    image: apache/seatunnel\n    container_name: seatunnel_master\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4    \n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r master\n      "    \n    ports:\n      - "5801:5801"  \n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.2\n\n  worker1:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_1\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.3\n\n  worker2:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_2\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.4\n  ####\n  ## add new worker node\n  ####      \n  worker3:\n    image: apache/seatunnel\n    container_name: seatunnel_worker_3\n    environment:\n      - ST_DOCKER_MEMBER_LIST=172.16.0.2,172.16.0.3,172.16.0.4,172.16.0.5 # add ip to here\n    entrypoint: >\n      /bin/sh -c "\n      /opt/seatunnel/bin/seatunnel-cluster.sh -r worker\n      " \n    depends_on:\n      - master\n    networks:\n      seatunnel_network:\n        ipv4_address: 172.16.0.5        # use a not used ip\n\nnetworks:\n  seatunnel_network:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 172.16.0.0/24\n\n')),(0,r.yg)("p",null,"and run ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up -d")," command, the new worker node will start, and the current node won't restart."),(0,r.yg)("h3",{id:"job-operation-on-cluster"},"Job Operation on cluster"),(0,r.yg)("h4",{id:"use-docker-as-a-client"},"use docker as a client"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"submit job :")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run --name seatunnel_client \\\n    --network seatunnel-network \\\n    --rm \\\n    apache/seatunnel \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\ # set it as master node container ip\n    ./bin/seatunnel.sh  -c config/v2.batch.config.template # this is an default config, if you need submit your self config, you can mount config file.\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"list job")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker run --name seatunnel_client \\\n    --network seatunnel-network \\\n    --rm \\\n    apache/seatunnel \\\n    -e ST_DOCKER_MEMBER_LIST=172.18.0.2:5801 \\ # set it as master node container ip\n    ./bin/seatunnel.sh  -l\n")),(0,r.yg)("p",null,"more command please refer ",(0,r.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/user-command"},"user-command")),(0,r.yg)("h4",{id:"use-rest-api"},"use rest api"),(0,r.yg)("p",null,"please refer ",(0,r.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/rest-api#submit-a-job"},"Submit A Job")))}d.isMDXComponent=!0}}]);