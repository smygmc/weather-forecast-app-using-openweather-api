const url="https://api.openweathermap.org/data/2.5/"
const key="bf0fc50677be01284183ecdff34cdb5d"

const setQuery= (e) =>{
    if(e.keyCode=='13')
        getResult(searchBar.value)
}
const getResult=(cityName)=>{

    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=>{return weather.json()})
    .then(displayResult)
}

const displayResult=(weather)=>{
    let city=document.querySelector('.city')
    city.innerText=`${weather.name},${weather.sys.country}`

    let temp=document.querySelector('.temp')
    temp.innerText=`${Math.round(weather.main.temp)}°C`

    let desc=document.querySelector('.desc')
    desc.innerText=weather.weather[0].description

    let minMax=document.querySelector('.minMax')
    minMax.innerText=`${Math.round(weather.main.temp_min)}°C/${Math.round(weather.main.temp_max)}°C`

}
const searchBar=document.getElementById('searchBar')
searchBar.addEventListener('keypress',setQuery)
