const parseKelvinToCelsius = (n: number) => {
  const kelvin = 273.15;
  return Math.floor(n - kelvin);
};
export default parseKelvinToCelsius;
