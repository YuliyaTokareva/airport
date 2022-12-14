const baseUrl = 'https://api.iev.aero/api/flights';
// eslint-disable-next-line
export const fetchFlightsList = () =>
  fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Faild to get events');
      }
      // eslint-disable-next-line
      return res.json();
    })
    .then((FlightsList) => FlightsList);
