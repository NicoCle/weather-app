interface ISearch {
  handleOnSearch: (city: string) => void;
  onCitySelected: (city: string) => void;
  cities: CityData[] | undefined;
}
