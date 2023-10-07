export const PrimaryButton = ({ label, size }) => {
  let buttonSize;

  if (size === 'small') {
    buttonSize = 'px-4 py-1 text-xs';
  } else if (size === 'medium') {
    buttonSize = 'px-4 py-2.5 text-xs';
  } else if (size === 'large') {
    buttonSize = 'px-4 py-3.5 text-base';
  }

  return (
    <button
      className={`border-[1px] font-semibold text-white bg-primary-500 rounded ${buttonSize} active:bg-primary-700 focus:border-[#CEBEFE] disabled:opacity-40`}>
      {label}
    </button>
  );
};
