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
