// ==UserScript==
// @name        edx_sidemenu_switch
// @namespace   edx
// @description A switch to sidebar menu
// @include     https://courses.edx.org/courses/*/courseware/*
// @version     1
// @grant       none
// ==/UserScript==
//
// codepen: http://codepen.io/niexin/pen/PPJRLY
// TODO: abstract style sheet insertRule method
document.addEventListener("DOMContentLoaded", function(event) {
  var courseIndex = document.querySelector('.course-index');

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

  // 2. append node
  var nav = document.querySelector('.sequence-nav');
  var parentDiv = nav.parentNode;
  parentDiv.insertBefore(container, nav);

  // 3. Inject CSS - http://davidwalsh.name/add-rules-stylesheets
  var style = document.createElement("style");
  // WebKit hack :(
  style.appendChild(document.createTextNode(""));
  // Add the <style> element to the page
  document.head.appendChild(style);

  //注意css rule添加顺序问题
  style.sheet.insertRule("input.switch:empty { margin-left: -999px; }", 0);
  style.sheet.insertRule("input.switch:checked ~ label:before {" +
    " background-color: green;" +
    "}", 0);
  style.sheet.insertRule("input.switch:checked ~ label:after {" +
    " margin-left: 2.2em;" +
    "}", 0);
  style.sheet.insertRule("input.switch:empty ~ label {" +
    "  position: relative;" +
    "  float: left;" +
    "  line-height: 1.6em;" +
    "  text-indent: 4em;" +
    "  margin: -0.5em 0 0 0.2em;" +
    "  cursor: pointer;" +
    "  -webkit-user-select: none;" +
    "  -moz-user-select: none;" +
    "  -ms-user-select: none;" +
    "  user-select: none;" +
    "}", 0);
  style.sheet.insertRule("input.switch:empty ~ label:after {" +
    " width: 1.2em;" +
    " top: 0.2em;" +
    " bottom: 0.2em;" +
    " margin-left: 0.2em;" +
    " background-color: white;" +
    " border-radius: 0.15em;" +
    "}", 0);
  style.sheet.insertRule("input.switch:empty ~ label:before, input.switch:empty ~ label:after {" +
    " position: absolute;" +
    " display: block;" +
    " top: 0;" +
    " bottom: 0;" +
    " left: 0;" +
    " content: ' ';" +
    " width: 3.6em;" +
    " background-color: red;" +
    " border-radius: 0.2em;" +
    " -webkit-transition: all 100ms ease-in;" +
    " transition: all 100ms ease-in;" +
    "}", 0);

  // 4. attach switch event handle
  input.addEventListener('change', function(e) {
    if (this.checked) {
      courseIndex.style.display = 'none';
    } else {
      courseIndex.style.display = 'block';
    }
  });
});
