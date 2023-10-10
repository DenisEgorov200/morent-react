import { GasStation, Heart, Profile2User } from 'iconsax-react';
import { PrimaryButton } from '../ui/PrimaryButton.jsx';

export const CatalogCard = ({ desc }) => {
  return (
    <div className="flex flex-col justify-center p-6 bg-white rounded-[10px]">
      <div className="flex items-center justify-between mb-16">
        <div>
          <h5 className="text-xl font-bold capitalize text-secondary-500">
            {desc.make} {desc.model}
          </h5>
          <span className="text-sm font-bold capitalize text-secondary-300">{desc.class}</span>
        </div>
        <Heart size="24" color="#90A3BF" variant="Outline" className="cursor-pointer" />
      </div>
      <div className="flex items-center justify-center mb-16">
        <img src="/car.png" alt="car" />
      </div>
      <div className="flex items-center gap-x-4 mb-6">
        <div className="flex items-center text-sm font-medium text-secondary-300">
          <GasStation size="24" color="#90A3BF" variant="Bold" />
          <span className="ml-1.5">90L</span>
        </div>
        <div className="flex items-center text-sm font-medium text-secondary-300">
          <GasStation size="24" color="#90A3BF" variant="Bold" />
          <span className="capitalize ml-1.5">{desc.fuel_type}</span>
        </div>
        <div className="flex items-center text-sm font-medium text-secondary-300">
          <Profile2User size="24" color="#90A3BF" variant="Bold" />
          <span className="ml-1.5">2 People</span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-secondary-300">
          <span className="text-xl font-bold text-secondary-500">$99.00/</span> day
        </p>
        <PrimaryButton label="Rent Now" />
      </div>
    </div>
  );
};
