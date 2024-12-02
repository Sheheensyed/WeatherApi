const weather = async () => {
    console.log(result.value);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=5fe36b192ffd1c36dffb6752bc1722b2`)

    // console.log(response);

    response.json().then((item) => {
        console.log(item);

        let place = item.name
        console.log(place);

        let wSpeed = item.wind.speed
        console.log(wSpeed);

        let humidity = item.main.humidity
        console.log(humidity);

        let visibility = item.visibility
        console.log(visibility);

        let time = item.timezone
        console.log(time);

        let temp = item.main.temp
        console.log(temp);

        let celsius = (temp - 273.15).toFixed(2)
        console.log(celsius);


        result.innerHTML = `
         <div class="col-8">
                        <h1 class="ms-2 mt-3 text-dark">Weather</h1>
                        <h4 class="text-secondary py-4 mt-5">Place : <span>${place}</span></h4>
                        <h4 class="text-secondary py-4 mt-5">Wind speed : <span>${wSpeed}</span></h4>
                        <h4 class="text-secondary py-4 mt-5">temperature : <span>${celsius} C</span></h4>

                    </div>


                    <div class="col-4">
                       <div class="d-flex justify-content-center p-2 me-5">
                            <input type="text" id="search" placeholder="Place" class=" rounded-pill me-2">
                            <button onclick="weather()" class="btn btn-warning rounded-pill text-dark">Search</button>
                        </div>
                        <h4 class="text-secondary py-4 mt-5">Visibility : <span>${visibility}</span></h4>
                        <h4 class="text-secondary py-4 mt-5">Time zone : <span>${time}</span></h4>
                        <h4 class="text-secondary py-4 mt-5">Humidity : <span>${humidity}</span></h4>
                    </div>
        `
        if (celsius >= 25) {
            result.style.backgroundImageurl('https://upload.wikimedia.org/wikipedia/commons/b/b0/Winter_forest_silver.jpg')
        }


    })

}