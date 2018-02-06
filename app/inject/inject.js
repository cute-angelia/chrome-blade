/**
 * inject.js
 *
 * @author: Cyw
 * @email: rose20.99.c@gmail.com
 * @created: 2015/9/1 19:41
 * @logs:
 *
 */

import fuliba from './site/fuliba';
import xmissy from './site/xmissy';
import btkitty from './site/btkitty';

var $ = require('jquery');

(function () {
    'use strict';
    var ui = {};
    var oData = {
        'localurl': window.location.href,
        'localhost': window.location.host,
        'readurl': 'http://' + window.location.host + '/read.php'
    };
    var oPage = {
        init: function () {
            this.view();
            this.listen();
        },
        view: function () {
            //Athletic Maria Pie Dominates Rossy Bush with Strap
            // 初始化数据
            this.functions.fInitInfo();
        },
        listen: function () {
            var cccc = document || document.documentElement || document.body;
            cccc.oncontextmenu = new Function('event.returnValue=true;');
            cccc.onselectstart = new Function('event.returnValue=true;');
            cccc.oncopy = new Function('event.returnValue=true;');
            // cccc.oncopy = function() {
            //     return false;
            // }
        },
        functions: {
            fInitInfo: function () {
                var self = this;
                console.log(oData.localhost, "Laosiji");

                if (oData.localhost == "xmissy.nl") {
                    let myInterval = setInterval(function () {
                        xmissy();
                        // 清理定时器
                        setTimeout(function () {
                            clearInterval(myInterval)
                        }, 10000);
                    }, 1000);
                }
                if (document.title.indexOf('| Skandal Artis') != -1) {
                    self.fCleanAdSkandal();
                }
                // https://rarbg.to
                if (oData.localhost == "rarbg.to") {
                    self.fCleanAdMafia();
                }
                // https://btkitty.pw
                if (oData.localhost == "btkitty.pw"
                    || oData.localhost == "btkitty.bid"
                    || oData.localhost == "cnbtkitty.com"
                ) {
                    // let myInterval = setInterval(function () {
                    //     btkitty();
                    //     // 清理定时器
                    //     setTimeout(function () {
                    //         clearInterval(myInterval)
                    //     }, 10000);
                    // }, 1000);
                }
                //
                if (oData.localhost == "1024zipai.com") {
                    setInterval(function () {
                        $(".banner").remove();
                        $("#haoetv_left").remove();
                    }, 100);
                }

                if (oData.localhost == "pan.baidu.com") {
                    setInterval(function () {
                        console.log(window.yunData);
                    }, 1000);
                }

                if (oData.localhost == "www.google.com") {
                    setTimeout(function () {
                        $("a").each(function () {
                            var u = $(this).attr("href")
                            $(this).attr("target", "_blank");
                        });
                    }, 1000);
                }

                if (oData.localhost == "500px.com") {
                    setInterval(function () {
                        var pic = $("img[class=photo]").attr('src');
                        $("a[class=photographer_info__user_avatar_region]").attr("href", pic);
                        $("img[class=user_avatar__avatar_image]").attr("src", pic);
                    }, 1000);
                }

                if (oData.localhost == "jieduclub.com") {
                    setInterval(function () {
                        var csdn123_obj1 = function () {
                            return false;
                        };
                    }, 1000);
                }

                if (oData.localhost == "55po.com") {
                    setInterval(function () {
                        $("div[class=textwidget]").remove();
                    }, 1000);
                    $("div[class=content]").width('1200px');
                }

                if (oData.localhost == "javbus.com") {
                    setInterval(function () {
                        $(".bn728-100").remove();
                    }, 1000);
                }

                if (oData.localhost == "anti-toto.com") {
                    setInterval(function () {
                        $(".bn728-100").remove();
                    }, 1000);
                }

                // thz.la
                if (oData.localhost == "taohuabbs.info") {
                    setInterval(function () {
                        $("#diynavtop").remove();
                    }, 1000);
                }

                // 解读社区
                if (oData.localhost == "www.jieduclub.com") {

                }

                if (oData.localhost.indexOf('tumblr.com') > 0) {
                    document.onkeydown = function () {
                        if (event.keyCode == 113) { //F2
                            window.location.href = '//' + oData.localhost + '/archive'
                        }
                    };
                }

                // twitter.com
                if (oData.localhost == "twitter.com") {
                    setInterval(function () {
                        $(".GalleryNav--prev").width("15%");
                        $("GalleryTweet").style({ 'bottom': '250px;' });
                    }, 1000);
                }

                if (oData.localhost == "bt.gg") {
                    setInterval(function () {
                        $(".sendLx").each(function () {
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
                if (oData.localhost == "www.wndflb.com" || oData.localhost == "www.wnflb.com") {
                    let myInterval = setInterval(function () {
                        fuliba();
                        // 清理定时器
                        setTimeout(function () {
                            clearInterval(myInterval)
                        }, 10000);
                    }, 1000);
                }
            },
            fCleanAdSkandal: function () {
                setInterval(function () {
                    $('#btm_banner').remove();
                    $("[title$='Online']").remove();
                }, 1000);
            }
            // 磁力title
            ,
            fCleanAdMafia: function () {
                $("[href^='magnet']").html("磁力链接");
            },
            // 磁力下载
            fAddBox: function () {
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
                oD_button.onclick = function () {
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
            fParseUrl: function (url) {
                var a = document.createElement('a');
                a.href = url;
                return {
                    source: url,
                    protocol: a.protocol.replace(':', ''),
                    host: a.hostname,
                    port: a.port,
                    query: a.search,
                    params: (function () {
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
