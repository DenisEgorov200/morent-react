import { FilterPanel } from '../FilterPanel/FilterPanel.jsx';
import { ArrowSwapVertical } from 'iconsax-react';
import { PrimaryButton } from './PrimaryButton.jsx';
import { filters } from '../../constants/constants.js';

export const FilterPanels = () => {
  return (
    <div className="relative grid grid-cols-2 gap-x-36">
      <FilterPanel title="Pick - Up" filters={filters} />
      <PrimaryButton
        className="w-[60px] h-[60px] rounded-[10px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        label={<ArrowSwapVertical size="17" color="#fff" />}
      />
      <FilterPanel title="Drop - Off" filters={filters} />
    </div>
  );
};
