/*页面载入完成后，创建复制按钮*/
!function (e, t, a) { 
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      copyHtml += '  <i class="fa fa-paper-plane"></i><span>复制代码</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      new ClipboardJS('.btn-copy', {
          target: function(trigger) {
              alert("您已复制代码，此代码仅供参考，请遵循版权声明并不要复制题解提交来获取AC。");
              return trigger.nextElementSibling;
          }
      });
    }
    initCopyCode();
  }(window, document);