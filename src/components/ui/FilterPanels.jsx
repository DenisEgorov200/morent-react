import { FilterPanel } from '../FilterPanel/FilterPanel.jsx';
import { ArrowSwapVertical } from 'iconsax-react';
import { PrimaryButton } from './PrimaryButton.jsx';

const options = [
  {
    id: 0,
    title: 'Locations',
    description: 'select your city',
  },
  {
    id: 1,
    title: 'Date',
    description: 'select your date',
  },
  {
    id: 2,
    title: 'Time',
    description: 'select your time',
  },
];

export const FilterPanels = () => {
  return (
    <div className="relative grid grid-cols-2 pb-8 gap-x-36">
      <FilterPanel title="Pick - Up" options={options} />
      <PrimaryButton
        className="w-[60px] h-[60px] rounded-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        label={<ArrowSwapVertical size="17" color="#fff" />}
      />
      <FilterPanel title="Drop - Off" options={options} />
    </div>
  );
};
