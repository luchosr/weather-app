import axios from 'axios';
import { SearchType } from '../types';

export default function useWeather() {
  const fetchWeather = async (search: SearchType) => {
    const appId = 'f0c2e56a92ab26c9bd75d799b391b274';

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search?.city},${search?.country}&appid=${appId}`;

      const { data } = await axios.get(geoUrl);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchWeather,
  };
}
