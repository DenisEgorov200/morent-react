import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { CatalogCard } from './CatalogCard.jsx';
import { getCarDesc } from 'utils/requests.js';
import { searchKeys } from 'constants/constants.jsx';
import { MinimalButton } from 'ui/MinimalButton.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';
import { setFilteredCars } from '@/store/filteredCars.js';

export const Catalog = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.filteredCars);
  const [carDesc, setCarDesc] = useState([]);
  const [count, setCount] = useState(8);

  const handleShowMore = () => {
    setCount(count + 4);
  };

  useEffect(() => {
    getCarDesc().then((data) => setCarDesc(data));

    dispatch(setFilteredCars(carDesc));
  }, [searchValue]);

  const filteredCars = carDesc.filter((car) => {
    return searchKeys.some((key) => car[key].toLowerCase().includes(searchValue));
  });

  return (
    <div className="pb-16 pt-8">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-secondary-300">Popular car</h4>
        <MinimalButton label="View all" />
      </div>
      <div className="grid grid-cols-4 gap-8 mb-8 max-xl:flex overflow-auto">
        {carDesc
          .map((desc) => <CatalogCard key={uuidv4()} desc={desc} id={uuidv4()} />)
          .splice(0, 4)}
      </div>
      <div className="flex items-center justify-start mb-5">
        <h4 className="font-semibold text-secondary-300">Recommendation car</h4>
      </div>
      <div className="grid grid-cols-4 gap-8 max-xl:grid-cols-2 max-md:grid-cols-1">
        {filteredCars
          .map((desc) => <CatalogCard key={uuidv4()} desc={desc} id={uuidv4()} />)
          .splice(0, count)}
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
