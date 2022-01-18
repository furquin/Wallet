const ENDPOINT = 'https://economia.awesomeapi.com.br/json/all';

const fetchApi = () => (
  fetch(ENDPOINT)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchApi;
