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

  $("#gray-bg").mouseover(function() {
    $("#gray-bg-text").show();
  });
  $("#gray-bg").mouseleave(function() {
    $("#gray-bg-text").hide();
  });

  $("#security-logo").mouseover(function() {
    $("#security-logo-text").show();
  });
  $("#security-logo").mouseleave(function() {
    $("#security-logo-text").hide();
  });

  $("#geo-brown-bg").mouseover(function() {
    $("#geo-brown-bg-text").show();
  });
  $("#geo-brown-bg").mouseleave(function() {
    $("#geo-brown-bg-text").hide();
  });

  $("#dashboard-site").mouseover(function() {
    $("#dashboard-site-text").show();
  });
  $("#dashboard-site").mouseleave(function() {
    $("#dashboard-site-text").hide();
  });

  $("#client-site").mouseover(function() {
    $("#client-site-text").show();
  });
  $("#client-site").mouseleave(function() {
    $("#client-site-text").hide();
  });

  $("#inputs-site").mouseover(function() {
    $("#inputs-site-text").show();
  });
  $("#inputs-site").mouseleave(function() {
    $("#inputs-site-text").hide();
  });

  $("#burned-logo").mouseover(function() {
    $("#burned-logo-text").show();
  });
  $("#burned-logo").mouseleave(function() {
    $("#burned-logo-text").hide();
  });

  $("#restaurant-logo").mouseover(function() {
    $("#restaurant-logo-text").show();
  });
  $("#restaurant-logo").mouseleave(function() {
    $("#restaurant-logo-text").hide();
  });

  $("#NAME").mouseover(function() {
    $("#NAME").css("background-color", "white");
  });
  $("#EMAIL").mouseover(function() {
    $("#EMAIL").css("background-color", "white");
  });
  $("#MESSAGE").mouseover(function() {
    $("#MESSAGE").css("background-color", "white");
  });
  $("#submit").mouseover(function() {
    $("#submit").css("background-color", "white");
    $("#submit").css("color", "black");
  });

  $("#form").bind("submit", function(event) {
    event.preventDefault();
    var name = $('[name="name"]').val();
    var email = $('[name="email"]').val();
    var url =
      "https://u20.api.mailchimp.com/2.0/lists/subscribe.json?" +
      "apikey=e0b7dd79b265959571522390e6999bf9-us20&id=2b12f9ee69" +
      "&email[email]=" +
      email +
      "&merge_vars[NAME]=" +
      name +
      "&double_optin=true" +
      "&send_welcome=true";
    $.ajax({
      type: "POST",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });
    alert(
      "Success! Message sent. Thanks for contacting us, you'll be hearing from us very soon."
    );
  });
});
