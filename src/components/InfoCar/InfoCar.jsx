import { useSelector } from 'react-redux';
import { InfoCarCarousel } from 'components/InfoCar/InfoCarCarousel.jsx';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';

import { Heart } from 'iconsax-react';

export const InfoCar = () => {
  const { currentCar } = useSelector((state) => state.currentCar);

  const OPTIONS = {};
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="grid grid-cols-2 gap-x-11 mb-8">
      <InfoCarCarousel slides={SLIDES} options={OPTIONS} text={currentCar} />
      <div className="relative px-6 pt-6 pb-8 bg-white rounded-ten text-secondary-400">
        <Heart
          size="24"
          variant="Bold"
          color="#ED3F3F"
          className="absolute top-[24px] right-[24px] cursor-pointer"
        />
        <h2 className="text-3xl text-secondary-500 font-bold capitalize">
          {currentCar.make} {currentCar.model}
        </h2>
        <div className="flex items-center mb-8">
          <span className="mr-2">*****</span>
          <p className="text-sm font-medium">440+ Reviewer</p>
        </div>
        <p className="text-xl leading-10 mb-8">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most
          unforgiving proving ground, the "race track".
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-x-7 gap-y-4 mb-16">
          <div className="flex items-center justify-between capitalize">
            <span className="text-xl text-secondary-300">type car</span>
            <span className="text-xl font-semibold">{currentCar.class}</span>
          </div>
          <div className="flex items-center justify-between capitalize">
            <span className="text-xl text-secondary-300">drive transmission</span>
            <span className="text-xl font-semibold">{currentCar.drive}</span>
          </div>
          <div className="flex items-center justify-between capitalize">
            <span className="text-xl text-secondary-300">fuel type</span>
            <span className="text-xl font-semibold">{currentCar.fuel_type}</span>
          </div>
          <div className="flex items-center justify-between capitalize">
            <span className="text-xl text-secondary-300">fuel consumption</span>
            <span className="text-xl font-semibold">{currentCar.city_mpg}L</span>
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
  );
};
