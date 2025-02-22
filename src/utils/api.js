import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";
const BASE_URL = "https://youtube138.p.rapidapi.com";

// const options = {
//   params: { hl: "en", gl: "US" },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY",
//     "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
//   },
// };

const options = {
  // method: 'GET',
  // url: 'https://youtube138.p.rapidapi.com/auto-complete/',
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY ,
    'x-rapidapi-host': 'youtube138.p.rapidapi.com'
  }
};

axios.get("YOUR_API_URL", options)
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
export const fetchDataFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
