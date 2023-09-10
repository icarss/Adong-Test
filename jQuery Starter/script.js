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
