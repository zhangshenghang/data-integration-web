"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26956],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>c});var a=t(96540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),m=u(t),y=l,c=m["".concat(p,".").concat(y)]||m[y]||s[y]||r;return t?a.createElement(c,i(i({ref:n},g),{},{components:t})):a.createElement(c,i({ref:n},g))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=y;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},16281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(58168),l=(t(96540),t(15680));const r={},i="DynamicCompile",o={unversionedId:"transform-v2/dynamic-compile",id:"transform-v2/dynamic-compile",title:"DynamicCompile",description:"DynamicCompile transform plugin",source:"@site/docs/transform-v2/dynamic-compile.md",sourceDirName:"transform-v2",slug:"/transform-v2/dynamic-compile",permalink:"/docs/transform-v2/dynamic-compile",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/transform-v2/dynamic-compile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Copy",permalink:"/docs/transform-v2/copy"},next:{title:"Embedding",permalink:"/docs/transform-v2/embedding"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"common options string",id:"common-options-string",level:3},{value:"compile_language Enum",id:"compile_language-enum",level:3},{value:"compile_pattern Enum",id:"compile_pattern-enum",level:3},{value:"absolute_path string",id:"absolute_path-string",level:3},{value:"source_code string",id:"source_code-string",level:3},{value:"Details about the source code",id:"details-about-the-source-code",level:4},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2}],g={toc:u},m="wrapper";function s(e){let{components:n,...t}=e;return(0,l.yg)(m,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"dynamiccompile"},"DynamicCompile"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"DynamicCompile transform plugin")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("admonition",{type:"tip"},(0,l.yg)("p",{parentName:"admonition"},"important clause\nYou need to ensure the security of your service and prevent attackers from uploading destructive code")),(0,l.yg)("p",null,"Provide a programmable way to process rows, allowing users to customize any business behavior, even RPC requests based on existing row fields as parameters, or to expand fields by retrieving associated data from other data sources. To distinguish businesses, you can also define multiple transforms to combine,\nIf the conversion is too complex, it may affect performance"),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"source_code"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compile_language"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null})),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"compile_pattern"),(0,l.yg)("td",{parentName:"tr",align:null},"Enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"SOURCE_CODE")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"absolute_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null})))),(0,l.yg)("h3",{id:"common-options-string"},"common options ","[string]"),(0,l.yg)("p",null,"Transform plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/transform-v2/common-options"},"Transform Plugin")," for details"),(0,l.yg)("h3",{id:"compile_language-enum"},"compile_language ","[Enum]"),(0,l.yg)("p",null,"Some syntax in Java may not be supported, please refer ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/janino-compiler/janino"},"https://github.com/janino-compiler/janino"),"\nGROOVY,JAVA"),(0,l.yg)("h3",{id:"compile_pattern-enum"},"compile_pattern ","[Enum]"),(0,l.yg)("p",null,"SOURCE_CODE,ABSOLUTE_PATH\nIf it is a SOURCE-CODE enumeration; the SOURCE-CODE attribute is required, and the ABSOLUTE_PATH enumeration;ABSOLUTE_PATH attribute is required"),(0,l.yg)("h3",{id:"absolute_path-string"},"absolute_path ","[string]"),(0,l.yg)("p",null,"The absolute path of Java or Groovy files on the server"),(0,l.yg)("h3",{id:"source_code-string"},"source_code ","[string]"),(0,l.yg)("p",null,"The source code."),(0,l.yg)("h4",{id:"details-about-the-source-code"},"Details about the source code"),(0,l.yg)("p",null,"In the source code, you must implement two method:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Column[] getInlineOutputColumns(CatalogTable inputCatalogTable)"),"  "),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow)"))),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"getInlineOutputColumns")," method, input parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"CatalogTable"),", return type is ",(0,l.yg)("inlineCode",{parentName:"p"},"Column[]"),".",(0,l.yg)("br",{parentName:"p"}),"\n","you can get the current table's schema from ",(0,l.yg)("inlineCode",{parentName:"p"},"CatalogTable"),".",(0,l.yg)("br",{parentName:"p"}),"\n","if the return column exist in current schema, then it will overwrite by returned value (field type, comment, ...), if it's a new column, it will add into current schema."),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"getInlineOutputFieldValues")," method, input parameter is ",(0,l.yg)("inlineCode",{parentName:"p"},"SeaTunnelRowAccessor"),", return type is ",(0,l.yg)("inlineCode",{parentName:"p"},"Object[]"),"\nYou can get the record from ",(0,l.yg)("inlineCode",{parentName:"p"},"SeaTunnelRowAccessor"),", do you own customized data process logical.",(0,l.yg)("br",{parentName:"p"}),"\n","The return ",(0,l.yg)("inlineCode",{parentName:"p"},"Object[]")," array length should match with ",(0,l.yg)("inlineCode",{parentName:"p"},"getInlineOutputColumns")," method result's length. and the order also need be match.   "),(0,l.yg)("p",null,"If there are third-party dependency packages, please place them in ${SEATUNNEL_HOME}/lib, if you use spark or flink, you need to put it under the libs of the corresponding service.\nYou need restart the server to load the lib file."),(0,l.yg)("h2",{id:"example"},"Example"),(0,l.yg)("p",null,"The data read from source is a table like this:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"20"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123")))),(0,l.yg)("p",null,"Use this DynamicCompile to add a new column ",(0,l.yg)("inlineCode",{parentName:"p"},"compile_language"),", and update the ",(0,l.yg)("inlineCode",{parentName:"p"},"age")," field by its original value (if age = 20, update to 40)"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"use groovy")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hacon"},'transform {\n DynamicCompile {\n    plugin_input = "fake"\n    plugin_output = "groovy_out"\n    compile_language="GROOVY"\n    compile_pattern="SOURCE_CODE"\n    source_code="""\n                 import org.apache.seatunnel.api.table.catalog.Column\n                 import org.apache.seatunnel.api.table.type.SeaTunnelRowAccessor\n                 import org.apache.seatunnel.api.table.catalog.CatalogTable\n                 import org.apache.seatunnel.api.table.catalog.PhysicalColumn;\n                 import org.apache.seatunnel.api.table.type.*;\n                 import java.util.ArrayList;\n                 class demo  {\n                    public Column[] getInlineOutputColumns(CatalogTable inputCatalogTable) {\n                        PhysicalColumn col1 =\n                                PhysicalColumn.of(\n                                        "compile_language",\n                                        BasicType.STRING_TYPE,\n                                        10L,\n                                        true,\n                                        "",\n                                        "");\n                        PhysicalColumn col2 =\n                                PhysicalColumn.of(\n                                        "age",\n                                        BasicType.INT_TYPE,\n                                        0L,\n                                        false,\n                                        false,\n                                        ""\n                                );\n                        return new Column[]{\n                                col1, col2\n                        };\n                    }\n                \n                \n                    public Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow) {\n                        Object[] fieldValues = new Object[2];\n                        // get age \n                        Object ageField = inputRow.getField(1);\n                        fieldValues[0] = "GROOVY";\n                        if (Integer.parseInt(ageField.toString()) == 20) {\n                            fieldValues[1] = 40;\n                        } else {\n                            fieldValues[1] = ageField;\n                        }\n                        return fieldValues;\n                    }\n                 };"""\n\n  }\n}\n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"use java ")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hacon"},'transform {\n DynamicCompile {\n    plugin_input = "fake"\n    plugin_output = "java_out"\n    compile_language="JAVA"\n    compile_pattern="SOURCE_CODE"\n    source_code="""\n                 import org.apache.seatunnel.api.table.catalog.Column;\n                 import org.apache.seatunnel.api.table.type.SeaTunnelRowAccessor;\n                 import org.apache.seatunnel.api.table.catalog.*;\n                 import org.apache.seatunnel.api.table.type.*;\n                 import java.util.ArrayList;\n                    public Column[] getInlineOutputColumns(CatalogTable inputCatalogTable) {\n                        PhysicalColumn col1 =\n                                PhysicalColumn.of(\n                                        "compile_language",\n                                        BasicType.STRING_TYPE,\n                                        10L,\n                                        true,\n                                        "",\n                                        "");\n                        PhysicalColumn col2 =\n                                PhysicalColumn.of(\n                                        "age",\n                                        BasicType.INT_TYPE,\n                                        0L,\n                                        false,\n                                        false,\n                                        ""\n                                );\n                        return new Column[]{\n                                col1, col2\n                        };\n                    }\n                \n                \n                    public Object[] getInlineOutputFieldValues(SeaTunnelRowAccessor inputRow) {\n                        Object[] fieldValues = new Object[2];\n                        // get age \n                        Object ageField = inputRow.getField(1);\n                        fieldValues[0] = "JAVA";\n                        if (Integer.parseInt(ageField.toString()) == 20) {\n                            fieldValues[1] = 40;\n                        } else {\n                            fieldValues[1] = ageField;\n                        }\n                        return fieldValues;\n                    }\n                """\n\n  }\n } \n')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"use absolute path to read code")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hacon"},' transform {\n DynamicCompile {\n    plugin_input = "fake"\n    plugin_output = "groovy_out"\n    compile_language="GROOVY"\n    compile_pattern="ABSOLUTE_PATH"\n    absolute_path="""/tmp/GroovyFile"""\n\n  }\n}\n')),(0,l.yg)("p",null,"Then the data in result table ",(0,l.yg)("inlineCode",{parentName:"p"},"groovy_out")," will like this"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"),(0,l.yg)("th",{parentName:"tr",align:null},"compile_language"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"GROOVY")))),(0,l.yg)("p",null,"Then the data in result table ",(0,l.yg)("inlineCode",{parentName:"p"},"java_out")," will like this"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"age"),(0,l.yg)("th",{parentName:"tr",align:null},"card"),(0,l.yg)("th",{parentName:"tr",align:null},"compile_language"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"May Ding"),(0,l.yg)("td",{parentName:"tr",align:null},"40"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Kin Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Joy Dom"),(0,l.yg)("td",{parentName:"tr",align:null},"30"),(0,l.yg)("td",{parentName:"tr",align:null},"123"),(0,l.yg)("td",{parentName:"tr",align:null},"JAVA")))),(0,l.yg)("p",null,"More complex examples can be referred to\n",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/seatunnel/tree/dev/seatunnel-e2e/seatunnel-transforms-v2-e2e/seatunnel-transforms-v2-e2e-part-2/src/test/resources/dynamic_compile/conf"},"https://github.com/apache/seatunnel/tree/dev/seatunnel-e2e/seatunnel-transforms-v2-e2e/seatunnel-transforms-v2-e2e-part-2/src/test/resources/dynamic_compile/conf")),(0,l.yg)("h2",{id:"changelog"},"Changelog"))}s.isMDXComponent=!0}}]);