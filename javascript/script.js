const apikey="44f1ad20775fd07ae228c1dff14f95b4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const Weatherimg=document.querySelector(".weatherimg");

async function checkwheather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`)
    var data= await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temputer").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humiditypc").innerHTML=data.main.humidity + "%";
    document.querySelector(".windspeedkmh").innerHTML=data.wind.speed +"km/h";

    if(data.weather[0].main=="Clear"){
        Weatherimg.src="images/clear.png";
    }
    else if(data.weather[0].main=="Clouds"){
        Weatherimg.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        Weatherimg.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Humidity"){
        Weatherimg.src="images/humidity.png";
    }
    else if(data.weather[0].main=="Mist"){
        Weatherimg.src="images/mist.png";
    }
    else if(data.weather[0].main=="Rain"){
        Weatherimg.src="images/rain.png";
    }
    else if(data.weather[0].main=="Snow"){
        Weatherimg.src="images/snow.png";
    };
    document.querySelector(".container").style.display="block";
    document.querySelector(".msg").style.display="none"
};
searchbtn.addEventListener("click", ()=>{
    checkwheather(searchbox.value);
});

