let link = "http://api.weatherstack.com/current?access_key=717a7d88e5554679c270f7e3b535df9e";
const button = document.querySelector("button")
let country = document.querySelector(".country");
let city = document.querySelector(".city");
let weather_description = document.querySelector(".weather_description")
let temperature = document.querySelector(".temperature_num");
let symboltemp = document.querySelector(".temperature");
let cloudcover = document.querySelector(".cloudcover");
let wind_speed = document.querySelector(".wind_speed");
let time = document.querySelector(".time")

async function Server(){
  try{
      button.addEventListener("click", async function(){
      input = document.querySelector("input").value;     
      let response = await fetch(`${link}&query=${input}`);
      let data = await response.json();
      console.log(data);

      country.innerHTML = data.location.country;
      city.innerHTML = data.location.name;
      weather_description.innerHTML = `<img src="./img/${data.current.weather_descriptions[0]}.png" alt="">`;
      temperature.innerHTML = data.current.temperature;
      symboltemp.innerHTML = `°C`;
      cloudcover.innerHTML = `cloudcover ${data.current.cloudcover}%`;
      wind_speed.innerHTML = `wind speed ${data.current.wind_speed}km/h`;
      time.innerHTML = `Time ${data.location.localtime}`;

      return false;
    })
    
  }catch(e){
    console.log("Error", e)
  }
}

Server()