const API_URL = `http://api.openweathermap.org/data/2.5/`;
const APP_ID = `&appid=22236031f01e78ac9ea5af5b0b226854`;

export const TEMP_REQUEST = `TEMP_REQUEST`;

export function fetchTemp(city, cnt = 3) {
  let request = fetch(`${API_URL}forecast/daily?q=${city}&mode=json&units=metric&cnt=${cnt}${APP_ID}`)
    .then((res) => res.json());

  return {
    type: TEMP_REQUEST,
    payload: request
  };
}
