import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredCars } from '@/store/filteredCars.js';

import { getCarDesc } from 'utils/requests.js';
import { searchKeys } from 'constants/constants.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';
import { CarRow } from 'components/CarRow/CarRow.jsx';

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
      <div className="mb-8">
        <CarRow cars={carDesc} />
      </div>
      <div>
        <CarRow cars={filteredCars} count={count} />
      </div>
      <div className="relative flex items-center justify-center mt-16">
        {count <= carDesc.length && (
          <PrimaryButton onClick={() => handleShowMore()}>Show more car</PrimaryButton>
        )}
        <span className="absolute right-0 text-sm font-semibold text-secondary-300">
          {carDesc.length} car
        </span>
      </div>
    </div>
  );
};
