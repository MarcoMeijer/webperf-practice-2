$ = window.jQuery;

// NAVBAR
$('.navbar-nav .nav-link').click(function() {
  $(".navbar-collapse").collapse('hide');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    console.log("App is loaded");
    navigator.serviceWorker.register('./js/service-worker.js')
      .then(() => {
        console.log("service worker registered");
      });
  })
}

function updateMap(position) {
  // These are the coordinates returned by the Geolocation API
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  $('#yourlocation').css('display', 'flex');
  $('#yourlocation').children().text(`Hey! We also deliver to ${latitude} ${longitude}. Yes we have your exact location 😈`);
}

function geolocationInaccessible(err) {
  alert(err.message);
}


if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(updateMap, geolocationInaccessible);
}
