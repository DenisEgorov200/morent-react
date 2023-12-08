import { useDispatch } from 'react-redux';
import { setCurrentCar } from '@/store/currentCar.js';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from 'ui/PrimaryButton.jsx';
import { generateCarImgUrl } from '@/utils/requests.js';
import { useOnHover } from 'hooks/useOnHover.js';

import { GasStation, Heart, Profile2User } from 'iconsax-react';

export const CatalogCard = ({ desc, id }) => {
  const dispatch = useDispatch();
  const [hoverRef, isHovering] = useOnHover();
  const navigate = useNavigate();

  const onClickCard = (desc) => {
    navigate(`/catalog/${id}`);
    dispatch(setCurrentCar(desc));
  };

  return (
    <div
      onClick={() => onClickCard(desc)}
      className="flex flex-col justify-center p-6 bg-white cursor-pointer rounded-[10px]">
      <div className="flex items-center justify-between mb-16">
        <div>
          <h5 className="text-xl font-bold capitalize text-secondary-500 max-md:text-base max-md:font-semibold">
            {desc.make} {desc.model}
          </h5>
          <span className="text-sm font-bold capitalize text-secondary-300 max-md:text-xs max-md:font-medium">
            {desc.class}
          </span>
        </div>
        <Heart
          ref={hoverRef}
          size="24"
          variant={isHovering ? 'Bold' : 'Outline'}
          color={isHovering ? '#ED3F3F' : '#90A3BF'}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center flex-1 mb-6 max-md:flex-row">
        <div className="flex items-center justify-center flex-1 mb-16 max-md:m-0">
          <img
            src={generateCarImgUrl(desc.make, desc.model, desc.year)}
            alt={`${desc.make} ${desc.model}`}
          />
        </div>
        <div className="flex items-center gap-4 max-md:flex-col max-md:items-start max-md:ml-5">
          <div className="flex items-center text-sm font-medium text-secondary-300 max-md:text-xs">
            <GasStation size="24" color="#90A3BF" variant="Bold" />
            <span className="ml-1.5">90L</span>
          </div>
          <div className="flex items-center text-sm font-medium text-secondary-300 max-md:text-xs">
            <GasStation size="24" color="#90A3BF" variant="Bold" />
            <span className="capitalize ml-1.5">{desc.fuel_type}</span>
          </div>
          <div className="flex items-center text-sm font-medium text-secondary-300 max-md:text-xs">
            <Profile2User size="24" color="#90A3BF" variant="Bold" />
            <span className="ml-1.5">2 People</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-secondary-300 max-md:text-xs max-md:font-normal">
          <span className="text-xl font-bold text-secondary-500 max-md:text-base max-md:font-semibold">
            $99.00/
          </span>{' '}
          day
        </p>
        <PrimaryButton>Rent Now</PrimaryButton>
      </div>
    </div>
  );
};
