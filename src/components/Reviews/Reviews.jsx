import { MinimalButton } from 'ui/MinimalButton.jsx';
import { ArrowDown2 } from 'iconsax-react';

export const Reviews = () => {
  return (
    <div className="p-6 bg-white rounded-ten">
      <div className="flex items-center mb-8">
        <h2 className="text-xl text-secondary-500 font-semibold mr-3">Reviews</h2>
        <span className="px-4 py-1 font-bold text-white bg-primary-500 rounded">13</span>
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
  );
};
