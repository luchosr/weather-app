import { formatTemperature } from '../../helpers';
import { Weather } from '../../hooks/useWeather';

type WeatherDetailProps = {
  weather: Weather;
};

export default function WeatherDetail({ weather }: WeatherDetailProps) {
  return (
    <div>
      <h2>Clima de : {weather.name}</h2>
      <p>Temperatura: {formatTemperature(weather.main.temp)} °C</p>
      <div className="">
        <p>
          Min: <span>{formatTemperature(weather.main.temp_min)} °C</span>
        </p>
        <p>
          Max: <span>{formatTemperature(weather.main.temp_max)} °C</span>
        </p>
      </div>
    </div>
  );
}
