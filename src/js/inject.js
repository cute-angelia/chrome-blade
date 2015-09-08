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
          $("#block-comments, #block-toolbar, #histats_counter, center").remove();
        },
        fConvertTorrent: function() {
          // 处理链接
          var self = this;
          var linkNode = $('a[href*=\'hash\=\']');
          if (linkNode.length !== 0) {
            linkNode.each(function() {
              var orginLink = $(this).attr('href');

              var tempLink = orginLink.split('hash=');
              var hrefMagnet = 'magnet:?xt=urn:btih:' + tempLink[1].substring(3);

              $(this).after('<a href="' + orginLink + '" target="_blank">下载种子</a>');
              $(this).attr('href', hrefMagnet).text(hrefMagnet);
              $(this).parent().addClass('link-braces');
            });
          }
        },
        fImageScaling: function() {
          var self = this;
          $('img,input[type=image]').each(function() {
            var thiz = $(this);
            if (thiz.parent().attr('class') != 'tac') {
              var setwidth = parseInt(screen.width) - 395;
              self.fImgReady(thiz.attr('src'), function() {
                var imgWidth = this.width;
                var imgHeight = this.height;
                if (imgWidth > setwidth) {
                  var newWidth = setwidth;
                  var newHeight = (setwidth / imgWidth) * imgHeight;
                  thiz.width(newWidth);
                  thiz.height(newHeight);
                  thiz.closest('td').width(setwidth + 16);
                  thiz.closest('div').width(setwidth + 16);
                }
              });
            }
          });
        },
        fOnlyLz: function() {
          var lz = '';

          var urlGetPage = this.fGetQueryStringByName('page');

          if (urlGetPage === '' || urlGetPage == 1) {
            $('.t2').each(function(index) {
            var $this = $(this);
            if (index !== 0) {
              if ($this.find('b:first').text() != lz) {
                $(this).remove();
              }
            } else {
              lz = $this.find('b:first').text();
            }
          });
          }

        },
        fBlockAd: function() {
          $('.sptable').remove();
        },
        fBlockTopic: function(blackListStr, ifcomment) {
          var self = this;

          if (blackListStr !== null) {
            var blackList = blackListStr.split(',');

            $('.bl').each(function() {
              if (_.indexOf(blackList, $(this).text()) !== -1) {
                $(this).parents('tr').remove();
              }
            });

            if (self.fRegular('blog', oData.localurl) && parseInt(ifcomment) > 0) {
              $('.r_two').each(function() {
                  var $this = $(this);
                  _.each(blackList, function(value) {
                    if ($this.html().indexOf('<b>' + value + '</b>') !== -1) {
                      $this.closest('div').remove();
                    }
                  });
                });
            }
          }
        },
        fProcessUrl: function(orginUrl) {
          var viiinfo = 'http://www.viidii.info/?';
          var decodeStr = /.*\?http:/g;
          var decodeSig = /______/g;
          var jsSuffix = '&amp;z';
          var htmlSuffix = '&z';
          var returnSuffix = 'return false';
          if (orginUrl.indexOf('viidii') != -1) {
            if (/www.viidii.info\/\?magnet/.test(orginUrl)) {
              orginUrl = orginUrl.replace(viiinfo, '');
            }

            var pureUrl = orginUrl.replace(decodeStr, 'http:').replace(decodeSig, '.').replace(jsSuffix, '').replace(htmlSuffix, '').replace(returnSuffix, '');
            return pureUrl;
          } else {
            return orginUrl;
          }
        },
        fRegular: function(key, content) {
          switch (key) {
            case 'list':
              return /thread/gi.test(content);
            case 'blog':
              return /htm_data|read.php/gi.test(content);
            case 'blogContent':
              return /http:\/\/(.+)\/htm_data\//gi.test(content);
            case 'hash':
              return /hash/gi.test(content);
            case 'vii':
              return /www.viidii.com|www.viidii.info/g.test(content);
          }
        },
        fImgReady: (function() {
          var list = [], intervalId = null,
              // 用来执行队列
                tick = function() {
                  var i = 0;
                  for (; i < list.length; i++) {
                    list[i].end ? list.splice(i--, 1) : list[i]();
                  }!list.length && stop();
                },
                // 停止所有定时器队列
                stop = function() {
                  window.clearInterval(intervalId);
                  intervalId = null;
                };

          return function(url, ready, load, error) {
            var onready, width, height, newWidth, newHeight, img = new Image();

            img.src = url;

            // 如果图片被缓存，则直接返回缓存数据
            if (img.complete) {
              ready.call(img);
              load && load.call(img);
              return;
            }

            width = img.width;
            height = img.height;

            // 加载错误后的事件
            img.onerror = function() {
                  error && error.call(img);
                  onready.end = true;
                  img = img.onload = img.onerror = null;
                };

            // 图片尺寸就绪
            onready = function() {
                  newWidth = img.width;
                  newHeight = img.height;
                  if (newWidth !== width || newHeight !== height ||
                  // 如果图片已经在其他地方加载可使用面积检测
                  newWidth * newHeight > 1024) {
                    ready.call(img);
                    onready.end = true;
                  }
                };
            onready();

            // 完全加载完毕的事件
            img.onload = function() {
              // onload在定时器时间差范围内可能比onready快
              // 这里进行检查并保证onready优先执行
              !onready.end && onready();

              load && load.call(img);

              // IE gif动画会循环执行onload，置空onload即可
              img = img.onload = img.onerror = null;
            };

            // 加入队列中定期执行
            if (!onready.end) {
              list.push(onready);
              // 无论何时只允许出现一个定时器，减少浏览器性能损耗
              if (intervalId === null) intervalId = setInterval(tick, 40);
            }
          };
        })(),
        fDataFormat: function(data, format) {
          var o = {
            'M+': data.getMonth() + 1,
            'd+': data.getDate(),
            'h+': data.getHours(),
            'm+': data.getMinutes(),
            's+': data.getSeconds(),
            'q+': Math.floor((data.getMonth() + 3) / 3),
            'S': data.getMilliseconds() // millisecond
          };
          if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (data.getFullYear() + '').substr(4 - RegExp.$1.length));
          }
          for (var k in o) {
            if (new RegExp('(' + k + ')').test(format)) {
              format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
          }
          return format;
        },
        fGetQueryStringByName: function(name) {
          var result = location.search.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'));
          if (result === null || result.length < 1) {
            return '';
          }
          return result[1];
        },
        fGetQueryString: function(url) {
          var url = url || location.search;
          var result = url.match(new RegExp('[\?\&][^\?\&]+=[^\?\&]+', 'g'));
          if (result == null) return new Array();
          for (var i = 0; i < result.length; i++) {
            result[i] = result[i].substring(1);
          }
          return result;
        },
        fArray_prototype_del: function(array, n) {　 // n表示第几项，从0开始算起。
          if (n < 0) {　 // 如果n<0，则不进行任何操作。
            return array;
          } else {
            return array.slice(0, n).concat(array.slice(n + 1, array.length));
          }
        },
        fHtml_scrollTop_target: function() {

          var target = arguments[0] || 0;
          var timeset = arguments[1] || 500;

          if (target == '0') {
            return false;
          }

          if (target == 'top') {
            $('html,body').animate({
              scrollTop: 0
            }, timeset);
            return false;
          }

          if (target.length > 2) {
            var $target = $('#' + target);
            if ($target.length > 0) {
              var targetOffset = $target.offset().top;
              $('html,body').animate({
                scrollTop: targetOffset
              }, timeset);
            }
            return false;
          }
        },
        fOnlyNum: function(input) {
          $('#' + input).keyup(function(e) {
            $(this).val($(this).val().replace(/[^0-9)]+/, ''));
          }).focus(function() {
            $(this).val($(this).val().replace(/[^0-9]+/, ''));
          });
        }
      }
    };
  oPage.init();

})();

