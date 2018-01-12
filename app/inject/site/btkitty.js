let func = function () {
    $("iframe").remove();

    let path = window.location.pathname.substr(1);

    if (path.indexOf('search') != 0) {
        document.getElementById("kwd").value = window.location.pathname.substr(1);
        document.forms[0].submit();
    }
}

export default func;