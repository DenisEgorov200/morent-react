import { Heart, Notification, Setting2 } from 'iconsax-react';

export const filters = [
  {
    id: 0,
    title: 'Locations',
    description: 'Select your city',
    options: [
      { id: 0, label: 'Arizona' },
      { id: 1, label: 'New York' },
      { id: 2, label: 'Moscow' },
    ],
  },
  {
    id: 1,
    title: 'Date',
    description: 'Select your date',
    options: [
      { id: 0, label: 'Arizona' },
      { id: 1, label: 'New York' },
      { id: 2, label: 'Moscow' },
    ],
  },
  {
    id: 2,
    title: 'Time',
    description: 'Select your time',
    options: [
      { id: 0, label: 'Arizona' },
      { id: 1, label: 'New York' },
      { id: 2, label: 'Moscow' },
    ],
  },
];

export const headerIcons = [
  {
    name: 'heart',
    item: <Heart size="24" color="#596780" variant="Bold" />,
  },
  {
    name: 'notification',
    item: <Notification size="24" color="#596780" variant="Bold" />,
  },
  {
    name: 'setting2',
    item: <Setting2 size="24" color="#596780" variant="Bold" />,
  },
];

export const footerLinks = [
  {
    id: 0,
    title: 'About',
    links: ['How it works', 'Featured', 'Partnership', 'Bussiness Relation'],
  },
  {
    id: 1,
    title: 'Community',
    links: ['How it works', 'Featured', 'Partnership', 'Bussiness Relation'],
  },
  {
    id: 2,
    title: 'Socials',
    links: ['How it works ', 'Featured', 'Partnership', 'Bussiness Relation'],
  },
];

export const searchKeys = ['make', 'model'];

export const sidebarOptions = [
  {
    id: 0,
    title: 'Type',
    options: [
      { id: 0, label: 'Sport' },
      { id: 1, label: 'SUV' },
      { id: 2, label: 'MPV' },
      { id: 3, label: 'Sedan' },
      { id: 4, label: 'Coupe' },
      { id: 5, label: 'Hatchback' },
    ],
  },
  {
    id: 1,
    title: 'Capacity',
    options: [
      { id: 0, label: '2 Person' },
      { id: 1, label: '4 Person' },
      { id: 2, label: '6 Person' },
      { id: 3, label: '8 or More' },
    ],
  },
  {
    id: 2,
    title: 'Price',
    options: [
      { id: 0, label: '2 Person' },
      { id: 1, label: '4 Person' },
      { id: 2, label: '6 Person' },
      { id: 3, label: '8 or More' },
    ],
  },
];

export const reviews = [
  {
    id: 0,
    name: 'Alex Stanton',
    date: '21 July 2022',
    profession: 'CEO at Bukalapak',
    rating: 4,
    text: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
  },
  {
    id: 1,
    name: 'Skylar Dias',
    date: '20 July 2022',
    profession: 'CEO at Amazon',
    rating: 3,
    text: 'We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
  },
  {
    id: 2,
    name: 'Denis Egorov',
    date: '22 July 2022',
    profession: 'frontend developer at Google',
    rating: 5,
    text: 'We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.',
  },
];

export const ImgInfoCar = [
  { id: 0, src: 'gtr.png' },
  { id: 1, src: 'gtr.png' },
  { id: 2, src: 'gtr.png' },
];
