import { Mark } from '../ui/Mark.jsx';
import { Select } from '../ui/Select.jsx';

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
            <Select placeholder={option.description} />
          </div>
        ))}
      </div>
    </div>
  );
};
