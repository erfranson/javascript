//Ajax
//Ajax stands for Asynchronous Javascript and xml
//API = Aplication Programming Interface
// to be able to access apis from a different origin you have to implement cors on your server

//with promises 
function getWeather(woeid){
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
.then(result => {
    return result.json();
})
.then(data => {
    const fahrenheit = c => {
       return Math.round((c * 9/5) + 32);
    }  
    const today = data.consolidated_weather[0];
    console.log(`Temperatures in ${data.title} stay between ${fahrenheit(today.min_temp)}°F and ${fahrenheit(today.max_temp)}°F`)
})
.catch(error => {
    console.log('Sorry location could not be found!');
})
}

getWeather(2487956);
getWeather(44418);
// getWeather(44418123412); // error message


//with async await 
async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);

        const data = await result.json();
        const fahrenheit = c => {
            return Math.round((c * 9/5) + 32);
        }  
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures tomorrow in ${data.title} stay between ${fahrenheit(tomorrow.min_temp)}°F and ${fahrenheit(tomorrow.max_temp)}°F`)  
        return data     
    } catch (error) {
        alert(error);
    }

}

getWeatherAW(2487956);
let dataLondon; 
getWeatherAW(44418).then(data => {
    dataLondon = data
    console.log(dataLondon)
});

