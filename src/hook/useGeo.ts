import { useCallback, useState } from 'react';

const apiKey = '9b24f7c7d8msh396e0054c555857p1460b8jsn74ba43aa05cd';
const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/';

const useGeo = () => {
  const [citiesSearch, setCitiesSearch] = useState<CityData[]>();

  const handleOnSearch = useCallback(async (city: string) => {
    const data = await fetch(`${BASE_URL}cities?minPopulation=1000000&namePrefix=${city}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
      },
    });
    const json = await data.json();
    setCitiesSearch(json.data);
  }, []);

  return { handleOnSearch, citiesSearch };
};

export default useGeo;
