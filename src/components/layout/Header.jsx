import { useNavigate } from 'react-router-dom';
import { SearchInput } from 'components/SearchInput/SearchInput.jsx';
import { headerIcons } from 'constants/constants.jsx';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between py-10 pl-[60px] pr-8 bg-white border-b-[1px] border-secondary-100">
      <div onClick={() => navigate('/')} className="flex items-center cursor-pointer">
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
        <li className="max-w-[46px] border-[1px] border-secondary-200 rounded-full overflow-hidden cursor-pointer">
          <img src="/avatar.jpg" alt="avatar" />
        </li>
      </ul>
    </header>
  );
};
