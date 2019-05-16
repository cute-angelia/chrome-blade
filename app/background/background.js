chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.cmd) {
    case "hack":
      var data = request.data;
      for (var i = data.length - 1; i >= 0; i--) {
        chrome.cookies.set(
          {
            url: "http://115.com",
            domain: "115.com",
            name: data[i][0],
            value: data[i][1]
          },
          function(cookies) {}
        );
      }
      sendResponse("ok");
      break;
    case "tumblr":
      var data = request.data;
      $.ajax({
        url: "https://www.tumblr.com/settings/run_export",
        dataType: "json",
        headers: {},
        data: {
          blog_name: data
        },
        type: "POST",
        cache: false,
        success: function(data) {
          console.log(data);
        }
      });
      sendResponse("ok");
      break;
    case "setBlackList":
      storeBlackList(request.newBlockUser.trim());
      sendResponse("save success");
      break;
    case "getKey":
      var $keyName = request.keyName;
      if ($keyName == "all") {
        sendResponse({
          data_highlight: localStorage.data_highlight || 1
        });
      } else {
        sendResponse({
          $keyName: localStorage[request.keyName]
        });
      }
      break;
    case "openNewLink":
      chrome.tabs.create({
        url: request.msg
      });
  }
});

//oninstall notify
function onInstall() {}

function onUpdate() {
  //chrome.tabs.create({url: '/src/module/option/index.html'});
}

function getVersion() {
  var curDetails = chrome.app.getDetails();
  return curDetails.version;
}

//onInstall();

var curVersion = getVersion();
var preVersion = localStorage.version;
if (curVersion != preVersion) {
  if (typeof preVersion == "undefined") {
    onInstall();
  } else {
    onUpdate();
  }
  localStorage.version = curVersion;
}
