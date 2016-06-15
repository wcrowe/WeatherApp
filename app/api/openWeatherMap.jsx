import axios from 'axios';
const API_KEY = '58ff26703db7d437472f75d6c630633c';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`;

export default {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(res => {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
       // return res.data.main.temp;
        return {city: res.data.name, temp: res.data.main.temp}
      }
    }, res => {
      throw new Error(res.data.message);
    });
  }
};