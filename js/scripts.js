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
    var name = $('[name="b_name"]').val();
    var email = $('[name="b_email"]').val();
    var message = $('[name="b_message"]').val();
    var url =
      "https://u20.api.mailchimp.com/2.0/lists/subscribe.json?" +
      "apikey=64a0400834ed78d8a8e15919a870931a-us20&id=2b12f9ee69";
    "&email[email]=" +
      email +
      "&merge_vars[FNAME]=" +
      name +
      "&merge_vars[MESSAGE]=" +
      message +
      "&double_optin=true" +
      "&send_welcome=true";
    $.ajax({
      type: "POST",
      url: url,
      dataType: "json",
      success: function(data) {
        $("#form").html(
          "Success " +
            name +
            "! Message sent. Thanks for contacting us, you'll be hearing from us very soon."
        );
        alert("success");
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert(errorThrown);
      }
    });
  });
});
