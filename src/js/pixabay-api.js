import axios from 'axios';

const BASE_URL = 'https://pixabay.com';
const PATH = '/api/';
const PARAMS = {
  key: '43828991-79d1a60f3e87126db3a63842a',
  imageType: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

const getSearchParams = searchInputValue => {
  const parameters = new URLSearchParams(PARAMS);
  parameters.append('q', searchInputValue);
  return parameters;
};

export const fetchImages = async searchInputValue => {
  const url = `${BASE_URL}${PATH}?${getSearchParams(searchInputValue)}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.status : error.message);
  }
};
// return fetch(url).then(response => {
//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// });
