const loadEvents = (url: string) => fetch(url).then((res) => res.json());

export default loadEvents;
