"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[82397],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var l=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?l.createElement(g,r(r({ref:n},p),{},{components:t})):l.createElement(g,r({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=t[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=t(58168),a=(t(96540),t(15680));const o={},r="Set Up Develop Environment",i={unversionedId:"contribution/setup",id:"version-2.3.5/contribution/setup",title:"Set Up Develop Environment",description:"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple",source:"@site/versioned_docs/version-2.3.5/contribution/setup.md",sourceDirName:"contribution",slug:"/contribution/setup",permalink:"/docs/2.3.5/contribution/setup",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.5/contribution/setup.md",tags:[],version:"2.3.5",frontMatter:{},sidebar:"docs",previous:{title:"spark",permalink:"/docs/2.3.5/other-engine/spark"},next:{title:"How To Add New License",permalink:"/docs/2.3.5/contribution/new-license"}},s={},u=[{value:"Prepare",id:"prepare",level:2},{value:"Set Up",id:"set-up",level:2},{value:"Clone the Source Code",id:"clone-the-source-code",level:3},{value:"Install Subproject Locally",id:"install-subproject-locally",level:3},{value:"Building seaTunnel from source",id:"building-seatunnel-from-source",level:3},{value:"Building sub module",id:"building-sub-module",level:3},{value:"Install JetBrains IDEA Scala Plugin",id:"install-jetbrains-idea-scala-plugin",level:3},{value:"Install JetBrains IDEA Lombok Plugin",id:"install-jetbrains-idea-lombok-plugin",level:3},{value:"Code Style",id:"code-style",level:3},{value:"Run Simple Example",id:"run-simple-example",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,l.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"set-up-develop-environment"},"Set Up Develop Environment"),(0,a.yg)("p",null,"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple\nexample in your JetBrains IntelliJ IDEA."),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"You can develop or test SeaTunnel code in any development environment that you like, but here we use\n",(0,a.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," as an example to teach you to step by step environment.")),(0,a.yg)("h2",{id:"prepare"},"Prepare"),(0,a.yg)("p",null,"Before we start talking about how to set up the environment, we need to do some preparation work. Make sure you already\nhave installed the following software:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git")," installed."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," ( JDK8/JDK11 are supported by now) installed and ",(0,a.yg)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.scala-lang.org/download/2.11.12.html"},"Scala")," (only scala 2.11.12 supported by now) installed."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," installed.")),(0,a.yg)("h2",{id:"set-up"},"Set Up"),(0,a.yg)("h3",{id:"clone-the-source-code"},"Clone the Source Code"),(0,a.yg)("p",null,"First of all, you need to clone the SeaTunnel source code from ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel"},"GitHub"),"."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/seatunnel.git\n")),(0,a.yg)("h3",{id:"install-subproject-locally"},"Install Subproject Locally"),(0,a.yg)("p",null,"After cloning the source code, you should run the ",(0,a.yg)("inlineCode",{parentName:"p"},"./mvnw")," command to install the subproject to the maven local repository.\nOtherwise, your code could not start in JetBrains IntelliJ IDEA correctly."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./mvnw install -Dmaven.test.skip\n")),(0,a.yg)("h3",{id:"building-seatunnel-from-source"},"Building seaTunnel from source"),(0,a.yg)("p",null,"After you install the maven, you can use the follow command to compile and package."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mvn clean package -pl seatunnel-dist -am -Dmaven.test.skip=true\n")),(0,a.yg)("h3",{id:"building-sub-module"},"Building sub module"),(0,a.yg)("p",null,"If you want to build submodules separately,you can use the follow command to compile and package."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-ssh"},"# This is an example of building the redis connector separately\n\n mvn clean package -pl seatunnel-connectors-v2/connector-redis -am -DskipTests -T 1C\n")),(0,a.yg)("h3",{id:"install-jetbrains-idea-scala-plugin"},"Install JetBrains IDEA Scala Plugin"),(0,a.yg)("p",null,"Now, you can open your JetBrains IntelliJ IDEA and explore the source code, but allow building Scala code in IDEA,\nyou should also install JetBrains IntelliJ IDEA's ",(0,a.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1347-scala"},"Scala plugin"),".\nSee ",(0,a.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,a.yg)("h3",{id:"install-jetbrains-idea-lombok-plugin"},"Install JetBrains IDEA Lombok Plugin"),(0,a.yg)("p",null,"Before running the following example, you should also install JetBrains IntelliJ IDEA's ",(0,a.yg)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"Lombok plugin"),".\nSee ",(0,a.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,a.yg)("h3",{id:"code-style"},"Code Style"),(0,a.yg)("p",null,"Apache SeaTunnel uses ",(0,a.yg)("inlineCode",{parentName:"p"},"Spotless")," for code style and formatting checks. You could run the following command and ",(0,a.yg)("inlineCode",{parentName:"p"},"Spotless")," will automatically fix the code style and formatting errors for you:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"./mvnw spotless:apply\n")),(0,a.yg)("p",null,"You could copy the ",(0,a.yg)("inlineCode",{parentName:"p"},"pre-commit hook")," file ",(0,a.yg)("inlineCode",{parentName:"p"},"/tools/spotless_check/pre-commit.sh")," to your ",(0,a.yg)("inlineCode",{parentName:"p"},".git/hooks/")," directory so that every time you commit your code with ",(0,a.yg)("inlineCode",{parentName:"p"},"git commit"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"Spotless")," will automatically fix things for you."),(0,a.yg)("h2",{id:"run-simple-example"},"Run Simple Example"),(0,a.yg)("p",null,"After all the above things are done, you just finish the environment setup and can run an example we provide to you out\nof box. All examples are in module ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-examples"),", you could pick one you are interested in, ",(0,a.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configuration.html"},"running or debugging\nit in IDEA")," as you wish."),(0,a.yg)("p",null,"Here we use ",(0,a.yg)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-flink-connector-v2-example/src/main/java/org/apache/seatunnel/example/flink/v2/SeaTunnelApiExample.java"),"\nas an example, when you run it successfully you could see the output as below:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-log"},"+I[Ricky Huo, 71]\n+I[Gary, 12]\n+I[Ricky Huo, 93]\n...\n...\n+I[Ricky Huo, 83]\n")),(0,a.yg)("h2",{id:"whats-more"},"What's More"),(0,a.yg)("p",null,"All our examples use simple source and sink to make it less dependent and easy to run. You can change the example configuration\nin ",(0,a.yg)("inlineCode",{parentName:"p"},"resources/examples"),". You could change your configuration as below, if you want to use PostgreSQL as the source and\nsink to console."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-conf"},'env {\n  parallelism = 1\n}\n\nsource {\n  JdbcSource {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://host:port/database"\n    username = postgres\n    query = "select * from test"\n  }\n}\n\nsink {\n  ConsoleSink {}\n}\n')))}m.isMDXComponent=!0}}]);