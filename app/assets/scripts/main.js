$(document).ready(function(){$(".js #container").animsition({inClass:"fade-in-up-sm",outClass:"fade-out-up-sm",inDuration:400,outDuration:400,linkElement:".al",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,transition:function(e){window.location.href=e}}),$(document).on("click",".hamburger-container",function(e){$(".menu").hasClass("animate")?$(".menu, .bar").removeClass("animate"):$(".menu, .bar").addClass("animate")}),$(document).on("click",".hamburger-menu",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"fast"),$("html").toggleClass("nav-open")}),$(document).on("click",'[data-toggle="lightbox"]',function(e){e.preventDefault(),$(this).ekkoLightbox(),console.log("******activate lightbox")})}),function(){var e=document.getElementById("morphsearch"),n=e.querySelector("input.morphsearch-input"),t=e.querySelector("span.morphsearch-close"),o=isAnimating=!1,a=function(t){if("focus"===t.type.toLowerCase()&&o)return!1;morphsearch.getBoundingClientRect();o?(classie.remove(e,"open"),""!==n.value&&setTimeout(function(){classie.add(e,"hideInput"),setTimeout(function(){classie.remove(e,"hideInput"),n.value=""},300)},500),n.blur()):classie.add(e,"open"),o=!o};n.addEventListener("focus",a),t.addEventListener("click",a),document.addEventListener("keydown",function(e){27===(e.keyCode||e.which)&&o&&a(e)}),e.querySelector('button[type="submit"]').addEventListener("click",function(e){e.preventDefault()})}(),function(e){"use strict";function n(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function t(e,n){(o(e,n)?i:a)(e,n)}var o,a,i;"classList"in document.documentElement?(o=function(e,n){return e.classList.contains(n)},a=function(e,n){e.classList.add(n)},i=function(e,n){e.classList.remove(n)}):(o=function(e,t){return n(t).test(e.className)},a=function(e,n){o(e,n)||(e.className=e.className+" "+n)},i=function(e,t){e.className=e.className.replace(n(t)," ")});var s={hasClass:o,addClass:a,removeClass:i,toggleClass:t,has:o,add:a,remove:i,toggle:t};"function"==typeof define&&define.amd?define(s):e.classie=s}(window),console.log("---\x3e Main is loaded.");
//# sourceMappingURL=main.js.map