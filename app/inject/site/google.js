let google = function () {

    let href = getParams(window.location.href);
    let continu = href.continue;
    let forwardUrl = getParams(decodeURIComponent(continu));

    // &ncr_disabled=1
    window.location.href = 'https://www.google.com/search?q=' + forwardUrl.q + '&pws=0&gl=us&gws_rd=cr';
}

//获取url中的参数
var getParams = function (url) {
    if (url === undefined || typeof (url) != 'string') {
        return null;
    }
    let items = url.split('?')[1].split('&');
    var json = {};
    for (var i = 0; i < items.length; i++) {
        var item = items[i].split('=');
        json[item[0]] = item[1];
    }
    return json;
}

export default google