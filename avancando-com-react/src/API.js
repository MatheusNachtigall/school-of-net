import axios from "axios";

const getTodoPlaceholderAsync = async () => {
  return (await axios.get("https://jsonplaceholder.typicode.com/todos")).data;
};

const getTodoPlaceholderFetch = async () => {
  return fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
};

const getTodoPlaceholderAxios = async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.data);
};

const getWeather = async (city) => {
  console.log("getWeather: ", city);
  return axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=5e73d19c3a01edbfa87f62eb93eaf4ff&query=${city}`
    )
    .then((response) => response.data);
};

export {
  getTodoPlaceholderFetch,
  getTodoPlaceholderAxios,
  getTodoPlaceholderAsync,
  getWeather,
};
