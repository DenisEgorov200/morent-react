import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CatalogCard } from './CatalogCard.jsx';
import { getCarDesc } from 'utils/requests.js';
import { MinimalButton } from 'ui/MinimalButton.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';

export const Catalog = () => {
  const [carDesc, setCardDesc] = useState([]);
  const [count, setCount] = useState(8);

  const handleShowMore = () => {
    setCount(count + 4);
  };

  useEffect(() => {
    getCarDesc().then((data) => setCardDesc(data));
  }, []);

  return (
    <div className="pb-16 pt-8">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-secondary-300">Popular car</h4>
        <MinimalButton label="View all" />
      </div>
      <div className="grid grid-cols-4 gap-8 mb-8">
        {carDesc.map((desc) => <CatalogCard key={uuidv4()} desc={desc} />).splice(0, 4)}
      </div>
      <div className="flex items-center justify-start mb-5">
        <h4 className="font-semibold text-secondary-300">Recommendation car</h4>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {carDesc.map((desc) => <CatalogCard key={uuidv4()} desc={desc} />).splice(0, count)}
      </div>
      <div className="relative flex items-center justify-center mt-16">
        {count <= carDesc.length && (
          <PrimaryButton label="Show more car" onClick={() => handleShowMore()} />
        )}
        <span className="absolute right-0 text-sm font-semibold text-secondary-300">
          {carDesc.length} car
        </span>
      </div>
    </div>
  );
};
