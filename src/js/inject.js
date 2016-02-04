/**
 * inject.js
 *
 * @author: Cyw
 * @email: rose1988.c@gmail.com
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
      },
      functions: {
        fInitInfo: function() {
          var self = this;
          console.log(oData.localhost);

          if ( oData.localhost == "xmissy.nl") {
            self.fCleanAdxMissy();
          }
          if (document.title.indexOf('| Skandal Artis') != -1) {
            self.fCleanAdSkandal();
          }
          // https://rarbg.to
          if ( oData.localhost == "rarbg.to" ) {
            self.fCleanAdMafia();
          }
          // https://btkitty.pw
          if ( oData.localhost == "btkitty.pw" ) {
            setInterval(function(){
              $("iframe").remove();
            }, 1000);
          }
          //
          if ( oData.localhost == "1024zipai.com" ) {
            setInterval(function(){
              $(".banner").remove();
              $("#haoetv_left").remove();
            }, 100);
          }
          console.log(oData.localhost);
          if ( oData.localhost == "www.wndflb.com" ) {
              //$(".a:visited").remove();
              var style = document.createElement('style');
              style.type = 'text/css';
              style.innerHTML=".tl th a:visited, .tl td.fn a:visited { color:#990066; }";
              document.getElementsByTagName('HEAD').item(0).appendChild(style);
          }
        },
        fCleanAdxMissy: function() {
          $('.noclick-small-banner, .sinclubbar, .noclick-large-banner').remove();
          $('#loadallbutton').click();
          $('#block-comments, #block-toolbar, #histats_counter, center').remove();
        }
        ,fCleanAdSkandal: function() {
          setInterval(function(){
              $('#btm_banner').remove();
              $("[title$='Online']").remove();
          }, 1000);
        }
        ,fCleanAdMafia: function() {
          $("[href^='magnet']").html("磁力链接");
        }
      }
    };
  oPage.init();

})();

