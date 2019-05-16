$(document).ready(function() {
  $("#iok")
    .off("click")
    .on("click", function() {
      var text = $("#areatext").val();

      var temp = [];
      var strs = text.split(";");
      for (var i = 0; i < strs.length; i++) {
        var then = strs[i];
        var values = then.split("=");
        values[0] = $.trim(values[0]);

        if (values.length > 1) {
          temp.push(values);
        }
      }

      chrome.extension.sendMessage(
        {
          cmd: "hack",
          data: temp
        },
        function(response) {
          if (response == "ok") {
            alert("ok");
          }
          console.info("hack to backgroud", response);
        }
      );
    });

  $("#itumblr")
    .off("click")
    .on("click", function() {
      var text = $("#areatext").val();
      chrome.extension.sendMessage(
        {
          cmd: "tumblr",
          data: text
        },
        function(response) {
          if (response == "ok") {
            alert("ok");
          }
          console.info("hack to backgroud", response);
        }
      );
    });

  //var str = "tjj_repeat=1; PHPSESSID=0lcidqjph87k0nah5pcgrofgi3; tjj_id=14896326400097221605; tjj_u=1; OOFL=84719890; SEID=fce6cd838524078c665086d6985c840e3d751871b8a0a681a7ee5da7ee10300d8f9f996b047443f194d1344a2b631858881daad7ad00bf3438856250; CID=726834c6371cac39ebf453a33984430e; UID=84719890_A1_1489632642; ssov_84719890=1_84719890_d339436f639af873d8a755256a055ef1; payment=weixin_ntv; tjj_repeat=1;"
  // var temp = [];
  // var strs = str.split(";");
  // for (i = 0; i < strs.length; i++) {
  // 	var then = strs[i];
  // 	values = then.split("=");
  // 	values[0] = $.trim(values[0]);

  // 	if (values.length > 1) {
  // 		temp.push(values);
  // 	}
  // }
  // console.log(temp);
});
