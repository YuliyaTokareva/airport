// const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2022, 6, 29, 10, 15),
//     dateTo: new Date(2022, 6, 29, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2020, 8, 16, 10, 15),
//     dateTo: new Date(2020, 8, 16, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2020, 8, 17, 10, 30),
//     dateTo: new Date(2020, 8, 17, 11, 30),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2020, 8, 25, 10, 30),
//     dateTo: new Date(2020, 8, 25, 11, 0),
//   },
// ];

//export default events;

const baseUrl = 'https://62ac36829fa81d00a7ac26c0.mockapi.io/api/v1/calendar';

export const fetchEventList = () => {
  return fetch(baseUrl)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(eventList => {
      return eventList.map(({ _id, ...event }) => ({ id: _id, ...event }));
    });
};

export const createEvent = eventData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Faild to create task');
    }
  });
};
