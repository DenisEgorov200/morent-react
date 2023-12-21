import clsx from 'clsx';

export const CustomInputRange = ({ className }) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        className={clsx(
          className,
          'w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none',
          '[&::-webkit-slider-thumb]:w-5',
          '[&::-webkit-slider-thumb]:h-5',
          '[&::-webkit-slider-thumb]:-mt-[6px]',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:bg-primary-500',
          '[&::-webkit-slider-thumb]:border-4',
          ' [&::-webkit-slider-thumb]:border-white',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:transition-all',
          '[&::-webkit-slider-thumb]:duration-150',
          ' [&::-webkit-slider-thumb]:ease-in-out',

          '[&::-moz-range-thumb]:w-5',
          '[&::-moz-range-thumb]:h-5',
          '[&::-moz-range-thumb]:appearance-none',
          '[&::-moz-range-thumb]:bg-primary-500',
          '[&::-moz-range-thumb]:border-4',
          '[&::-moz-range-thumb]:border-white',
          '[&::-moz-range-thumb]:rounded-full',
          '[&::-moz-range-thumb]:transition-all',
          '[&::-moz-range-thumb]:duration-150',
          '[&::-moz-range-thumb]:ease-in-out',

          '[&::-webkit-slider-runnable-track]:w-full',
          '[&::-webkit-slider-runnable-track]:h-2',
          '[&::-webkit-slider-runnable-track]:bg-secondary-300',
          '[&::-webkit-slider-runnable-track]:rounded-full',

          '[&::-moz-range-track]:w-full',
          '[&::-moz-range-track]:h-2',
          '[&::-moz-range-track]:bg-secondary-300',
          '[&::-moz-range-track]:rounded-full',

          '[&::-webkit-progress-value]:h-6',

          '[&::-moz-range-progress]:h-2',
          '[&::-moz-range-progress]:rounded-full',
          '[&::-moz-range-progress]:bg-primary-500',
        )}
        id="basic-range-slider-usage"
      />
    </>
  );
};
