import { PrimaryButton } from './PrimaryButton.jsx';

export const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-x-8 py-8">
      <div className="p-6 bg-information-500 text-white font-medium rounded-[10px]">
        <div className="max-w-[300px]">
          <h2 className="text-3xl font-semibold mb-4">The Best Platform for Car Rental</h2>
          <p className="mb-5">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
        <PrimaryButton label="Rental Car" />
      </div>
      <div className="p-6 bg-primary-500 text-white font-medium rounded-[10px]">
        <div className="max-w-[300px]">
          <h2 className="text-3xl font-semibold mb-4">The Best Platform for Car Rental</h2>
          <p className="mb-5">
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
        </div>
        <PrimaryButton label="Rental Car" color="information-500" />
      </div>
    </div>
  );
};
