import { Doctor, Visit } from "./types";

export const mockedVisits: Visit[] = [
  {
    id: "1234",
    datetime: "2022-12-01 14:45",
    place: "Gabinet 1",
    doctor: {
      id: "1",
      name: "dr. n. med. Artur Zaręba",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg",
    },
  },
  {
    id: "1235",
    datetime: "2022-12-07 11:00",
    place: "Gabinet 3",
    doctor: {
      id: "1",
      name: "lek. Aleksandra Trzebiatowska",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/female/16.jpg",
    },
  },
  {
    id: "1236",
    datetime: "2022-12-11 12:00",
    place: "Gabinet 3",
    doctor: {
      id: "1",
      name: "lek. Katarzyna Niemiec",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
    },
  },
  {
    id: "1237",
    datetime: "2022-12-11 12:00",
    place: "Gabinet 8",
    doctor: {
      id: "1",
      name: "lek. Dawid Piotrowski",
      thumbnail: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg",
    },
  },
];

export const mockedDoctors: Doctor[] = [
  {
    id: "1222",
    name: "dr. n. med. Artur Zaręba",
    thumbnail: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg",
  },
  {
    id: "1333",
    name: "lek. Aleksandra Trzebiatowska",
    thumbnail: "https://xsgames.co/randomusers/assets/avatars/female/16.jpg",
  },
  {
    id: "1444",
    name: "lek. Katarzyna Niemiec",
    thumbnail: "https://xsgames.co/randomusers/assets/avatars/female/32.jpg",
  },
  {
    id: "1555",
    name: "lek. Dawid Piotrowski",
    thumbnail: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg",
  },
];
