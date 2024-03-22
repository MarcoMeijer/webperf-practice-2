
(function($) {

  "use strict";

  // NAVBAR
  $('.navbar-nav .nav-link').click(function() {
    $(".navbar-collapse").collapse('hide');
  });

})(window.jQuery);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log("App is loaded");
    navigator.serviceWorker.register('./js/service-worker.js')
      .then(() => {
        console.log("service worker registered");
      });
  })
}
