import { Mark } from '../ui/Mark.jsx';
import { ArrowDown2 } from 'iconsax-react';

export const FilterPanel = ({ title, options }) => {
  return (
    <div className="py-7 px-12 bg-white rounded-[10px]">
      <div className="flex items-center mb-4">
        <Mark />
        <span className="text-secondary-500 font-semibold capitalize ml-2">{title}</span>
      </div>
      <div className="grid grid-cols-3">
        {options.map((option) => (
          <div
            key={option.id}
            className="flex flex-col justify-center border-r-[1px] border-secondary-200 px-6 first:pl-0 last:pr-0 last:border-0">
            <span className="text-secondary-500 font-bold mb-2">{option.title}</span>
            <div className="flex items-center cursor-pointer">
              <p className="text-secondary-300 text-xs mr-2">{option.description}</p>
              <ArrowDown2 size="14" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
