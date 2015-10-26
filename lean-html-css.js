// ==UserScript==
// @name         Learn HTML & CSS
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://learn.shayhowe.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

// 1. create switch div
var container = document.createElement('div');
container.className = 'switch-container';

var input = document.createElement('input');
input.type = 'checkbox';
input.id = 'menu-switch';
input.name = 'menu-switch';
input.className = 'switch';

var label = document.createElement('label');
label.htmlFor = 'menu-switch';
label.innerHTML = 'Menu';

container.appendChild(input);
container.appendChild(label);

// 2. append to dom
var main = document.querySelector('.main');
var firstChild = main.firstChild;
main.insertBefore(container, firstChild);

// 3. Inject CSS - http://davidwalsh.name/add-rules-stylesheets
var style = document.createElement('style');

// WebKit hack :(
style.appendChild(document.createTextNode(''));

// Add the <style> element to the page
document.head.appendChild(style);

//注意css rule添加顺序问题
style.sheet.insertRule('input.switch:empty { margin-left: -999px; }', 0);
style.sheet.insertRule('input.switch:checked ~ label:before {' +
                       ' background-color: green;' +
                       '}', 0);
style.sheet.insertRule('input.switch:checked ~ label:after {' +
                       ' margin-left: 2.2em;' +
                       '}', 0);
style.sheet.insertRule('input.switch:empty ~ label {' +
                       '  position: relative;' +
                       '  float: left;' +
                       '  line-height: 1.6em;' +
                       '  text-indent: 4em;' +
                       '  margin: 0.5em 0 0 0.2em;' +
                       '  cursor: pointer;' +
                       '  -webkit-user-select: none;' +
                       '  -moz-user-select: none;' +
                       '  -ms-user-select: none;' +
                       '  user-select: none;' +
                       '}', 0);
style.sheet.insertRule('input.switch:empty ~ label:after {' +
                       ' width: 1.2em;' +
                       ' top: 0.2em;' +
                       ' bottom: 0.2em;' +
                       ' margin-left: 0.2em;' +
                       ' background-color: white;' +
                       ' border-radius: 0.15em;' +
                       '}', 0);
style.sheet.insertRule('input.switch:empty ~ label:before, input.switch:empty ~ label:after {' +
                       ' position: absolute;' +
                       ' display: block;' +
                       ' top: 0;' +
                       ' bottom: 0;' +
                       ' left: 0;' +
                       ' content: " ";' +
                       ' width: 3.6em;' +
                       ' background-color: red;' +
                       ' border-radius: 0.2em;' +
                       ' -webkit-transition: all 100ms ease-in;' +
                       ' transition: all 100ms ease-in;' +
                       '}', 0);

// 4. attach switch event handle
var aside = document.querySelector('aside');
var toc = document.querySelector('.toc');
var children = document.querySelector('.lesson.container').childNodes;
input.addEventListener('change', function(e) {
  if (this.checked) {
    aside.style.display = 'none';
    toc.style.display = 'none';
    for (var i = 0; i < children.length; i++) {
      if (children[i].style)
        children[i].style.maxWidth = '100%';
    }
  } else {
    aside.style.display = 'block';
    toc.style.display = 'block';
    for (var i = 0; i < children.length; i++) {
      if (children[i].style)
        children[i].style.maxWidth = '600px';
    }
  }
});
