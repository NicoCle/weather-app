import { useCallback, useState } from 'react';

const apiKey = '433eb8014122e9fdfcc3a56d3ae4f888';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const useWeather = () => {
  const [weather, setWeather] = useState<Weather>();

  const handleWeather = useCallback(async (city: string) => {
    const currentWeatherFetch = await fetch(`${BASE_URL}weather?q=${city}&appid=${apiKey}`);

    const weatherResponse = await currentWeatherFetch.json();

    setWeather(weatherResponse);
  }, []);

  return { handleWeather, weather };
};

export default useWeather;
