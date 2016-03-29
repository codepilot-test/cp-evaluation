console.log("Hello world");

$(document).ready(function() {
    console.log("rejoice - jquery is enabled!");
    
    $.getJSON('https://raw.githubusercontent.com/jeremywrnr/jeremywrnr.github.io/7cc04951d4b0421e664ebbc9e4aa6642e2c02dbb/weather.json', function(data) {
        var $weatherpoop, avg=0, n=0;
        $weatherpoop = $('#weather');
        
        var $items = data.map(function(item) {
            avg += item.TemperatureF;
            n++;
            return $('<li></li>').text("Time: " + item.TimeEST + " / Temp: " + item.TemperatureF + "F");
        })
        avg = avg/n;
        $weatherpoop.append($items);
        $('#average').text("<Average Temperature: "+ avg);
    })
});
