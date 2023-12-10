import clsx from 'clsx';

export const PrimaryButton = ({ children, className, onClick, color }) => {
  const bgColor = color ? color : 'bg-primary-500';
  console.log(bgColor);

  return (
    <button
      onClick={onClick}
      className={clsx(
        className,
        'py-2.5 px-5 font-semibold text-white border-[1px] border-transparent rounded',
        bgColor,
        'active:bg-primary-700 focus:border-[#CEBEFE] disabled:opacity-40',
      )}>
      {children}
    </button>
  );
};
