import { useState } from 'react';

import { reviews } from 'constants/constants.jsx';
import { MinimalButton } from 'ui/MinimalButton.jsx';

import { ArrowDown2 } from 'iconsax-react';
import clsx from 'clsx';
import { formateDate } from 'utils/formateDate.js';

export const Reviews = () => {
  const [initialReviews, setInitialReviews] = useState(2);
  const [showReviews, setShowReviews] = useState(false);

  const handleShowMore = () => {
    setShowReviews(!showReviews);
    showReviews ? setInitialReviews(2) : setInitialReviews(reviews.length);
  };

  return (
    <div className="p-6 bg-white rounded-ten">
      <div className="flex items-center mb-8">
        <h2 className="text-xl text-secondary-500 font-semibold mr-3">Reviews</h2>
        <span className="px-4 py-1 font-bold text-white bg-primary-500 rounded">
          {reviews.length}
        </span>
      </div>
      <ul className="flex flex-col items-center gap-6">
        {reviews
          .map((review) => (
            <li key={review.id} className="flex">
              <div className="mr-4">
                <div className="max-w-[46px] rounded-full overflow-hidden">
                  <img src="/avatar.jpg" alt="avatar" className="w-full" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <h6 className="text-xl text-secondary-500 font-bold">{review.name}</h6>
                  <span className="text-sm text-secondary-300 font-medium">
                    {formateDate(review.date)}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-secondary-300 font-medium">{review.profession}</p>
                  <span>*****</span>
                </div>
                <p className="text-sm text-secondary-400 leading-7">{review.text}</p>
              </div>
            </li>
          ))
          .slice(0, initialReviews)}

        <MinimalButton className="items-center text-secondary-300" onClick={() => handleShowMore()}>
          {showReviews ? 'Hide all' : 'Show all'}
          <ArrowDown2
            size="16"
            color="#90A3BF"
            className={clsx('transition-transform duration-1000 ml-2', {
              'rotate-180': showReviews,
            })}
          />
        </MinimalButton>
      </ul>
    </div>
  );
};
