var axios = require('axios');
//e2b6434605bdfb9771e2c9b15fca0c8c - API Key
//http://api.openweathermap.org/data/2.5/weather?uk&appid=e2b6434605bdfb9771e2c9b15fca0c8c&units=imperial


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?uk&appid=e2b6434605bdfb9771e2c9b15fca0c8c&units=imperial';

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {

      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
