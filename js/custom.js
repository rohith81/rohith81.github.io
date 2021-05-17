$(document).ready(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);

  // Preloader

  /*Go to top*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
    if ($(this).scrollTop() > 200) {
      $("#myBtn").fadeIn("slow");
    } else {
      $("#myBtn").fadeOut("slow");
    }
  });
  $("#myBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // if ($(window).width() > 1023) {
  //   var count = 0;
  //   $("#demo").on("mousewheel", ".banners", function (e) {
  //     if (e.deltaY > 0) {
  //       console.log(count, "prev slide");
  //       if (count == 3) {
  //         $("#demo").css("transform", "translate3d(0px, -200vh, 0px)");
  //         count--;
  //       } else if (count == 2) {
  //         $("#demo").css("transform", "translate3d(0px, -100vh, 0px)");
  //         count--;
  //       } else {
  //         $("#demo").css("transform", "translate3d(0px, 0, 0px)");
  //       }
  //     } else {
  //       console.log(count, "next slide");
  //       if (count == 0) {
  //         $("#demo").css("transform", "translate3d(0px, -100vh, 0px)");
  //         count++;
  //       } else if (count == 1) {
  //         $("#demo").css("transform", "translate3d(0px, -200vh, 0px)");
  //         count++;
  //       } else if (count == 2) {
  //         $("#demo").css("transform", "translate3d(0px, -300vh, 0px)");
  //         count++;
  //       } else {
  //         $("html, body").animate(
  //           {
  //             scrollTop: $("#about").offset().top - 60,
  //           },
  //           500
  //         );
  //         $("body").css("overflow", "auto").addClass("active");
  //       }
  //     }
  //     e.preventDefault();
  //   });

  //   $("body").on("mousewheel", function (e) {
  //     if (e.deltaY > 0) {
  //       var eTop = $("#about").offset().top;
  //       var aboutPosition = eTop - $(window).scrollTop();
  //       if (aboutPosition > 0) {
  //         $("body").css("overflow", "hidden").removeClass("active");
  //         $("html, body").animate({ scrollTop: 0 }, 1000);
  //       } else {
  //       }
  //       console.log("body scrolling up");
  //     } else {
  //       console.log("body scrolling down");
  //     }
  //   });

  //   var key = 0;
  //   $(document).keydown(function (e) {
  //     if (e.which == 38) {
  //       if (key == 1) {
  //         var eTop = $("#about").offset().top;
  //         var aboutPosition = eTop - $(window).scrollTop();
  //         if (aboutPosition > 0) {
  //           $("body").css("overflow", "hidden").removeClass("active");
  //           $("html, body").animate({ scrollTop: 0 }, 1000);
  //           key = 0;
  //         } else {
  //         }
  //         console.log(aboutPosition, "up pressed");
  //         if (count == 3) {
  //           $("#demo").css("transform", "translate3d(0px, -200vh, 0px)");
  //           count--;
  //         } else if (count == 2) {
  //           $("#demo").css("transform", "translate3d(0px, -100vh, 0px)");
  //           count--;
  //         } else {
  //           $("#demo").css("transform", "translate3d(0px, 0, 0px)");
  //         }
  //       } else {
  //         console.log("up pressed");
  //         if (count == 3) {
  //           $("#demo").css("transform", "translate3d(0px, -200vh, 0px)");
  //           count--;
  //         } else if (count == 2) {
  //           $("#demo").css("transform", "translate3d(0px, -100vh, 0px)");
  //           count--;
  //         } else {
  //           $("#demo").css("transform", "translate3d(0px, 0, 0px)");
  //         }
  //       }
  //     } else if (e.which == 40) {
  //       if (key == 0) {
  //         console.log("down pressed");
  //         if (count == 0) {
  //           $("#demo").css("transform", "translate3d(0px, -100vh, 0px)");
  //           count++;
  //         } else if (count == 1) {
  //           $("#demo").css("transform", "translate3d(0px, -200vh, 0px)");
  //           count++;
  //         } else if (count == 2) {
  //           $("#demo").css("transform", "translate3d(0px, -300vh, 0px)");
  //           count++;
  //         } else if (count == 3) {
  //           $("html, body").animate(
  //             {
  //               scrollTop: $("#about").offset().top - 60,
  //             },
  //             500
  //           );
  //           $("body").css("overflow", "auto").addClass("active");
  //           key = 1;
  //         } else {
  //         }
  //       }
  //     } else {
  //     }
  //   });
  // }
});

// Preloader Functionality

$(window).on("load", function () {
  setTimeout(function () {
    $("#status").fadeOut();
    $(".loader").css({ opacity: "0" });
    $(".loader").fadeOut();
  }, 2000);
});
