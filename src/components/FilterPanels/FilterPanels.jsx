import { FilterPanel } from './FilterPanel.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';
import { filters } from 'constants/constants.jsx';

import { ArrangeVertical } from 'iconsax-react';

export const FilterPanels = () => {
  return (
    <div className="relative grid grid-cols-2 gap-x-36 max-2xl:grid-cols-1 max-2xl:gap-y-8">
      <FilterPanel title="Pick - Up" filters={filters} />
      <PrimaryButton className="w-[60px] h-[60px] rounded-ten absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ArrangeVertical size="17" color="#fff" />
      </PrimaryButton>
      <FilterPanel title="Drop - Off" filters={filters} />
    </div>
  );
};
