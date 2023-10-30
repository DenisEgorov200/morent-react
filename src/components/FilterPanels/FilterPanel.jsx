import { Select } from 'ui/Select.jsx';
import { Mark } from 'ui/Mark.jsx';

export const FilterPanel = ({ title, filters }) => {
  return (
    <div className="py-7 px-12 bg-white rounded-[10px] max-md:p-4">
      <div className="flex items-center mb-4">
        <Mark />
        <span className="text-secondary-500 font-semibold capitalize ml-2">{title}</span>
      </div>
      <div className="grid grid-cols-3">
        {filters.map((filter) => (
          <div
            key={filter.id}
            className="flex flex-col justify-center border-r-[1px] border-secondary-200 px-6 first:pl-0 last:pr-0 last:border-0 max-md:px-2">
            <span className="text-secondary-500 font-bold mb-2 max-md:text-sm">{filter.title}</span>
            <Select placeholder={filter.description} options={filter.options} />
          </div>
        ))}
      </div>
    </div>
  );
};
