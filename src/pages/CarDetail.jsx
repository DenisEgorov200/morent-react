import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { getCarDesc } from 'utils/requests.js';
import { setFilteredCars } from '@/store/filteredCars.js';

import { Layout } from 'components/layout/Layout.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';
import { MinimalButton } from 'ui/MinimalButton.jsx';
import { CatalogCard } from 'components/Catalog/CatalogCard.jsx';

import { ArrowDown2 } from 'iconsax-react';

export const CarDetail = () => {
  const dispatch = useDispatch();
  const [carDesc, setCarDesc] = useState([]);

  useEffect(() => {
    getCarDesc().then((data) => setCarDesc(data));

    dispatch(setFilteredCars(carDesc));
  }, []);

  return (
    <Layout showSidebar={true}>
      <div className="grid grid-cols-2 gap-x-11 mb-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-3 p-6 bg-primary-500 text-white font-medium rounded-ten max-md:hidden">
            <div className="max-w-[400px]">
              <h2 className="text-3xl font-semibold mb-4">
                Sports car with the best design and acceleration
              </h2>
              <p className="max-w-[284px] mb-8">
                Safety and comfort while driving a futuristic and elegant sports car
              </p>
            </div>
            <div className="flex justify-center">
              <img src="/herocar.png" alt="car" />
            </div>
          </div>
          <div>
            <img src="/car.png" alt="car" />
          </div>
          <div>
            <img src="/car.png" alt="car" />
          </div>
          <div>
            <img src="/car.png" alt="car" />
          </div>
        </div>
        <div className="px-6 pt-6 pb-8 bg-white rounded-ten text-secondary-400">
          <h2 className="text-3xl text-secondary-500 font-bold">Nissan GT - R</h2>
          <div className="flex items-center mb-8">
            <span className="mr-2">*****</span>
            <p className="text-sm font-medium">440+ Reviewer</p>
          </div>
          <p className="text-xl leading-10 mb-8">
            NISMO has become the embodiment of Nissan's outstanding performance, inspired by the
            most unforgiving proving ground, the "race track".
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-11 mb-16">
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">type car</span>
              <span className="text-xl font-semibold">sport</span>
            </div>
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">steering</span>
              <span className="text-xl font-semibold">manual</span>
            </div>
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">capacity</span>
              <span className="text-xl font-semibold">2 person</span>
            </div>
            <div className="flex items-center justify-between capitalize">
              <span className="text-xl text-secondary-300">gasoline</span>
              <span className="text-xl font-semibold">70L</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-secondary-300 font-bold">
              <p>
                <span className="text-2xl text-secondary-500">$80.00/</span> days
              </p>
              <p className="line-through">$100.00</p>
            </div>
            <PrimaryButton>Rent Now</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-ten">
        <div className="flex items-center mb-8">
          <h2 className="text-xl text-secondary-500 font-semibold mr-3">Reviews</h2>
          <PrimaryButton className="p-0">13</PrimaryButton>
        </div>
        <ul className="flex flex-col items-center gap-6">
          <li className="flex">
            <div className="mr-4">
              <div className="max-w-[46px] rounded-full overflow-hidden">
                <img src="/avatar.jpg" alt="avatar" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h6 className="text-xl text-secondary-500 font-bold">Alex Stanton</h6>
                <span className="text-sm text-secondary-300 font-medium">21 July 2022</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-secondary-300 font-medium">CEO at Bukalapak</p>
                <span>*****</span>
              </div>
              <p className="text-sm text-secondary-400 leading-7">
                We are very happy with the service from the MORENT App. Morent has a low price and
                also a large variety of cars with good and comfortable facilities. In addition, the
                service provided by the officers is also very friendly and very polite.
              </p>
            </div>
          </li>
          <li className="flex">
            <div className="mr-4">
              <div className="max-w-[46px] rounded-full overflow-hidden">
                <img src="/avatar.jpg" alt="avatar" className="w-full" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-1">
                <h6 className="text-xl text-secondary-500 font-bold">Alex Stanton</h6>
                <span className="text-sm text-secondary-300 font-medium">21 July 2022</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-secondary-300 font-medium">CEO at Bukalapak</p>
                <span>*****</span>
              </div>
              <p className="text-sm text-secondary-400 leading-7">
                We are very happy with the service from the MORENT App. Morent has a low price and
                also a large variety of cars with good and comfortable facilities. In addition, the
                service provided by the officers is also very friendly and very polite.
              </p>
            </div>
          </li>
          <MinimalButton className="items-center text-secondary-300">
            Show all <ArrowDown2 size="16" color="#90A3BF" className="ml-2" />
          </MinimalButton>
        </ul>
      </div>
      <div className="flex items-center justify-between mt-8 mb-5">
        <h4 className="font-semibold text-secondary-300">Recent car</h4>
        <MinimalButton>View all</MinimalButton>
      </div>
      <div className="grid grid-cols-4 gap-8 mb-8 max-xl:flex overflow-auto">
        {carDesc
          .map((desc) => <CatalogCard key={uuidv4()} desc={desc} id={uuidv4()} />)
          .splice(0, 4)}
      </div>
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-secondary-300">Recomendation car</h4>
        <MinimalButton>View all</MinimalButton>
      </div>
      <div className="grid grid-cols-4 gap-8 mb-8 max-xl:flex overflow-auto">
        {carDesc
          .map((desc) => <CatalogCard key={uuidv4()} desc={desc} id={uuidv4()} />)
          .splice(0, 4)}
      </div>
    </Layout>
  );
};
