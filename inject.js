(function (document) {
  'use strict';

  var s = document.createElement('script');
  s.src = chrome.extension.getURL('index.js');
  (document.head || document.documentElement).appendChild(s);
})(this.document);
