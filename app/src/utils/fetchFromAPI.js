import axios from "axios";
const BASE_URL = "https://imdb8.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": '05cdf4142cmshdbb601358c3e29bp1683b6jsn00c55caeaece',
    "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}${url}`, options);
  return data;
};
