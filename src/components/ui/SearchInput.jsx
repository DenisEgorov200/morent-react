import { SearchNormal1, Setting4 } from 'iconsax-react';

export const SearchInput = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 py-2.5 border-[1px] border-primary-100 rounded-3xl">
      <SearchNormal1 className="mr-5" size="24" color="#596780" />
      <input
        className="w-full font-medium text-secondary-400 text-sm placeholder:text-secondary-400 focus:outline-none"
        type="text"
        placeholder="Search something here"
      />

      <Setting4 className="ml-5" size="24" color="#596780" />
    </div>
  );
};
