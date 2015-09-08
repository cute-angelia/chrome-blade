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
        // 初始化数据
        this.functions.fInitInfo();
      },
      listen: function() {
      },
      functions: {
        fInitInfo: function() {
          var self = this;
          if (document.title.indexOf('xMissy') != -1) {
            self.fCleanAdxMissy();
          }
        },
        fCleanAdxMissy: function() {
          $('.noclick-small-banner, .sinclubbar, .noclick-large-banner').remove();
          $('#loadallbutton').click();
          $('#block-comments, #block-toolbar, #histats_counter, center').remove();
        }
      }
    };
  oPage.init();

})();

