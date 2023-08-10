$(document).ready(function() {
  $(".main-carousel").flickity({
    // options
    wrapAround: true,
    autoPlay: true,
    autoPlay: 3000
  });
  $(".main-page .nav-item a").click(function() {
    // console.log($(this))
    hr = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(hr).offset().top - 50
      },
      500
    );
  });
});

(function($) {
  "use strict";
  $(window).on("load", function() {
    if ($(".preloader").length > 0) {
      $(".preloader").fadeOut("slow");
    }
  });
})(jQuery);

