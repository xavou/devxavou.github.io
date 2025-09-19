const weather_type_images = {
    "Clear": "images/clear.jpg",
    "Clouds": "images/clouds.jpg",
    "Haze": "images/haze.jpg",
    "Mist": "images/mist.jpg",
    "Rain": "images/rain.jpg",
    "Smoke": "images/smoke.jpg",
    "Snow": "images/snow.jpg",
    "Thunderstorm": "images/thunderstorm.jpg"
};

const temp_images = {
    "Hot": "images/hot.jpg",   // Celsius > 25
    "Okay": "images/okay.jpg", // Celsius 5-25
    "Cold": "images/cold.jpg"  // Celsius < 5
};


// DO NOT CHANGE THE FUNCTION SIGNATURE
function check_weather() {

    console.log("=== [START] check_weather() ===");

    //============================================================================
    // Task 1
    // Key in your own OpenWeatherMap.org API key (DO NOT SHARE IT WITH OTHERS)
    //============================================================================
    const weather_api_key = '15ddcf5bc572f1b26a1a9f5465415808';


    //============================================================================
    // Task 2
    // Retrieve the user input (city name) from <input>
    //============================================================================
    const city = 'Moscow'; // Default value, you need to replace this string with actual user input
    let cityName = document.getElementById("city").value;
    console.log(cityName);

    // DO NOT MODIFY THIS
    let api_endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}&units=metric`;


    axios.get(api_endpoint)
    .then(response => {
        // Inspect what's in the API response
        console.log(response.data);
        // console.log(response.data.weather);

        //============================================================================
        // Task 3
        // Retrieve the weather info (e.g. Rain, Clouds, etc.)
        //============================================================================
        
        // YOUR CODE GOES HERE
        // Make use of const weather_type_images (at the top)
        // console.log(response.data.weather.length);
        // console.log(response.data.weather);
        let weatherCond =  "";
        let weatherArr = [];
        let temp = 0;
        if (response.data.weather.length > 1) {
            weatherCond = response.data.weather;
            for (let weather of weatherCond) {
                weatherArr.push(weather.main);
            }
            temp = response.data.main.temp;
            console.log(weatherArr);
        } else {
            weatherArr.push(response.data.weather[0].main);
            weatherArr.push("");
            temp = response.data.main.temp;
            console.log(weatherArr);
            console.log(temp);
        }
        console.log(weatherCond);
        //======================================================================================
        // Task 4
        // Perform JavaScript DOM to reflect weather info and temperature info in the HTML page.
        //======================================================================================

        // YOUR CODE GOES HERE
        // Make use of const temp_images (at the top)
        let weatherCondPic2 = ''
        let weatherCondPic = weather_type_images[weatherArr[0]];
        if (weatherArr[1] != "") {
            weatherCondPic2 = weather_type_images[weatherArr[1]];
        }
        console.log(weatherCondPic);
        weatherImgs = document.getElementById('weather_images');
        console.log(document.getElementsByTagName('img')[1]);
        document.getElementsByTagName('img')[0].src = weatherCondPic;
        document.getElementsByTagName('img')[1].src = weatherCondPic2;
        let tempPic = "";
        if (temp > 25) {
            tempPic = temp_images["Hot"];
        } else if ( 5 <= temp && temp <= 25) {
            tempPic = temp_images["Okay"];
        } else {
            tempPic = temp_images["Cold"];
        }

        console.log(tempPic);
        document.getElementById('temperature_image').src = tempPic;
    })
    .catch(error => {
        console.log(error.message);
    })
    
    console.log("=== [END] check_weather() ===");
}
