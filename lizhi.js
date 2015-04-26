// ==UserScript==
// @name         lizhi fm my radio
// @namespace    http://your.homepage/
// @version      0.1
// @description  add my radio option to lizhi fm
// @author       xnie
// @include      http://www.lizhi.fm/#/*
// @include      http://www.lizhi.fm/*
// @grant        none
// ==/UserScript==
var myRadio = {
  gadio: 'http://www.lizhi.fm/#/29345',
  友的聊: 'http://www.lizhi.fm/#/14393',
  糖蒜广播: 'http://www.lizhi.fm/#/13461',
};

document.addEventListener("DOMContentLoaded", function(event) {
  init(initList);
});

function init(cb) {
  var radioButton = document.createElement('button');
  radioButton.class = 'my-radio';
  radioButton.style.cssText = "float:left;margin:3px 3px 3px 15px";
  var b = document.createElement('b');
  b.innerHTML = '自选电台';
  radioButton.appendChild(b);
  radioButton.onclick = toggleRadioList;
  
  var wrap = document.querySelector('.wrap');
  var leftNav = [].filter.call(wrap.childNodes, function(node) {
    return node.className === 'leftNav';
  })[0];

  var content = [].filter.call(leftNav.childNodes, function(node) {
    return node.className === 'content';
  })[0];

  var ul = [].filter.call(content.childNodes, function(node) {
    return node.tagName === 'UL';
  })[0];

  ul.appendChild(radioButton);
  
  cb(myRadio, ul);
}

function initList(itemList, target) {
  var radioList = document.createElement('ul');
  radioList.className = 'radio-list';
  radioList.style.cssText = "list-style-type:none;float:left;margin:3px;padding-left:10px;visibility:hidden";
  Object.keys(itemList).forEach(function(key) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = itemList[key];
    a.innerHTML = key;
    a.style.cssText = "text-decoration:none";
    li.appendChild(a);
    radioList.appendChild(li);
  });
  target.appendChild(radioList);
}

function toggleRadioList() {
  var list = document.querySelector('.radio-list');
  if (list.style.visibility === 'hidden')
    list.style.visibility = 'visible';
  else
    list.style.visibility = 'hidden';
}