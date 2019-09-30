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
  // $("#form").submit(function(event) {
  //   $("#name").val();
  //   $("#email").val();
  //   $("#message").val();
  //   alert(
  //     "Success! Message sent. Thanks for contacting us, you'll be hearing from us very soon."
  //   );
  //   event.preventDefault();
  // });

  $("#form").bind("submit", function(event) {
    event.preventDefault();
    var name = $('[name="name"]').val();
    var email = $('[name="email"]').val();
    var message = $('[name="message"]').val();
    var url =
      "https://u20.api.mailchimp.com/2.0/lists/subscribe.json?" +
      "apikey=64a0400834ed78d8a8e15919a870931a-us20&id=2b12f9ee69";
    "&email[email]=" +
      email +
      "&merge_vars[name]=" +
      name +
      "&merge_vars[message]=" +
      message +
      "&double_optin=true" +
      "&send_welcome=true";
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json"
    });
    alert(
      "Success! Message sent. Thanks for contacting us, you'll be hearing from us very soon."
    );
  });
});
