import { MinimalButton } from 'ui/MinimalButton.jsx';
import { CatalogCard } from 'components/Catalog/CatalogCard.jsx';
import { v4 as uuidv4 } from 'uuid';

export const CarRow = ({ cars, count }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-secondary-300">Popular car</h4>
        <MinimalButton label="View all" />
      </div>
      <div className="grid grid-cols-4 gap-8 max-xl:flex overflow-auto">
        {cars
          .map((desc) => <CatalogCard key={uuidv4()} desc={desc} id={uuidv4()} />)
          .splice(0, count ? count : 4)}
      </div>
    </>
  );
};
