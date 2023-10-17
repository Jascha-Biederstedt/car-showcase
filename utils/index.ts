export const fetchCars = async () => {
  const headers = {
    'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
};
