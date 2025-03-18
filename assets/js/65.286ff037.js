(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{493:function(s,a,n){"use strict";n.r(a);var t=n(2),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装所需环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装所需环境"}},[s._v("#")]),s._v(" 安装所需环境")]),s._v(" "),a("p",[s._v("Nginx 是 C语言 开发，建议在 Linux 上运行，当然，也可以安装 Windows 版本，本篇则使用 "),a("a",{attrs:{href:"http://www.linuxidc.com/topicnews.aspx?tid=14",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOS"),a("OutboundLink")],1),s._v(" 7 作为安装环境。")]),s._v(" "),a("p",[a("strong",[s._v("一. gcc 安装")]),s._v("\n安装 nginx 需要先将官网下载的源码进行编译，编译依赖 gcc 环境，如果没有 gcc 环境，则需要安装：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("二. PCRE pcre-devel 安装")]),s._v("\nPCRE(Perl Compatible Regular Expressions) 是一个Perl库，包括 perl 兼容的正则表达式库。nginx 的 http 模块使用 pcre 来解析正则表达式，所以需要在 linux 上安装 pcre 库，pcre-devel 是使用 pcre 开发的一个二次开发库。nginx也需要此库。命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" pcre pcre-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("三. zlib 安装")]),s._v("\nzlib 库提供了很多种压缩和解压缩的方式， nginx 使用 zlib 对 http 包的内容进行 gzip ，所以需要在 Centos 上安装 zlib 库。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" zlib zlib-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("四. OpenSSL 安装")]),s._v("\nOpenSSL 是一个强大的安全套接字层密码库，囊括主要的密码算法、常用的密钥和证书封装管理功能及 SSL 协议，并提供丰富的应用程序供测试或其它目的使用。\nnginx 不仅支持 http 协议，还支持 https（即在ssl协议上传输http），所以需要在 Centos 安装 OpenSSL 库。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" openssl openssl-devel\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装Nginx")]),s._v(" "),a("ol",[a("li",[s._v("官网下载压缩包：http://nginx.org/en/download.html"),a("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20210421094236874.png",alt:"image-20210421094236874"}})]),s._v(" "),a("li",[s._v("使用"),a("code",[s._v("wget")]),s._v("命令下载（推荐）。确保系统已经安装了wget，如果没有安装，执行 yum install wget 安装。")])]),s._v(" "),a("div",{staticClass:"language-s line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#网络下载\nwget -c http://nginx.org/download/nginx-1.20.0.tar.gz\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"解压nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压nginx"}},[s._v("#")]),s._v(" 解压Nginx")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" nginx-1.20.0.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.20.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[s._v("#")]),s._v(" 配置Nginx")]),s._v(" "),a("p",[s._v("方式一：使用默认配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./configure\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("方式二：自定义配置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("./configure \\\n--prefix=/usr/local/nginx \\\n--conf-path=/usr/local/nginx/conf/nginx.conf \\\n--pid-path=/usr/local/nginx/conf/nginx.pid \\\n--lock-path=/var/lock/nginx.lock \\\n--error-log-path=/var/log/nginx/error.log \\\n--http-log-path=/var/log/nginx/access.log \\\n--with-http_gzip_static_module \\\n--http-client-body-temp-path=/var/temp/nginx/client \\\n--http-proxy-temp-path=/var/temp/nginx/proxy \\\n--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\\n--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\\n--http-scgi-temp-path=/var/temp/nginx/scgi\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("blockquote",[a("p",[s._v("注：将临时文件目录指定为/var/temp/nginx，需要在/var下创建temp及nginx目录")])]),s._v(" "),a("h2",{attrs:{id:"编译nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译nginx"}},[s._v("#")]),s._v(" 编译Nginx")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("make\nmake install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查找安装路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20210421110806636.png",alt:"image-20210421110806636"}})]),s._v(" "),a("h2",{attrs:{id:"启动、停止"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动、停止"}},[s._v("#")]),s._v(" 启动、停止")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/nginx/sbin/\n./nginx\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动")]),s._v("\n./nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" /usr/local/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定配置文件启动")]),s._v("\n./nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看版本")]),s._v("\n./nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试conf文件语法是否正确")]),s._v("\n./nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" stop\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止服务")]),s._v("\n./nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" quit\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#优雅的关闭服务")]),s._v("\n./nginx "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" reload\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启服务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查询nginx进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"nginx配置文件高亮提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置文件高亮提示"}},[s._v("#")]),s._v(" Nginx配置文件高亮提示")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入nginx压缩包文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /app/nginx-1.20.0/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入contrib/vim/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" contrib/vim/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#复制所有文件到 /usr/share/vim/vimfiles/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" ./* /usr/share/vim/vimfiles/\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/prank-xcw/images/master/imgs/image-20210421114521303.png",alt:"image-20210421114521303"}})]),s._v(" "),a("p",[s._v("参考链接： https://www.cnblogs.com/liujuncm5/p/6713784.html")])])}),[],!1,null,null,null);a.default=e.exports}}]);