$(document).ready(function() {
  $(".what-we-do-design").click(function() {
    $("#show-design").toggle();
    $("#hide-design").toggle();
  });
  $(".what-we-do-dev").click(function() {
    $("#show-dev").toggle();
    $("#hide-dev").toggle();
  });
  $(".what-we-do-manage").click(function() {
    $("#show-manage").toggle();
    $("#hide-manage").toggle();
  });
  $(".work").hover(function() {
    $("folio, folio p").hover();
  });
  $("#name").mouseover(function() {
    $("#name").css("background-color", "white");
  });
  $("#email").mouseover(function() {
    $("#email").css("background-color", "white");
  });
  $("#message").mouseover(function() {
    $("#message").css("background-color", "white");
  });
  $("#submit").mouseover(function() {
    $("#submit").css("background-color", "white");
    $("#submit").css("color", "black");
  });
  $("#name, #email, #message").val(function(event) {
    alert(
      "Success! Message sent. Thanks for contacting us, you'll be hearing from us very soon."
    );
    event.preventDefault();
  });
});
