import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getCarDesc } from 'utils/requests.js';
import filteredCars, { setFilteredCars } from '@/store/filteredCars.js';

import { Layout } from 'components/layout/Layout.jsx';
import { Reviews } from 'components/Reviews/Reviews.jsx';
import { InfoCar } from 'components/InfoCar/InfoCar.jsx';
import { CarRow } from 'components/CarRow/CarRow.jsx';

export const CarDetail = () => {
  const dispatch = useDispatch();
  const [carDesc, setCarDesc] = useState([]);

  useEffect(() => {
    getCarDesc().then((data) => setCarDesc(data));

    dispatch(setFilteredCars(carDesc));
  }, []);

  return (
    <Layout showSidebar={true}>
      <InfoCar />
      <Reviews />
      <div className="py-8">
        <CarRow cars={carDesc} />
      </div>
      <div className="py-8">
        <CarRow cars={carDesc} />
      </div>
    </Layout>
  );
};
