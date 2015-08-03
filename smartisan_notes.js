// ==UserScript==
// @name        锤子便签
// @namespace   xnie
// @description 影藏顶部全局导航条
// @include     https://cloud.smartisan.com/#/notes
// @version     1
// @grant       none
// ==/UserScript==
(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var bodyWrapper = document.querySelector('.layout-wrapper.layout-wrapper-ready.ng-scope');
    var header = document.querySelector('.globalheader');
    bodyWrapper.removeChild(header);
  });

  document.onreadystatechange = function() {
    if (document.readyState == "complete") {
      var notes = document.querySelector('.app_wrap.fadeIn');
      notes.style.top = '0px';
    }
  }
})();
