import clsx from 'clsx';

export const MinimalButton = ({ label, className }) => {
  return (
    <button
      className={clsx(
        'py-2.5 px-5 font-semibold text-primary-500 border-[1px] border-transparent',
        className,
        'hover:text-secondary-500 active:bg-primary-100 focus:border-secondary-200 disabled:text-secondary-400',
      )}>
      {label}
    </button>
  );
};
