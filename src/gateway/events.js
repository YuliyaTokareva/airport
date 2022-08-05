const baseUrl = "https://62ac36829fa81d00a7ac26c0.mockapi.io/api/v1/calendar";
export const fetchEventList = () =>
  fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Faild to get events");
      }
      // eslint-disable-next-line
       return res.json();
    })
    .then((eventList) => eventList);

export const createEvent = (eventData) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to create event");
    }
  });

export const deleteEvent = (eventId) =>
  fetch(`${baseUrl}/${eventId}`, {
    method: "DELETE",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Faild to delete event");
    }
  });
