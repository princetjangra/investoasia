// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var blockquote_items = document.getElementsByClassName("blockquote-item");
//   for (i = 0; i < blockquote_items.length; i++) {
//     blockquote_items[i].style.transform = "translateX(-100%)";
//     // blockquote_items[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > blockquote_items.length) {
//     myIndex = 1;
//   }
//   blockquote_items[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }

// Testimonials sliding autoplay ----------

$(".blockquote-content > blockquote:gt(0)").hide();

setInterval(function() {
  $(".blockquote-content > blockquote:first")
    .fadeOut(500)
    .next()
    .fadeIn(500)
    .end()
    .appendTo(".blockquote-content");
}, 3000);

// ---------- Testimonial sliding autoplay

// Message from CEO ----------

function seeMoreMessage(e) {
  var moreMessage = $("#moreMessage");
  moreMessage.slideToggle("slow");
  $(e).text($(e).text() == "see more ..." ? "hide text" : "see more ...");
}

// -------- Message form CEO

// Map functioning ---------

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

// --------- Map functioning