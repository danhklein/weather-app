$(document).ready(function() {

  //getting IP and adding to the page
  var getIP =$.ajax({
    url: 'https://freegeoip.net/json/128.177.172.220',
    method: "GET",
    success: function(data) {
      // console.log(data);
      var IP = data.ip;
      $("#tuning").html('Tuning in from IP Address: ' + IP);
    }
  });

  //Repeat process for var get IP with getWeather getLong getLat (hardcode weather)
  var getWeather= $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=boulder,co&APPID=3dca7066833da323f021a707b055f61a",
    method: "GET",
    success: function(data) {
      // console.log(data);
      var weatherVal = data.weather;
      var describeCurrent = weatherVal[0].description;
      $("#weather").html(describeCurrent);
    }
  });

  $("#submit").on('click',function(event) {
    event.preventDefault();
    var url = 'https://freegeoip.net/json/128.177.172.220';
    var getLatLon = $.ajax({
      url: url,
      method: "GET",
      success: function(data) {
        // console.log(data);
        var latitude = data.latitude;
        var longitude = data.longitude;
        $("#longitude").html(longitude);
        $("#latitude").html(latitude);
      }
    });
  });

});
    // var getLong  = $.ajax(
    // {
    // url: url,
    // method: "GET",
    // success: function(data) {
    //   console.log(data);
    //   longitude = data.longitude;
    //   $("#longitude").html(longitude);
    // }});

    // $("#longitude").html(longitude);
    // $("#latitude").html(data.latitude);
    // $("#weather").html(data.weather);

//   function updateLocation() {

//     var baseURL = 'https://freegeoip.net/json/128.177.172.220'
//   }

// 42,5848 -83,2950


