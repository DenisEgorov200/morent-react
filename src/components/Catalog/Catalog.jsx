import { MinimalButton } from '../ui/MinimalButton.jsx';
import { CatalogCard } from './CatalogCard.jsx';
import { PrimaryButton } from '../ui/PrimaryButton.jsx';

export const Catalog = () => {
  return (
    <div className="pb-16 pt-8">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-secondary-300">Popular car</h4>
        <MinimalButton label="View all" />
      </div>
      <div className="grid grid-cols-4 gap-x-8">
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
      <div className="relative flex items-center justify-center mt-16">
        <PrimaryButton label="Show more car" />
        <span className="absolute right-0 text-sm font-semibold text-secondary-300">120 car</span>
      </div>
    </div>
  );
};
