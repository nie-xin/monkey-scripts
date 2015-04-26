// ==UserScript==
// @name        leanpub
// @namespace   xnie
// @description neat leanput online reading
// @include     https://leanpub.com/*
// @version     1
// @grant       none
// ==/UserScript==
// for greasemonkey you don't need DOMContentLoaded event coz
// user scripts are executed afer DOM loaded
// but for more general usage of this code, I added this event listener
// feel free to remove it in your grasemonkey script
document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('Hello reader! Good good study, day day up!');
  // remove quick buy bar
  var quickBuy = document.getElementById('quick-buy');
  if (quickBuy) quickBuy.remove();
  
  // remove taxamo banner added later
  var target = document.body;
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      var addedNodeList = mutation.addedNodes;
      var filter = [].filter;
      var taxamoList = filter.call(addedNodeList, function(node) {
        return (node.id === 'taxamo-confirm-country-overlay');
      });
      if (taxamoList.length > 0) {
        taxamoList.forEach(function(taxamo) {
          taxamo.remove()
        });
        observer.disconnect();
      }
    });    
  });
  var config = { attributes: true, childList: true, characterData: true };
  observer.observe(target, config);
});
