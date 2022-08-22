const baseUrl = 'https://api.iev.aero/api/flights';
export const fetchFlightsList = (data) =>
  fetch(`${baseUrl}/${data}`).then((res) => {
    if (!res.ok) {
      throw new Error('Faild to get events');
    }
    // eslint-disable-next-line
    return res.json();
  });
