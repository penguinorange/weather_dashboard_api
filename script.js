
function searchStore() {
    // get most recent submission
    formerSearch = JSON.parse(localStorage.getItem("city"));
    console.log(formerSearch)
    city = formerSearch
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=dc915575c90b63326c2faf5ea7653a4c";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        response2 = response;

        var iconcode = response2.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"
        $('#wicon').attr('src', iconurl);
        $(".cityName").html("<h1><strong>" + response2.city.name + "</strong> Weather Details</h1>");
        $(".date").text(response2.list[0].dt_txt);
        $(".temp").text(response2.list[0].main.temp);
        $(".humidity").text(response2.list[0].main.humidity);
        $(".wind").text(response2.list[0].wind.speed);

        var iconcode1 = response2.list[8].weather[0].icon;
        var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png"
        $('#wicon1').attr('src', iconurl1);
        $(".date1").text(response2.list[8].dt_txt);
        $(".temp1").text(response2.list[8].main.temp);
        $(".humidity1").text(response2.list[8].main.humidity);

        var iconcode2 = response2.list[16].weather[0].icon;
        var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png"
        $('#wicon2').attr('src', iconurl2);
        $(".date2").text(response2.list[16].dt_txt);
        $(".temp2").text(response2.list[16].main.temp);
        $(".humidity2").text(response2.list[16].main.humidity);

        var iconcode3 = response2.list[24].weather[0].icon;
        var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png"
        $('#wicon3').attr('src', iconurl3);
        $(".date3").text(response2.list[24].dt_txt);
        $(".temp3").text(response2.list[24].main.temp);
        $(".humidity3").text(response2.list[24].main.humidity);

        var iconcode4 = response2.list[32].weather[0].icon;
        var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png"
        $('#wicon4').attr('src', iconurl4);
        $(".date4").text(response2.list[32].dt_txt);
        $(".temp4").text(response2.list[32].main.temp);
        $(".humidity4").text(response2.list[32].main.humidity);

        var iconcode5 = response2.list[39].weather[0].icon;
        var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png"
        $('#wicon5').attr('src', iconurl5);
        $(".date5").text(response2.list[39].dt_txt);
        $(".temp5").text(response2.list[39].main.temp);
        $(".humidity5").text(response2.list[39].main.humidity);

        var lat = response2.city.coord.lat;
        var lon = response2.city.coord.lon;

        var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=dc915575c90b63326c2faf5ea7653a4c";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            response2 = response;
            $(".UV").text(response2.value);

            if (response2.value < 3) {
                $(".UV").css("background-color", "lightgreen");
            }
            else if (response2.value > 6) {
                $(".UV").css("background-color", "orange");
            }
            else {
                $(".UV").css("background-color", "yellow");
            }
        });
    });
}


var cities = [];
var response2 = "";

// This .on("click") function will trigger the AJAX Call
$("#find-city").on("click", function (event) {

    event.preventDefault();

    // This line will grab the text from the input box
    var city = $("#city-input").val().trim();
    var dubcity = false;
    for (let i = 0; i < cities.length; i++) {
        if (city === cities[i]) {
            dubcity = true;
        }
    }
    if (dubcity === false) {
        cities.push(city);
    }

    $("#btn-history").empty()
    // Loop through the city array
    for (var i = 0; i < cities.length; i++) {

        // dynamicaly generate buttons for each city in the array.
        var a = $("<button>");
        a.addClass("city");
        a.attr("data-name", cities[i]);
        a.text(cities[i]);
        // Add button to the HTML
        $("#btn-history").append(a);
        a.on("click", function () {
            var city = $(this).attr('data-name')
        
            var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=dc915575c90b63326c2faf5ea7653a4c";
            console.log(queryURL)
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                response2 = response;

                var iconcode = response2.list[0].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"
                $('#wicon').attr('src', iconurl);
                $(".cityName").html("<h1><strong>" + response2.city.name + "</strong> Weather Details</h1>");
                $(".date").text(response2.list[0].dt_txt);
                $(".temp").text(response2.list[0].main.temp);
                $(".humidity").text(response2.list[0].main.humidity);
                $(".wind").text(response2.list[0].wind.speed);

                var iconcode1 = response2.list[8].weather[0].icon;
                var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png"
                $('#wicon1').attr('src', iconurl1);
                $(".date1").text(response2.list[8].dt_txt);
                $(".temp1").text(response2.list[8].main.temp);
                $(".humidity1").text(response2.list[8].main.humidity);

                var iconcode2 = response2.list[16].weather[0].icon;
                var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png"
                $('#wicon2').attr('src', iconurl2);
                $(".date2").text(response2.list[16].dt_txt);
                $(".temp2").text(response2.list[16].main.temp);
                $(".humidity2").text(response2.list[16].main.humidity);

                var iconcode3 = response2.list[24].weather[0].icon;
                var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png"
                $('#wicon3').attr('src', iconurl3);
                $(".date3").text(response2.list[24].dt_txt);
                $(".temp3").text(response2.list[24].main.temp);
                $(".humidity3").text(response2.list[24].main.humidity);

                var iconcode4 = response2.list[32].weather[0].icon;
                var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png"
                $('#wicon4').attr('src', iconurl4);
                $(".date4").text(response2.list[32].dt_txt);
                $(".temp4").text(response2.list[32].main.temp);
                $(".humidity4").text(response2.list[32].main.humidity);

                var iconcode5 = response2.list[39].weather[0].icon;
                var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png"
                $('#wicon5').attr('src', iconurl5);
                $(".date5").text(response2.list[39].dt_txt);
                $(".temp5").text(response2.list[39].main.temp);
                $(".humidity5").text(response2.list[39].main.humidity);

                var lat = response2.city.coord.lat;
                var lon = response2.city.coord.lon;

                var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=dc915575c90b63326c2faf5ea7653a4c";

                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    response2 = response;

                    $(".UV").text(response2.value);

                    if (response2.value < 3) {
                        $(".UV").css("background-color", "lightgreen");
                    }
                    else if (response2.value > 6) {
                        $(".UV").css("background-color", "orange");
                    }
                    else {
                        $(".UV").css("background-color", "yellow");
                    }
                });
            });
        })
    }

    event.preventDefault();

    // create user object from submission
    var lastSearch = {
        city: $("#city-input").val().trim()
    };

    // set new submission
    localStorage.setItem("city", JSON.stringify(city));

    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=dc915575c90b63326c2faf5ea7653a4c";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        response2 = response;

        var iconcode = response2.list[0].weather[0].icon;
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png"
        $('#wicon').attr('src', iconurl);
        $(".cityName").html("<h1><strong>" + response2.city.name + "</strong> Weather Details</h1>");
        $(".date").text(response2.list[0].dt_txt);
        $(".temp").text(response2.list[0].main.temp);
        $(".humidity").text(response2.list[0].main.humidity);
        $(".wind").text(response2.list[0].wind.speed);

        var iconcode1 = response2.list[8].weather[0].icon;
        var iconurl1 = "http://openweathermap.org/img/w/" + iconcode1 + ".png"
        $('#wicon1').attr('src', iconurl1);
        $(".date1").text(response2.list[8].dt_txt);
        $(".temp1").text(response2.list[8].main.temp);
        $(".humidity1").text(response2.list[8].main.humidity);

        var iconcode2 = response2.list[16].weather[0].icon;
        var iconurl2 = "http://openweathermap.org/img/w/" + iconcode2 + ".png"
        $('#wicon2').attr('src', iconurl2);
        $(".date2").text(response2.list[16].dt_txt);
        $(".temp2").text(response2.list[16].main.temp);
        $(".humidity2").text(response2.list[16].main.humidity);

        var iconcode3 = response2.list[24].weather[0].icon;
        var iconurl3 = "http://openweathermap.org/img/w/" + iconcode3 + ".png"
        $('#wicon3').attr('src', iconurl3);
        $(".date3").text(response2.list[24].dt_txt);
        $(".temp3").text(response2.list[24].main.temp);
        $(".humidity3").text(response2.list[24].main.humidity);

        var iconcode4 = response2.list[32].weather[0].icon;
        var iconurl4 = "http://openweathermap.org/img/w/" + iconcode4 + ".png"
        $('#wicon4').attr('src', iconurl4);
        $(".date4").text(response2.list[32].dt_txt);
        $(".temp4").text(response2.list[32].main.temp);
        $(".humidity4").text(response2.list[32].main.humidity);

        var iconcode5 = response2.list[39].weather[0].icon;
        var iconurl5 = "http://openweathermap.org/img/w/" + iconcode5 + ".png"
        $('#wicon5').attr('src', iconurl5);
        $(".date5").text(response2.list[39].dt_txt);
        $(".temp5").text(response2.list[39].main.temp);
        $(".humidity5").text(response2.list[39].main.humidity);

        var lat = response2.city.coord.lat;
        var lon = response2.city.coord.lon;

        var queryURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=dc915575c90b63326c2faf5ea7653a4c";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            response2 = response;
            console.log(response2.value)
            $(".UV").text(response2.value);

            if (response2.value < 3) {
                $(".UV").css("background-color", "lightgreen");
            }
            else if (response2.value > 6) {
                $(".UV").css("background-color", "orange");
            }
            else {
                $(".UV").css("background-color", "yellow");
            }
        });
    });
});
