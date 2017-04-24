/**
 * inject.js
 *
 * @author: Cyw
 * @email: rose20.99.c@gmail.com
 * @created: 2015/9/1 19:41
 * @logs:
 *
 */
(function() {
    'use strict';
    var ui = {};
    var oData = {
        'localurl': window.location.href,
        'localhost': window.location.host,
        'readurl': 'http://' + window.location.host + '/read.php'
    };
    var oPage = {
        init: function() {
            this.view();
            this.listen();
        },
        view: function() {
            //Athletic Maria Pie Dominates Rossy Bush with Strap
            // 初始化数据
            this.functions.fInitInfo();
        },
        listen: function() {
            var cccc = document || document.documentElement || document.body;
            cccc.oncontextmenu = new Function('event.returnValue=true;');
            cccc.onselectstart = new Function('event.returnValue=true;');
            cccc.oncopy = new Function('event.returnValue=true;');

            // cccc.oncopy = function() {
            //     return false;
            // }
        },
        functions: {
            fInitInfo: function() {
                var self = this;
                console.log(oData.localhost);

                if (oData.localhost == "xmissy.nl") {
                    self.fCleanAdxMissy();
                }
                if (document.title.indexOf('| Skandal Artis') != -1) {
                    self.fCleanAdSkandal();
                }
                // https://rarbg.to
                if (oData.localhost == "rarbg.to") {
                    self.fCleanAdMafia();
                }
                // https://btkitty.pw
                if (oData.localhost == "btkitty.pw" || oData.localhost == "btkitty.bid") {
                    setInterval(function() {
                        $("iframe").remove();
                    }, 1000);
                }
                //
                if (oData.localhost == "1024zipai.com") {
                    setInterval(function() {
                        $(".banner").remove();
                        $("#haoetv_left").remove();
                    }, 100);
                }

                if (oData.localhost == "www.google.com") {
                    setTimeout(function() {
                        $("a").each(function() {
                            var u = $(this).attr("href")
                                //$(this).attr("href", "javascript:void();");
                            $(this).attr("target", "_blank");
                            // $(this).off("click").on("click", function() {

                            //     window.open(u);
                            // });
                        });
                    }, 1000);
                }

                if (oData.localhost == "500px.com") {
                    setInterval(function() {
                        var pic = $("img[class=photo]").attr('src');
                        $("a[class=photographer_info__user_avatar_region]").attr("href", pic);
                        $("img[class=user_avatar__avatar_image]").attr("src", pic);
                    }, 1000);
                }

                if (oData.localhost == "55po.com") {
                    setInterval(function() {
                        $("div[class=textwidget]").remove();
                    }, 1000);
                    $("div[class=content]").width('1200px');
                }

                if (oData.localhost == "javbus.com") {
                    setInterval(function() {
                        $(".bn728-100").remove();
                    }, 1000);
                }

                if (oData.localhost == "anti-toto.com") {
                    setInterval(function() {
                        $(".bn728-100").remove();
                    }, 1000);
                }

                // thz.la
                if (oData.localhost == "taohuabbs.info") {
                    setInterval(function() {
                        $("#diynavtop").remove();
                    }, 1000);
                }

                // 解读社区
                if (oData.localhost == "www.jieduclub.com") {

                }

                if (oData.localhost == "bt.gg") {
                    setInterval(function() {
                        $(".sendLx").each(function() {
                            var href = $(this).attr('href');
                            var temp = self.fParseUrl(href);
                            if (temp.params.dn == undefined) {
                                var href = $(this).attr('href') + '&dn=' + document.title;
                                $(this).attr('href', href);
                            }
                        });
                    }, 1000);
                }

                // 纯爱计划 － 二次元漫画 cosplay
                if (oData.localhost == "sexacg.com") {
                    var getp = document.getElementsByTagName('p');
                    getp[getp.length] = document.getElementsByClassName('su-quote-inner')[0];
                    for (var ai = 0; ai <= getp.length; ai++) {
                        var acgDriver = getp[ai];
                        if (!acgDriver) continue;
                        var acgChildDriver = acgDriver.childNodes;
                        for (var ci = acgChildDriver.length - 1; ci >= 0; ci--) {
                            var bdtext = acgChildDriver[ci].textContent;
                            if (bdtext) {
                                bdtext = bdtext.trim();
                                if (bdtext.indexOf('/s') != -1) {
                                    bdtext = bdtext.substring(3);
                                } else if (bdtext.indexOf('/') != -1) {
                                    bdtext = bdtext.substring(1);
                                }
                            }
                            var a = document.createElement("a");
                            if (bdtext && bdtext.split(/\s+/)[0].length == 8) {
                                var bdt2 = bdtext.split((/\s+/))[0];
                                if (bdt2.length != 8) continue;
                                if (!bdtext.split(/\s+/)[0].match(/^[a-zA-Z0-9]{0,8}$/)) continue;
                                a.setAttribute("href", "https://pan.baidu.com/s/" + bdtext.split(/\s+/)[0]);
                                a.setAttribute("target", '_blank');
                                if (a.href == "https://pan.baidu.com/s/") continue;
                                if (a.href.indexOf("Copyright") != -1) continue;
                                var bdnode = document.createTextNode("传送门    ");
                                a.appendChild(bdnode);
                                var b = document.createElement("a");
                                bdnode = document.createTextNode("提取码：" + bdtext.split(/\s+/)[1] + "\n");
                                b.appendChild(bdnode);
                                acgChildDriver[ci].data = "";
                                acgDriver.insertBefore(b, acgDriver.childNodes[ci]);
                                acgDriver.insertBefore(a, acgDriver.childNodes[ci]);
                                continue;
                            }
                            var takeacg = acgChildDriver[ci].textContent.match(/(\w{40})|(([A-Za-z0-9]{2,39})( ?)[\u4e00-\u9fa5 ]{2,}( ?)+(\w{2,37})\b)/g);
                            if (takeacg) {
                                for (var cj = 0; cj < takeacg.length; ++cj) {
                                    //console.log(takeacg[cj]);
                                    var achas = takeacg[cj].toString().replace(/(\s|[\u4e00-\u9fa5])+/g, '').trim();
                                    if (achas.length >= 40) {
                                        a.setAttribute("href", "magnet:?xt=urn:btih:" + achas);
                                        var node = document.createTextNode("老司机链接");
                                        a.appendChild(node);
                                        acgChildDriver[ci].data = "(" + acgChildDriver[ci].data.trim() + ")";
                                        acgDriver.insertBefore(a, acgChildDriver[ci]);
                                        //return;
                                    }
                                }
                            }
                        }
                    }
                }

                // 琉璃神社老司机 － 二次元漫画 cosplay
                if (oData.localhost == "www.hacg.me" || oData.localhost == "www.hacg.fi" || oData.localhost == "www.hacg.red" || oData.localhost == "www.hacg.lol" || oData.localhost == "www.hacg.li") {
                    let oldDriver = document.querySelector('.entry-content');
                    let childDriver = oldDriver.childNodes;
                    let takeMe;
                    let fuel;
                    let i;
                    let j;
                    for (i = childDriver.length - 1; i >= 0; --i) { // O(n)
                        if (takeMe = childDriver[i].textContent.match(/([a-z0-9]{40})|(\w{32})|(([a-z0-9]{8,39})( ?)[\u4e00-\u9fa5 ]{2,}( ?)+([a-z0-9]{2,31})\b)/ig)) {
                            for (j = 0; j < takeMe.length; ++j) {
                                if (takeMe[j]) {
                                    var A = document.createElement("a");
                                    var hr = document.createElement("hr");
                                    var magnet = (takeMe[j].length >= 40 ? takeMe[j].trim() : takeMe[j]);
                                    A.setAttribute("href", 'magnet:?xt=urn:btih:' + magnet.replace(/(\s|[\u4e00-\u9fa5])+/g, ''));
                                    A.appendChild(document.createTextNode("磁力链接"));
                                    //fuel = '<a href="magnet:?xt=urn:btih:' + ( takeMe[j].length >= 40 ? takeMe[j].trim() : takeMe[j] ) + '">磁力链接</a>';
                                    oldDriver.prepend(hr);
                                    oldDriver.prepend(A);
                                    oldDriver.prepend(hr);
                                }
                            }
                        }
                    }
                }

                // 福利吧
                if (oData.localhost == "www.wndflb.com") {
                    //$(".a:visited").remove();
                    var style = document.createElement('style');
                    style.type = 'text/css';
                    // visited
                    style.innerHTML = ".tl th a:visited, .tl td.fn a:visited { color:#990066; }";
                    // 找福利
                    style.innerHTML += ".t_f a {color: #fff;background-color:#ff6699;padding:0 10px;}";
                    document.getElementsByTagName('HEAD').item(0).appendChild(style);

                    // 论坛颜色等级
                    if (window.location.pathname.indexOf('forum')) {
                        var fonts = document.getElementsByTagName('font');
                        for (var i = 0; i < fonts.length; i++) {
                            var exp = parseInt(fonts[i].innerHTML);
                            if (50 < exp && exp < 200) {
                                var color = self.fLevelColor(1);
                                //fonts[i].style.color = color;
                                fonts[i].parentNode.style.backgroundColor = color;
                                fonts[i].parentNode.style.color = '#fff';
                                fonts[i].style.font = "bold 14px arial,serif";
                            }
                            // if (101 < exp && exp < 150) {
                            //     var color = self.fLevelColor(2);
                            //     fonts[i].parentNode.style.backgroundColor = color;
                            //     fonts[i].style.font = "bold 16px arial,serif";
                            // }
                            // if (151 < exp && exp < 200) {
                            //     var color = self.fLevelColor(3);
                            //     fonts[i].parentNode.style.backgroundColor = color;
                            //     fonts[i].style.font = "bold 18px arial,serif";
                            // }
                            if (201 < exp) {
                                var color = self.fLevelColor(4);
                                fonts[i].parentNode.style.backgroundColor = color;
                                fonts[i].style.font = "bold 20px arial,serif";
                            }
                        }
                    }

                    if (window.location.pathname.indexOf('thread')) {

                        // 支持百度 8位的url+空格+4位密码格式
                        var getp = document.getElementsByTagName('p');
                        for (var i = 0; i <= getp.length; i++) {
                            var acgDriver = getp[i];
                            if (!acgDriver) continue;
                            var acgChildDriver = acgDriver.childNodes;
                            if (!acgChildDriver) continue;
                            //console.log(acgChildDriver.length);
                            for (var k = acgChildDriver.length - 1; k >= 0; k--) {
                                var bdtext = acgChildDriver[k].textContent;
                                if (bdtext.match(/[a-zA-Z0-9]{4,8} [a-zA-Z0-9]{4}/g)) {
                                    // 按符号分割
                                    var splitStr = bdtext.split(/\s+/)
                                        //console.log(splitStr) // ["72期：1dFlsP3r", "qjqr", "1jHMgkNs", "6evv"]

                                    for (var i2 = 0; i2 < splitStr.length; i2++) {

                                        var a = document.createElement("a");
                                        if (splitStr[i2].length >= 8) {
                                            // console.error(splitStr[i2].match(/[a-zA-Z0-9]{8}/)[0])

                                            a.setAttribute("href", "https://pan.baidu.com/s/" + splitStr[i2].match(/[a-zA-Z0-9]{4,8}/)[0]);
                                            a.setAttribute("target", '_blank');
                                            
                                            var i3 = i2 + 1;
                                            if (splitStr[i3].length == 4) {
                                                //console.info(splitStr[i2].match(/[a-zA-Z0-9]{4}/));
                                                var bdnode = document.createTextNode("提取码：" + splitStr[i3].match(/[a-zA-Z0-9]{4}/)[0] + "\n");
                                                a.appendChild(bdnode);

                                                acgDriver.insertBefore(a, acgDriver.childNodes[k]);
                                            }

                                        }

                                    }
                                }
                            }
                        }

                        // a.setAttribute("href", "https://pan.baidu.com/s/" + bdtext.split(/\s+/)[0]);
                        // a.setAttribute("target", '_blank');
                        // if (a.href == "https://pan.baidu.com/s/") continue;
                        // if (a.href.indexOf("Copyright") != -1) continue;
                        // var bdnode = document.createTextNode("传送门    ");
                        // a.appendChild(bdnode);
                        // var b = document.createElement("a");
                        // bdnode = document.createTextNode("提取码：" + bdtext.split(/\s+/)[1] + "\n");
                        // b.appendChild(bdnode);
                        // acgChildDriver[ci].data = "";
                        // acgDriver.insertBefore(b, acgDriver.childNodes[ci]);
                        // acgDriver.insertBefore(a, acgDriver.childNodes[ci]);
                        // continue;

                        //         //     acgChildDriver[ci].data = "";
                        //         //     acgDriver.insertBefore(b, acgDriver.childNodes[ci]);
                        //         //     acgDriver.insertBefore(a, acgDriver.childNodes[ci]);
                        //         //     continue;
                        //         // }

                    }
                }
            },
            fCleanAdxMissy: function() {
                $('.noclick-small-banner, .sinclubbar, .noclick-large-banner').remove();
                $('#loadallbutton').click();
                $('#block-comments, #block-toolbar, #histats_counter, center').remove();
                $(".coffee-1380-span-8").removeClass('coffee-1380-span-8').addClass('coffee-1380-span-12');
                $("#footer").remove();
            },
            fCleanAdSkandal: function() {
                    setInterval(function() {
                        $('#btm_banner').remove();
                        $("[title$='Online']").remove();
                    }, 1000);
                }
                // 磁力title
                ,
            fCleanAdMafia: function() {
                    $("[href^='magnet']").html("磁力链接");
                }
                // 热度颜色
                ,
            fLevelColor: function(level) {
                var color = '';
                switch (level) {
                    case 1: // 蓝色
                        color = '#58B2DC';
                        break;
                    case 2:
                        color = '#86A697';
                        break;
                    case 3: // 粉色
                        color = '#F8C3CD';
                        break;
                    case 4: // 橙色
                        color = '#F17C67';
                        break;
                }
                return color;
            },
            // 磁力下载
            fAddBox: function() {
                var oD_box = document.createElement("div");
                oD_box.style.zindex = "999999";
                oD_box.id = "oD_box";
                oD_box.style = "position:fixed;top:10px;right:10px;  width:210px;";
                var oD_text = document.createElement("input");
                oD_text.id = "oD_text";
                oD_text.type = "text";
                oD_text.placeholder = "输入神秘代码";
                oD_text.title = '如果点击下载种子无法下载，请用下载工具下载磁力链接';
                var oD_button = document.createElement("button");
                oD_button.id = "oD_button";
                oD_button.type = "button";
                oD_button.textContent = "转换";
                oD_button.style = "padding:4px 0;  position: relative;  top:-1px";
                oD_button.onclick = function() {
                    var oD_hash = oD_text.value.replace(/(\[.*\])|[\W_]/g, "");
                    if (oD_hash === "") {
                        alert("请先输入hash!");
                        oD_link.href = "javascript:alert('请输入hash并点击转换按钮!')";
                        oD_link.textContent = "\n磁力链接";
                        oD_link2.href = "javascript:alert('请输入hash并点击转换按钮!')";
                        oD_link2.textContent = "下载种子";
                        return;
                    } else {
                        oD_link.href = "magnet:?xt=urn:btih:" + oD_hash;
                        oD_link.textContent = "\n磁力链接";
                        oD_link2.href = "http://www.torrent.org.cn/Home/torrent/download.html?hash=" + oD_hash;
                        oD_link2.textContent = "下载种子";
                        oD_link2.style = "margin-left:20px";
                    }
                };
                var oD_link = document.createElement("a");
                var oD_link2 = document.createElement("a");
                oD_link.href = "javascript:alert('请输入hash并点击转换按钮!')";
                oD_link.textContent = "\n磁力链接";
                oD_link2.href = "javascript:alert('请输入hash并点击转换按钮!')";
                oD_link2.textContent = "下载种子";
                oD_link2.style = "margin-left:20px";
                oD_link2.target = "_blank";
                oD_box.appendChild(oD_text);
                oD_box.appendChild(oD_button);
                oD_box.appendChild(oD_link);
                oD_box.appendChild(oD_link2);
                document.body.appendChild(oD_box);
            },
            fParseUrl: function(url) {
                var a = document.createElement('a');
                a.href = url;
                return {
                    source: url,
                    protocol: a.protocol.replace(':', ''),
                    host: a.hostname,
                    port: a.port,
                    query: a.search,
                    params: (function() {
                        var ret = {},
                            seg = a.search.replace(/^\?/, '').split('&'),
                            len = seg.length,
                            i = 0,
                            s;
                        for (; i < len; i++) {
                            if (!seg[i]) {
                                continue;
                            }
                            s = seg[i].split('=');
                            ret[s[0]] = s[1];
                        }
                        return ret;
                    })(),
                    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
                    hash: a.hash.replace('#', ''),
                    path: a.pathname.replace(/^([^\/])/, '/$1'),
                    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
                    segments: a.pathname.replace(/^\//, '').split('/')
                };
            }
        }
    };
    oPage.init();

})();