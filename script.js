let searchCity= document.getElementById('searchCity');
let city= document.getElementById('city');
let temperature= document.getElementById('temperature');
let cloud= document.getElementById('clouds');
let humidity= document.getElementById('humidity');
let pressure= document.getElementById('pressure');
let description= document.querySelector('p');
let form= document.querySelector('form');
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(searchCity.value !== ''){
        q=searchCity.value
        infoWeather(q);
    }
})
 function infoWeather (q){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=key`).then((res)=>res.json())
    .then(data=>{
            if(data.cod == 200){
                city.querySelector('figcaption').innerText =data.name
                city.querySelector('img').src= `https://flagsapi.com/${data.sys.country}/flat/64.png`
                temperature.querySelector('img').src= `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
                description.innerText = data.weather[0].description
                cloud.innerText= `${data.clouds.all}%`
                humidity.innerText= `${data.main.humidity}%`
                pressure.innerText= `${data.main.pressure}HPa`
            } else{
                alert('City Not found')
            }
            searchCity.value = ""
    })  
}