const BASE_URL = 'https://api.atmosphereapp.ru';

const fetchLanguages = () => {
  return fetch(
    `${BASE_URL}/languages`
  ).then((res) => res.json());
};


export { fetchLanguages };
