import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '@/store/filteredCars.js';
import { v4 as uuidv4 } from 'uuid';

import { SearchNormal1, Setting4 } from 'iconsax-react';

export const SearchInput = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filteredCars);
  const { filteredCars } = useSelector((state) => state.filteredCars);

  return (
    <div className="relative flex items-center justify-between w-full px-5 py-2.5 border-[1px] border-primary-100 rounded-3xl">
      <SearchNormal1 className="mr-5" size="24" color="#596780" />
      <input
        className="w-full font-medium text-secondary-400 text-sm placeholder:text-secondary-400 focus:outline-none"
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        type="text"
        placeholder="Search something here"
      />
      <Setting4 className="ml-5" size="24" color="#596780" />
      <ul className="absolute left-0 top-[50px] w-full max-h-60 overflow-auto bg-white rounded-b">
        {searchValue &&
          filteredCars.map((cars) => (
            <li key={uuidv4()} className="px-5 py-2.5 cursor-pointer hover:bg-secondary-100">
              <p className="font-medium capitalize">
                {cars.make} {cars.model}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
