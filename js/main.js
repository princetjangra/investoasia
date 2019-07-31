/*
 * Apperle | Responsive App Landing Page.
 * Author: perleTheme Template
 * Copyright: 2017;
 * This is a premium product available exclusively here : https://themeforest.net/user/perletheme
 */

;(function($) {
  "use strict"

  var $window = $(window)

  // //Fading Out Loader
  $window.on("load", function() {
    $(".pre-loader").fadeOut("slow")
    AOS.refresh()
  })

  $(document).ready(function() {
    /**----- Hiding Nav bar on Scroll -----*/

    var didScroll,
      scrollTop,
      lastScrollTop = 0,
      delta = 5,
      $mainNav = $(".main-navbar.fixed-top"),
      $mainNavHeight = $mainNav.outerHeight()

    var $navbarCollapse = $(".navbar-collapse")
    $window.on("scroll", function() {
      didScroll = true
      scrollTop = $(this).scrollTop()
    })
    setInterval(function() {
      if (didScroll && !$navbarCollapse.hasClass("show")) {
        hasScrolled()
        didScroll = false
      }
    }, 200)

    function hasScrolled() {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav.removeClass("nav-down").addClass("nav-up")
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav.removeClass("nav-up").addClass("nav-down")
        }
      }
      lastScrollTop = scrollTop
    }

    //Close Nav bar on small screens after clicking on link
    $(".navbar .nav-link-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide")
    })

    /**----- Initialize Waves library for button waves effect -----*/
    Waves.attach(".waves-effect", ["waves-button"])
    Waves.init()

    /**----- Initialize Scroll it library for scrolling to elements -----*/
    $.scrollIt({
      easing: "ease-out",
      topOffset: -100
    })

    /**----- Hiding And Showing News -----*/
    var $moreNewsHidden = $(".more-news-hidden")
    $moreNewsHidden.hide()
    $("#load-more-news").on("click", function() {
      $moreNewsHidden.toggle("slow")
      var $btnContent = $(this).find(".content")
      if ($btnContent.text() === "show more") {
        $btnContent.text("show less")
      } else {
        $btnContent.text("show more")
      }
    })

    /*----- AOS Setup-----*/

    if ($window.width > 800) {
      AOS.init({
        disable: "mobile",
        once: true,
        duration: 1000
      })
    } else {
      AOS.init({
        disable: "mobile",
        once: true,
        duration: 1000,
        delay: 0
      })
    }

    /* Text Animation */
    var animatedText = $(".textillate")
    animatedText.show()

    for (var index = 0; index < animatedText.length; index++) {
      $(animatedText[index]).textillate({
        selector: ".textillate-text"
      })
    }

    /**----- Owl Carousel -----*/

    // Companies Owl Carousal
    $(".owl-companies").owlCarousel({
      loop: true,
      responsiveClass: true,
      margin: 20,
      nav: false,
      dots: true,
      stagePadding: 10,
      responsive: {
        0: {
          items: 2
        },
        500: {
          items: 3
        },
        992: {
          items: 5
        }
      }
    })

    // Blog Owl Carousal
    $(".owl-blog").owlCarousel({
      loop: true,
      responsiveClass: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ],
      stagePadding: 10,
      responsive: {
        0: {
          items: 1
        },
        992: {
          items: 2
        }
      }
    })

    $(".owl-full-blog").owlCarousel({
      loop: true,
      responsiveClass: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
      ],
      stagePadding: 10,
      responsive: {
        0: {
          items: 1
        }
      }
    })

    // Blog Marquee Owl Carousal
    $(".owl-marquee").owlCarousel({
      loop: true,
      responsiveClass: true,
      margin: 20,
      nav: false,
      dots: false,
      stagePadding: 10,
      autoplay: true,
      slideTransition: "linear",
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      autoplaySpeed: 18000,
      responsive: {
        0: {
          items: 1
        },
        992: {
          items: 2
        }
      }
    })

    // Download Owl Carousal initialize
    var $owlDownload = $(".owl-download"),
      $downloadLinks = $(".owl-download-link")

    function highLightDownloadLink($singleDownloadLink) {
      $downloadLinks.removeClass("active")
      $singleDownloadLink.addClass("active")
    }

    // Initialize Download Carousel
    $owlDownload.owlCarousel({
      loop: false,
      responsiveClass: true,
      margin: 0,
      autoplay: false,
      items: 1,
      nav: false,
      dots: false
    })
    //Highlight the current link when owl changes
    $owlDownload.on("changed.owl.carousel", function(event) {
      //Fix the current link
      var current =
        event.item.index + 1 - event.relatedTarget._clones.length / 2
      var allItems = event.item.count
      if (current > allItems || current == 0) {
        current = allItems - (current % allItems)
      }
      current--
      var $downloadLink = $(".owl-download-link:nth(" + current + ")")
      highLightDownloadLink($downloadLink)
      $downloadLink.trigger("click")
    })
    //Highlight the current link when feature clicked
    $downloadLinks.on("click", function() {
      var $item = $(this).data("owl-item")
      $owlDownload.trigger("to.owl.carousel", $item)
      highLightDownloadLink($(this))
    })

    /**----- Mail Chimp Set Up Change your List ID in the index.html and follow Documentation -----*/

    var mailchimp = $(".subscribe-form"),
      $subscribeButton = $(".subscribe-submit")
    if (mailchimp.length) {
      for (var i = 0; i < mailchimp.length; i++) {
        var $mailchimpItem = $(mailchimp[i]),
          $email = $mailchimpItem.find('input[type="email"]')

        // Required by MailChimp
        $mailchimpItem.attr("novalidate", "true")
        $email.attr("name", "EMAIL")

        $mailchimpItem.on(
          "submit",
          $.proxy(
            function($email, event) {
              event.preventDefault()
              var $this = this
              var data = {},
                url = $this
                  .attr("action")
                  .replace("/post?", "/post-json?")
                  .concat("&c=?"),
                dataArray = $this.serializeArray(),
                $output = $("#" + $this.attr("data-form-output"))
              //While loading
              $subscribeButton
                .find(".btn-text")
                .html('<i class="fas fa-spinner fa-spin"></i>')
              for (i = 0; i < dataArray.length; i++) {
                data[dataArray[i].name] = dataArray[i].value
              }

              $.ajax({
                data: data,
                url: url,
                dataType: "jsonp",
                //if response is error
                error: function(resp, text) {
                  $output.html(
                    '<p><i class="text-danger fa-lg far fa-times-circle"></i> ' +
                      "Error: " +
                      text +
                      " - Check your internet connection</p>"
                  )
                  $subscribeButton.find(".btn-text").html("Subscribe")
                },
                //If response is success
                success: function(resp) {
                  if (resp.msg.indexOf("0") > -1) {
                    //If not subscribed
                    var newMsg = resp.msg.replace("0", "").replace("-", "")
                    $output
                      .html(
                        '<p><i class="text-danger fa-lg far fa-times-circle"></i> ' +
                          newMsg +
                          "</p>"
                      )
                      .addClass("active")
                    //If subscribed
                  } else {
                    $output
                      .html(
                        '<p><i class="text-success fa-lg far fa-check-circle"></i> ' +
                          resp.msg +
                          "</p>"
                      )
                      .addClass("active")
                  }
                  $email[0].value = ""
                  var $label = $('[for="' + $email.attr("id") + '"]')
                  if ($label.length) $label.removeClass("focus not-empty")
                  $subscribeButton.find(".btn-text").html("Subscribe")
                },
                beforeSend: function(data) {
                  var isValidated = (function() {
                    var results,
                      errors = 0
                    var elements = $this.find("[data-constraints]")
                    var captcha = null
                    if (elements.length) {
                      for (var j = 0; j < elements.length; j++) {
                        var $input = $(elements[j])
                        if ((results = $input.regula("validate")).length) {
                          for (var k = 0; k < results.length; k++) {
                            errors++
                            $input
                              .siblings(".form-validation")
                              .text(results[k].message)
                              .parent()
                              .addClass("has-error")
                          }
                        } else {
                          $input
                            .siblings(".form-validation")
                            .text("")
                            .parent()
                            .removeClass("has-error")
                        }
                      }
                      if (captcha) {
                        if (captcha.length) {
                          return validateReCaptcha(captcha) && errors === 0
                        }
                      }
                      return errors === 0
                    }
                    return true
                  })()
                  // Stop request if inputs are invalid
                  if (!isValidated) return false
                  $output
                    .html(
                      '<p><i class="fa fa-spinner fa-spin text-success"></i> Submitting...</p>'
                    )
                    .addClass("active")
                }
              })
              return false
            },
            $mailchimpItem,
            $email
          )
        )
      }
    }

    /**----- Count-Down Setup -----*/
    var $countDownWrapper = $(".count-down-wrapper")

    //Set the dead line and time zone for your app
    var deadline = "Jan 25 2019 18:40:18 GMT-0400"

    function time_remaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date())
      var seconds = Math.floor((t / 1000) % 60)
      var minutes = Math.floor((t / 1000 / 60) % 60)
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
      var days = Math.floor(t / (1000 * 60 * 60 * 24))
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      }
    }

    function run_clock(id, endtime) {
      var clock = document.getElementById(id)

      // get spans where our clock numbers are held
      var days_span = clock.querySelector(".days")
      var hours_span = clock.querySelector(".hours")
      var minutes_span = clock.querySelector(".minutes")
      var seconds_span = clock.querySelector(".seconds")

      function update_clock() {
        var t = time_remaining(endtime)

        // update the numbers in each part of the clock
        days_span.innerHTML = t.days
        hours_span.innerHTML = ("0" + t.hours).slice(-2)
        minutes_span.innerHTML = ("0" + t.minutes).slice(-2)
        seconds_span.innerHTML = ("0" + t.seconds).slice(-2)

        if (t.total <= 0) {
          clearInterval(timeinterval)
        }
      }

      update_clock()
      var timeinterval = setInterval(update_clock, 1000)
    }

    if ($countDownWrapper.length) {
      run_clock("clockdiv", deadline)
    }
  })
})(jQuery)

// comparison table start

function openCity(cityName) {
  var i
  var x = document.getElementsByClassName("city")
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"
  }
  document.getElementById(cityName).style.display = "block"
}

// comparison table end


//  -------------------------------
//       Platform Page start
//  -------------------------------

// Show coin on hovering over map ---------

var india_hb = $(".india-hover-box");
var singapore_hb = $(".singapore-hover-box");
var indonesia_hb = $(".indonesia-hover-box");
var hongkong_hb = $(".hong-kong-hover-box");
var malaysia_hb = $(".malaysia-hover-box");
var thailand_hb = $(".thailand-hover-box");
var philippines_hb = $(".philippines-hover-box");
var vietnam_hb = $(".vietnam-hover-box");
var china_hb = $(".china-hover-box");
var srilanka_hb = $(".sri-lanka-hover-box");
var korea_hb = $(".korea-hover-box");
var pak_hb = $(".pak-hover-box");

var indiaSvg = $("#india");
var singaporeSvg = $("#singapore");
var indonesiaSvg = $("#indonesia");
var hongkongSvg = $("#hong-kong");
var malaysiaSvg = $("#malaysia");
var thailandSvg = $("#thailand");
var philippinesSvg = $("#philippines");
var vietnamSvg = $("#vietnam");
var chinaSvg = $("#china");
var srilankaSvg = $("#sri-lanka");
var koreaSvg = $("#korea");
var pakSvg = $("#pak");

indiaSvg.hover(() => india_hb.toggleClass("map-hover"));
india_hb.hover(() => {
  india_hb.toggleClass("map-hover");
  indiaSvg.children().toggleClass("svg-map-hover");
});

singaporeSvg.hover(() => singapore_hb.toggleClass("map-hover"));
singapore_hb.hover(() => {
  singapore_hb.toggleClass("map-hover");
  singaporeSvg.children().toggleClass("svg-map-hover");
});

indonesiaSvg.hover(() => indonesia_hb.toggleClass("map-hover"));
indonesia_hb.hover(() => {
  indonesia_hb.toggleClass("map-hover");
  indonesiaSvg.children().toggleClass("svg-map-hover");
});

hongkongSvg.hover(() => hongkong_hb.toggleClass("map-hover"));
hongkong_hb.hover(() => {
  hongkong_hb.toggleClass("map-hover");
  hongkongSvg.children().toggleClass("svg-map-hover");
});

malaysiaSvg.hover(() => malaysia_hb.toggleClass("map-hover"));
malaysia_hb.hover(() => {
  malaysia_hb.toggleClass("map-hover");
  malaysiaSvg.children().toggleClass("svg-map-hover");
});

thailandSvg.hover(() => thailand_hb.toggleClass("map-hover"));
thailand_hb.hover(() => {
  thailand_hb.toggleClass("map-hover");
  thailandSvg.children().toggleClass("svg-map-hover");
});

philippinesSvg.hover(() => philippines_hb.toggleClass("map-hover"));
philippines_hb.hover(() => {
  philippines_hb.toggleClass("map-hover");
  philippinesSvg.children().toggleClass("svg-map-hover");
});

vietnamSvg.hover(() => vietnam_hb.toggleClass("map-hover"));
vietnam_hb.hover(() => {
  vietnam_hb.toggleClass("map-hover");
  vietnamSvg.children().toggleClass("svg-map-hover");
});

chinaSvg.hover(() => china_hb.toggleClass("map-hover"));
china_hb.hover(() => {
  china_hb.toggleClass("map-hover");
  chinaSvg.children().toggleClass("svg-map-hover");
});

srilankaSvg.hover(() => srilanka_hb.toggleClass("map-hover"));
srilanka_hb.hover(() => {
  srilanka_hb.toggleClass("map-hover");
  srilankaSvg.children().toggleClass("svg-map-hover");
});

koreaSvg.hover(() => korea_hb.toggleClass("map-hover"));
korea_hb.hover(() => {
  korea_hb.toggleClass("map-hover");
  koreaSvg.children().toggleClass("svg-map-hover");
});

pakSvg.hover(() => pak_hb.toggleClass("map-hover"));
pak_hb.hover(() => {
  pak_hb.toggleClass("map-hover");
  pakSvg.children().toggleClass("svg-map-hover");
});


//  -------------------------------
//        Platform Page end
//  -------------------------------




//  --------------------------
//     About Us Page Start
//  --------------------------

// Message from CEO ----------

// function seeMoreMessage(e) {
//   var moreMessage = $("#moreMessage");
//   moreMessage.slideToggle("slow");
//   $(e).text($(e).text() == "see more ..." ? "hide text" : "see more ...");
// }

// -------- Message form CEO


// -------- Modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $(".myImg1");
var moreMessage = $("#moreMessage");
var captionText = document.getElementById("caption");
$(".myImg1").click(function() {
   modal.style.display = "block";
   var newSrc = this.src;
   moreMessage.attr("src", newSrc);
   captionText.innerHTML = this.alt;
});

// Closing modal
$("#myModal").on("click", function(e) {
  var p = e.target;
  while (p) {
     console.log(p);
     if (p.id) {
        if (p.id == "img01") {
           return;
        }
     }
     p = p.parentElement;
  }
  modal.style.display = "none";
  // $("#openModal").hide();
});

