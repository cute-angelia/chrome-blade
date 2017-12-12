chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.cmd) {
    case 'hack':
      var data = request.data;
      for (var i = data.length - 1; i >= 0; i--) {
        chrome.cookies.set({
          "url": "http://115.com",
          "domain": "115.com",
          "name": data[i][0],
          "value": data[i][1],
        }, function(cookies) {});
      }
      sendResponse('ok');
      break;
    case 'setBlackList':
      storeBlackList(request.newBlockUser.trim());
      sendResponse('save success');
      break;
    case 'getKey':
      var $keyName = request.keyName;
      if ($keyName == 'all') {
        sendResponse({
          data_highlight: localStorage.data_highlight || 1,
        });
      } else {
        sendResponse({
          $keyName: localStorage[request.keyName]
        });
      }
      break;
    case 'openNewLink':
      chrome.tabs.create({
        url: request.msg
      });
  }
});

chrome.tabs.onUpdated.addListener(function(tabId, info, tab) {
  var u = info.url;
  if (u) {
    if (u.indexOf('http://www.viidii.info/') === 0) {
      chrome.tabs.remove(tabId);
    } else if (u.indexOf('link.php') != -1) {
      chrome.tabs.executeScript(tabId, {
        code: ' setTimeout(function(){$("input[type=\'submit\']").click();$("#outborder").remove();$("#outborder").remove();},1000);'
      });
    }

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