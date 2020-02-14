$(".list .menu").click(function() {
  $(".product").slideToggle();
});

// arrow2 animation
$(window).scroll(function() {
  $(window).scrollTop();
  if ($(window).scrollTop() >= 200) {
    $("#arrow2").show();
  } else {
    $("#arrow2").hide();
  }
});
$("#arrow2").click(function() {
  $("html,body").animate({ scrollTop: 0 });
});

// product page Animation
$(".nav>.list>a").click(function() {
  $(".nav>.list>a").removeClass("bgcolor");
  $(this).addClass("bgcolor");
});

$(".one-time").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true
});

// bread page Animation
$(".brd_nav>.list>bb").click(function() {
  $(".brd_nav>.list>bb").removeClass("bgcolor");
  $(this).addClass("bgcolor");
});

// cupcake page Animation
$(".cu_nav>.list>bb").click(function() {
  $(".cu_nav>.list>bb").removeClass("bgcolor");
  $(this).addClass("bgcolor");
});

// cake page Animation
$(".ca_nav>.list>bb").click(function() {
  $(".ca_nav>.list>bb").removeClass("bgcolor");
  $(this).addClass("bgcolor");
});

// cookie page Animation
$(".ck_nav>.list>bb").click(function() {
  $(".ck_nav>.list>bb").removeClass("bgcolor");
  $(this).addClass("bgcolor");
});
