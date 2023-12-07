import clsx from 'clsx';

export const MinimalButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex py-2.5 px-5 font-semibold text-primary-500 border-[1px] border-transparent',
        className,
        'hover:text-secondary-500 active:bg-primary-100 focus:border-secondary-200 disabled:text-secondary-400',
      )}>
      {children}
    </button>
  );
};
