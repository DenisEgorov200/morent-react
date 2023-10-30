import { PrimaryButton } from './PrimaryButton.jsx';

export const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 py-8 max-md:grid-cols-1">
      <div className="p-6 bg-information-500 text-white font-medium rounded-[10px]">
        <div className="max-w-[300px] max-md:max-w-[245px]">
          <h2 className="text-3xl font-semibold mb-4 max-md:text-base max-md:mb-3">
            The Best Platform for Car Rental
          </h2>
          <p className="mb-5 max-md:mb-4 max-md:text-xs">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
        <PrimaryButton label="Rental Car" />
        <div className="flex justify-center max-md:w-full max-md:mt-7">
          <img src="/herocar.png" alt="car" />
        </div>
      </div>
      <div className="p-6 bg-primary-500 text-white font-medium rounded-[10px] max-md:hidden">
        <div className="max-w-[300px]">
          <h2 className="text-3xl font-semibold mb-4">The Best Platform for Car Rental</h2>
          <p className="mb-5">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
        <PrimaryButton label="Rental Car" color="information-500" />
        <div className="flex justify-center">
          <img src="/herocar.png" alt="car" />
        </div>
      </div>
    </div>
  );
};
