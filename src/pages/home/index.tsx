import { useEffect } from 'react';
import { NextPage } from 'next';

import {
  Background,
  Main,
  CoverLetter,
  Container,
  CityName,
  TemperatureIcon,
  Temperature,
  TemperatureDetails,
  Items,
  ListItems,
  Weather,
  Text,
} from 'styles/styled';
import Search from 'components/search';
import parseKelvinToCelsius from 'utils/parseKelvinToCelsius';
import useWeather from 'hook/useWeather';
import useGeo from 'hook/useGeo';

export const PronosPage: NextPage = () => {
  const { handleWeather, weather } = useWeather();
  const { handleOnSearch, citiesSearch } = useGeo();

  const onCitySelected = (city: string) => {
    handleWeather(city);
  };

  useEffect(() => {
    handleWeather('buenos aires');
  }, []);

  return (
    <Background>
      <Main>
        <Search
          handleOnSearch={handleOnSearch}
          cities={citiesSearch}
          onCitySelected={onCitySelected}
        />

        <CoverLetter>
          <Container>
            <Weather>
              <CityName>
                {weather?.name}, {weather?.sys.country}
              </CityName>
              <Text>{weather?.weather[0].description}</Text>
            </Weather>
            <Temperature>{weather && `${parseKelvinToCelsius(weather.main.temp)}°C`}</Temperature>
          </Container>
          <Container>
            <TemperatureIcon src={`/icons/${weather?.weather[0].icon}.png`} />
            <TemperatureDetails>
              <ListItems>
                <Items>Feels like</Items>
                <Items>Wind</Items>
                <Items>Humudity</Items>
                <Items>Pressure</Items>
              </ListItems>
              <ListItems>
                <Items>{weather?.main.feels_like}°C</Items>
                <Items>{weather && (weather.wind.speed / 1000).toFixed(4)} m/s</Items>
                <Items>{weather?.main.humidity}%</Items>
                <Items>{weather?.main.pressure} hPa</Items>
              </ListItems>
            </TemperatureDetails>
          </Container>
        </CoverLetter>
      </Main>
    </Background>
  );
};

export default PronosPage;
