// ==UserScript==
// @name        New script - 127.0.0.1
// @namespace   Violentmonkey Scripts
// @match       http://127.0.0.1:5500/form.html
// @grant       none
// @version     1.0
// @author      -
// @require      http://cdn.staticfile.org/jquery/2.0.0/jquery.min.js
// @description 2023/9/10 13:19:19
// ==/UserScript==
// 在document 加载完成后再执行脚本
$(document).ready(function () {
  console.log("Welcome to The Ultimate jQuery Course!🚀");
  // 输入框选择，并填值
  $("#username").val("username");
  $("#phone").val("phone");
  $("#email").val("email");
  // 下拉框选择某一个选项
  $("#country").val("USA");
  // radio
  $("input:radio:first").prop("checked", true);
  // 根据 value 设置 radio 的值
  $("input[value='1']").prop("checked", true);
});
console.log("Welcome to The Ultimate jQuery Course!🚀");
