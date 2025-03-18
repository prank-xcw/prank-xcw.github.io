(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{483:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nacos使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nacos使用"}},[s._v("#")]),s._v(" nacos使用")]),s._v(" "),a("p",[s._v("下载地址：https://github.com/alibaba/nacos/tags")]),s._v(" "),a("h2",{attrs:{id:"步骤一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤一"}},[s._v("#")]),s._v(" 步骤一")]),s._v(" "),a("p",[a("strong",[s._v("MySQL数据持久化")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("​\t新建数据库nacos")])]),s._v(" "),a("li",[a("p",[s._v("​    执行conf目录中nacos-mysql.sql文件")])]),s._v(" "),a("li",[a("p",[s._v("​    修改conf目录下"),a("code",[s._v("application.properties")]),s._v("配置文件,指定数据库")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("spring.datasource.platform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("mysql")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Count of DB:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("db.num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Connect URL of DB:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("db.url.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("jdbc:mysql://127.0.0.1:3306/nacos?characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=UTC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("db.user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("db.password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("root")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"步骤二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤二"}},[s._v("#")]),s._v(" 步骤二")]),s._v(" "),a("p",[a("strong",[s._v("启动bin目录下startup")])]),s._v(" "),a("p",[s._v("访问http://localhost:8848/nacos/进入界面")]),s._v(" "),a("p",[s._v("账号密码默认值为nacos")]),s._v(" "),a("p",[a("strong",[s._v("若出现异常：")])]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("WebServerException")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Unable")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("start")]),s._v(" embedded "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Tomcat")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("原因：")])]),s._v(" "),a("p",[s._v("startup启动文件中的启动方式；")]),s._v(" "),a("p",[s._v("默认为cluster集群方式启动的；")]),s._v(" "),a("p",[a("code",[s._v("可切换为单机方式启动，nacos支持 单机模式standalone 集群模式cluster 多集群模式")])]),s._v(" "),a("p",[a("strong",[s._v("解决方案：")])]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("startup")]),s._v("文件"),a("code",[s._v("MODE")]),s._v("属性改为"),a("code",[s._v("standalone单机模式")])]),s._v(" "),a("p",[s._v("或者cmd启动指定启动方式"),a("code",[s._v("startup.cmd -m standalone")])]),s._v(" "),a("p",[s._v("重新启动，重新访问。")])])}),[],!1,null,null,null);a.default=n.exports}}]);