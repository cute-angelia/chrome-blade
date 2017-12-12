// fuliba.net
let fuliba = function () {
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ".tl th a:visited, .tl td.fn a:visited { color:#990066; }";
    style.innerHTML += ".t_f a {color: #fff;background-color:#ff6699;padding:0 10px;}";

    document.getElementsByTagName('HEAD').item(0).appendChild(style);

    // 论坛颜色等级
    if (window.location.pathname.indexOf('forum')) {
        var fonts = document.getElementsByTagName('font');
        for (var i = 0; i < fonts.length; i++) {
            var exp = parseInt(fonts[i].innerHTML);
            if (50 < exp && exp < 200) {
                var color = fLevelColor(1);
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
                var color = fLevelColor(4);
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

                                // 创建复制按钮
                                // var btnEl;
                                // try {
                                //     btnEl = document.createElement('<button name="damon" class="btn" data-clipboard-text="' + splitStr[i3].match(/[a-zA-Z0-9]{4}/)[0] + '">复制提取码</button>');
                                // } catch (e) {}
                                // if (!btnEl) {
                                //     btnEl = document.createElement("input");
                                //     btnEl.type = "button";
                                //     btnEl.value = "复制提取码";
                                //     btnEl.setAttribute('data-clipboard-text', splitStr[i3].match(/[a-zA-Z0-9]{4}/)[0]);
                                // }

                                a.appendChild(bdnode);
                                acgDriver.insertBefore(a, acgDriver.childNodes[k]);
                                //acgDriver.insertBefore(btnEl, acgDriver.childNodes[k]);
                            }

                        }

                    }
                }
            }
        }
    }
}

let fLevelColor = function (level) {
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
};

export default fuliba;