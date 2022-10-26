import { FC, useState, ChangeEvent } from 'react';

import { Background, SearchInput, SearchButton, Paggination, List, Items } from './styled';

const Search: FC<ISearch> = ({ handleOnSearch, cities, onCitySelected }) => {
  const [city, setCity] = useState('');
  const [hidden, setHidden] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const toStr = String(event.currentTarget.value);

    setCity(toStr);
  };

  const handleSearch = () => {
    handleOnSearch(city);
    setHidden(false);
  };

  const handleCity = (city: string) => {
    onCitySelected(city);
    setHidden(true);
  };

  return (
    <Background>
      <SearchInput type="text" placeholder="City" onChange={handleChange} />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
      {cities && !hidden && (
        <Paggination>
          <List>
            {cities.map((city, index) => {
              return (
                <Items key={index} onClick={(e) => handleCity(city.city)}>
                  {city.city},{city.countryCode}
                </Items>
              );
            })}
          </List>
        </Paggination>
      )}
    </Background>
  );
};

export default Search;
