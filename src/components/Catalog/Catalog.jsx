import { MinimalButton } from '../ui/MinimalButton.jsx';
import { CatalogCard } from './CatalogCard.jsx';

export const Catalog = () => {
  return (
    <div>
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
    </div>
  );
};
