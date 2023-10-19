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
