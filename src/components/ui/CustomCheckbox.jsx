import clsx from 'clsx';

export const CustomCheckbox = ({ className }) => {
  return (
    <>
      <input
        type="checkbox"
        id="checkbox1"
        className={clsx(
          className,
          "peer relative h-5 w-5 shrink-0 appearance-none rounded border border-secondary-300 cursor-pointer transition-all after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url('/checkmark.svg')] after:bg-[length:20px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-primary-500 checked:border-transparent hover:bg-primary-500 hover:border-transparent focus:outline-none",
        )}
      />
    </>
  );
};
