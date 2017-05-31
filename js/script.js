
$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Wuf wuf!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();

    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Purrrr!</li>");
    $("ul#webpage").prepend("<li>Barffff!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("#clickable1").click(function() {
      console.log("hello");
      $("cat1").toggle();
    });

    $("#clickable2").click(function() {
      console.log("hello");
      $("#dog1").toggle();
    });

    $("#clickable3").click(function() {
      console.log("hello");
      $("#cat2").toggle();
    });

    $("#clickable4").click(function() {
      console.log("hello");
      $("#dog2").toggle();
    });


});
