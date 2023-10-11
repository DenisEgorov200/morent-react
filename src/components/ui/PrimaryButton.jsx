import clsx from 'clsx';

export const PrimaryButton = ({ label, className, onClick, color }) => {
  const bgColor = color ? `bg-${color}` : 'bg-primary-500';

  return (
    <button
      onClick={() => onClick()}
      className={clsx(
        'py-2.5 px-5 font-semibold text-white border-[1px] border-transparent rounded',
        className,
        bgColor,
        'active:bg-primary-700 focus:border-[#CEBEFE] disabled:opacity-40',
      )}>
      {label}
    </button>
  );
};
