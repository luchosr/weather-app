export default function useWeather() {
  const fetchWeather = () => {
    console.log('Fetching weather...');
  };

  return {
    fetchWeather,
  };
}
