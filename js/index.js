// overlay animation
$("#overlay")
  .delay(2000)
  .fadeOut();

// popup animaton
jQuery(document).ready(function($) {
  window.onload = function() {
    $(".bts-popup")
      .delay(1000)
      .addClass("is-visible");
  };

  //open popup
  $(".bts-popup-trigger").on("click", function(event) {
    event.preventDefault();
    $(".bts-popup").addClass("is-visible");
  });

  //close popup
  $(".bts-popup").on("click", function(event) {
    if (
      $(event.target).is(".bts-popup-close") ||
      $(event.target).is(".bts-popup")
    ) {
      event.preventDefault();
      $(this).removeClass("is-visible");
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event) {
    if (event.which == "27") {
      $(".bts-popup").removeClass("is-visible");
    }
  });
});

// arrow animation
$(window).scroll(function() {
  $(window).scrollTop();
  if ($(window).scrollTop() >= 600) {
    $("#arrow").show();
  } else {
    $("#arrow").hide();
  }
});
$("#arrow").click(function() {
  $("html,body").animate({ scrollTop: 0 });
});

// nav scroll animation
$(".l_container>.b_nav>.about").click(function() {
  $(this)
    .find("a")
    .attr("href");
  $("html,body").animate({ scrollTop: $("#about-area").offset().top }, 400);
});
$(".l_container>.b_nav>.member").click(function() {
  $(this)
    .find("a")
    .attr("href");
  $("html,body").animate({ scrollTop: $("#member-area").offset().top }, 400);
});
$(".l_container>.b_nav>.member2").click(function() {
  $(this)
    .find("a")
    .attr("href");
  $("html,body").animate({ scrollTop: $("#member-area2").offset().top }, 400);
});
$(".l_container>.b_nav>.product").click(function() {
  $(this)
    .find("a")
    .attr("href");
  $("html,body").animate({ scrollTop: $("#product-area").offset().top }, 400);
});
$(".l_container>.b_nav>.footer").click(function() {
  $(this)
    .find("a")
    .attr("href");
  $("html,body").animate({ scrollTop: $("#footer-area").offset().top }, 400);
});

// WoW Animation
new WOW().init();

// chef-area animation
$("#main_chef>.img3").click(function() {
  $("#main_chef>.main").attr("src", "images/chef3.jpg");
  $(".AT>h3").text("Allen Timonthy");
  $(".AT>h4").text("Pastry Chef");
  $(".AT>div").text(
    "“ It is satisfied to watch people enjoy desserts made by me! “"
  );
});

$("#main_chef>.img2").click(function() {
  $("#main_chef>.main").attr("src", "images/chef02.jpg");
  $(".AT>h3").text("Tim Smith");
  $(".AT>h4").text("Senior Pastry Chef");
  $(".AT>div").text("“ Never say no to the pastry, enjoy while you can. “");
});

$("#main_chef>.img1").click(function() {
  $("#main_chef>.main").attr("src", "images/chef01.jpg");
  $(".AT>h3").text("Gerogia Paul");
  $(".AT>h4").text("Senior Pastry Chef");
  $(".AT>div").text("“ Pastry is everything! You can get it if you love it. “");
});

$(".one-time").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true
});

// product-area animation
$(".hover").mouseleave(function() {
  $(this).removeClass("hover");
});
