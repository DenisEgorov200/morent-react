import { sidebarOptions } from 'constants/constants.jsx';
import { CustomCheckbox } from 'ui/CustomCheckbox.jsx';
import { CustomInputRange } from 'ui/CustomInputRange.jsx';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-14 min-w-[300px] p-8 bg-white border-r-[1px] border-secondary-100">
      {sidebarOptions.map((option) => (
        <div key={option.id} className="flex flex-col">
          <h6 className="text-xs text-secondary-300 font-semibold uppercase tracking-[2px] mb-7">
            {option.title}
          </h6>
          <ul className="flex flex-col gap-8">
            {option.options?.map((filter) => (
              <li key={filter.id}>
                <label className="flex items-center cursor-pointer">
                  <CustomCheckbox className="mr-2.5" />
                  <p className="text-xl text-secondary-400 font-semibold">
                    {filter.label}
                    <span className="text-secondary-300 ml-2">(10)</span>
                  </p>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-col">
        <h6 className="text-xs text-secondary-300 font-semibold uppercase tracking-[2px] mb-7">
          Price
        </h6>
        <ul className="flex flex-col gap-8">
          <li>
            <label className="flex flex-col">
              <CustomInputRange className="mb-3" />
              <span className="text-xl text-secondary-400 font-semibold">Max. $100.00</span>
            </label>
          </li>
        </ul>
      </div>
    </aside>
  );
};
