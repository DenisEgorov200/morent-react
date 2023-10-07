import { Heart, Notification, Setting2 } from 'iconsax-react';
import { SearchInput } from '../ui/SearchInput.jsx';

const icons = [
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

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 pl-[60px] pr-8 bg-white">
      <div className="flex items-center">
        <h1 className="title mr-16">MORENT</h1>
        <SearchInput />
      </div>
      <div>
        <ul className="flex">
          {icons.map((icon) => (
            <li
              key={icon.name}
              className="p-2.5 border-[1px] border-secondary-200 rounded-full cursor-pointer mr-5">
              {icon.item}
            </li>
          ))}
          <li className="border-[1px] border-secondary-200 rounded-full cursor-pointer">
            <img className="w-full h-full" src="/avatar.png" alt="avatar" />
          </li>
        </ul>
      </div>
    </header>
  );
};
