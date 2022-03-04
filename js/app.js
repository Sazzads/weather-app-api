const API_KEY = `9e7dd9b651741b73c5307ce1d1dce21b`;
const searchTempareture = () => {
    const city = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemparature(data));
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
    setInnerText('city', temparature.name);
    setInnerText('temparature', temparature.main.temp);
    setInnerText('condition', temparature.weather[0].main);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}