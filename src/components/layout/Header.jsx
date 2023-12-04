import { SearchInput } from 'ui/SearchInput.jsx';
import { headerIcons } from 'constants/constants.jsx';

export const Header = () => {
  return (
    <header className="flex items-center justify-between py-10 pl-[60px] pr-8 bg-white">
      <div className="flex items-center">
        <h1 className="title mr-16">MORENT</h1>
        <SearchInput />
      </div>
      <ul className="flex">
        {headerIcons.map((icon) => (
          <li
            key={icon.name}
            className="p-2.5 border-[1px] border-secondary-200 rounded-full cursor-pointer mr-5">
            {icon.item}
          </li>
        ))}
        <li className="max-w-[46px] border-[1px] border-secondary-200 rounded-full cursor-pointer">
          <img src="/avatar.jpg" alt="avatar" />
        </li>
      </ul>
    </header>
  );
};
