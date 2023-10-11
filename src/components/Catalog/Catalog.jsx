import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CatalogCard } from './CatalogCard.jsx';
import { getCarDesc, getCarImg } from '../../utils/requests.js';
import { MinimalButton } from '../ui/MinimalButton.jsx';
import { PrimaryButton } from '../ui/PrimaryButton.jsx';

export const Catalog = () => {
  const [carDesc, setCardDesc] = useState([]);

  useEffect(() => {
    getCarDesc().then((data) => setCardDesc(data));
  }, []);

  return (
    <div className="pb-16 pt-8">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-secondary-300">Popular car</h4>
        <MinimalButton label="View all" />
      </div>
      <div className="grid grid-cols-4 gap-8">
        {carDesc.map((desc) => <CatalogCard key={uuidv4()} desc={desc} />).splice(0, 4)}
      </div>
      <div className="relative flex items-center justify-center mt-16">
        <PrimaryButton label="Show more car" />
        <span className="absolute right-0 text-sm font-semibold text-secondary-300">120 car</span>
      </div>
    </div>
  );
};
