type CityData = {
  city: string;
  countryCode: string;
};

interface Forecast {
  weather: [
    {
      description: string;
      main: string;
      icon: string;
    },
  ];
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}
interface Weather {
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    tempMax: number;
    tempMin: number;
  };
  weather: [
    {
      description: string;
      main: string;
      icon: string;
    },
  ];
  wind: {
    speed: number;
    deg: number;
  };
  name: string;
  visibility: number;
  sys: {
    country: string;
  };
}
